import ResearchReview1 from '../../static/img/research/bluetooth-mousekeyboard-app.png';
import Logos from '../../static/img/research/logos.png';

# Project Reseach

---

## Related Projects Review

Bluetooth technology has been widely used in devices that use wireless communication - such as wireless keyboards, mice, headphones, gaming contollers and many more. Since the aim of the project is to build a Bluetooth controller, we conducted research into existing wireless Bluetooth keyboard and mice products, hardware or software, that can be installed on existing Bluetooth enabled devices.

There is a vast rangle of existing Bluetooth hardware from companies such as Logitech, Apple, Samsung, HP, etc. from which we can look at their design choices and use as considerations when designing our project. Following this, we concluded a good Bluetooth keyboard and mouse will have the following core features:

- Multiple device support for easy switching between devices
- Programmable Keys
- Adjustable sensitivity support for mice
- Compact design
- Integrated touch / trackpad

Since our Bluetooth contoller was not going to be built using physical hardware, we also needed to research other products which are software based wireless controllers that can be installed on existing devices. We found there are two types of Bluetooth controller apps - server or serverless. <sub>[1]</sub> Since the latter doesn't require any other software other then the app itself, we decided to make the MotionInput Bluetooth Contoller serverless as it is considerably more user friendly then the server version.

### Review #1: Bluetooth Keyboard & Mouse

There are many examples of Android Bluetooth Keybord and Mouse applications currently on the Google Play store. Bluetooth Keyboard & Mouse <sub>[2]</sub> is the most advanced contoller currently available and is widely supported on the newest versions of Andorid. This app offers a large range of supported devices: Smartphone, Tablet, Computer or Android TV <sub>[2]</sub> and lots of useful features:

- Keyboard and Mouse will scrolling support.
- 100+ Keyboard language layouts.
- Multimedia mode to control playback, volume and navigation on media players.

Bluetooth Keyboard & Mouse <sub>[2]</sub> uses the Bluetooth HID protocol to connect and comunicate with other devices. This means the serverless implementation can be achieved by using the HID class drivers that are already installed on the majority of systems. We can use this design choice in our project to achieve the intended serverless implementation. However, Bluetooth Keyboard & Mouse <sub>[2]</sub> only supports a manual trackpad and keyboard controller and its user interface can become convoluted and overly complex in some places. By implementing MotionInput as a new form of control and providing a more refinded UI, our project can surpass this product with in these areas.

<div class="img-center">
    <img src={ResearchReview1} alt="ResearchReview1" style={{height: 600}} />
</div>

<br></br>

### Review #2: RemoteBluetoothControllerAndroidApp

RemoteBluetoothControllerAndroidApp <sub>[3]</sub> is another example of an android app which implements bluetooth functionality for the mouse. This application takes a unique approach to implementing their input methods for the mouse. The supported input modes are:

- A standard on-screen joystick
- Android device gyroscope data
- Tank drive

The gyroscope mode uses data from the gyroscope built into the phone in order to track when you move your phone around in the horizontal plane. This allows you to place the phone on your table and then move it around exactly like you would a normal mouse. Tank drive is another unique mode, which is controls the mouse with only two slider bars. If both are fully up, then the mouse moves forward, if left or right is farther up than the other, than the mouse turns in the respective direction.

These unique mouse controller modes were taken into consideration as an option while designing our own mouse bluetooth controller. Some of these controls might not be optimal for all use cases of the manual mouse method, but as we are focusing on integrating MotionInput into our app, different input types could be extremely useful to integrate with MotionInput for Android. For example, if we implemented the tank drive mode, the MotionInput fragments would only have to send two integer values to the app in order to control the mouse. Some input methods are significantly more compatible with human gesturing and allow for more accurate machine learning models.

RemoteBluetoothControllerAndroidApp <sub>[3]</sub> also makes use of the same bluetooth HID protocol as Bluetooth Keyboard & Mouse <sub>[2]</sub> did, indicating that this is probably a relatively standard and reliable solution to implementing bluetooth capability.

## Technology Review

### Solutions

Bluetooth connectivity plays a big role in determining the functionality, compatibility, and overall user experience of the application. There are two main methods of building a bluetooth connectivity application – server-based bluetooth connectivity or HID Bluetooth.

Server-based Bluetooth connectivity offers lots of flexibility, allowing for extensive customization and control over communication between devices. This flexibility opens up possibilities for implementing additional features beyond standard Bluetooth protocols. However, this approach comes with a lot of drawbacks, especially in the field of accessibility. The complexity involved in setting up and maintaining a server introduces additional resource requirements and potential points of failure. Non-techincally skilled users will run into problems and the app becomes significantly less user friendly. Moreover, the dependency on the server's availability and stability poses a significant risk, creating a single point of failure in the system.

HID Bluetooth presents a standardized protocol widely supported across various devices and operating systems. This standardized nature ensures compatibility and reliability, as HID drivers are readily available on most systems. Implementing HID Bluetooth is comparatively simpler, leveraging existing HID drivers and protocols. However, this simplicity comes at a cost. The protocol's standardized nature may limit customization options, and it may not support advanced features or customizations beyond standard keyboard and mouse functionalities.

After consideration, we have opted for HID Bluetooth connectivity. Our decision stems from several key considerations. Firstly, the standardized nature of HID protocol ensures broad compatibility across different devices and operating systems, aligning with our goal of creating a user-friendly and accessible solution. Additionally, the simplified implementation process of HID Bluetooth reduces development complexity and enhances reliability. While server-based connectivity offers more flexibility, the simplicity and reliability of HID Bluetooth make it the preferred choice for our project.

### Language

Firstly, we needed to pick a language we would use for development. Andoid development is done using two main languages: Java and Kotlin so we conducted research into both before making an informed decision. The optimal language should have efficient and fast runtime performance while also being readable to developers.

