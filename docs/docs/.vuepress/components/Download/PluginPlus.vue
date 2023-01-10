<template>
    <main>
        <div class="show-entry" @click="dialogShow = true">下载</div>

        <div class="download-dialog" v-if="dialogShow">
            <div class="dialog-cover"></div>
            <div class="dialog-wrapper">
                <div class="w-header">
                    <span>扩展组件下载</span>
                </div>

                <div class="w-body">
                    <div class="s-tip s-item">
                        <svg style="flex-shrink: 0;" t="1673236445989" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5423" width="26" height="26"><path d="M896 346.8c-0.1 0 0 0 0 0 0-0.9-0.1-1.7-0.2-2.5 0-0.1 0-0.3-0.1-0.4-0.2-1.7-0.5-3.3-1-4.9-0.5-1.7-1-3.3-1.7-4.9v-0.1c-0.3-0.8-0.7-1.5-1.1-2.3v-0.1c-0.4-0.7-0.8-1.5-1.2-2.2-0.1-0.1-0.1-0.2-0.2-0.3-0.4-0.6-0.8-1.2-1.3-1.9-0.1-0.1-0.1-0.2-0.2-0.2-0.5-0.6-1-1.3-1.5-1.9-0.1-0.1-0.2-0.3-0.4-0.4-0.5-0.6-1-1.2-1.6-1.7l-0.1-0.1L637.3 74.5c-0.6-0.6-1.2-1.1-1.8-1.6-0.1-0.1-0.3-0.2-0.4-0.4-0.6-0.5-1.2-1-1.9-1.5-0.1 0-0.1-0.1-0.2-0.1-0.6-0.5-1.3-0.9-1.9-1.3-0.1-0.1-0.2-0.1-0.3-0.2-0.7-0.4-1.4-0.9-2.2-1.3-0.8-0.4-1.5-0.8-2.3-1.1h-0.1c-1.6-0.7-3.2-1.3-4.9-1.7-1.6-0.4-3.2-0.8-4.9-1-0.1 0-0.3 0-0.4-0.1-1.4-0.2-2.8-0.3-4.3-0.3H164c-19.9 0-36 16.1-36 36v823.3c0 19.9 16.1 36 36 36h696c19.9 0 36-16.1 36-36V348.6v-1.8zM647.8 186.9l125.4 125.6H647.8V186.9zM200 887.2V135.9h375.8v212.7c0 19.9 16.1 36 36 36H824v502.7H200z" fill="#515a6e" p-id="5424"></path><path d="M419.2 543.1v-29.2H283v31.5h86.7L272 666.1V700h151.2v-31.3H317.3zM492.6 513.9h37.6V700h-37.6zM717.7 516.7c-6.9-1.9-21.8-2.8-44.7-2.8h-60.3V700h37.6v-70.2h24.5c17 0 30-0.9 39-2.7 6.6-1.4 13.1-4.4 19.5-8.8s11.7-10.6 15.8-18.3c4.1-7.8 6.2-17.4 6.2-28.8 0-14.8-3.6-26.9-10.8-36.2-7.2-9.4-16.1-15.5-26.8-18.3z m-5.4 69.4c-2.8 4.1-6.8 7.2-11.7 9.1-5 1.9-14.9 2.9-29.7 2.9h-20.6v-52.8h18.2c13.5 0 22.6 0.4 27 1.3 6.1 1.1 11.1 3.9 15.1 8.3s6 10 6 16.8c0 5.5-1.4 10.3-4.3 14.4z" fill="#515a6e" p-id="5425"></path></svg>
                        
                        <div style="margin-left:8px">
                            <span>下载说明：专业版扩展组件需在平台进行购买，【商品标码】在平台订购成功自动发货！<span @click="toBuy" style="text-decoration: underline;color:#6495ED;cursor: pointer;">前往【淘宝】订购</span></span>
                        </div>
                    </div>

                    <div class="s-item">
                        <span class="label">选&nbsp;择&nbsp;扩&nbsp;展&nbsp;组件：</span>
                        <select v-model="form.pluginType" placeholder="请选择项">
                            <option disabled selected value>- 请选择项</option>
                            <option value="mobile">mui-player-mobile-plugin.js 专业版</option>
                            <option value="desktop">mui-player-desktop-plugin.js 专业版</option>
                        </select>
                    </div>

                    <div class="s-item">
                        <span class="label">请输入商品标码：</span>
                        <input v-model="form.orderSign" class="secret-input" type="text" placeholder="请输入15位的商品标码">
                        <img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/help_icon.png" alt="Secret Id" title="Secret Id" style="vertical-align: bottom;width: 15px;height: 15px;margin-left: 8px;cursor: help; ">
                    </div>
                </div>

                <div class="c-footer">
                    <button @click="downloadPlus" :disabled="buttonDisabled">{{ downloadStatusText }}</button>
                    <button class="un-primary" @click="toBuy">去订购</button>
                    <button class="un-primary" @click="dialogShow = false">取消</button>
                </div>
                
            </div>
        </div>·
    </main>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                dialogShow: false,
                buttonDisabled: false,
                downloadStatusText: '下载',

                form:{
                    pluginType: '',
                    orderSign: '',
                }
            }
        },
        methods:{
            downloadPlus() {
                let { pluginType, orderSign } = this.form;

                 if(!pluginType) {
                    alert('请选择扩展组件项');
                    return;
                }

                if(!orderSign) {
                    alert('请填写商品标码');
                    return;
                }

                if(!/^\d{15}$/.test(orderSign)) {
                    alert('商品标码录入不正确');
                    return;
                }

                let fetch = () => {
                    let setLoading = (disabled, text) => {
                        typeof disabled == 'boolean' ? this.buttonDisabled = disabled : '';
                        text ? this.downloadStatusText = text : '';
                    }
                    setLoading(true, '下载中...');

                    axios({
                        method: 'get',
                        url: 'https://downloaalplugin-muiplayessional-xcojtdfzms.cn-shanghai.fcapp.run',
                        params: Object.assign(this.form, { action: 'query' }),
                    }).then(v => {
                        let data = v.data;
                        if(data.status) {
                            setLoading('', '下载完成');
                            window.open(`https://${ data.downloadUrl }`);
                        }else {
                            setLoading(false, '下载');
                            alert(data.message);
                        }
                    }).catch(e => {
                        setLoading(false, '下载错误');
                        alert(e.message);
                    })
                }
                fetch();
            },
            toBuy() {
                let { pluginType } = this.form;
                switch (pluginType) {
                    case 'mobile':
                        window.open('https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.1d293d0du4icIt&ft=t&id=679428385384');
                        break;
                    case 'desktop':
                        
                        break;
                
                    default:
                        alert('请选择扩展组件项');
                        break;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .show-entry {
        color: #3eaf7c;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    .download-dialog {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        .dialog-cover {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,.5);
            overflow: hidden;
        }
        @keyframes dialogWrapperAnimation {
            from {
                transform: translate(-50%, -70%);
            }
            to {
                transform: translate(-50%, -50%);
            }
        }
        .dialog-wrapper {
            animation: dialogWrapperAnimation .48s;
            width: 59%;
            border-radius: 4px;
            background-color: #FFF;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .c-footer {
                border-top: 1px #DDD solid;
                height: 56px;
                background-color: rgba(221,221,221,0.28);
                display: flex;
                align-items: center;
                justify-content: flex-end;
                [disabled='disabled'] {
                    background-color: #CCCCCC !important;
                    cursor: no-drop;
                }
                button {
                    padding: 7px 25px;
                    margin-right: 22px;
                    background-color: #3eaf7c;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 4px;
                    letter-spacing: 3px;
                    user-select: none;
                    &:active {
                        opacity: 0.9;
                    }
                    &.un-primary {
                        background-color: transparent;
                        border: 1px #3eaf7c solid;
                        color: #3eaf7c;
                        &:active {
                            opacity: 0.75;
                        }
                    }
                }
            }
            .w-header {
                background-color: #3eaf7c;
                padding: 12px 12px;
                color: white;
                font-size: 16px;
            }
            .w-body {
                padding: 12px 22px 38px 32px;
                .s-tip {
                    font-size: 14px;
                    display: inline-block;
                    line-height: 30px;
                    color: rgb(255, 69, 0);
                    display: flex;
                    align-items: center;
                }
                .s-item {
                    margin-bottom: 18px;
                    .label {
                        color: #515a6e;
                        font-size: 14px;
                    }
                    select {
                        height: 32px;
                        width: 65%;
                        border: 1px #888 solid;
                        padding-left: 3px;
                        outline: none;
                        font-size: 15px;
                    }
                    .secret-input {
                        height: 30px;
                        padding: 0;
                        width: 63.4%;
                        border: 1px #888 solid;
                        outline: none;
                        padding-left: 6px;
                        font-size: 15px;
                        position: relative;
                        left: 3px;
                    }
                }
            }
        }
    }
</style>