<template>
  <header :class="$style.header">
    <h1 :class="$style.title">{{ title }}</h1>
    <button :class="$style.btn" type="button" v-on:click="back()"></button>
  </header>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    title() {
      let title = '';

      switch (this.$route.path) {
        case '/':
        case '/heroes':
          title = '英雄';
          break;
        case '/items':
          title = '局内道具';
          break;
        case '/inscriptions':
          title = '铭文';
          break;
      }

      return title;
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>

<style lang="scss" module>
@import '../../style/variables';

.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: $height-header;
  line-height: $height-header;
  color: #fff;
  background: #1e2327;
  text-align: center;
  z-index: 100;
}

.title{
  font-weight: normal;
  font-size: 20px;
}

.btn{
  position: absolute;
  width: $height-header;
  height: $height-header;
  left: 0;
  top: 0;
  padding: 0;
  background: transparent;
  border: 0;
  outline: 0;

  &:before,
  &:after{
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    left: 22px;
    background: #fff;
  }

  &:before{
    top: 23px;
    transform: rotate(-45deg);
  }

  &:after{
    top: 33px;
    transform: rotate(45deg);
  }
}
</style>