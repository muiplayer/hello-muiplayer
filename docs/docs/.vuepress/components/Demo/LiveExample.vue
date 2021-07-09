<template>
    <main>
        <div id="mui-player"></div>

        <toggle-url @changeurl="onChangeurl" placeholder="the support hls media"></toggle-url>
    </main>
</template>

<script>
    import config from '../../public/js/config_demo_live.js'
    import globals from '../../public/js/global'
    import { listener } from '../../public/js/playerListener'

    import toggleUr from '../toggle-url'
    export default {
        components:{
            toggleUr
        },
        data() {
            return {
                loadType:'mp4',

                playerConfig:{}, // 播放器配置
            }
        },
        created() {
        },
        mounted() {
            this.playerConfig = Object.assign({},config);
            this.playerConfig['height'] = '420px';

            if(this.$lang.indexOf('en') > -1) {
                this.playerConfig['lang'] = 'en';
                this.playerConfig['title'] = 'Your Title';
            }else if(this.$lang.indexOf('zh') > -1) {
                this.playerConfig['lang'] = 'zh-cn';
                this.playerConfig['title'] = '你的视频标题';
            }

            console.log(this.playerConfig);
            let muiplayer = new MuiPlayer(this.playerConfig);
            globals.mp = muiplayer;

            listener();
        },
        beforeDestroy() {
            globals.mp.destory();
        },
        methods:{
            onChangeurl(url) {
                globals.mp.reloadUrl(url);
            },
        }
    }
</script>

<style lang="less" scoped>
    
</style>