<template>
  <div class="loading-svg"><img src="/svg/three-dots.svg" width="50px" /></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.loading-svg {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.15);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
</style>
