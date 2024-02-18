# Project Reseach

Bluetooth technology has been widely used devices that use wireless communication - such as wireless keyboards, mice, headphones, gaming contollers and many more. Since the aim of the project is to build a Bluetooth controller we conducted research into existing wireless Bluetooth keyboard and mice prodcuts whether they are built as physical hardware or software that can be installed on existing Bluetooth enabled devices.

There is a vast rangle of existing Bluetooth hardware from companies such as Logitech, Apple, Samsung, HP, etc. from which we can look at their design choices and use these considerations in designing our project. From this we discovered the following core features that good Keyboard and Mice have:

- Multiple device support for easy switching between devices.
- Programmable Keys
- Adjustable sensitivity support for mice.
- Compact design
- Integrated touch/ track pad

Since our Bluetooth contoller was not going to be build using physical hardware we needed to also research other products that are software based wireless controllers that can be instaled on existing devices. We found there are two types of Bluetooth controller apps - server or serverless.  <sub>[1]</sub> Since the latter doesn't require any other software other then the app itself we decided to make the MotionInput Bluetooth Contoller serverless due to it being much more user friendly then the server version.

## Bluetooth Keyboard & Mouse

There are many examples of Android Bluetooth Keybord and Mouse applications currently on the Google Play store. Bluetooth Keyboard & Mouse  <sub>[2]</sub> is the most advanced contoller currently available and is widely supported on the newest versions of Andorid. This app offers a large range of supported devices: Smartphone, Tablet, Computer or Android TV  <sub>[2]</sub> and lots of useful features:

- Keyboard and Mouse will scrolling support.
- 100+ Keyboad language layouts
- Multimedia mode to control playback, volume and navigation on media players.

Bluetooth Keyboard & Mouse uses the Bluetooth HID protocol to connect and comunicate with other devices. This means the serverless implementation can be achieved by using the HID class drivers that are already installed on the majority of systems. We can use this design choice in our project to achieve the intended serverless implementation. However, Bluetooth Keyboard & Mouse only supports manual trackpad and keyboard controller and its user interface can become convoluted and overly complex in some places. By implementing MotionInput as a new form of control and providing a more refinded UI we can surpass this product with out project in these areas.

## Links used for references (Need to do properly later)

[1] https://www.businessinsider.in/tech/news/how-to-use-an-android-phone-as-a-bluetooth-mouse-with-a-pc-or-laptop/articleshow/91920293.cms
[2] https://play.google.com/store/apps/details?id=io.appground.blek&hl=en&gl=US