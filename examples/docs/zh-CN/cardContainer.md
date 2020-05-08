## CardContainer 卡片包裹器

用于多张卡片自左到右均匀展示。

### 基本用法


:::demo CardContainer 组件

``` html
<template>
    <dl-card-container :list="list" :colNum="6">
        <template slot="card" slot-scope="scope">
          <div v-for="item in scope.cardData">{{item}}</div>
        </template>
    </dl-card-container>
</template>
<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        mounted() {
            const list = []
            for (var i = 0; i < 12; i++ ) {
                list.push({
                    id: `id${i}`,
                    name: `name-${i}`
                })
            }
            this.list = list
        }
    }
</script>
```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| list     |     数据源       | Array | - | [] |
| keyName     |     数组中的 key 名       | String | - | 'id' |
| colNum | 列数量 | Number | - | 默认为 4 ，html 宽度大于 2000px 则默认为 5 |
