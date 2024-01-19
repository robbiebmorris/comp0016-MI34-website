---
slug: january-update-1
title: January Update 1
authors: hugh
tags: [Bluetooth App]
---

## Start of a New Year

After the christmas break and the start of a new year we got back into development. Starting off in January we made the decision to change the user interface for our mouse. It was decided instead of using a Joy-Stick we would use a trackpad.

### Trackpad Implementation

We deceide to switch to a trackpad instad of a joy-stick becuase it was generally much easier to use and control, especially when trying to make fine mouse movements. To start off with implementation of this we declared a rectangular region of the UI that would be our trackpad. Then in the backend of our apps code we created a listener that would look for when the user presses on the screen inside of the trackpad region. From this we got an (x,y) coordinate and then using the previous (x,y) we could calculate a delta movement, therefore translating the users gesture into mouse movement.

We then added a smaller trackpad bar to the right which would only look at user gestures in the y-axis and would allow the user to scroll the page on their screen.

<div class="img-center"> ![Trackpad Image](../static/img/ui/trackpad.png) </div>