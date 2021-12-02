export default ({ Vue, router, siteData }) => {
    const local = {
        en:{
            description: 'Mui Player is an excellent HTML5 web page video player framework, providing fullscreen play, fast forward play, video danmaku, decoding and other most commonly used video play functions',
            url:'https://muiplayer.js.org/',
            locale:'en-US',
            keywords:'HTML5 video, player, hls, danmaku, adaptive-bitrate, muiplayer',
        },
        zh:{
            description: 'Mui Player 是一款优秀的 HTML5 网页视频播放器框架，提供全屏播放，播放快进，视频弹幕，解码等最常用的视频播放功能',
            url:'https://muiplayer.js.org/zh/',
            locale: 'zh_CN',
            keywords:'HTML5 video, HTML5视频播放器, 视频弹幕, player, hls, muiplayer',
        }
    }

    router.afterEach((to, from) => {
        const isZh = to.path.split('/').includes('zh');
        const metas = [
            ['meta', { property: 'og:title', content: '' }],
            ['meta', { property: 'og:description', content: local[isZh ? 'zh' : 'en'].description }, 'description'],
            ['meta', { property: 'og:url', content: local[isZh ? 'zh' : 'en'].url }, 'url'],
            ['meta', { property: 'og:locale', content: local[isZh ? 'zh' : 'en'].locale }, 'locale'],
            ['meta', { property: 'twitter:title', content: '' }],
            ['meta', { property: 'twitter:description', content: local[isZh ? 'zh' : 'en'].description }, 'description'],
            ['meta', { name: 'keywords', content: local[isZh ? 'zh' : 'en'].keywords }, 'keywords'],
        ];

        // first load
        if(!from.name) {
            for(const tag of metas) { siteData.headTags.push(tag) }
        }


        // toggle language
        if(to.name && from.name && (to.path.split('/').includes('zh') != from.path.split('/').includes('zh'))) {
            console.log('Toggle language...')
            for(const headTag of siteData.headTags) {
                const keyword = headTag[2]
                if(!keyword) { continue }

                for(const meta of metas) {
                    if(keyword === meta[2]) {
                        headTag[1].content = meta[1].content
                        break;
                    }
                }
            }
        }

        setTimeout(() => {
            if(typeof document == 'object') {
                const title = document.querySelector('title').innerText

                document.querySelector('[property="og:title"]').setAttribute('content',title)
                document.querySelector('[property="twitter:title"]').setAttribute('content',title)
            }
        }, 200);
    })
}