# Implementation

---

## Android Development Introduction

# add a nice intro here.

### Project Structure

When you create a new project in Android Studio, it generates a project structure containing directories and files.
The key directories include:

- app: Contains the source code and resources specific to the app module.
- res: Contains resources such as layout files, drawable images, strings, and more.
- manifests: Contains the AndroidManifest.xml file, which describes essential information about the app.
- java: Contains the Java/Kotlin source code for the app.

Within the java directory, packages are organized based on the application's package name, and classes are structured accordingly.

### Activities

An activity represents a single screen with a user interface. It is a fundamental component of an Android app.
Activities are typically defined by extending the Activity class (or in our case its subclasses like AppCompatActivity). All activities have their own lifecycle methods (onCreate(), onStart(), onResume(), onPause(), onStop(), onDestroy(), etc.), which are called at different stages of the activity's lifecycle. Our application is structured around one singular mainActivity, and uses fragments to switch between pages and modify the UI.

```java
public class ExampleActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // Initialization tasks here
    }

    @Override
    protected void onStart() {
        super.onStart();
        // The activity is about to become visible
    }
    
    // ... Other lifecycle methods

}
```

### Fragments

Fragments represent a portion of the user interface or behavior in an activity. Fragments allow for a more modular and flexible UI design, enabling developers to create reusable components. Fragments have similar lifecycle methods (onCreateView(), onActivityCreated(), onStart(), onResume(), onPause(), onStop(), onDestroyView(), onDestroy(), etc.), which are synchronized with the hosting activity's lifecycle.

```java
public class ExampleFragment extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_layout, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        // View setup and initialization tasks here
    }

    @Override
    public void onStart() {
        super.onStart();
        // The fragment is about to become visible
    }

    // ... Other lifecycle methods

}
```

### Activity Lifecycle Management

Activities go through various lifecycle states as they are created, started, resumed, paused, stopped, and destroyed.
Understanding and managing the activity lifecycle is crucial for proper resource management, UI updates, and handling user interactions. For example, when an activity is first created, the onCreate() method is called. As it becomes visible to the user, onStart() and onResume() are called. When it loses focus, onPause() is called, and so on.
You can override these lifecycle methods to perform specific tasks, such as initializing UI components, saving/restoring instance state, releasing resources, etc.

### User Interface (UI) Design

Android provides various UI components and layouts (e.g., TextView, Button, EditText, RecyclerView, ConstraintLayout, LinearLayout, etc.) for building the user interface. In order to build a page/component, UI layouts are designed using XML files (stored in the res/layout directory) or programmatically in Java code. Our XML layouts are primarily developed and edited visually in Android Studio's layout editor.

## Bluetooth Connectivity

The Bluetooth connectivity setup is handled primarily by the BluetoothMain class. This class implements the BluetoothProfile.ServiceListener interface, which is a part of the Bluetooth API and is used to monitor the state of a specific Bluetooth profile. It provides a way to receive callbacks when the state of a Bluetooth profile changes, such as when it becomes connected or disconnected.

BluetoothMain initializes the Bluetooth adapter and checks if the device supports the Bluetooth HID (Human Interface Device) profile using adapter.getProfileProxy(main, this, BluetoothProfile.HID_DEVICE). If supported, an instance of the HidDevice class is created when the Bluetooth HID service is connected (onServiceConnected()). The HidDevice manages the connection with the HID device and handles sending/receiving HID reports, which will be discussed in more detail in later sections.

Throughout the codebase, BluetoothMain is accessed using the BluetoothManager class which uses the singleton design pattern. This ensures there is only a single instance of BluetoothMain created throughout the lifetime of the program, and it provides a global point of access to that instance using the *getInstance()* method.

To connect to a Bluetooth device, the HidDevice instance obtained from BluetoothMain.getHost() is used. The HidDevice.connect(TargetDevice) method initiates the connection process with the specified TargetDevice instance.

