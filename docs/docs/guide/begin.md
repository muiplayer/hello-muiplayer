# Quick start

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

1. Use the script tag to introduce:


```html
<!-- import basic style files mui-player.min.css -->
<link rel="stylesheet" type="text/css" href="css/mui-player.min.css"/>

<!-- import basic script mui-player.min.js -->
<script type="text/javascript" src="js/mui-player.min.js"></script>

<!-- Specify the player container -->
<div id="mui-player"></div>
```

Or use the module manager to import:

```javascript
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
```

2. Define the player container:

```html
<div id="mui-player"></div>
```

3. Initialize and build the player:

```javascript
// Initialize the MuiPlayer plugin. The MuiPlayer method passes an object that includes the configuration of all plug-ins.
var mp = new MuiPlayer({
    container:'#mui-player',
    title:'Title',
    src:'./static/media/media.mp4',
})
```



The above can build a video player with default configuration controls for initialization. Below you can read some API basic configuration options about MuiPlayer. Go [parameters API](./api/)
