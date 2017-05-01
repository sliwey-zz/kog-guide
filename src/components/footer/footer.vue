<template>
  <footer :class="$style.footer">
    <ul :class="$style.list">
      <router-link :class="$style.item" tag="li" to="/heroes"><span :class="$style.label">英雄</span></router-link>
      <router-link :class="$style.item" tag="li" to="/items"><span :class="$style.label">兵器库</span></router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
@import '../../style/variables';

.footer{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: $height-footer;
  line-height: 1.2;
  background: #fff;
  border-top: 1px solid #ccc;
}

.list{
  display: flex;
  height: 100%;
}

.item{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.label{
  font-size: 12px;

  &:before{
    content: '';
    display: block;
    width: 20px;
    height: 30px;
    margin: 0 auto;
    background: url(./icon_hero.png) no-repeat center;
  }
}

</style>