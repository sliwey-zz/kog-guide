<template>
  <div>
    <admin-header></admin-header>
    <div :class="$style.content">
      <router-view></router-view>
    </div>
    <admin-footer></admin-footer>
  </div>
</template>

<script>
import adminHeader from './components/header';
import adminFooter from './components/footer';

export default {
  data () {
    return {

    }
  },
  components: {
    adminHeader, adminFooter
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