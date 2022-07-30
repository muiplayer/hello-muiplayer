<template>
    <main>
        <div id="mui-player"></div>
    </main>
</template>

<script>
    import config from '../../public/js/config_demo_subtitle.js'
    import globals from '../../public/js/global'
    import { listener } from '../../public/js/playerListener'

    export default {
        data() {
            return {
                playerConfig:{}, // 播放器配置
            }
        },
        created() {
        },
        mounted() {
            this.playerConfig = Object.assign({},config);
            this.playerConfig['height'] = '315';
            
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
            globals.mp.destroy();
        },
        methods:{
        }
    }
</script>

<style lang="less" scoped>
    
</style>