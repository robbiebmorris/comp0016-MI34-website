import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Requirements

## Project Background and Goals

MotionInput is a project lead by UCL that has spanned over multiple years of development. It aims to transform everyday computer web-cams into virtual a controller for your computer using a range of inputs, such as: Face tracking, Eye tracking, Hotspot tracking and Movement tracking.

MotionInput Bluetooth Controller aims to bring this technology to android as a standalone controller. This will allow users to connect the controller to any device that is Bluetooth controllable and control it using MotionInput technology.

The controller should be accessible to users with a wide range of ability and also work with a range of devices, such as: Mac computers, iPad's, Windows computers, Smart TV's and other Android devices.

### Project Goals

Our aim is to develop an app that can be downloaded directly from the Android app store and run on a wide range of Android devices.

The controller will connect to devices over bluetooth and should work without having to install any further software on the connected device.

The app will allow the user to control the mouse and keyboard on their devices and will also have the ability to act as a joystick controller for games devices.

## Gathering Requirements

We conducted a series of semi-structure interviews on potential users of the controller to find the specific needs of our users.

<Tabs>
  <TabItem value="apple" label="Occupational Therapist" default>
    **Question**: What would you envision for the mobile bluetooth controller? <br/>
    **Answer**: I would like a mobile app for android which can connect to a range of devices and use Motion Input controls to use that device.<br/>

    **Question**: Have you tried conventional gaming controls? Do they work with people who have disabilities? <br/>
    **Answer**: Yes, I have tried other adapted controls, such as Cephable (Cephable, N.D.),  but they don’t have support on all my devices such as smart TVs that I use in my classroom.<br/>

    **Question**: How would you use the controller? <br/>
    **Answer**: I would use the controller in my classroom to play interactive games in which all children can be involved.

    **Question**: What specific features would you need? <br/>
    **Answer**: The controller needs to have different modes of input to include people with a range of disabilities and be easily setup. <br/>
  </TabItem>
  <TabItem value="orange" label="Disabled Child">
    **Question**: What would you envision for the mobile bluetooth controller? <br/>
    **Answer**: A controller for a mobile phone or tablet that is simple and easy to connect. I should be able to control things like the keyboard keys, the mouse and even a joypad using motion controls that are easily toggled on and off. <br/>

    **Question**: Have you tried conventional gaming controls? Do they work with people who have disabilities? <br/>
    **Answer**: Yes, I have tried to play with my friends, but I couldn’t use the controller. <br/>

    **Question**: How would you use the controller? <br/>
    **Answer**: I want to be able to play video games without having to hold a physical controller. <br/>

    **Question**: What specific features would you need? <br/>
    **Answer**: I am unable to press buttons on a controller for my smart TV. I would like to be able to connect the controller to my TV and use arm movements and gestures to control it. <br/>
  </TabItem>
</Tabs>

## Personas

Using the data collected, we created personas and scenarios for our target users.

<div class="img-center"> ![Persona 1](../../static/img/requirements/Personas1.jpg) </div>

<br /><br />

<div class="img-center"> ![Persona 2](../../static/img/requirements/Personas2.jpg) </div>

## Use Cases

The use case diagram below highlights how the users can interact with the final product.

<div class="img-center"> ![Persona 2](../../static/img/requirements/use_cases_diagram.jpg) </div>

## MoSCoW Requirements List

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