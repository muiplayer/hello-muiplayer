<template>
    <div class="sidebar-top-container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="url of imageList" @click="onSlideTap(url)">
                    <img :src="url" width="100%" height="100%" style="object-fit: contain;">
                </div>
            </div>

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>

        <Dialog ref="_dialogImg">
            <img :src="showImage" width="100%"></img>
        </Dialog>
    </div>
</template>

<script>
    import Dialog from '../Dialog.vue'
    export default {
        name: 'SidebarTop',
        components: {
            Dialog,
        },
        data() {
            return {
                showImage: '',

                imageList:[]
            }
        },
        mounted() {
            this.load()
        },
        methods: {
            async load() {
                let res = await axios({
                    method: 'get',
                    url: `https://muiplayer.oss-cn-shanghai.aliyuncs.com/data/addata.json?time=${ Date.now() }`,
                })
                let list = Array.isArray(res.data) ? res.data : []
                this.imageList = list
                console.log('AD => ', list)

                await this.$nextTick()
                this.initSwiper()
            },
            initSwiper() {
                new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    // autoplay:4000,
                    loop : true,
                    spaceBetween: 0,
                });
            },
            onSlideTap(url) {
                let str = url.split('_')[1]
                if(str == 'modal') {
                    this.showImage = url
                    this.$refs._dialogImg.open()
                } else {
                    window.open(`http://${str}`)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .sidebar-top-container {
        // border: 1px #f00 solid;
        margin-top: 5px;
        position: relative;
        &::before {
            content: '';
            border-bottom: 1px dashed #e8e8e8;
            position: absolute;
            bottom: -15px;
            left: 5px;
            right: 5px;
        }
        .swiper-container {
            // border: 1px #F00 solid;
            width: calc(100% - 32px);
            height: 135px;
            .swiper-slide {
                cursor: pointer;
            }
            .swiper-pagination {
                // border: 1px #0f0 solid;
                position: absolute;
                bottom: -2px;
            }
        }
    }
</style>