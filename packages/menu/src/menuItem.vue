<template>
  <ul class="dl-sub-menu">
    <li v-for="li in menuItem" :key="li.name">
      <a
        @click="()=>changeActive(li)"
        class="dl-menu-item"
        :class="{'active':li.path === rootMenu.activePath}"
        :style="{paddingLeft:`${li.floor*10 +5}px`}"
      >{{li.name}}</a>
      <div v-show="rootMenu.openMenuKey.indexOf(li.openMenuKey) !== -1">
        <slot name="child" :chidData="li.children" v-if="li.children" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DlMenuItem',
  inject: ['rootMenu'],
  props: {
    menuItem: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    changeActive (item) {
      this.$emit('changeActive', item)
    }
  }
}
</script>
