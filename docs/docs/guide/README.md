# Introduction

------

MuiPlayer is an HTML5 video playback plug-in, which is configured with exquisite and operable playback controls by default, involving common playback scenarios, such as full-screen playback, playback fast forward, loop playback, volume adjustment, video decoding and other functions.

<ClientOnly><Player-Default></Player-Default></ClientOnly>

The design of the player is compatible with running on PC and Mobile, and it provides two types of extension plug-ins, "mobile" and "PC", so you can also use this plug-in in the Webview of Android and Ios.

If your application is running on [html5 plus](http://www.html5plus.org/doc/zh_cn/runtime.html)In the environment, if you use the playback plug-in, you will get more native API support by default, such as playback control device volume, horizontal and vertical screen playback in full screen, immersive playback, etc. You can also use the native way to interact with web pages to control video and device functions. MuiPlayer provides callback functions triggered by all events. You need to make some control yourself here.

# Features

MuiPlayer helped us solve some common problems in daily H5 Video application development:

1. The ui of different browser platforms cannot be unified
2. Conflicts between ui extensions and state processing are prone to
3. In different environments (android, ios, pc), h5 video api may trigger events at different times
4. There are various compatibility issues with media formats, muiplayer handles most of the compatibility issues when playing in different environments
5. Repeated stepping on some pits in the process of developing h5 video, we provide a complete solution, so that developers can avoid some detours