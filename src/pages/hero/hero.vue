<template>
  <div :class="$style.wrap">
    <tab-list :tab-list="heroes"></tab-list>
  </div>
</template>

<script>
import heroList from './herolist';
import tabList from '../../components/tab-list';

const typeList = [
  {
    type: 3,
    name: '坦克'
  },
  {
    type: 1,
    name: '战士'
  },
  {
    type: 4,
    name: '刺客'
  },
  {
    type: 2,
    name: '法师'
  },
  {
    type: 5,
    name: '射手'
  },
  {
    type: 6,
    name: '辅助'
  }
];

const heroes = typeList.map(item => {
  item.list = heroList.map(hero => ({
    name: hero.cname,
    url: `http://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg`,
    type: hero.hero_type
  })).filter(hero => hero.type === item.type)

  return item;
});

export default {
  data () {
    return {
      heroes: heroes
    }
  },
  components: {
    'tab-list': tabList
  }
}
</script>

<style lang="scss" module>

.wrap{
  height: 100%;
}

</style>