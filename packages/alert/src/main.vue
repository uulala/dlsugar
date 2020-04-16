<template>
  <transition name="dl-alert-fade">
    <div
      class="dl-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i class="dl-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="dl-alert__content">
        <span class="dl-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="dl-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="dl-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="dl-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'dl-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
  'success': 'dl-icon-success',
  'warning': 'dl-icon-warning',
  'error': 'dl-icon-error'
}
export default {
  name: 'DlAlert',

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  },

  data () {
    return {
      visible: true
    }
  },

  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  },

  computed: {
    typeClass () {
      return `el-alert--${this.type}`
    },

    iconClass () {
      return TYPE_CLASSES_MAP[this.type] || 'dl-icon-info'
    },
    isBigIcon () {
      return this.description || this.$slots.default ? 'is-big' : ''
    },

    isBoldTitle () {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  }
}
</script>
