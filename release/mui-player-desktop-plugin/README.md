# <img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/title_logo.png" />

<div>
    <a href="https://www.npmjs.com/package/mui-player" target="_blank"><img src="https://img.shields.io/npm/v/mui-player?label=mui%20player" /></a>
    <a href="https://www.npmjs.com/package/mui-player-desktop-plugin" target="_blank"><img src="https://img.shields.io/npm/v/mui-player-desktop-plugin?label=mui%20player%20desktop" /></a>
	<a href="https://www.npmjs.com/package/mui-player-mobile-plugin" target="_blank"><img src="https://img.shields.io/npm/v/mui-player-mobile-plugin?label=mui%20player%20mobile" /></a>
	<a href="https://github.com/muiplayer/hello-muiplayer/tree/master/dist/js" target="_blank"><img src="https://img.shields.io/badge/gzip%20size-18kb-brightgreen" /></a>
    <a href="https://github.com/muiplayer/hello-muiplayer/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-brightgreen" /></a>
</div>

> Play, focus, connection, share and freedom 🚩

![Desktop](https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/desktopPreview.png)

<a href="https://muiplayer.js.org/" target="_blank">Docs</a> | <a href="https://muiplayer.js.org/zh/" target="_blank">中文文档</a>

## Introduction

mui-player-desktop-plugin.js is a player extension plug-in. The extension plug-in enhances the use of the player in PC application scenarios. It provides the ability to control the player including the mouse and keyboard, setting groups, volume adjustment, and video Functional components such as thumbnail configuration.

## installation

Install using npm:

```
npm i mui-player-desktop-plugin --save
```

Install using yarn:

```
yarn add mui-player-desktop-plugin
```

## usage

Introduce **mui-player-desktop-plugin.js** on the page , the plug-in needs to be loaded before initializing the player

```html
<!-- Use the script tag to import -->
<script type="text/javascript" src="js/mui-player-desktop-plugin.min.js"></script>
```

```js
// Use the module manager to introduce plugins
import MuiPlayerDesktopPlugin from 'mui-player-desktop-plugin'
```

Pass in the main configuration item plugins

```js
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...

    plugins:[
        new MuiPlayerDesktopPlugin({
            customSetting, // Set up group configuration
            contextmenu, // Right-click menu group configuration
            thumbnails,  // Thumbnail configuration
        })
    ]
});
```

## Official document

- [Official homepage](https://muiplayer.js.org/)
- [API reference](https://muiplayer.js.org/guide/api.html)
- [PC side extension plugin](https://muiplayer.js.org/guide/mui-player-desktop-plugin.html)
- [Mobile side extension plugin](https://muiplayer.js.org/guide/mui-player-mobile-plugin.html)
- [Basic demo](https://muiplayer.js.org/demo/)

## Disclaimer

This is a non-commercial version of MuiPlayer. It does not include the same functions as a commercial player, but the open source version can still provide a stable video playback solution. Before using this, be sure to understand the software license of the open source project. If you want to get a commercial application player, please download from the official <u>[Professional Application Plugin](https://muiplayer.js.org/joinUs/)</u>.

## ©️ Software License
[GNU GENERAL PUBLIC LICENSE](https://github.com/muiplayer/hello-muiplayer/blob/master/LICENSE)