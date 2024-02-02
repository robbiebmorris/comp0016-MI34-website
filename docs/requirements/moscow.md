# MoSCoW Requirements List

<details>
  <summary>Must Have</summary>
  <div>
    <div>
        - Android app which runs MotionInput and establishes a bluetooth connection with a Smart TV, Laptop, or Tablet in order to operate as a controller.
        - Bluetooth connection should not require any other software to be installed on the target device.
        - Game controller types to be supported:
            - Keyboard controller (sends keyboard presses to device from local app)
            - Mouse controller (sends mouse movements and left / right clicks to device from local app)
            - Joypad controller (sends joypad inputs to device from local app)
        - MotionInput Controller types to be supported:
            - Face
            - Eye gaze
            - Hand Movements
        - Settings page to switch between controllers + the different types of MotionInput which the user uses (eye gaze, etc)
    </div>
  </div>
</details>

<details>
  <summary>Should Have</summary>
  <div>
    <div>
        - Accessibility features:
            - High contrast mode
            - Dark Mode
            - Light Mode
        - Make the device discoverable so the controller can be connected to from another devices.
    </div>
  </div>
</details>

<details>
  <summary>Could Have</summary>
  <div>
    <div>
    - Profiles such that users can retain which types of motion input they use without enabling it each time.
    - Ability to add and remove new key-binds for MotionInput mode easily in the settings.
    </div>
  </div>
</details>

<details>
  <summary>Won't Have</summary>
  <div>
    <div>
        - MotionInput speech input support.
    </div>
  </div>
</details>