```java title="Simple Example Connection Code"
TargetDevice targetDevice = ...;
BluetoothMain bluetoothMain = BluetoothManager.getInstance(context);
HidDevice hidDevice = bluetoothMain.getHost().connect(targetDevice);
```

### Bluetooth Scan​

Scanning for nearby Bluetooth devices is performed by the Discovery class, which can be obtained from BluetoothMain.getDiscovery(). The Discovery.startScan() method initiates the scan process, and discovered devices are reported through the DeviceFoundListener interface.

```java title="Example Main Bluetooth Scan Code"
BluetoothMain bluetoothMain = ...;
Discovery discovery = bluetoothMain.getDiscovery();
discovery.setDeviceFoundListener(device -> {
    // Handle discovered device
});
discovery.startScan();
```

The Discovery class is responsible for searching for nearby Bluetooth devices that are discoverable for Bluetooth connections. When the startDiscovery() method is called, it first checks if the Bluetooth adapter is not already discovering devices. If not, it registers a broadcast receiver (receiver) to listen for the BluetoothDevice.ACTION_FOUND intent filter and then starts the discovery process using adapter.startDiscovery().

```java
public void startDiscovery() {
    ...
    if (!adapter.isDiscovering()) {
        IntentFilter filter = new IntentFilter(BluetoothDevice.ACTION_FOUND);
        context.registerReceiver(receiver, filter);
        adapter.startDiscovery();
    }
    ...
}
```

The broadcast receiver (receiver) is an instance of BroadcastReceiver (from the Android SDK) that overrides the onReceive method. This method is called whenever a Bluetooth device is found during the discovery process. Inside the onReceive method, the code checks if the received object is a desired BluetoothDevice object (not null and has not been encountered before) using the foundAddresses set. If the device name, address, and address uniqueness conditions are met, it saves the device and posts a DiscoveryUpdateEvent to the EventBus, which can be used by other components to handle the updated list of discovered devices.

```java title="/src/main/java/com/example/comp0016_group23_app/bluetooth/Discovery.java"
private final BroadcastReceiver receiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        ...
        if (found device is valid and not a repeat)
            results.add(new TargetDevice(address, name));
            EventBus.getDefault().post(new DiscoveryUpdateEvent(results));
        }
        ...
        }
    }
}
```

In summary, the code uses the Android Bluetooth API to start and stop the Bluetooth device discovery process, registers a broadcast receiver to listen for discovered devices, and maintains a list of unique discovered devices. It also uses the EventBus library to post events whenever the list of discovered devices is updated, allowing other components to react to the changes.

### Bluetooth Direct Connect​

The user is also able to directly connect to a bluetooth device if their device is not showing up in the bluetooth scan. The bluetooth fragment enables the user to manually input their Bluetooth MAC address and the BluetoothMain connectivity code will be run straight away.

After a user pairs their device directly or using the Bluetooth scan, they can then simply click on their device in the Homescreen UI to disconnect or reconnect. More devices can also be added and the user can easily switch between them without having to repeat the pairing process.

### Bluetooth Autoreconnect​

The BluetoothMain.AttemptAutoReconnect() method attempts to reconnect to a previously saved Bluetooth device address. It retrieves the saved address from the Settings class and attempts to connect to the corresponding TargetDevice after a 1.5-second delay, allowing for Bluetooth setup to complete.

```java
BluetoothMain bluetoothMain = ...;
bluetoothMain.AttemptAutoReconnect();
```

The AttemptAutoReconnect function checks if the auto reconnect feature is turned on from settings and if a valid device to reconnect to exists. Then it goes through the cache of devices stored to find the most recently connected device, and attempts to connect with the aformentioned delay.

```java
public void AttemptAutoReconnect() {
    ...
    if (auto reconnect is on and the MAC address exists) {
        return;
    }

    for (TargetDevice device : devices.getAllDevices()) {
        if (previously connected device is found) {
            ...
            handler.postDelayed(() -> getHost().connect(device), 1500);
        }
    }
}
```

## HID Devices

