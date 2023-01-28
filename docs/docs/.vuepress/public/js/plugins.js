import MuiPlayerMobilePlugin from '../../mui-player-mobile-plugin.min.js'
import MuiPlayerDesktopPlugin from '../../mui-player-desktop-plugin.min.js'

import customSetting from './customSetting'
import globals from './global'

export const pluginDesktop = {
    plugins:[
        typeof MuiPlayerDesktopPlugin != 'undefined' ? new MuiPlayerDesktopPlugin({
            key:'01J01J01E01D01K01I01L01C01C01F01H01D01L01C01D',
            seekLine: false,
            customSetting:customSetting, // 自定义设置组菜单
            thumbnails:globals.thumbnails, // 缩略图配置
            contextmenu:[ // 自定义右键菜单
            ],  
        }) : {},
    ]
};

export const pluginDesktopPlus = {
    plugins:[
        new MuiPlayerDesktopPlugin({
            key:'01J01J01E01D01K01I01L01C01C01F01H01D01L01C01D',
            customSetting:customSetting, // 自定义设置组菜单
            thumbnails:globals.thumbnails, // 缩略图配置
            seekLine: true, // 	显示寻址线
            prompt:{ // 进度条指定点
                dotColor: '#F8F8FF',
                hoverShow:false,
                items:[
                    { time: 5, content: '山清水秀' },
                    { time: 8, content: '崇山峻岭' },
                    {
                        time: 24,
                        content: '看山是山，看水是水',
                        style: {
                            background: 'rgb(255, 69, 0)',
                            padding: '4px 18px',
                            fontSize: '15px',
                            color: '#FFFFFF',
                            borderRadius: '4px',
                        }   
                    },
                ]
            },
            danmakuComponent:{
                open: true,
                growSize: 0.5,
                position: 'left',
                buttonText: '发送',
                placeholder: '请输入弹幕内容',
                onSend(text, cleanText) {
                    if(text) {
                        console.log('text => ' + text);
                        globals.CM.send({
                            mode:1,
                            text:text,
                            size:36,
                            color:0x2D8CF0
                        });
                        cleanText();
                    }
                },
                loadIntercept(danmakuControls) {
                },
                style: { }, // 组件的附加样式
            }
        })
    ]
}

export const pluginMobile = {
    plugins:[
        typeof MuiPlayerMobilePlugin == 'function' ? new MuiPlayerMobilePlugin({
            key:'01C01F01D01F01H01J01E01F01K01D01J01K01D01D01G',
            defaultMenuConfig:{ 
                showShare:[1,2,3,4,5,6],
            },
            thumbnails:globals.thumbnails, // 缩略图配置
            webpage: true, // 同时在网页端使用
        }) : {},
    ]
};