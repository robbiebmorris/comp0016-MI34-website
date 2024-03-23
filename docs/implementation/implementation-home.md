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

To connect to a Bluetooth device, the HidDevice instance obtained from BluetoothMain.getHost() is used. The HidDevice.connect(TargetDevice) method initiates the connection process with the specified TargetDevice instance.

```java title="Simple Example Connection Code"
BluetoothMain bluetoothMain = ...;
TargetDevice targetDevice = ...;
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

The user is also able to directly connect to a bluetooth device if their device is not showing up in the bluetooth scan. The bluetooth fragment enables the user to manually input their MAC address and the BluetoothMain connectivity code will be run straight away.

After a user pairs their device using the direct or scan methods, then to connect they can simple press on their device that they have added on the homescreen. More devices can also be added and the user can easily switch between them without having to repeat the pairing process.

### Bluetooth Autoreconnect​

The BluetoothMain.AttemptAutoReconnect() method attempts to reconnect to a previously saved Bluetooth device address. It retrieves the saved address from the Settings class and attempts to connect to the corresponding TargetDevice after a 1.5-second delay, allowing for Bluetooth setup to complete.

```java
BluetoothMain bluetoothMain = ...;
bluetoothMain.AttemptAutoReconnect();
```

The AttemptAutoReconnect function checks if the auto reconnect feature is turned on from settings and if a valid device to reconnect to exists. Then it goes through the cache of devices stored to find the most recently connected device. It then runs the getHost() method with the aformentioned delay.

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

### Mouse

### Keyboard

### Gamepad

## MotionInput Integration

## Speech Mode

## Miscellaneous

### Settings Pages

### Dark Mode

