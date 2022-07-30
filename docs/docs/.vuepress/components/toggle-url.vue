<template>
    <main id="toggleUrl">
        <input v-model="text" class="url-input" name="url" type="text" :placeholder="placeholder">
        <button class="url-submit" @click="onLoading">{{buttonText}}</button>
    </main>
</template>

<script>
    export default {
        props:{
            placeholder:{
                default:'The input mp4 video url'
            },
            buttonText:{
                default:'Toggle URL'
            },
            type:{
                default:'url', // url | text
            }
        },
        data() {
            return {
                text:'',
            }
        },
        methods:{
            onLoading() {
                if(this.type == 'url') {
                    let reg = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/;
                    reg.test(this.text) ? this.$emit('changeurl',this.text) : alert('视频地址录入不正确！');
                }else if(this.type == 'text') {
                    this.$emit('changeurl',this.text)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #toggleUrl {
        // border: 1px #f00 solid;
        height: 80px;
        line-height: 80px;
        .url-input {
            height: 25px;
            color: #515a6e;
            padding: 4px 7px;
            border: 1px solid #dcdee2;
            width: 40%;
            outline: none;
            border-radius: 4px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        .url-submit {
            height: 35px;
            background: red;
            border: none;
            outline: none;
            cursor: pointer;
            color: white;
            background: rgba(62, 175, 124,1);
            border-radius: 4px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            user-select: none;
            position: relative;
            left: -5px;
            &:active {
                background: rgba(62, 175, 124,0.9);
            }
        }
    }
</style>