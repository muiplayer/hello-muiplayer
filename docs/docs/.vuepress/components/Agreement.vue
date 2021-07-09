<template>
    <div class="ag-container">
        <div class="head">
            <svg t="1623937042232" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3209" width="20" height="20"><path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z m71.373 380.57h-5.427c-48.692 18.944-121.805 10.803-170.548 29.747v13.568c70.4 0 51.456 43.315 37.888 94.771-16.23 62.26-48.742 143.36-54.17 200.346s29.8 78.54 65.025 78.54c48.742 0 89.344-48.742 111.001-75.827 5.428-5.427 46.08-48.742 21.658-54.17-21.658-5.12-43.315 81.255-83.917 65.025-2.713 0-2.713 0-5.427-2.714 10.803-121.856 59.546-230.4 83.917-349.286z m-21.658-178.74a59.597 59.597 0 1 0 59.597 59.597 60.109 60.109 0 0 0-59.597-59.597z" p-id="3210" fill="#4C698D"></path></svg>
            <div class="title">{{ title[$lang == 'en-US' ? 'en' : 'cn'] }}</div>
        </div>

        <div class="content">
            <div class="instr">{{ instr[$lang == 'en-US' ? 'en' : 'cn'] }}</div>
            <ol>
                <li>{{ li0[$lang == 'en-US' ? 'en' : 'cn'] }}</li>
                <li>{{ li1[$lang == 'en-US' ? 'en' : 'cn'] }}</li>
            </ol>
        </div>

        <div class="close" @click="onClose">
            <svg t="1623937180071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4194" width="16" height="16"><path d="M566.97558594 521.09667969L856.8828125 231.18945312c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355468l-1.58203125-1.58203125c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0L512 466.51660156 222.09277344 176.21386719c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0l-1.58203125 1.58203125c-15.02929688 14.63378906-15.02929688 38.75976563 0 53.39355469l289.90722656 289.90722656L167.1171875 811.00390625c-14.63378906 14.63378906-14.63378906 38.75976563 0 53.39355469l1.58203125 1.58203125c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0L512 576.07226563 801.90722656 865.97949219c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0l1.58203125-1.58203125c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355469L566.97558594 521.09667969z" fill="#999999" p-id="4195"></path></svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Agreement',
        data() {
            return {
                title:{
                    en:'MuiPlayer Use Agreement',
                    cn:'MUIPLAYER 使用协议'
                },

                instr:{
                    en:'MuiPlayer is committed to providing a complete HTML5 video development solution. You are welcome to use this player as the video media player of the website. Before that, you agree to accept the following terms:',
                    cn:'MuiPlayer 致力于提供完备的 HTML5 视频开发解决方案，欢迎您引用该播放器作为网站的视媒体播放，在此之前您表示同意接受一下条款：'
                },

                li0:{
                    en:'All code of this open source project is based on the MIT license agreement, and you default to abide by the obligations stipulated in the license agreement.',
                    cn:'此开源项目所有代码基于 MIT 许可协议，您默认遵守许可协议中约定的义务。'
                },

                li1:{
                    en:'You accept by default that we and the relevant content of the business where you use MuiPlayer are placed on this official website.',
                    cn:'您默认接受我们以及您所使用 MuiPlayer 所在的业务的相关内容放置在本官网展示。'
                }
            }
        },
        methods:{
            onClose() {
                this.$emit('on-close');
                
                if(this.$lang == 'en-US') {
                    window.localStorage.setItem('isAgreementEn','true');
                }else {
                    window.localStorage.setItem('isAgreementCn','true');
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .ag-container {
        @keyframes siderMove {
            from {  right: 0px; }
            to { right: 35px; }
        }
        position: fixed;
        top: 80px;
        right: 35px;
        z-index: 1000;
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        background: #fff;
        border-radius: 6px;
        overflow: hidden;
        padding: 12px 19px;
        width: 330px;
        text-align: left;
        z-index: 10;
        animation: siderMove 0.5s;

        .content {
            font-size: 14px;
            color: #515a6e;
            text-align: justify;
            line-height: 1.5;
            margin-top: 18px;
            ol {
                margin: 6px 0 0 0 ;
            }
        }
        .head {
            position: relative;
            user-select: none;
            &::before {
                content: '';
                border-bottom: 1px #e8eaec solid;
                position: absolute;
                left: -19px;
                right: -19px;
                bottom: -10px;
            }
            svg {
                vertical-align: middle;
            }
            .title {
                vertical-align: middle;
                display: inline-block;
                margin-left: 12px;
                width: 250px;
                text-align: left;
                font-weight: 700;
                font-size: 16px;
            }
        }
        .close {
            position: absolute;
            top: 11px;
            right: 19px;
            cursor: pointer;
            user-select: none;
            transition: opacity .2s ease;
            &:hover {
                opacity: 0.8;
            }

        }
    }
</style>