# Implementation

---

## Android Development Introduction

Android development is somewhat complex and confusing to get started with. Before going into the specifics of the features implemented in our application, we will overview the general concepts we had to learn about the Android SDK and Android Studio before we were able to implement anything, which will hopefully help you understand our code better.

### Project Structure

When you create a new project in Android Studio, it generates a project structure containing directories and files.
The key directories include:
app: Contains the source code and resources specific to the app module.
res: Contains resources such as layout files, drawable images, strings, and more.
manifests: Contains the AndroidManifest.xml file, which describes essential information about the app.
java: Contains the Java/Kotlin source code for the app.
Within the java directory, packages are organized based on the application's package name, and classes are structured accordingly.
Activities:

An activity represents a single screen with a user interface. It is a fundamental component of an Android app.
Activities are typically defined by extending the Activity class (or its subclasses like AppCompatActivity).
Each activity has its lifecycle methods (onCreate(), onStart(), onResume(), onPause(), onStop(), onDestroy(), etc.), which are called at different stages of the activity's lifecycle.
Fragments:

Fragments represent a portion of the user interface or behavior in an activity.
Fragments allow for a more modular and flexible UI design, enabling developers to create reusable components.
Fragments have their lifecycle methods (onCreateView(), onActivityCreated(), onStart(), onResume(), onPause(), onStop(), onDestroyView(), onDestroy(), etc.), which are synchronized with the hosting activity's lifecycle.
Activity Lifecycle Management:

Activities go through various lifecycle states as they are created, started, resumed, paused, stopped, and destroyed.
Understanding and managing the activity lifecycle is crucial for proper resource management, UI updates, and handling user interactions.
For example, when an activity is first created, the onCreate() method is called. As it becomes visible to the user, onStart() and onResume() are called. When it loses focus, onPause() is called, and so on.
Developers can override these lifecycle methods to perform specific tasks, such as initializing UI components, saving/restoring instance state, releasing resources, etc.
Properly managing the activity lifecycle ensures a smooth and responsive user experience and prevents memory leaks and other issues.
User Interface (UI) Design:

Android provides various UI components and layouts (e.g., TextView, Button, EditText, RecyclerView, ConstraintLayout, LinearLayout, etc.) for building the user interface.
Developers can design UI layouts using XML files (stored in the res/layout directory) or programmatically in Java/Kotlin code.
XML layouts can be previewed and edited visually in Android Studio's layout editor.
Testing and Debugging:

Android Studio provides tools for testing and debugging apps, including emulators for running apps on virtual devices and physical device testing.
Developers can write unit tests, instrumentation tests, and UI tests to ensure the app behaves correctly under different conditions.
Android Studio's built-in debugger allows developers to debug code, set breakpoints, inspect variables, and trace program execution.
Deployment:

Once the app is developed and tested, it can be deployed to the Google Play Store or distributed through other channels.
Before deployment, developers need to sign the app's APK (Android Package) file using a digital certificate to ensure its authenticity and integrity.
Google Play Console provides tools for managing app releases, monitoring performance, and gathering user feedback.

## Bluetooth Connectivity

### Bluetooth Direct Connect

### Bluetooth Scan

### Bluetooth Autoreconnect

## HID Devices

### Mouse

### Keyboard

### Gamepad

## MotionInput Integration

## Speech Mode

## Miscellaneous

### Settings Pages

### Dark Mode

