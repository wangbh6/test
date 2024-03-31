<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const input = ref('')
const password = ref('')

const onSubmit = (values: {input: string; password: number }) => {
  const token = values.input + values.password
  localStorage.setItem('token', token)
  const path = decodeURIComponent((route.query.redirect as string) || '/')
  router.push(path)
}
</script>

<template>
    <div class="app">
        <div class="box">
            <el-input class="inp1" v-model="input" style="width: 240px" placeholder="账户名" />
            <el-input class="inp2" v-model="password" style="width: 240px" type="password" placeholder="密码" />
            <br/>
            <el-button type="primary"style="width: 240px" @click="onSubmit">登录</el-button>
        </div>
    </div>
    
</template>

<style lang='scss' scoped>
.box{
    width: 400px;
    height: 400px;
    background:#FFFFFF;
    position: absolute;
    right: 200px;
    bottom:100px;
    border-radius: 8px;
    text-align: center;
    .inp1{
        margin-top: 150px;
    }
    .inp2{
        margin:30px  0;
    }
}
</style>