The HidDevice class is responsible for managing the connection and communication with a Bluetooth HID device. It handles various types of input, including mouse, keyboard, and gamepad input, and sends the appropriate HID reports to the connected device.

HID reports define the specific information that is sent with each packet in an HID report, and in our program they are defined in the Descriptor class. For example, this is the report structure of the mouse descriptor.

```
Report structure: 
   7 6 5 4 3 2 1 0 |
   ----------------|--- 
   0 0 0 0 0 a b c | 1st byte
   <    x pos    > | 2nd byte
   <    y pos    > | 3rd byte
   <    scroll   > | 4th byte
```

As you can see, reports are formatted in little endian, meaning the bits go from largest to smallest. Using descriptors, we can write code in the HidDevice class to construct bluetooth reports based on inputs from the user on the android app. Inputs from the user are streamlined through the BluetoothInput class to HidDevice to be used in creating reports. We will break down what descriptors actually looks like in more depth in each devices section. 

### Mouse Input

The mouse HID descriptor is composed of 5 distinct sections.

#### Section 1: Identifying the Device Type

```java
0x05, 0x01,        // USAGE_PAGE (Generic Desktop)
0x09, 0x02,        // USAGE (Mouse)
(byte) 0xa1, 0x01, // COLLECTION (Application)
(byte) 0x85, 0x01, //   REPORT_ID (1)
```

This section identifies the device type as a mouse and specifies that it belongs to the Generic Desktop usage page. It also starts a new collection (group of input/output data) for an Application and sets the report ID to 1. The report ID part is important, as it can be used to combine multiple reports, enabling both the mouse and keyboard to be used at the same time.

#### Section 2: Mouse Buttons

```java
0x09, 0x01,        //   USAGE (POINTER)
(byte) 0xa1, 0x00, //   COLLECTION (Physical)
0x05, 0x09,        //     USAGE_PAGE (Button)
0x19, 0x01,        //     USAGE_MINIMUM (Button 1)
0x29, 0x03,        //     USAGE_MAXIMUM (Button 3)
0x15, 0x00,        //     LOGICAL_MINIMUM (0)
0x25, 0x01,        //     LOGICAL_MAXIMUM (1)
0x75, 0x01,        //     REPORT_SIZE (1)
(byte) 0x95, 0x03, //     REPORT_COUNT (3)
(byte) 0x81, 0x02, //     INPUT (Data,Var,Abs)
```

This section defines the mouse buttons. It specifies that there are three buttons (left, right, and middle/scroll), and each button is represented by a single bit (0 or 1) in the report.

#### Section 3: Padding

```java
0x75, 0x05,        //     REPORT_SIZE (5)
(byte) 0x95, 0x01, //     REPORT_COUNT (1)
(byte) 0x81, 0x01, //     INPUT (Const,Var,Abs)
```

This section adds 5 bits of padding to make the total report size a multiple of 8 bits (1 byte). Byte alignment allows us to put the x and y coordinates that follow in their own bytes and makes our life easier when writing HidDevice code, but is not 100% necessary.

#### Section 4: Mouse Movement

```java
0x05, 0x01,        //     USAGE_PAGE (Generic Desktop)
0x09, 0x30,        //     USAGE (Y)
0x09, 0x31,        //     USAGE (X)
0x09, 0x38,        //     USAGE (WHEEL)
0x15, (byte) 0x81, //     LOGICAL_MINIMUM (-127)
0x25, 0x7f,        //     LOGICAL_MAXIMUM (127)
0x75, 0x08,        //     REPORT_SIZE (8)
(byte) 0x95, 0x03, //     REPORT_COUNT (3)
(byte) 0x81, 0x06, //     INPUT (Data,Var,Rel)
```

This section defines the mouse movement data, including the X and Y coordinates, and the scroll wheel. Each of these values is represented by a single byte (8 bits) in the report, with a range of -127 to 127.

#### Section 5: End Collections

```java
(byte) 0xc0,       //   END_COLLECTION
(byte) 0xc0        // END_COLLECTION
```

This section simply ends the two collections that were started earlier (Physical and Application).

