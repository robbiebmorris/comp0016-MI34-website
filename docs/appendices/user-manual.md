import UserGuideHomepage from '../../static/img/appendicies/user-manual-homepage.png';
import UserGuideAddDevice from '../../static/img/appendicies/user-manual-add-device.png';
import UserGuideMouse from '../../static/img/appendicies/user-manual-mouse.png';
import UserGuideKeyboard from '../../static/img/appendicies/user-manual-keyboard.png';
import UserGuideGamepad from '../../static/img/appendicies/user-manual-game-pad.png';
import UserGuideMotionInput from '../../static/img/appendicies/user-manual-motion-input.png';
import UserGuideSettingsHelp from '../../static/img/appendicies/user-manual-settings-and-help.png';

# User Manual

---

## Using the Home Page

When you open the app you will be greeted on the home page by default:

<div class="img-center">
    <img src={UserGuideHomepage} alt="UserGuideHomepage" style={{height: 600}} />
</div>

<br></br>

1. Click items in the list of 'paired devices' to connect to that device.
2. MotionInput switch - the app supports manual control or MotionInput control of the paired device. When this switch is on then MotionInput control will be enabled otherwise the app will be in manual mode.
3. Shows the status of the current Bluetooth connection.
4. Delete button removes the respective devices from the app 'paired devices' list.
5. Help Button - When click this displayes an information popup with a user guide for the respective page you are currently viewing.
6. Settings Button - When clicked this opens the settings for the respective page you are currently viewing.
7. This allows using to pair a new device manually using it's Bluetooth MAC address. This is used for devices that don't allow remote pairing, such as Chromecast TV.
8. This allows you to start a Bluetooth scan and look for nearby devices that are available to pair with.
9. Navigation bar allows you to switch between the pages of the app.

## Adding new Devices

You can either add new devices manually or by scanning for nearby devices:

<div class="img-center">
    <img src={UserGuideAddDevice} alt="UserGuideAddDevice" style={{height: 600}} />
</div>

<br></br>

1. Found devices will display here, using the same list as on the homepage. Click on the device you want to create a pairing.
2. Cancel search and go back to the homepage.
3. Enter the new device name - This can be anything you want.
4. Bluetooth MAC address of the device you want to pair with. This MUST be in the format XX:XX:XX:XX:XX:XX
5. Cancel search and go back to the homepage.
6. Once you have entered a name and the MAC address, click 'Add' to create the pairing.

## Using the Mouse Manually

You can use the mouse in manual mode using a trackpad on the app to controll the mouse of the connected device:

<div class="img-center">
    <img src={UserGuideMouse} alt="UserGuideMouse" style={{height: 600}} />
</div>

<br></br>

1. Drag your finger along the trackpad in the same way you would on a laptop trackpad to move the mouse.
2. Use the side bar to controll the ```up``` and ```down``` scroll of the page.
3. Left Click
4. Right Click
5. Switch into MotionInput mode.

## Using the keyboard Manually

You can use the keyboard in manual mode using a keyboard on the app to controll the keyboard of the connected device:

<div class="img-center">
    <img src={UserGuideKeyboard} alt="UserGuideKeyboard" style={{height: 600}} />
</div>

<br></br>

1. Press keys to contoll the conncted devices keyboard.
2. Backspace can be used to remove characters.
3. Return can be used in the same way as a normal keyboard.
4. Press here to see special characters. The app supports all ASCII characters.
5. Press here to hide the keyboard when finished.
6. Press here to use keyboard arrow keys
7. Press here for volume control
8. Control, Alt/ Option and Command for keyboard shortcuts

## Using the Game Pad Manually

You can use the Game Pad as a controller to controll devices that would usually need a controller to use, for example a video game:

<div class="img-center">
    <img src={UserGuideGamepad} alt="UserGuideGamepad" style={{height: 600}} />
</div>

<br></br>

1. Switch to MotionInput mode.
2. Left game joystick.
3. Right game joystick.
4. Game buttons.

## Using MotionInput Mode.

Mouse, Keyboard and Game Pad can all be used using MotionInput mode to controll them using Hand, Face or Eye gestures instead of manual input:

<div class="img-center">
    <img src={UserGuideMotionInput} alt="UserGuideMotionInput" style={{height: 600}} />
</div>

<br></br>

1. Change the MotionInput mode to Face or Hands.
2. Eyegaze Joystick - This tracks where your eyes are looking.
3. Eyegaze settings.
4. Change the MotionInput mode to Face or Eyes.
5. Hands tracking - Tracks the gestures and movement of your hands.
6. Hands settings.
7. Face Tracking - Tracks the movement and position of your face.
8. Change the MotionInput mode to Hands or Eyes.
9. Face settings.

The configuration of all MotionInput modes can be modifed and fine tuned to user preference in each of the respective settings pages.

## Settings and Help Popups

All screens have their own settings and user help page (Except manual keyboard which only has a help page) which can be opened using the icons in the top-right of the screen. An example of these pages are shown below:

<div class="img-center">
    <img src={UserGuideSettingsHelp} alt="UserGuideSettingsHelp" style={{height: 600}} />
</div>

<br></br>

When you click the either settings or help icon when viewing a specific page the help or settings page that relates to the page will open automatically. For example, the General Settings and Bluetooth user guide are shown when viewing the homepage.
