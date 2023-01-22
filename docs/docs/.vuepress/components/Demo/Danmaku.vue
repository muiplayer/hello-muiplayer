<template>
    <main>
        <div id="mui-player" class="abp" ref="muiPlayer" style="position: relative;">
            <div ref="commentStage" class='container' style="z-index: 1 !important;height: 325px;width: 100%;"></div>

            <div v-if="this.$lang == 'zh-CN'" slot="gitee" style="display:none">
                <svg t="1623774761684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1959" width="100%" height="100%"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#ffffff" p-id="1960"></path></svg>
            </div>

            <div v-if="this.$lang == 'en-US'" slot="github" style="display:none">
                <svg t="1623775232599" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3436" width="100%" height="100%"><path d="M512 12.63616c-282.74688 0-512 229.21216-512 512 0 226.22208 146.69824 418.14016 350.12608 485.82656 25.57952 4.73088 35.00032-11.10016 35.00032-24.63744 0-12.20608-0.47104-52.55168-0.69632-95.31392-142.4384 30.96576-172.50304-60.416-172.50304-60.416-23.28576-59.16672-56.85248-74.91584-56.85248-74.91584-46.44864-31.78496 3.50208-31.1296 3.50208-31.1296 51.4048 3.60448 78.47936 52.75648 78.47936 52.75648 45.6704 78.27456 119.76704 55.64416 149.01248 42.55744 4.58752-33.09568 17.85856-55.68512 32.50176-68.46464-113.72544-12.94336-233.2672-56.85248-233.2672-253.0304 0-55.88992 20.00896-101.5808 52.75648-137.4208-5.3248-12.9024-22.85568-64.96256 4.95616-135.49568 0 0 43.008-13.74208 140.84096 52.49024 40.83712-11.34592 84.64384-17.03936 128.16384-17.24416 43.49952 0.2048 87.32672 5.87776 128.24576 17.24416 97.73056-66.2528 140.65664-52.49024 140.65664-52.49024 27.87328 70.53312 10.3424 122.59328 5.03808 135.49568 32.82944 35.86048 52.69504 81.53088 52.69504 137.4208 0 196.64896-119.78752 239.94368-233.79968 252.6208 18.37056 15.89248 34.73408 47.04256 34.73408 94.80192 0 68.5056-0.59392 123.63776-0.59392 140.51328 0 13.6192 9.216 29.5936 35.16416 24.576 203.32544-67.76832 349.83936-259.62496 349.83936-485.76512 0-282.78784-229.23264-512-512-512z" p-id="3437" fill="#ffffff"></path></svg>
            </div>
        </div>

        <toggle-url @result="cmSend" placeholder="Input danmaku content" buttonText="Send Danmaku" type="text" />
    </main>
</template>

<script>
    import config from '../../public/js/config.js'
    import globals from '../../public/js/global'
    import { customSettingFun } from '../../public/js/config_demo_danmaku.js'
    
    import { listener } from '../../public/js/playerListener'
    import danmakuData from '../../public/js/comments'

    import toggleUr from '../toggle-url'
    export default {
        components:{
            toggleUr
        },
        data() {
            return {
                playerConfig:{}, // 播放器配置

                _disableTime:true,
                playTime:0,
                _timeout_1:null,
            }
        },
        created() {
        },
        mounted() {
            this.initCreateDanmaku();

            this.playerConfig = Object.assign({}, config);
            let customSetting = new customSettingFun();

            if(this.$lang.indexOf('en') > -1) {
                this.playerConfig['lang'] = 'en';

                // Toggle Language EN Danmaku
                customSetting[0].functions = 'Danmaku'
                customSetting[0].childConfig[0].functions = 'ON';
                customSetting[0].childConfig[1].functions = 'Opacity';
                customSetting[0].childConfig[2].functions = 'Danmaku speed';
                customSetting[0].childConfig[2].childConfig = [{ functions:'0.5 times' },{ functions:'Normal',selected:true },{ functions:'1.5 times' },{ functions:'2.0 times' },{ functions:'2.5 times' },{ functions:'3.0 times' }];
                customSetting[0].childConfig[3].functions = 'Font size';
            }else if(this.$lang.indexOf('zh') > -1) {
                this.playerConfig['lang'] = 'zh-cn';
            }

            let muiplayer = new MuiPlayer(this.playerConfig);
            globals.mp = muiplayer;

            listener();
            this.addPlayListener();
        },
        beforeDestroy() {
            globals.mp.destroy();
        },
        destroyed() {
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
                // 挂载 CCL 弹幕数据列表
                globals.CM.load(JSON.parse(JSON.stringify(danmakuData))); 

                // 开放 CM 对象到全局这样就可以在 console 终端里操控
                window.CM = globals.CM;
                // console.log(globals.CM);
            },
            /**
             * 视频播放器容器大小变化，控制弹幕窗口同步拉伸
             */
            autoscaleComment() {
                let _this = this;
                var stage = globals.CM.stage;
                var mpContainer = _this.$refs.muiPlayer;

                if(_this._timeout_1) { clearTimeout(_this._timeout_1) };
                _this._timeout_1 = setTimeout(function() {
                    stage.style.height = (mpContainer.clientHeight - 80) + 'px';
                    globals.CM.init(); // 重新初始化弹幕管理器并绑定舞台大小
                },500)
            },
            cmSend(text) {
                if(text) {
                    globals.CM.send({
                        mode:1,
                        text:text,
                        size:36,
                        color:0x2D8CF0
                    });
                }
            },
            cmClear() {
                globals.CM.clear();
            },
            cmInsert() {
                globals.CM.insert({
                    mode:1,
                    text:'Insert Danmaku',
                    stime:10000,
                    size:25,
                    color:0x0000FF
                })
            },
            /**
             * 添加播放事件监听
             */
            addPlayListener() {
                let _this = this;
                globals.mp.on('ready',function(e) {
                    globals.mp.video().addEventListener('play',function() {
                        _this.playTime = globals.mp.video().currentTime * 1000;
                        _this._disableTime = true;
                        globals.CM.start();
                        _this.triggerTime();
                    })

                    globals.mp.video().addEventListener('pause',function() {
                        _this._disableTime = false;
                        globals.CM.stop();
                    })
                    
                    globals.mp.video().addEventListener('seeked',function() {
                        _this.cmClear();
                        _this.playTime = globals.mp.video().currentTime * 1000;
                    })

                    globals.mp.on('fullscreen-change',function(data) {
                        _this.autoscaleComment();
                    })
                });
            },
            /**
             * 触发通报 CCL 播放时间
             */
            triggerTime() {
                let _this = this;
                if(!_this._disableTime || globals.closeDanmaku === true) { return };

                setTimeout(function() {
                    _this.playTime += 100; // 每100毫秒追加时间轴，生成模拟播放

                    console.log('Polling => ' + (_this.playTime / 1000) + 's');
                    globals.CM.time(_this.playTime); // 通报播放时间
                    _this.triggerTime(); // 轮询调用
                },100);
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>