Java is a much more mature language being first released in 1996 and is highly popular whereas Kotlin has been introduced much later in 2016 <sub>[4]</sub> and is steadly rising in popularity for Android development. Due to Java's age it means there is a considerably larger set of libraries, frameworks and tools available for development compared to Kotlin which is very useful for developers.

Both languages run on the Java Virtual Machine (JVM) inseatd of being compiled directly to native code which gives them fiarly similar performance <sub>[4]</sub> when compared to other compilers such as GCC. Java and Kotlin therefore only have minor performance differences:

- Kotlin’s generated bytecode contains assertions for nullity checks when using external dependencies, slowing performance compared to Java.
- Kotlin’s inline functions avoid a function call, improving performance, whereas Java invokes additional overhead memory.

On the whole, there are no significant Java and Kotlin differences related to performance and memory. <sub>[4]</sub>

Due to it's age Java can be seen as more stable then Kotlin. There is long term support for Java versions like 8 and 11, meaning that iif anything goes wrong with these versions they can be fixed with a patch. Whereas, Kotlin has no long-time supported versions of the same nature. <sub>[5]</sub>

Overall, we found there wre good advantages that could make the case for each language being the better choice. Kotlin has less memory overhead whereas Java is much more documented and supported. We decided to use Java for our project due to our team all already having experience with the language and therefore already know it's syntax meaning less time would need to be spent learning a new language and because of it's current superior documentation and support.

### Android SDK vs. Flutter

Both Android SDK and Flutter are built by Google and used in the development of applications, however, Android SDK is used only to build native Android applications whereas Flutter enables cross platform development from a single codebase. <sub>[6]</sub> Since our project only focuses on Android applications both would be a suitable choice.

<div class="img-center">
    <img src={Logos} alt="Logos" style={{height: 100}} />
</div>

<br></br>

Performance is an important factor in choosing the most appropriate SDK. Android SDK apps are known for their superior performance due to being written in platform specific languages like Java or Kotlin. On the other hand, Flutter uses a rendering engine called Skia which enables high performamnce graphics and animations. However, this doen't quite achieve native performance and Flutter apps tend to be generally slower then Android SDK apps overall. <sub>[6]</sub>

Due to Android SDK being around for much longer it has a vast range of libraries, frameworks and resources to help with Android development. Whereas, Flutter is much younger and therefore is less mature with less resources available to be used by the developeer. <sub>[6]</sub> Therefore, at this time building Android SDK applications may be easier for developers who have less experiance in building Android apps.

Research has shown that Flutter apps are generally more storage invasive then native Android SDK apps, this makes their download much larger. The research found that the same app built in Flutter was 4.7 MB where as the Java or Kotlin counterpart was only 0.5 MB. <sub>[7]</sub> Since our project only needs to build apps for Android we should consider if the additional overhead produced by Flutter is actually necessary.

Overall, we found the Android SDK built using Android Studio IDE would be most suitable for our project. This was becuase it's performance advantage over Flutter would be beneicial in increasing the usability of the end product. The added benefit of much more extensive resources available for Anroid SDK further increased it's suitability for our project.

## Technical Decisions

After conducting extensive background reseach we were able to make the following decisions on how the MotionInput Bluetooth controller would be built:

<div class="img-center">

| Type                                     | Decision                                       |
|------------------------------------------|------------------------------------------------|
| Language                                 | Java                                           |
| SDK                                      | Android SDK                                    |
| Integrated Development Environment (IDE) | Android Studio                                 |
| JSON Library                             | Jackson                                        |
| Documentation Generation                 | JavaDoc                                        |
| Build Tool                               | Gradle                                         |
| Design Language                          | Materials Design                               |
| Testing Framework                        | JUnit, Mockito, Espresso, AndroidX, UIAnimator |
| Bluetooth Protocol                       | HID                                            |

</div>

## References

[1] R, Verma, "How to use an Android phone as a Bluetooth mouse with a PC or laptop" *Business Insider India*, May 31, 2022. [Online]. Available: https://www.businessinsider.in/tech/news/how-to-use-an-android-phone-as-a-bluetooth-mouse-with-a-pc-or-laptop/articleshow/91920293.cms [Accessed 14 Feb. 2024] <br></br>
[2] Appground IO, *Bluetooth Keyboard & Mouse* [Online], 2018. Available: https://play.google.com/store/apps/details?id=io.appground.blek&hl=en&gl=US <br></br>
[3] Mike Bowyer, *RemoteBluetoothControllerAndroidApp* [Online], 2017. Available: https://github.com/mikebowyer/RemoteBluetoothControllerAndroidApp <br></br>
[4] G, Gircenko, "Kotlin vs. Java: All-purpose Uses and Android Apps" *toptal.com*. [Online]. Available: https://www.toptal.com/kotlin/kotlin-vs-java [Accessed 14 Feb. 2024] <br></br>
[5] L, Vaguez, "Kotlin vs. Java for Android development" *blog.logrocket.com*, Aug. 17, 2022. [Online]. Available: https://blog.logrocket.com/kotlin-vs-java-android-development/ [Accessed 14 Feb. 2024] <br></br>
[6] N, Goyal, "Android SDK vs Flutter" *stackshare.io*, Jul. 27, 2020. [Online]. Available: https://stackshare.io/stackups/android-vs-flutter#:~:text=In%20summary%2C%20Android%20SDK%20allows,model%20and%20a%20growing%20community. [Accessed 14 Feb. 2024] <br></br>
[7] S, Das, "Flutter vs Android Studio: Core Differences" *browserstack.com*, Jun. 16, 2023. [Online]. Available: https://www.browserstack.com/guide/flutter-vs-android-studio [Accessed 14 Feb. 2024] <br></br>
