<template>
  <div :class="$style.wrap">
    <ul :class="$style.tabList">
      <li :class="[$style.tabItem, {[$style.tabActive]: isActive === 3}]" @click="isActive = 3">坦克</li>
      <li :class="[$style.tabItem, {[$style.tabActive]: isActive === 1}]" @click="isActive = 1">战士</li>
      <li :class="[$style.tabItem, {[$style.tabActive]: isActive === 4}]" @click="isActive = 4">刺客</li>
      <li :class="[$style.tabItem, {[$style.tabActive]: isActive === 2}]" @click="isActive = 2">法师</li>
      <li :class="[$style.tabItem, {[$style.tabActive]: isActive === 5}]" @click="isActive = 5">射手</li>
      <li :class="[$style.tabItem, {[$style.tabActive]: isActive === 6}]" @click="isActive = 6">辅助</li>
    </ul>
    <ul :class="$style.list">
      <li :class="$style.item" v-for="hero in heroes">
        <img :class="$style.img" :src="hero.url">
        <p :class="$style.title">{{ hero.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import heroList from './herolist';

export default {
  data () {
    return {
      isActive: 3,
      heroes: heroList.map(hero => ({
        name: hero.cname,
        url: `http://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg`,
        type: hero.hero_type
      }))
    }
  },
  mounted() {
    console.log(heroList)
  }
}
</script>

<style lang="scss" module>
@import '../../style/variables';
$height-tab: 40px;

.wrap{
  padding: 10px;
}

.tabList{
  position: fixed;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  height: $height-tab;
  left: 0;
  top: $height-header;
  background: #eee;
  line-height: $height-tab;
  text-align: center;
}

.tabItem{
  height: $height-tab;
  box-sizing: border-box;
}

.tabActive{
  color: #333;
  border-bottom: 2px solid #333;
}

.list{
  display: grid;
  padding-top: $height-tab;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
}

@media screen and (max-width: 359px){
  .list{
    grid-template-columns: repeat(4, 1fr);
  }
}

.item{
  margin-bottom: 10px;
  text-align: center;
}

.img{
  width: 60px;
  height: 60px;
}
</style>