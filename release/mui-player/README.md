<div align="center"><img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logo.png" width="150px"></div>
<div align="center">
    <a href="https://www.npmjs.com/package/mui-player" target="_blank"><img src="https://img.shields.io/npm/v/mui-player?label=mui%20player" /></a>
    <a href="https://www.npmjs.com/package/mui-player-desktop-plugin" target="_blank"><img src="https://img.shields.io/npm/v/mui-player-desktop-plugin?label=mui%20player%20desktop" /></a>
	<a href="https://www.npmjs.com/package/mui-player-mobile-plugin" target="_blank"><img src="https://img.shields.io/npm/v/mui-player-mobile-plugin?label=mui%20player%20mobile" /></a>
	<a href="https://github.com/muiplayer/hello-muiplayer/tree/master/dist/js" target="_blank"><img src="https://img.shields.io/badge/gzip%20size-18kb-brightgreen" /></a>
    <a href="https://github.com/muiplayer/hello-muiplayer/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-brightgreen" /></a>
</div>

<h1 align="center">Mui Player</h1>
<a href="https://muiplayer.js.org/" target="_blank">Docs</a> | <a href="https://muiplayer.js.org/zh/" target="_blank">中文文档</a>

## Introduction

MuiPlayer is an HTML5 video playback plugin. By default, it is equipped with beautiful playback controls, which cover common playback scenes, such as full-screen playback, fast-forward playback, looping playback, volume adjustment, video decoding and other functions.

Supports MP4, M3U8, FLV and other media formats to play, solve most compatibility problems, and adapt to the PC, mobile phone terminal playback.

MUIPlayer has a wealth of parameters to customize the player instance, through easy configuration to complete the custom scene video playback.

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

## Start 

Install this project

```
npm install
npm start
```

## Plugins

- [mui-player-mobile-plugin.js](https://www.npmjs.com/package/mui-player-mobile-plugin)
- [mui-player-desktop-plugin.js](https://www.npmjs.com/package/mui-player-desktop-plugin)