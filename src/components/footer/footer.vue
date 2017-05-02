<template>
  <footer :class="$style.footer">
    <ul :class="$style.list">
      <router-link :class="$style.item" tag="li" to="/heroes"><span :class="$style.labelHero">英雄</span></router-link>
      <router-link :class="$style.item" tag="li" to="/items"><span :class="$style.labelItem">道具</span></router-link>
      <router-link :class="$style.item" tag="li" to="/items"><span :class="$style.labelRune">符文</span></router-link>
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

  &.router-link-active{

    .labelItem:before{
      background-image: url(./item_h.png);
    }
  }
}

.label{
  font-size: 12px;

  &:before{
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 auto 3px;
    background: no-repeat center;
    background-size: contain;
  }
}

.labelHero{
  composes: label;

  &:before{
    background-image: url(./hero.png);
  }
}

.labelItem{
  composes: label;

  &:before{
    background-image: url(./item.png);
  }
}

.labelRune{
  composes: label;

  &:before{
    background-image: url(./rune.png);
  }
}

</style>