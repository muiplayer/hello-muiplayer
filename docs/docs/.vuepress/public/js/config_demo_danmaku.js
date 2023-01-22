import globals from '../js/global'

// 弹幕开关
function danmakuSwitch(data,selected,back) {
    selected();
    let current = data.getPanelOption(data.panelIndex); // 当前选项的实例对象
    if(current.selected) {
        globals.closeDanmaku = false;

        // TIP：主动触发视频播放事件，从而触发 triggerTime 方法
        if(!globals.mp.video().paused) {
            globals.mp.video().pause();
            globals.mp.video().play();
        }
    }else {
        globals.closeDanmaku = true;
        globals.CM.clear();
        globals.CM.stop();
    }
}

// 设置弹幕透明度
// 参考：https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/DoingItRight.md#%E5%BC%B9%E5%B9%95%E9%80%8F%E6%98%8E%E5%BA%A6-opacity
function setDanmakuOpacit(data,selected,back) {
    selected();
    globals.CM.options.scroll.opacity = parseFloat(data.functions);
    back();
}

// 设置弹幕速度
// 参考：https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/DoingItRight.md#%E5%BC%B9%E5%B9%95%E9%80%9F%E5%BA%A6-comment-default-speed
function setDanmakuScale(data,selected,back) {
    selected();

    let scales = [
        // zh-cn
        { name:'0.5 倍',scale:2 },
        { name:'正常',scale:1 },
        { name:'1.5 倍',scale:0.66 },
        { name:'2.0 倍',scale:0.5 },
        { name:'2.5 倍',scale:0.5 },
        { name:'3.0 倍',scale:0.33 },
        // en
        { name:'0.5 times',scale:2 },
        { name:'Normal',scale:1 },
        { name:'1.5 times',scale:0.66 },
        { name:'2.0 times',scale:0.5 },
        { name:'2.5 times',scale:0.5 },
        { name:'3.0 times',scale:0.33 },
    ];

    for(let item of scales) {
        if(item.name == data.functions) {
            globals.CM.options.scroll.scale = item.scale;
            break;
        }
    }
    back();
}

// 设置弹幕字体大小
// 参考：https://github.com/jabbany/CommentCoreLibrary/blob/master/docs/DoingItRight.md#%E5%BC%B9%E5%B9%95%E5%AD%97%E5%8F%B7%E5%92%8C%E9%80%9F%E5%BA%A6%E5%90%8C%E6%AD%A5%E6%8B%89%E4%BC%B8-autoscale-comment
function setDanmakuSize(data,selected,back) {
    selected();

    let timeline = globals.CM.timeline;
    for(let item of timeline) {
        item['size'] = parseInt(data.functions.substr(0,2))
    }
    back();
}

export function customSettingFun() {
    return [
        {
            functions:'弹幕',
            name:'danmaku',
            model:'select',
            childConfig:[
                {
                    functions:'开启',
                    model:'switch',
                    selected:true
                },
                {
                    functions:'透明度',
                    childConfig:[
                        { functions:'0.3' },
                        { functions:'0.5' },
                        { functions:'0.8' },
                        { functions:'1.0',selected:true },
                    ],
                    onToggle:setDanmakuOpacit
                },
                {
                    functions:'弹幕速度',
                    childConfig:[
                        { functions:'0.5 倍' },
                        { functions:'正常',selected:true },
                        { functions:'1.5 倍' },
                        { functions:'2.0 倍' },
                        { functions:'2.5 倍' },
                        { functions:'3.0 倍' },
                    ],
                    onToggle:setDanmakuScale
                },
                {
                    functions:'字体大小',
                    childConfig:[
                        { functions:'12 PX' },
                        { functions:'16 PX' },
                        { functions:'18 PX' },
                        { functions:'25 PX',selected:true },
                        { functions:'36 PX' },
                        { functions:'45 PX' },
                        { functions:'64 PX' },
                    ],
                    onToggle:setDanmakuSize
                }
            ],
            onToggle:danmakuSwitch
        },
    ]
}