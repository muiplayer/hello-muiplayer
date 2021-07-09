# Custom player controls

::: tip

MuiPlayer itself has designed a considerable set of components. At the same time, the player also provides the ability to extend controls. By configuring custom to customize the elements of the display interface, customize the extension of the video container header and bottom button group.

:::

## Configuration options

| Attribute name        | Transfer parameters | Example                                                      | Description                                                  |
| :-------------------- | :------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| custom                |                     |                                                              | Custom control configuration                                 |
| custom.headControls   | [...]               | [reference](#example-1-customize-the-player-header-button)   | Customize the player head button group, the parameter accepts an array, the maximum configurable object is 5 |
| custom.footerControls | [...]               | [reference](#example-2-customize-the-buttons-at-the-bottom-of-the-player) | Customize the button group at the bottom of the player, the parameter accepts an array, and the maximum configurable object is 5 |
| custom.rightSidebar   | [...]               | [reference](#example-3-customize-the-pop-up-window-on-the-right-sidebar) | The custom pop-up window on the right side bar, the parameter accepts an array, and the maximum configurable object is 5 |



### Description

- [Looking at the example below](#example-1-customize-the-player-header-button) , you must declare a slot attribute value for the parent of the custom control element. All child nodes of the defined slot attribute are used as all the content of the display control. If the template tag is used, the defined content will not be displayed directly Page, you can also use a div as a container for packaging controls.



## Example 1: Customize the player header button

```html
<div id="mui-player">
    <template slot="castScreen">
            <svg t="1573891279687" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3272" width="20" height="20"><path d="M853.015273 814.545455h-161.419637a34.909091 34.909091 0 0 1 0-69.818182h161.419637A54.690909 54.690909 0 0 0 907.636364 690.106182V264.075636A54.690909 54.690909 0 0 0 853.015273 209.454545H170.961455A54.667636 54.667636 0 0 0 116.363636 264.075636v426.030546A54.667636 54.667636 0 0 0 170.961455 744.727273h141.358545a34.909091 34.909091 0 0 1 0 69.818182H170.961455A124.555636 124.555636 0 0 1 46.545455 690.106182V264.075636A124.555636 124.555636 0 0 1 170.961455 139.636364h682.053818A124.578909 124.578909 0 0 1 977.454545 264.075636v426.030546A124.578909 124.578909 0 0 1 853.015273 814.545455zM674.909091 907.636364H349.090909l162.909091-209.454546 162.909091 209.454546z" fill="#ffffff" p-id="3273"></path></svg>
    </template>
</div>
```

```javascript
// custom headerButton option configuration
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
    custom:{
   		headControls:[
            {
                slot:'castScreen', // Corresponding to the defined slot value
                click:function(e) { // Button click event callback
                    console.log('cast screen button click...');
                },
                style:{}, // Custom add control style
            }
        ]
    }
});
```



## Example 2: Customize the buttons at the bottom of the player

```html
<div id="mui-player">
    <template slot="nextMedia">
        <svg t="1584686776454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1682" width="22" height="22"><path d="M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z" p-id="1683" fill="#ffffff"></path><path d="M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z" p-id="1684" fill="#ffffff"></path></svg>
    </template>
</div>
```

```javascript
// custom footerControls option configuration
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
    custom:{
   		footerControls:[
                {
                    slot:'nextMedia', // Corresponding to the defined slot value
                    position:'left', // Display position, optional left, right
                    tooltip:'next media', // The text prompt displayed when the mouse is hovering over the control
                    oftenShow:false, // Whether to display frequently. The default is false, hidden in the vertical screen state in the mobile environment, hidden when the video container is less than 500px under the judgment of the pc environment
                    click:function(e) { // Button click event callback
                        console.log('next media button click...');
                    },
                    style:{}, // Custom add control style
                },
            ],
    }
});
```



## Example 3: Customize the pop-up window on the right sidebar

```html
<template slot="HD">
    <div style="color: white;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;font-size: 16px;">
        <p onclick="on_hd(1)">Blu-ray 1080P</p>
        <p onclick="on_hd(2)">Ultra-clear</p>
        <p onclick="on_hd(3)">HD</p>
        <p onclick="on_hd(4)">SD</p>
    </div>
</template>
```

```javascript
// custom rightSidebar option configuration
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
    custom:{
        rightSidebar:[
            {
				slot:'HD', // Corresponding to the defined slot value
				width:'200px' // Sidebar width，string | number
            }
        ],
    }
});

function on_hd() {
    mp.toggleControls();
    
    //Definition switching
    mp.reloadUrl(url);
    
    mp.showToast('Definition switching succeeded！');
};
```


