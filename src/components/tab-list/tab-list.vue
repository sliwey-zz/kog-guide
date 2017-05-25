<template>
  <div :class="$style.wrap">
    <ul :class="$style.tabList">
      <li :class="[$style.tabItem, {[$style.tabActive]: currIndex === index}]" @click="change(index)" v-for="(tab, index) in tabList">{{ tab.name }}</li>
    </ul>
    <div :class="$style.content" :style="contentStyle">
      <ul :class="$style.list" :style="{ width: winWidth + 'px' }" v-for="tab in tabList" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
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
      contentStyle: {
        width: window.innerWidth * this.tabList.length + 'px',
        transform: `translate3d(-${this.winWidth * this.currIndex}px, 0, 0)`,
        transitionDuration: '.3s'
      },
      startX: 0,
      startY: 0,
      direction: 'h'
    }
  },
  computed: {

  },
  methods: {
    change(index) {
      this.currIndex = index;
      this.contentStyle.transform = `translate3d(-${this.winWidth * index}px, 0, 0)`;
      this.contentStyle.transitionDuration = '.3s';
    },
    touchstart(event) {
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchmove(event) {
      const target = this.$el.querySelectorAll('.' + this.$style.list)[this.currIndex];
      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;

      if (this.direction === 'v' && Math.abs(currentX - this.startX) > 5 && Math.abs(currentY - this.startY) < 5) {
        this.direction = 'h';
      }

      if (this.direction === 'h') {
        if (!(currentX - this.startX > 0 && this.currIndex === 0) && !(currentX - this.startX < 0 && this.currIndex === this.size - 1)) {
          this.contentStyle.transform = `translate3d(${(currentX - this.startX) - this.winWidth * this.currIndex}px, 0, 0)`;
          this.contentStyle.transitionDuration = '0ms';
        }
      }

      // 高位表示向上滚动
      // 底位表示向下滚动
      // 1容许 0禁止
      let status = '11';

      if (target.scrollTop === 0) {

        // 如果内容小于容器则同时禁止上下滚动
        status = target.offsetHeight >= target.scrollHeight ? '00' : '01';
      } else if (target.scrollTop + target.offsetHeight >= target.scrollHeight) {

        // 已经滚到底部了只能向上滚动
        status = '10';
      }

      if (status != '11') {

        // 判断当前的滚动方向
        const direction = currentY - this.startY > 0 ? '10' : '01';

        // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
        if (!(parseInt(status, 2) & parseInt(direction, 2))) {
          event.preventDefault();
        }
      }
    },
    touchend(event) {
      const currentX = event.changedTouches[0].clientX;

      if (this.direction === 'h') {
        if (currentX - this.startX <= -40 && this.currIndex < this.size - 1) {
          this.currIndex++;
        }

        if (currentX - this.startX > 40 && this.currIndex > 0) {
          this.currIndex--;
        }

        this.change(this.currIndex);
      }

      this.direction = 'v';

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