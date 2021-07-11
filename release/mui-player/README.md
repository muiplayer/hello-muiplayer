# <img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/title_logo.png" />

<div>
    <a href="https://www.npmjs.com/package/mui-player" target="_blank"><img src="https://img.shields.io/npm/v/mui-player?label=mui%20player" /></a>
    <a href="https://www.npmjs.com/package/mui-player-desktop-plugin" target="_blank"><img src="https://img.shields.io/npm/v/mui-player-desktop-plugin?label=mui%20player%20desktop" /></a>
	<a href="https://www.npmjs.com/package/mui-player-mobile-plugin" target="_blank"><img src="https://img.shields.io/npm/v/mui-player-mobile-plugin?label=mui%20player%20mobile" /></a>
	<a href="https://github.com/muiplayer/hello-muiplayer/tree/master/dist/js" target="_blank"><img src="https://img.shields.io/badge/gzip%20size-18kb-brightgreen" /></a>
    <a href="https://github.com/muiplayer/hello-muiplayer/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-GPL3-brightgreen" /></a>
</div>

> Play, focus, connection, share and freedom 🚩

![Desktop](https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/desktopPreview.png)

![Mobile](https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/mobile_preview.png)

<a href="https://muiplayer.js.org/" target="_blank">Docs</a> | <a href="https://muiplayer.js.org/zh/" target="_blank">中文文档</a>

## Introduction

MuiPlayer is an HTML5 video playback plug-in, which is configured with exquisite and operable playback controls by default, involving common playback scenarios, such as full-screen playback, playback fast forward, loop playback, volume adjustment, video decoding and other functions.

Support mp4, m3u8, flv and other media formats to play, solve most compatibility problems, and adapt to play on PCs and mobile phones.

MuiPlayer has a wealth of parameters to customize the player instance, and the video playback of the customized scene can be completed through easy configuration.

## Features

MuiPlayer helped us solve some common problems in daily H5 Video application development:

1. The ui of different browser platforms cannot be unified
2. Conflicts between ui extensions and state processing are prone to
3. In different environments (android, ios, pc), h5 video api may trigger events at different times
4. There are various compatibility issues with media formats, muiplayer handles most of the compatibility issues when playing in different environments
5. Repeated stepping on some pits in the process of developing h5 video, we provide a complete solution, so that developers can avoid some detours

## installation

Install using npm:

```
npm i mui-player --save
```

Install using yarn:

```
yarn add mui-player
```

## usage

1.Use the script tag to introduce:

```html
<!-- import basic style files mui-player.min.css -->
<link rel="stylesheet" type="text/css" href="css/mui-player.min.css"/>

<!-- import basic script mui-player.min.js -->
<script type="text/javascript" src="js/mui-player.min.js"></script>

<!-- Specify the player container -->
<div id="mui-player"></div>
```

Or use the module manager to import:

```js
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
```

2.Define the player container:

```html
<div id="mui-player"></div>
```

3.Initialize and build the player:

```js
// Initialize the MuiPlayer plugin. The MuiPlayer method passes an object that includes the configuration of all plug-ins.
var mp = new MuiPlayer({
    container:'#mui-player',
    title:'Title',
    src:'./static/media/media.mp4',
})
```

The above can build a video player with default configuration controls for initialization. Below you can read some API basic configuration options about MuiPlayer. Go [parameters API](https://muiplayer.js.org/api/)

## Official document

- [Official homepage](https://muiplayer.js.org/)
- [API reference](https://muiplayer.js.org/guide/api.html)
- [PC side extension plugin](https://muiplayer.js.org/guide/mui-player-desktop-plugin.html)
- [Mobile side extension plugin](https://muiplayer.js.org/guide/mui-player-mobile-plugin.html)
- [Basic demo](https://muiplayer.js.org/demo/)

## Start 

Install this project

```
npm install
npm start
```

## Disclaimer

This is a non-commercial version of MuiPlayer. It does not include the same functions as a commercial player, but the open source version can still provide a stable video playback solution. Before using this, be sure to understand the software license of the open source project. If you want to get a commercial application player, please download from the official <u>[Professional Application Plugin](https://muiplayer.js.org/joinUs/)</u>.

## ©️ Software License
[GNU GENERAL PUBLIC LICENSE](https://github.com/muiplayer/hello-muiplayer/blob/master/LICENSE)

Copyright (C) 2007 Free Software Foundation, Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.


## ⭐ Stars

[![Stargazers repo roster for @muiplayer/hello-muiplayer](https://reporoster.com/stars/muiplayer/hello-muiplayer)](https://github.com/muiplayer/hello-muiplayer/stargazers)

## 👏 Forks

[![Forkers repo roster for @muiplayer/hello-muiplayer](https://reporoster.com/forks/muiplayer/hello-muiplayer)](https://github.com/muiplayer/hello-muiplayer/network/members)

