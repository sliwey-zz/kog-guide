<template>
  <footer :class="$style.footer">
    <ul :class="$style.list">
      <router-link :class="$style.listItem" tag="li" to="/heroes"><span :class="[isActive === '/heroes' || isActive === '/' ? $style.heroActive : $style.hero]">英雄</span></router-link>
      <router-link :class="$style.listItem" tag="li" to="/items"><span :class="[isActive === '/items' ? $style.itemActive : $style.item]">局内道具</span></router-link>
      <router-link :class="$style.listItem" tag="li" to="/inscriptions"><span :class="[isActive === '/inscriptions' ? $style.inscriptionActive : $style.inscription]">铭文</span></router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isActive: this.$route.path
    }
  },
  watch: {
    $route() {
      this.isActive = this.$route.path;
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

.listItem{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
}

.label{
  color: #999;
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

.hero{
  composes: label;

  &:before{
    background-image: url(./hero.png);
  }
}

.heroActive{
  composes: label;
  color: #333;

  &:before{
    background-image: url(./hero_h.png);
  }
}

.item{
  composes: label;

  &:before{
    background-image: url(./item.png);
  }
}

.itemActive{
  composes: label;
  color: #333;

  &:before{
    background-image: url(./item_h.png);
  }
}

.inscription{
  composes: label;

  &:before{
    background-image: url(./inscription.png);
  }
}

.inscriptionActive{
  composes: label;
  color: #333;

  &:before{
    background-image: url(./inscription_h.png);
  }
}

</style>