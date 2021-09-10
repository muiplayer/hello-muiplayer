# other problems

- #### <u> Problems with inline playback and same-layer playback?</u>
	
	- Inline playback: In some mobile browsers, when the video is played, it will automatically enter the full-screen playback state. By setting the two properties of playsline and webkit-playsline, you can prevent automatic full-screen playback during playback.
	- Same-layer playback: Same-layer playback mainly deals with the playback form of the video in full-screen playback. In some browsers, such as WeChat and QQ browsers, when the video is full-screen, the built-in player component of the browser will be called to play the video. In order to display our customized elements on the video, Tencent Browser proposed this concept, see: [https://x5.tencent.com/docs/video.html](https://x5.tencent.com/docs/video.html), But many browsers still have the problem of hijacking the html5 video tag during video playback, which is determined by the browser.

	#### <u> Video autoplay autoplay attribute setting problem?</u>
	
	- In Chrome 66, the auto-play strategy is activated for audio and video. The purpose is to improve the user experience, minimize the motivation to install ad blockers, and reduce data consumption on expensive and/or restricted networks. Reference: [https://developer.chrome.com/blog/autoplay/](https://developer.chrome.com/blog/autoplay/)
	- But we can still try autoplay! Since Android Chrome53 supports silent playback, that is, set the autoplay and muted properties of the video, then the video can start to play automatically, but the performance on IOS is still strict. The automatic playback of ios10 and above is suitable for videos with no sound or disabled audio tracks . Reference: [https://developers.google.com/web/updates/2016/07/autoplay](https://developers.google.com/web/updates/2016/07/autoplay)
	
- #### <u>Can't the video be full screen?</u>
  
  - If the player is embedded in an Iframe, add the allowfullscreen attribute to the iframe tag to allow full screen mode to be activated. The attributes you should add are allowfullscreen, webkitallowfullscreen, mozallowfullscreen

- #### <u>How to add more custom HTML elements to the player?</u>
  
  - See [the custom player controls](./custom-control/) . If you cannot meet your needs, you can manually write the HTML node, and then append the node to the player container.


- #### <u>How to rewrite and hide the default controls of the player?</u>
	
	- If you need to hide the default playback and full-screen operation controls, you can get all the controls through the getControls() method, and then you can customize the behavior of the DOM operation
- #### How to listen to more native Video events?
	
	- MuiPlayer supports all native Video events, and native events can be added by obtaining media instances through mp.video(). For media-related event API, please refer to:
	  - [https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events)
	  - [https://www.w3school.com.cn/tags/tag_video.asp](https://www.w3school.com.cn/tags/tag_video.asp)
	  - [https://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp](https://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)
- #### <u>How to add memory playback function to video?</u>
	
	- MuiPlayer does not handle memory playback by default. If necessary, you can manually record the playback position of the specified media, and set the video currentTime when the media is successfully loaded.

- #### <u>Streaming video cannot be played normally?</u>
	
	- By default, m3u8 and flv video playback is supported on the mobile terminal. For streaming media video playback on the PC terminal, please refer to: [MediaSource support](http://10.224.69.28:8080/preset/)
