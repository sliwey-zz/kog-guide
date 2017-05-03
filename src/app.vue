<template>
  <div>
    <k-header></k-header>
    <div :class="$style.content">
      <router-view></router-view>
    </div>
    <k-footer></k-footer>
  </div>
</template>

<script>
import kHeader from './components/header';
import kFooter from './components/footer';

export default {
  data () {
    return {

    }
  },
  components: {
    kHeader, kFooter
  }
}
</script>

<style lang="scss" module>
@import './style/variables';

.content{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: $height-header;
  padding-bottom: $height-footer;
}
</style>