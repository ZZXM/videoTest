<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
@import "@/lib/reset.scss";
html, body, #app {
  @include rect(100%, 100%);
  background-color: #f5f5f58f;
}
  #app {
    @include flexbox();
    @include flex-direction(column);
    .contain {
      @include flex();
      overflow: auto;
      @include rect(100%, auto)
    };
    .footer {
      @include rect(100%, 0.55rem);
      /*margin-bottom: 15px;*/
      border-top: 1px solid #cccccc61;
      background-color: #f5f5f58f;
    }
  }
</style>
