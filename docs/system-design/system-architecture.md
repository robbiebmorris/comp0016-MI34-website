# System Architecture

The MotionInput Bluetooth controller comprises both front-end and back-end components. The front-end components handle user interface presentation and user interactions within the application. The application is structured around a single activity, utilizing fragments as defined UI components and a fragment manager to dynamically switch between various UI displays based on user selections. XML layouts are employed in constructing the front-end to specify the structure and appearance of UI elements.

The back-end systems deal with the Bluetooth connection related logic and use Android APIs to deal with the interactions the user makes with the UI elements of the app. The back-end also communicates with the devices system preferences to save the users presets and local data.

<div class="img-center"> ![High-level System Architecture](../../static/img/sys-design/system-architecture.png) </div>