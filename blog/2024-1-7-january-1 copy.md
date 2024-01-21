---
slug: january-update-1
title: January Update 1
authors: hugh
tags: [Bluetooth App, Settings, Instruction Pages]
---

## Start of a New Year

After the christmas break and the start of a new year we got back into development. Starting off in January we made the decision to change the user interface for our mouse. It was decided instead of using a Joy-Stick we would use a Trackpad. We then added two new features: information popups and app settings.

### Trackpad Implementation

We deceide to switch to a trackpad instad of a joy-stick becuase it was generally much easier to use and control, especially when trying to make fine mouse movements. To start off with implementation of this we declared a rectangular region of the UI that would be our trackpad. Then in the backend of our apps code we created a listener that would look for when the user presses on the screen inside of the trackpad region. From this we got an (x,y) coordinate and then using the previous (x,y) we could calculate a delta movement, therefore translating the users gesture into mouse movement.

We then added a smaller trackpad bar to the right which would only look at user gestures in the y-axis and would allow the user to scroll the page on their screen.

<div class="img-center"> ![Trackpad Image](../static/img/ui/trackpad.png) </div>

### App Settings

Adding user settings to make the application more customizable such that cusers could taylor it better for their specific needs was a top priority.

Starting off we added a settings icon in the top-right corner of the screen which would be used to open the settings page. When the button was pressed the settings page would slide up from the bottom of the screen - displaying all the options. Then to go back the user could drag it away by swiping down or by pressing anywhere on the screen other than on the settings popup.

In the backend, we use a singleton settings class to deal with getting and setting all the settings variables for the app. It uses Android **Shared Preferences** to save the current setting states to the devices storage. The class then provides getter and setter methods to retrieve the current state or update a value.

We decided to have seperate settings pages for each component to keep everything organised. These will still accessed by the same button but a different settings page would be displayed depending on which component the user was using - for example, if the user was on the mouse page the mouse settings page would be displayed:

<div class="img-center"> ![Mouse Settings Image](../static/img/ui/mouse_settings.png) </div>

### Instruction Popups

To each page we have also added instruction and information popups. These are accessed similarly to the settings page, by pressing an icon placed on the top-right of the screen. Then depending on what component the user is viewing the corresponding instruction popup will be displayed. We have added instruction pages that cover how to pair new Bluetooth devices and how to use the mouse, keyboard and game pad features. For example, if they are using the mouse component the mouse instructions will be displayed:

<div class="img-center"> ![Mouse Info Image](../static/img/ui/mouse_info_popup.png) </div>
