<template>
    <div class="sidebar-top-container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item of imageList">
                    <a :href="item.href" target="_blank"><img :src="item.url" :alt="item.alt" :title="item.alt" width="100%" height="100%"></a>
                </div>
            </div>

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SidebarTop',
        data() {
            return {
                imageList:[
                    { url:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/ads/side001.jpg', alt:'亿元津贴助力上云，新人专享，云服务最低85/年！', href: 'https://www.aliyun.com/1111/new?userCode=rcwvifm0' },
                    { url:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/ads/side003.jpg', alt:'阿里云爆款特惠。', href: 'https://www.aliyun.com/minisite/goods?userCode=rcwvifm0' },
                ]
            }
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay:4000,
                loop : true,
                spaceBetween: 6,
            });
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
    .sidebar-top-container {
        margin-top: 15px;
        position: relative;
        &::before {
            content: '';
            border-bottom: 1px dashed #e8e8e8;
            position: absolute;
            bottom: -15px;
            left: 5px;
            right: 5px;
        }
        .swiper-container,a {
            width: 250px;
            height: 120px;
            .swiper-slide {
                // cursor: pointer;
            }
        }
    }
</style>