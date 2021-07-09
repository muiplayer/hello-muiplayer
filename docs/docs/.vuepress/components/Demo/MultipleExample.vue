<template>
    <main>
        <div class="player-box">
            <div class="box" id="mui-player-1"></div>
            <div class="box" id="mui-player-2"></div>
            <div class="box" id="mui-player-3"></div>
            <div class="box" id="mui-player-4"></div>
        </div>
    </main>
</template>

<script>
    import config from '../../public/js/config_demo.js'

    export default {
        data() {
            return {
                loadType:'mp4',

                medias:[
                    { mp:null,url:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.mp4',container:'#mui-player-1',title:'window 1' },
                    { mp:null,url:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/subtitleSource.mp4',container:'#mui-player-2',title:'window 2' },
                    { mp:null,url:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/subtitleSource.mp4',container:'#mui-player-3',title:'window 3' },
                    { mp:null,url:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.mp4',container:'#mui-player-4',title:'window 4' },
                ]
            }
        },
        created() {
        },
        mounted() {
            this.medias.forEach(media => {
                let playerConfig = Object.assign({},config);
                playerConfig['src'] = media.url;
                playerConfig['title'] = media.title;
                playerConfig['container'] = media.container,
                playerConfig['autoplay'] = true;
                playerConfig['loop'] = true;
                playerConfig['showMiniProgress'] = false;
                playerConfig['objectFit'] = 'cover';
                playerConfig['autoFit'] = false;
                playerConfig['width'] = '50%';
                playerConfig['height'] = '225px';
                delete playerConfig['plugins'];

                if(this.$lang.indexOf('en') > -1) {
                    playerConfig['lang'] = 'en';
                }else if(this.$lang.indexOf('zh') > -1) {
                    playerConfig['lang'] = 'zh-cn';
                }

                let muiplayer = new MuiPlayer(playerConfig);
                media.mp = muiplayer;
            })
        },
        beforeDestroy() {
            this.medias.forEach(media => {
               media.mp.destory();
            })
        },
        methods:{
        }
    }
</script>

<style lang="less" scoped>
    .player-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        .box {
            height: 225px;
            width: 50%;
            box-sizing:border-box;
            min-width: 320px;
        }
    }
</style>