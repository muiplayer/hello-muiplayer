<template>
    <main style="text-align: center;">
        <Agreement v-if="showAgr" ref="_agreement" @on-close="() => { showAgr = false }" />

        <ul class="load-media">
            <li :class="{'active-theme':loadType == 'mp4'}" @click="onLoadType('mp4')">LOAD MP4</li>
            <li :class="{'active-theme':loadType == 'flv'}" @click="onLoadType('flv')">LOAD FLV</li>
            <li :class="{'active-theme':loadType == 'hls'}" @click="onLoadType('hls')">LOAD HLS</li>
        </ul>

        <div class="card-box">
            <img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/laptop3.png" alt="" height="auto" width="100%">
            <div id="mui-player">
                <div v-if="this.$lang == 'zh-CN'" slot="gitee" style="display:none">
                    <svg t="1623774761684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1959" width="100%" height="100%"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#ffffff" p-id="1960"></path></svg>
                </div>

                <div v-if="this.$lang == 'en-US'" slot="github" style="display:none">
                    <svg t="1623775232599" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3436" width="100%" height="100%"><path d="M512 12.63616c-282.74688 0-512 229.21216-512 512 0 226.22208 146.69824 418.14016 350.12608 485.82656 25.57952 4.73088 35.00032-11.10016 35.00032-24.63744 0-12.20608-0.47104-52.55168-0.69632-95.31392-142.4384 30.96576-172.50304-60.416-172.50304-60.416-23.28576-59.16672-56.85248-74.91584-56.85248-74.91584-46.44864-31.78496 3.50208-31.1296 3.50208-31.1296 51.4048 3.60448 78.47936 52.75648 78.47936 52.75648 45.6704 78.27456 119.76704 55.64416 149.01248 42.55744 4.58752-33.09568 17.85856-55.68512 32.50176-68.46464-113.72544-12.94336-233.2672-56.85248-233.2672-253.0304 0-55.88992 20.00896-101.5808 52.75648-137.4208-5.3248-12.9024-22.85568-64.96256 4.95616-135.49568 0 0 43.008-13.74208 140.84096 52.49024 40.83712-11.34592 84.64384-17.03936 128.16384-17.24416 43.49952 0.2048 87.32672 5.87776 128.24576 17.24416 97.73056-66.2528 140.65664-52.49024 140.65664-52.49024 27.87328 70.53312 10.3424 122.59328 5.03808 135.49568 32.82944 35.86048 52.69504 81.53088 52.69504 137.4208 0 196.64896-119.78752 239.94368-233.79968 252.6208 18.37056 15.89248 34.73408 47.04256 34.73408 94.80192 0 68.5056-0.59392 123.63776-0.59392 140.51328 0 13.6192 9.216 29.5936 35.16416 24.576 203.32544-67.76832 349.83936-259.62496 349.83936-485.76512 0-282.78784-229.23264-512-512-512z" p-id="3437" fill="#ffffff"></path></svg>
                </div>
            </div>
        </div>

        <div class="begin-use theme-button" @click="beginUse">Begin Use →</div>
    </main>
</template>

<script>
    import config from '../public/js/config.js'
    import globals from '../public/js/global'
    import { listener } from '../public/js/playerListener'
    import { pluginDesktop, pluginMobile } from '../public/js/plugins'
    
    import Agreement from './Agreement.vue'
    export default {
        components: {
            Agreement
        },
        data() {
            return {
                showAgr:false,

                loadType:'mp4',

                playerConfig:{}, // 播放器配置
            }
        },
        created() {
        },
        mounted() {
             var assginPlugins = {
                plugins:[
                    ...pluginDesktop.plugins,
                    ...pluginMobile.plugins
                ]
            }
            this.playerConfig = Object.assign(assginPlugins, config);

            this.playerConfig['themeColor'] = '#1e98d4';
            this.playerConfig['objectFit'] = 'cover';
            this.playerConfig['autoFit'] = false;
            this.playerConfig['width'] = '63.6%';
            this.playerConfig['height'] = '70%';
            this.playerConfig['lang'] = this.$lang.indexOf('en') > -1 ? 'en' : 'zh-cn';

            let muiplayer = new MuiPlayer(this.playerConfig);
            globals.mp = muiplayer;

            let setFitState = (state) => {
                if(state) {
                    muiplayer.video().style.objectFit = 'contain';
                }else {
                    muiplayer.video().style.objectFit = 'cover';
                }
            }

            // 网页全屏事件触发
            let isPagefull = false;
            muiplayer.on('pagefull-change',(data) => {
                isPagefull = data.pagefull;
                setFitState(data.pagefull);
            })

            // 全屏时切换视频适应窗口
            muiplayer.on('fullscreen-change',(data) => {
                isPagefull === false ? setFitState(data.fullscreen) : '';
            })


            listener();

            this.loadAgreement();
        },
        beforeDestroy() {
            globals.mp.destroy();
        },
        methods:{
            loadAgreement() {
                const isAgreementEn = window.localStorage.getItem('isAgreementEn')
                const isAgreementCn = window.localStorage.getItem('isAgreementCn')

                if(this.$lang == 'en-US') {
                    isAgreementEn != "true" ? this.showAgr = true : '';
                }else {
                    isAgreementCn != "true" ? this.showAgr = true : '';
                }
            },
            beginUse() {
                this.$router.push('guide');
            },
            onLoadType(type) {
                if(this.loadType != type) {
                    this.loadType = type;
                    switch (type) {
                        case 'flv':
                            this.playerConfig['parse'] = {
                                type:'flv',
                                loader:window.flvjs,
                                config:{ 
                                    cors:true
                                },
                            }
                            globals.mp.reloadUrl(globals.address.src_flv);
                            break;
                        case 'hls':
                            this.playerConfig['parse'] = {
                                type:'hls',
                                loader:window.Hls,
                                config:{
                                    debug:false,
                                },
                            }
                            globals.mp.reloadUrl(globals.address.src_hls);
                            break;
                        case 'mp4':
                            delete this.playerConfig['parse'];
                            globals.mp.reloadUrl(globals.address.src_hd);
                            break;
                    }

                    // console.log(config);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .sub-contenxt {
        color: #555555;
        text-align: center;
        font-weight: bold;
    }
    .card-box {
        border-bottom: 1px solid #e8eaec;
        position: relative;
        #mui-player {
            height: 70%;
            width: 63.6%;
            position: absolute;
            top: 7.8%;
            left: 18.2%;
            border-radius: 3px;
        }
    }
    .begin-use {
        padding: 15px 20px;
        margin-bottom: 50px;
        margin-top: 30px;
    }
    .load-media {
        list-style: none;
        text-align: center;
        user-select: none;
        margin: 18px auto;
        li {
            display: inline-block;
            display: inline-block;
            background-color: #CCCCCC;
            color: white;
            padding: 4px 18px;
            font-size: 14px;
            border-radius: 50px;
            margin:5px;
            cursor: pointer;
        }
        .active-theme {
            background-color: #2d8cf0 !important;
        }
    }
    .footer-licensed {
        padding: 20px 0;
        color: #666;
    }
</style>