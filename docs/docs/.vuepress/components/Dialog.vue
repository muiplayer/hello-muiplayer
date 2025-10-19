<template>
	<div class="dialog" v-if="show" @touchmove.prevent>
		<div class="dialog-cover" @click="show = false"></div>
		<div class="dialog-wrapper" :style="{ width: width }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: '38%'
            }
        },
        data() {
            return {
				show: false,
            }
        },
        mounted() {
        },
        methods: {
			close() {
				this.show = false
			},
			open() {
				this.show = true
			}
        }
    }
</script>

<style lang="less" scoped>
	@media screen and (max-width: 768px) {
		.dialog-wrapper {
			width: 90% !important;
		}
	}

	.dialog {
        position: fixed !important;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2000;
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
            width: 38%;
            border-radius: 6px;
			overflow: hidden;
            background-color: #FFF;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
			display: flex;
        }
    }
</style>