In summary, the mouse descriptor defines a report structure that includes:

- 3 bits for the mouse button states (left, right, middle/scroll)
- 5 bits of padding
- 1 byte for the X coordinate
- 1 byte for the Y coordinate
- 1 byte for the scroll wheel movement

This report structure allows the HidDevice class to construct and send mouse input reports to the connected Bluetooth HID device. 

The sendMouseInput method in the HidDevice class is used to send mouse input to the connected HID device. It takes five parameters: leftClick, rightClick, x, y, and scroll, which are passed from the BluetoothInput class. These parameters represent the state of the left and right mouse buttons, the X and Y coordinate movements, and the scroll wheel movement, respectively.

The method constructs a 4-byte report where the first byte encodes the mouse button states, and the remaining three bytes represent the X, Y, and scroll wheel movements. The report is then sent to the HID device using the service.sendReport method from the Bluetooth API.

```java
public void sendMouseInput(boolean leftClick, boolean rightClick, int x, int y, int scroll) {
    // ...
    byte[] report = new byte[4];
    report[0] = (byte) ((leftClick ? 1 : 0) | 0 | (rightClick ? 2 : 0));
    report[1] = (byte) x;
    report[2] = (byte) y;
    report[3] = (byte) scroll;
    try {
        service.sendReport(device, 0x01, report);
    } catch (SecurityException e) {
        Log.e("MyApp", "Permission was not granted: ", e);
    }
}
```
### Keyboard Input

The keyboard HID descriptor also consists of 5 sections.

#### Section 1: Identifying the Device Type

```java
0x05, 0x01, // USAGE_PAGE (Generic Desktop)
0x09, 0x06, // USAGE (Keyboard)
(byte) 0xa1, 0x01, // COLLECTION (Application)
```

This section identifies the device type as a keyboard and specifies that it belongs to the Generic Desktop usage page. It also starts a new collection for an Application.

#### Section 2: Modifier Keys

```java
0x05, 0x07, // USAGE_PAGE (Keyboard)
0x19, (byte) 0xe0, // USAGE_MINIMUM (Keyboard LeftControl)
0x29, (byte) 0xe7, // USAGE_MAXIMUM (Keyboard Right GUI)
0x15, 0x00, // LOGICAL_MINIMUM (0)
0x25, 0x01, // LOGICAL_MAXIMUM (1)
0x75, 0x01, // REPORT_SIZE (1)
(byte) 0x95, 0x08, // REPORT_COUNT (8)
(byte) 0x81, 0x02, // INPUT (Data, Variable, Absolute)
```

This section defines the modifier keys, such as Ctrl, Shift, Alt, and GUI (Windows/Command key). It specifies that there are 8 modifier keys, each represented by a single bit (0 or 1) in the report.

#### Section 3: Reserved Byte

```java
(byte) 0x95, 0x01, // REPORT_COUNT (1)
0x75, 0x08, // REPORT_SIZE (8)
(byte) 0x81, 0x01, // INPUT (Constant)
```

# @ulk what is the purpose of this?
<!-- This section includes a reserved byte in the report, which is not used for any specific purpose. -->

#### Section 4: Key Arrays

```java
(byte) 0x95, 0x06, // REPORT_COUNT (6)
0x75, 0x08, // REPORT_SIZE (8)
0x15, 0x00, // LOGICAL_MINIMUM (0)
0x25, 0x65, // LOGICAL_MAXIMUM (101)
0x05, 0x07, // USAGE_PAGE (Key Codes)
0x05, 0x01, // USAGE_MINIMUM (Reserved (no event indicated))
0x05, 0x01, // USAGE_MAXIMUM (Keyboard Application)
0x05, 0x01, // INPUT (Data,Array)
```

This section defines the key arrays, which are used to report the pressed keys. It specifies that there are 6 key arrays, each containing a single byte (8 bits). The bytes in the key arrays represent the key codes for the pressed keys, with values ranging from 0 to 101 (decimal).

#### Section 5: End Collection

