<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label : '资金管理',
    children: [
      {
        label: '资金组成',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
      {
        label: '资金流向',
      },
      {
        label: '资金来源',
      },
    ],
  },
  {
    label: '系统管理',
    children: [
      {
        label: '用户管理',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
    ],
  },
]
const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<template>
 <el-tree
    style="max-width: 600px"
    :data="data"
    :props="defaultProps"
    accordion
    @node-click="handleNodeClick"
  /> 
    <!-- <RouterView /> -->
</template>

<style lang='scss' scoped>

</style>
