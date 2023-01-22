<template>
    <main id="toggleUrl">
        <input v-model="content" class="url-input" type="text" :placeholder="placeholder">
        <button class="url-submit" @click="onLoading">{{ buttonText }}</button>
    </main>
</template>

<script>
    import globals from '../public/js/global'
    export default {
        props:{
            placeholder:{
                default:'The input mp4 video url'
            },
            buttonText:{
                default:'Toggle URL'
            },
            type:{
                default: 'url',
            }
        },
        data() {
            return {
                content:'',
            }
        },
        methods:{
            onLoading() {
                // 地址
                if(this.type == 'url') {
                    let reg = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/;
                    if(reg.test(this.content)) {
                        this.$emit('before');
                        globals.mp.reloadUrl(this.content);
                    }else {
                        alert('Please enter the correct address!');
                    }
                }

                // 文本
                if(this.type == 'text') {
                    this.$emit('result', this.content);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #toggleUrl {
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