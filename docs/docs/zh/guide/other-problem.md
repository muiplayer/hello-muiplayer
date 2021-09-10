# 其他问题

- #### <u>内联播放和同层播放的问题？</u>
	
	- 内联播放：在某些手机浏览器中，当视频播放时会自动进入全屏播放状态，通过设置 playsline，webkit-playsline 这两个属性可以阻止播放时自动全屏。
	
	- 同层播放：同层播放主要是处理视频在全屏播放时的播放形态。在某些浏览器，如微信、QQ浏览器当视频全屏时会调用浏览器内置的播放器组件来播放视频，为了让视频上显示我们自定义的元素，腾讯浏览提出了这个概念，参见：[https://x5.tencent.com/docs/video.html](https://x5.tencent.com/docs/video.html) ，但是不少浏览器还是存在视频播放时会劫持html5 video 标签的问题，这是浏览器来决定的。
	
	  
	
- #### <u>视频自动播放 autoplay 属性设置问题？</u>

  - 在 Chrome 66 中针对音视频启动了自动播放策越，该目的主要以改善用户体验，最大限度地减少安装广告拦截器的动机，并减少昂贵和/或受限网络上的数据消耗。参考：[https://developer.chrome.com/blog/autoplay/](https://developer.chrome.com/blog/autoplay/)

  - 但是我们依然可以尝试使用 autoplay！在 Android Chrome53 起支持静音播放，即设置视频的 autoplay 和 muted 属性，那么视频即可自动开始播放，但是在 IOS 上表现依然较为严格，ios10及以上版本自动播放适用于没有声音或禁用音轨的视频。参考：[https://developers.google.com/web/updates/2016/07/autoplay](https://developers.google.com/web/updates/2016/07/autoplay)

    

- #### <u>视频无法全屏？</u>
  
  - 如播放器是被嵌入 Iframe 中，那么为 iframe 标签添加属性 allowfullscreen 属性来允许激活全屏模式。你应该添加的属性有 allowfullscreen、webkitallowfullscreen、mozallowfullscreen

- #### <u>如何向播放器追加更多自定义 HTML 元素？</u>
  
  - 参见 [自定义播放器控件](./custom-control/)。如果已有无法满足需要，可以手动编写 HTML 节点，然后将节点追加到播放器容器中。


- #### <u>如何重写、隐藏播放器默认的控件？</u>
	
	- 如需隐藏默认的播放、全屏操作控件，可通过 getControls() 方法获取所有控件，然后可自定义行为的 DOM 操作
	
- #### <u>如何监听更多原生Video 事件？</u>
	
	- MuiPlayer 支持所有原生 Video 事件，可以通过 mp.video() 获取媒体实例来添加原生事件。媒体相关的事件 API 可参见：
	  - [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)
- #### <u>视频如何添加记忆播放功能？</u>
	
	- MuiPlayer 默认不处理记忆播放，如需可手动时记录指定媒体的播放位置，待媒体加载成功时设置 video currentTime。

- #### <u>流媒体视频无法正常播放？</u>
	
	- 默认在移动端上是支持 m3u8、flv 视频播放的，在 PC 端播放流媒体视频请参考：[MediaSource支持](/preset/)
