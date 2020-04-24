<style lang="scss">
.page-component {
  box-sizing: border-box;
  height: 100%;
  display: flex;

  &.page-container {
    padding: 0;
  }

  .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top 0.3s;
    padding-left: 50px;
  }

  .page-component__content {
    width: 100%;
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }

  .content {
    padding: 50px 0;

    > {
      h3 {
        margin: 55px 0 20px;
      }
      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;
        strong {
          font-weight: normal;
        }
        td,
        th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }
        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }
        td {
          color: #606266;
        }
        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }
      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }
  a {
    &.default {
      color: #333;
    }
    &.active {
      color: #409eff;
    }
  }
}

@media (max-width: 768px) {
  .page-component {
    .page-component__nav {
      width: 100%;
      position: static;
      margin-top: 0;
    }
    .side-nav {
      padding-top: 0;
      padding-left: 50px;
    }
    .page-component__content {
      padding-left: 10px;
      padding-right: 10px;
    }
    .content {
      padding-top: 0;
    }
    .content > table {
      overflow: auto;
      display: block;
    }
  }
}
</style>
<template>
  <div class="page-container page-component">
    <div class="page-component__nav">
      <dl-menu
        :menuData="navsData[lang]"
        :basicPath="`/${lang}/component`"
        @menuChange="menuChange"
      ></dl-menu>
    </div>
    <div class="page-component__content">
      <router-view class="content"></router-view>
    </div>
    <button
      v-if="showBackToTop"
      target=".page-component__scroll .el-scrollbar__wrap"
      :right="100"
      :bottom="150"
    ></button>
  </div>
</template>
<script>
// import bus from '../../bus'
import navsData from '../../nav.config.json'
// import throttle from 'throttle-debounce/throttle'

export default {
  data () {
    return {
      lang: this.$route.meta.lang,
      navsData,
      scrollTop: 0,
      showHeader: true,
      componentScrollBar: null,
      componentScrollBoxDlsugar: null,
      showBackToTop: false,
      active: ''
    }
  },
  watch: {
    '$route.path' () {
      // 触发伪滚动条更新
      this.$nextTick(() => {})
    }
  },
  mounted () {
    document.body.classList.add('is-component')
  },
  destroyed () {
    document.body.classList.remove('is-component')
  },
  methods: {
    menuChange (path) {
      this.$router.push({ path })
    }
  }
}
</script>
