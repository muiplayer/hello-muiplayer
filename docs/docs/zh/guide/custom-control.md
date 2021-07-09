# 自定义播放器控件

::: tip

MuiPlayer 本身设计了一套可观的组件，与此同时播放器还提供了扩展控件的能力，通过配置 custom 自定义编写显示界面的元素，自定义扩展视频容器头、底部按钮组。

:::



## 配置选项

<div class="custom-api"></div>

| 属性名                | 传参    | 示例                                 | 说明                                                         |
| :-------------------- | :------ | :----------------------------------- | :----------------------------------------------------------- |
| custom                |         |                                      | 自定义控件配置                                               |
| custom.headControls   | [ ... ] | [参考](#示例一-自定义播放器头按钮)   | 自定义播放器头部按钮组，参数接受一个数组，最大可配置对象为5个 |
| custom.footerControls | [ ... ] | [参考](#示例二-自定义播放器底部按钮) | 自定义播放器底部按钮组，参数接受一个数组，最大可配置对象为5个 |
| custom.rightSidebar   | [ ... ] | [参考](#示例三-自定义右侧栏弹出窗口) | 自定义弹出右侧栏窗口，参数接受一个数组，最大可配置对象为5个  |



### 说明

- [查看下方示例](#示例一-自定义播放器头按钮)，你必须要为自定义的控件元素的父级声明一个 slot 属性值，所定义 slot 属性的所有子节点是作为显示控件的所有内容，使用 template 标签那么定义内容将不会直接显示在页面，你也可以使用一个 div 做为包装控件的容器。



## 示例一：自定义播放器头按钮

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
                slot:'castScreen', // 对应定义的 slot 值
                click:function(e) { // 按钮点击事件回调
                    console.log('cast screen button click...');
                },
                style:{}, // 自定义添加控件样式
            }
        ]
    }
});
```



## 示例二：自定义播放器底部按钮

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
                    slot:'nextMedia', // 对应定义的 slot 值
                    position:'left', // 显示的位置，可选 left、right
                    tooltip:'下一集', // 鼠标悬浮在控件上显示的文字提示
                    oftenShow:false, // 是否常显示。默认为false，在 mobile 环境下竖屏状态下隐藏，pc环境判下视频容器小于500px时隐藏
                    click:function(e) { // 按钮点击事件回调
                        console.log('next media button click...');
                    },
                    style:{}, // 自定义添加控件样式
                },
            ],
    }
});
```



## 示例三：自定义右侧栏弹出窗口

```html
<template slot="HD">
    <div style="color: white;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;font-size: 16px;">
        <p onclick="on_hd(1)">蓝光1080P</p>
        <p onclick="on_hd(2)">超清</p>
        <p onclick="on_hd(3)">高清</p>
        <p onclick="on_hd(4)">标清</p>
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
				slot:'HD', // 对应定义的 slot 值
				width:'200px' // 侧栏宽度，string | number
            }
        ],
    }
});

function on_hd() {
    mp.toggleControls();
    
    //清晰度切换
    mp.reloadUrl(url);
    
    mp.showToast('清晰度切换成功！');
};
```


