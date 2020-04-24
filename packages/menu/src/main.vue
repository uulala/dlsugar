<template>
  <ul class="dl-menu">
    <DlMenuItem :menuItem="menuOption" @changeActive="changeActive">
      <template slot="child" slot-scope="scope">
        <DlMenuItem :menuItem="scope.chidData" @changeActive="changeActive">
          <template slot="child" slot-scope="scope">
            <DlMenuItem :menuItem="scope.chidData" @changeActive="changeActive">
              <template slot="child" slot-scope="scope">
                <DlMenuItem :menuItem="scope.chidData" @changeActive="changeActive">
                  <template slot="child" slot-scope="scope">
                    <DlMenuItem :menuItem="scope.chidData" @changeActive="changeActive">
                      <template slot="child" slot-scope="scope">
                        <DlMenuItem :menuItem="scope.chidData" @changeActive="changeActive">
                          <template slot="child" slot-scope="scope">
                            <DlMenuItem :menuItem="scope.chidData" @changeActive="changeActive">
                              <template slot="child" slot-scope="scope">
                                <DlMenuItem :menuItem="scope.chidData" @changeActive="changeActive">
                                  <template slot="child" slot-scope="scope">
                                    <DlMenuItem
                                      :menuItem="scope.chidData"
                                      @changeActive="changeActive"
                                    ></DlMenuItem>
                                  </template>
                                </DlMenuItem>
                              </template>
                            </DlMenuItem>
                          </template>
                        </DlMenuItem>
                      </template>
                    </DlMenuItem>
                  </template>
                </DlMenuItem>
              </template>
            </DlMenuItem>
          </template>
        </DlMenuItem>
      </template>
    </DlMenuItem>
  </ul>
</template>

<script>
import DlMenuItem from './menuItem'
export default {
  name: 'DlMenu',
  components: { DlMenuItem },
  provide () {
    return {
      rootMenu: this
    }
  },
  props: {
    menuData: {
      type: Array,
      default () {
        return []
      }
    },
    basicPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    menuOption: function () {
      return this.mapMenu(this.menuData, 1, this.basicPath, 'menu')
    }
  },
  data () {
    return {
      activePath: '',
      openMenuKey: ''
    }
  },
  mounted () {
    const { hash, pathname } = window.location
    const nowPath = hash ? hash.split('#')[1] : pathname
    this.mapForOpenKey(this.menuOption, nowPath)
  },
  methods: {
    mapForOpenKey (arr, nowPath) {
      arr.map(item => {
        const { path, children, openMenuKey } = item
        if (path === nowPath) {
          this.activePath = path
          this.openMenuKey = openMenuKey
        }
        if (children) {
          this.mapForOpenKey(children, nowPath)
        }
      })
    },
    mapMenu (menu, floor, prePath, preKey) {
      return menu.map((item, index) => {
        const { path, children } = item
        const obj = { ...item }
        obj.floor = floor
        const nowKey = `${preKey}-${index}`
        const nowPath = `${prePath}${path || ''}`
        obj.openMenuKey = nowKey
        if (path) {
          obj.path = nowPath
        }
        if (children) {
          obj.children = this.mapMenu(children, floor + 1, nowPath, nowKey)
        }
        return obj
      })
    },
    changeActive ({ path, openMenuKey }) {
      this.openMenuKey = openMenuKey
      if (path && this.activePath !== path) {
        this.activePath = path
        this.$emit('menuChange', path)
      }
    }
  }
}
</script>
