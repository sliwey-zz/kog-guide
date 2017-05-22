<template>
  <div :class="$style.wrap">
    <tab-list :tab-list="items"></tab-list>
  </div>
</template>

<script>
import itemList from './itemlist';
import tabList from '../../components/tab-list';

const typeList = [
  {
    type: 1,
    name: '攻击'
  },
  {
    type: 2,
    name: '法术'
  },
  {
    type: 3,
    name: '防御'
  },
  {
    type: 4,
    name: '移动'
  },
  {
    type: 5,
    name: '打野'
  }
];

const items = typeList.map(type => {
  type.list = itemList.map(item => ({
    name: item.item_name,
    url: `http://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`,
    type: item.item_type,
    price: item.total_price
  })).filter(item => item.type === type.type);

  return type;
});

export default {
  data () {
    return {
      items: items
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