<template>
  <div :class="$style.wrap">
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
.wrap{
  padding: 10px;
}

.list{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.item{
  // float: left;
  // margin: 0 5px 5px;
}

.img{
  width: 60px;
  height: 60px;
}
</style>