```java
(byte) 0xc0 // END_COLLECTION
```
This section simply ends the Application collection that was started earlier.

In summary, the keyboard descriptor defines a report structure that includes:

- 8 bits for the modifier keys (Ctrl, Shift, Alt, GUI)
- 8 reserved bits
- 6 bytes (8 bits each) for the key arrays, representing the pressed keys

This report structure allows the HidDevice class to construct and send keyboard input reports to the connected Bluetooth HID device.

The sendKeyboardInput method is used to send keyboard input to the connected HID device. It takes four parameters: key, isPressed, modifier, and convert. The key parameter represents the character or HID usage code to send, isPressed indicates whether the key is being pressed or released, modifier represents any modifier keys (e.g., Shift, Ctrl, Alt) that should be applied, and convert specifies whether the key parameter should be converted from a character to its corresponding HID usage code.

The method constructs an 8-byte report where the first byte represents the modifier keys, the second byte is reserved, and the remaining bytes contain the key code(s) to be sent. If the convert parameter is true, the convertKeyToHIDCode method is used to convert the character to its corresponding HID usage code.

```java
public void sendKeyboardInput(char key, boolean isPressed, byte modifier, boolean convert) {
    // ...
    byte[] report = new byte[8];
    report[0] = modifier;
    report[1] = 0;
    if (isPressed) {
        if (convert) {
            report[2] = convertKeyToHIDCode(key);
        } else {
            report[2] = (byte) key;
        }
    } else {
        // Clear key codes for key release
        for (int i = 2; i < 8; i++) {
            report[i] = 0;
        }
    }
    try {
        service.sendReport(device, 8, report);
    } catch (SecurityException e) {
        Log.e("MyApp", "Permission was not granted: ", e);
    }
}
```

The convertKeyToHIDCode method is a helper method that converts a character to its corresponding HID usage code using a predefined mapping. It returns the HID usage code as a byte value, or 0 if no mapping exists for the given character.

### Gamepad Input
The sendGamePadInput method is used to send gamepad input to the connected HID device. It takes several parameters representing the state of various gamepad controls, such as joystick positions, buttons, and mapping characters for different inputs.

The method combines the joystick positions and button states into mouse and keyboard inputs, which are then sent to the device using the sendMouseInput and sendKeyboardInput methods, respectively.

```java
public void sendGamePadInput(int right_joystick_x, int right_joystick_y, int left_joystick_x, int left_joystick_y, boolean left, boolean up, boolean right, boolean down, boolean a, boolean b, boolean x, boolean y, char upMap, char leftMap, char downMap, char rightMap, char aMap, char bMap, char xMap, char yMap) {
    // ...
    if (aMap == '~' && bMap == '`') {
        this.sendMouseInput(a, b, right_joystick_x, right_joystick_y, 0);
    } else {
        this.sendMouseInput(false, false, right_joystick_x, right_joystick_y, 0);
        ab = true;
    }

    if (left || up || right || down || x || y || ((a || b) && ab)) {
        // Send keyboard input for pressed buttons
        if (left) {
            sendKeyboardInput(leftMap, true, (byte) 0x00, true);
        }
        // ... (similar code for other buttons)
    } else if (left_joystick_y == 0 && left_joystick_x == 0) {
        this.sendKeyboardInput(' ', false, (byte) 0x00, true);
    }
}
```

The gamepad input method demonstrates the flexibility of the HidDevice class in handling various types of input and mapping them to appropriate HID reports for the connected device.

The HidDevice class provides a convenient interface for managing the connection and communication with a Bluetooth HID device. It offers methods for sending mouse, keyboard, and gamepad input, as well as helper methods for converting characters to HID usage codes and handling modifier keys. This class plays a crucial role in enabling the application to interact with HID devices and provide a seamless user experience.

## BluetoothInput

## Key Fragments

### Mouse Fragment

### Keyboard Fragment

### Gamepad Fragment

## MotionInput Integration

## Speech Mode

## Miscellaneous

### Settings Pages

### Dark Mode

