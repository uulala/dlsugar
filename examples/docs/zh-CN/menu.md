## Menu 菜单

用于页面中展示重要的提示信息。

### 基本用法

:::demo

``` html
<template>
    <dl-menu :menuData="menuData" @menuChange="menuChange"></dl-menu>
</template>
<script>
    export default {
        data() {
            return {
                menuData: [{
                        "name": "主页",
                        "path": "/index"
                    },
                    {
                        "name": "组件",
                        "children": [{
                                "name": "Notice",
                                "children": [{
                                        "path": "/zh-CN/component/alert",
                                        "name": "Alert 警告"
                                    },
                                    {
                                        "path": "/zh-CN/component/echarts",
                                        "name": "Echarts 图表"
                                    },
                                    {
                                        "name": "233",
                                        "children": [{
                                                "path": "/zh-CN/component/alert",
                                                "name": "Alert 警告"
                                            },
                                            {
                                                "path": "/zh-CN/component/echarts",
                                                "name": "Echarts 图表"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Navigation",
                                "children": [{
                                    "path": "/zh-CN/component/menu",
                                    "name": "Menu 菜单"
                                }]
                            }
                        ]

                    }

                ]

            }

        },
        methods: {
            menuChange(path) {
                console.log('change path:', path)
            }
        }
    }
</script>
```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| menuData     | 路由配置           | Object | — | — |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| menuChange | 路径变更时触发的事件 | path |
