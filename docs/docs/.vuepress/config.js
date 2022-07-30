module.exports = ctx => ({
	dest: './dist',
	locales: {
		'/': {
			lang: 'en-US',
			title: 'MuiPlayer',
			description: 'Mui Player is an excellent HTML5 web page video player framework, providing fullscreen play, fast forward play, video danmaku, decoding and other most commonly used video play functions',
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'MuiPlayer',
			description: 'Mui Player 是一款优秀的 HTML5 网页视频播放器框架，提供全屏播放，播放快进，视频弹幕，解码等最常用的视频播放功能',
		}
	},
	head: [
		['link', { rel: 'icon', href: `/favicon.ico` }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'stylesheet', href: `/css/mui-player.min.css` }],
		['link', { rel: 'stylesheet', href: `/css/swiper.min.css` }],
		['link', { rel: 'stylesheet', href: `/css/CommentCoreLibrary.min.css` }],
		['link', { rel: 'apple-touch-icon', href: `https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logo_solid.png` }],
		['meta', { name: 'charset', content: 'utf-8' }],
		['meta', { name: 'baidu-site-verification', content: 'code-AdGRxnQ9NZ' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }],
		['meta', { property: 'og:site_name', content: 'MuiPlayer' }],
        ['meta', { property: 'og:type', content: 'article' }],
        ['meta', { property: 'og:image', content: 'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/mobile_preview.png' }],
		['meta', { name: 'theme-color', content: '#FFFFFF' }],
		['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-X4RSEE27EY' }],
		['script', {}, `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X4RSEE27EY');
        `],
		['script', { src: `/plugin/flv.min.js` }],
		['script', { src: `/plugin/hls.min.js` }],
		['script', { src: `/js/mui-player.min.js` }],
		['script', { src: `/js/mui-player-desktop-plugin.min.js` }],
		['script', { src: `/js/CommentCoreLibrary.min.js` }],
		['script', { src: `/js/swiper.min.js` }],
	],
	themeConfig: {
		repo: 'muiplayer/hello-muiplayer',
		docsDir: 'docs/docs',
		docsBranch: 'master',
		displayAllHeaders:true,
		editLinks: true,
		smoothScroll: true,
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				ariaLabel: 'Select language',
				editLinkText: 'Help us improve this page!',
				lastUpdated: 'Last Updated',
				nav: require('./nav/en'),
				sidebar:{
					'/guide/':sidebarGroupGuide('Guide'),
					'/demo/':sidebarGroupDemo('Demo'),
					'/joinUs/':sidebarGroupJoinUs('Plug-in download'),
				},
			},
			'/zh/': {
				label: '简体中文',
				selectText: '选择语言',
				ariaLabel: '选择语言',
				editLinkText: '帮助我们改善此页面！',
				lastUpdated: '上次更新',
				nav: require('./nav/zh'),
				sidebar:{
					'/zh/guide/':sidebarGroupGuide('指南'),
					'/zh/demo/':sidebarGroupDemo('演示'),
					'/zh/joinUs/':sidebarGroupJoinUs('插件下载'),
				},
			}
		}
	},
	plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', { serviceWorker: true,updatePopup: true }], 
		['@vuepress/medium-zoom',{ selector: 'img.zoom-custom-imgs' }],
        ['@vuepress/google-analytics', { ga: 'G-X4RSEE27EY' }], 
        ['container', { type: 'vue',before: '<pre class="vue-container"><code>',after: '</code></pre>'}], 
        ['container', { type: 'upgrade',before: info =>` < UpgradePath title = "${info}" > `,after: '</UpgradePath>'}], 
    ],

	extraWatchFiles: ['.vuepress/nav/en.js', '.vuepress/nav/zh.js']
})

// 关于
function sidebarGroupJoinUs(title) {
	return [
		{
			title: title,
			collapsable: false,
			sidebarDepth: 1,
			children:[
				'',
				'contact'
			]
		}
	]
}

// 演示
function sidebarGroupDemo(title) {
	return [
		{
			title: title,
			collapsable: false,
			sidebarDepth: 1,
			children:[
				'',
				'live-demo',
				'subtitle-demo',
				'danmaku-demo',
				'multiple-demo',
			]
		}
	]
}

// 指南
function sidebarGroupGuide(title) {
	return [
		{
			title: title,
			collapsable: false,
			sidebarDepth: 1,
			children:[
				'',
				'begin',
				'api',
				'mui-player-desktop-plugin',
				// 'plus-desktop-plugin',
				'plus-mobile-plugin',
				'preset',
				'thumbnails',
				'barrage',
				'subtitle',
				'custom-control',
				'uni-app',
				'other-problem',
			]
		}
	]
}