<template>
    <main>
        <div id="mui-player" class="abp" ref="muiPlayer" style="position: relative;">
            <div ref="commentStage" class='container' style="z-index: 1 !important;height: 325px;width: 100%;margin-top: 5px;"></div>

            <!-- 截图按钮 -->
			<div slot="screenshot" style="display: none">
				<svg t="1674055163992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9448"><path d="M889.472 148.266667a42.666667 42.666667 0 0 1-13.568 58.794666l-282.88 176.725334 171.306667 107.008 2.261333 0.085333a202.666667 202.666667 0 1 1-115.413333 29.781333l-138.624-86.570666-139.178667 86.912a202.666667 202.666667 0 1 1-112.554667-30.293334l171.221334-106.922666-282.794667-176.725334a42.666667 42.666667 0 0 1-15.957333-54.4l2.389333-4.394666a42.666667 42.666667 0 0 1 58.794667-13.568l318.08 198.784 318.122666-198.784a42.666667 42.666667 0 0 1 58.794667 13.568zM266.666667 576a117.333333 117.333333 0 1 0 0 234.666667 117.333333 117.333333 0 0 0 0-234.666667z m490.666666 0a117.333333 117.333333 0 1 0 0 234.666667 117.333333 117.333333 0 0 0 0-234.666667z" fill="#ffffff" p-id="9449"></path></svg>
			</div>
        </div>
    </main>
</template>

<script>
    import config from '../../public/js/config.js'
    import globals from '../../public/js/global'
    import { listener } from '../../public/js/playerListener'
    import { pluginDesktopPlus } from '../../public/js/plugins'

    export default {
        data() {
            return {
                playerConfig:{}, // 播放器配置

                popupAdObject: null,

                rolling: null,
            }
        },
        created() {
        },
        mounted() {
            this.initCreateDanmaku();

            this.playerConfig = Object.assign(pluginDesktopPlus, config);
            this.playerConfig['lang'] = this.$lang.indexOf('en') > -1 ? 'en' : 'zh-cn';
            this.playerConfig.custom['footerControls'] = [
                {
                    slot: 'screenshot',
                    position:'right',
                    tooltip:'截图',
                    oftenShow:false,
                    style: { },
                    click:function(e) {
                        globals.mp.screenshot({
                            type: 'image/png',
                            scale:0.5,
                            watermark: {
                                image: 'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logot.png',
                                scale: 0.75,
                                position:'top-right',
                            },
                            onDone:function(data) {
                                let { base64, currentTime, download } = data;
                                download(`截图${ new Date().toLocaleString() }`);
                            },
                            onFail:function(error) {
                                console.error(error);
                            }
                        });
                    },
                },
            ]

            let muiplayer = new MuiPlayer(this.playerConfig);
            globals.mp = muiplayer;

            listener();

            globals.mp.on('ready', () => {
                try {
                    this._addWatermark();

                    this._switchMiniPlayer();

                    this._createRolling();

                    globals.mp.video().addEventListener('pause', () => {
                        this._popupAdvertise(true);

                        globals.CM.stop();
                    });

                    globals.mp.video().addEventListener('play', () => {
                        this._popupAdvertise(false);

                        globals.CM.start();
                    });

                    globals.mp.on('fullscreen-change', () => {
                        this.autoscaleComment();
                    });
                } catch (error) {
                    console.error(error);
                }
                
            });

           
        },
        beforeDestroy() {
            globals.mp.destroy();
        },
        methods:{
            /**
             * 初始化创建 CCL 实例
             */
            initCreateDanmaku() {
                var danmakuContainer = this.$refs.commentStage;
                globals.CM = new CommentManager(danmakuContainer);

                // 初始化弹幕管理器
                globals.CM.init();
            },
            /**
             * 视频播放器容器大小变化，控制弹幕窗口同步拉伸
             */
            autoscaleComment() {
                var _this = this;
                var stage = globals.CM.stage;
                var mpContainer = _this.$refs.muiPlayer;

                if(_this._timeout_1) { clearTimeout(_this._timeout_1) };
                _this._timeout_1 = setTimeout(function() {
                    stage.style.height = (mpContainer.clientHeight - 80) + 'px';
                    globals.CM.init(); // 重新初始化弹幕管理器并绑定舞台大小
                },500);
            },
            // 创建一个窗口轮询滚动的内容提示
            _createRolling() {
                var content = '<strong style="font-family: 楷体"><font color="#ff0000" size="4">播放</font><font color="#FFA700" size="4">&emsp;专注</font><font color="#6495ED" size="4">&emsp;连接</font><font size="4">&emsp;分享和自由 🚩</font></strong>';
                this.rolling = new globals.mp.createRolling(content ,{
                    id: 'warning',
                    scrollamount:6,
                    scrolldelay:85,
                    loop:-1,
                    style:{
                        paddingBottom: '25px',
                        paddingTop: '25px',
                        textShadow: '0px 0px 3px rgb(0 0 0)',
                    }
                });

                this.rolling.onstart(function() {
                    console.log('Rolling Start...')
                });

                this.rolling.onfinish(function() {
                    console.log('Rolling Finish...')
                });
            },
            // 开启小窗
            _switchMiniPlayer(open) {
                var beginSymbol = false;
                const intersectionObserver = new IntersectionObserver((entries) => {
                    if (entries[0].intersectionRatio <= 0 && beginSymbol) {
                       globals.mp.switchMiniPlayer(open, {
                            width: 400,
                            height: 'auto',
                            bottom: 30,
                            right: 'calc(100% - 408px)',
                            keepPlayerLayer: true,
                            transition: true,
                            transitionDuration: 0.35,
                            transitionTiming: 'ease',
                        });
                    }else {
                        beginSymbol = true;
                        globals.mp.switchMiniPlayer(false);
                    }
                });

                intersectionObserver.observe(this.$refs.muiPlayer);

                globals.mp.on('destroy', () => {
                    intersectionObserver.disconnect();
                })
            },
            // 添加窗口播放水印
            _addWatermark() {
                globals.mp.addWatermark({
                    image: 'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logot.png',
                    scale: 0.5,
                    position:'top-right',
                });
            },
            // 弹出广告悬浮窗
            _popupAdvertise(status) {
                var createAd = () => {
                    // 动态创建弹出广告悬浮窗的内容
                    var vnode = document.createElement('img');
                    vnode.src = 'http://192.168.1.10:8083/cover-square.jpg';
                    vnode.style = 'object-fit: contain;height: 100%;width: 100%;';
                    vnode.setAttribute('title', 'Website');
                    vnode.onclick = (e) => {
                        e.stopPropagation();
                        if(this.$lang.indexOf('en') > -1) {
                            window.open('https://github.com/muiplayer/hello-muiplayer');
                        }else if(this.$lang.indexOf('zh') > -1) {
                            window.open('https://gitee.com/muiplayer/hello-muiplayer');
                        }
                    }

                    this.popupAdObject = globals.mp.popupAdvertise({
                        content: vnode,
                        style:{
                            width:'270px',
                            height: '270px',
                            borderRadius: '7px',
                        },
                    });
                }

                if(status) {
                    createAd();
                    this.popupAdObject.open();
                }else {
                    this.popupAdObject instanceof Object ?  this.popupAdObject.close() : '';
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>