<template>
  <div class="dl-card-container">
    <div class="card" v-for="li in list" :key="li[keyName]" :class="`card-${realCol}`">
      <slot name="card" :cardData="li" />
    </div>
    <div
      class="empty-card"
      v-for="(item, i) in realCol - (list.length % realCol)"
      :key="i"
      :class="`card-${realCol}`"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'DlCardContainer',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    colNum: {
      type: Number,
      default: 0
    },
    keyName: {
      type: String,
      default: 'id'
    }
  },
  computed: {
    realCol () {
      const { colNum } = this
      let width = document.getElementsByTagName('html')[0].offsetWidth
      return colNum > 0 ? colNum : width > 2000 ? 5 : 4
    }
  }
}
</script>
