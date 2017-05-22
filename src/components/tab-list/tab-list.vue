<template>
  <div :class="$style.wrap">
    <ul :class="$style.tabList">
      <li :class="[$style.tabItem, {[$style.tabActive]: currIndex === index}]" @click="change(index)" v-for="(tab, index) in tabList">{{ tab.name }}</li>
    </ul>
    <div :class="$style.content" :style="contentStyle">
      <ul :class="$style.list" :style="{ width: winWidth + 'px' }" v-for="tab in tabList" @touchstart="touchstart" @touchmove="touchmove">
        <li :class="$style.item" v-for="item in tab.list" v-bind:key="item">
          <img :class="$style.img" :src="item.url">
          <p :class="$style.title">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default{
  props: ['tabList'],
  data() {
    return {
      currIndex: 0,
      size: this.tabList.length,
      winWidth: window.innerWidth,
      startY: 0
    }
  },
  computed: {
    contentStyle() {
      return {
        width: this.winWidth * this.size + 'px',
        transform: 'translate3d(-' + (this.winWidth * this.currIndex) + 'px, 0, 0)'
      }
    }
  },
  methods: {
    change(type) {
      this.currIndex = type;
    },
    touchstart(event) {
      // console.log(this.$el.querySelector('.' + this.$style.content).scrollTop, this.$el.querySelector('.' + this.$style.content).scrollHeight)
      this.startY = event.touches[0].clientY;
    },
    touchmove(event) {

      var status = '11';
      // var ele = this;

      const target = this.$el.querySelectorAll('.' + this.$style.list)[this.currIndex];


      var currentY = event.touches[0].clientY;

      if (target.scrollTop === 0) {
          // 如果内容小于容器则同时禁止上下滚动
          status = target.offsetHeight >= target.scrollHeight ? '00' : '01';
      } else if (target.scrollTop + target.offsetHeight >= target.scrollHeight) {
          // 已经滚到底部了只能向上滚动
          status = '10';
      }

      if (status != '11') {
          // 判断当前的滚动方向
          var direction = currentY - this.startY > 0 ? '10' : '01';
          // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
          if (!(parseInt(status, 2) & parseInt(direction, 2))) {
              event.preventDefault();
          }
      }
    }
  }
}

</script>

<style lang="scss" module>
@import '../../style/variables';
$height-tab: 40px;

.wrap{
  height: 100%;
  overflow-x: hidden;
}

.tabList{
  position: absolute;
  display: flex;
  width: 100%;
  height: $height-tab;
  left: 0;
  top: $height-header;
  background: #eee;
  line-height: $height-tab;
  text-align: center;
  z-index: 10;
}

.tabItem{
  height: $height-tab;
  flex: 1;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

.tabActive{
  color: #333;
  border-bottom: 2px solid #333;
}

.content{
  height: 100%;
  transition: .3s;
  overflow: hidden;
}

.list{
  float: left;
  display: grid;
  height: 100%;
  padding-top: $height-tab + 10;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 90px;
  align-items: center;
  justify-items: center;
  overflow-y: auto;
}

@media screen and (max-width: 359px){
  .list{
    grid-template-columns: repeat(4, 1fr);
  }
}

.item{
  text-align: center;
}

.img{
  width: 60px;
  height: 60px;
}

</style>