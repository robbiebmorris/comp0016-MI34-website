---
slug: february-update-3
title: February Update 3
authors: hugh
tags: [Bug Fixes, MotionInput Integration]
---

## Further Development

Begining the month of february we begun to work on bug fixes and issues within the app with the goal of getting the app deployment ready. We started getting ready for MotionInput integration.

### Fixing the Permissions Check

When testing of different phone models and versions of Andoid we noticed that the Bluetooth connectivity was not working correctly and sometimes even causing the . After further investigation we deduced that the issue was within the permissions check component. Finally, after some more testing and reseach we we're able to issue an update to the component that fixed the problem.

### Getting Ready for MotionInput Integration

With the maters students working on MotionInput for Andorid getting close a working prototype we started getting ready to integrate their work into our app. This started by meeting with the other team to discuss integration options and how each of the respective code bases worked. Once we decided on a plaan we begun with getting our app ready. This started by adding a MotionInput switch to the top bar of the app which when toggled 'on' it would activate MotionInput mode whereas when switched off it would remain in manual control mode. When in MotionInput mode the manual screens for each of the components will be replaced with the MotionInput version of this screen. By default this includes a drop-down menu we added which allows the user to select the version of MotionInput they want to use: Face, Hands or Eyes.

After this was complete and working the other team begin to integrate their code into each MotionInput fragment we creared.