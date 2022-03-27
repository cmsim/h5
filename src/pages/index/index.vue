<template>
  <view class="flex flex-col">
    <swiper class="swiper h-40" :indicator-dots="true" :autoplay="true" :circular="true" :interval="2000" :duration="500">
      <swiper-item v-for="item in data">
        <view class="swiper-item h-40"><image :src="item.url" class="w-full" /></view>
      </swiper-item>
    </swiper>
    <uni-grid :column="4">
      <uni-grid-item> <Icon type="ChartBar" /> 排行榜 </uni-grid-item>
      <uni-grid-item> <Icon type="Calendar" /> 每日放送 </uni-grid-item>
      <uni-grid-item> <Icon type="Bookmark" /> 目录 </uni-grid-item>
      <uni-grid-item> <Icon type="Tag" /> 标签 </uni-grid-item>
    </uni-grid>
    <uni-grid :column="4">
      <uni-grid-item> <Icon type="ChartBar" /> 排行榜 </uni-grid-item>
      <uni-grid-item> <Icon type="Calendar" /> 每日放送 </uni-grid-item>
      <uni-grid-item> <Icon type="Menu" /> 索引 </uni-grid-item>
      <uni-grid-item> <Icon type="DotsHorizontal" /> 自定义 </uni-grid-item>
    </uni-grid>
    <view class="flex mt-4">
      <view class="flex-grow">online 666</view>
      <view>今日更新 6 部，共 6666 人收看</view>
    </view>
    <view class="flex mt-4 flex-wrap">
      <view class="w-28 ml-2" v-for="item in list" :key="item.id">
        <image class="w-28 h-40" :src="item.pic" />
        <text> {{ item.name }} </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useSubjectStore } from '~/store/subject'
import Icon from '~/components/Icon/index.vue'
const subjectStore = useSubjectStore()
const data = ref([
  { url: 'https://puui.qpic.cn/tv/0/1242149629_1080607/0?max_age=7776000' },
  { url: 'https://puui.qpic.cn/tv/0/1242054649_1080607/0?max_age=7776000' },
  { url: 'https://puui.qpic.cn/tv/0/1242056440_1080607/0?max_age=7776000' }
])
watchEffect(async () => {
  subjectStore.subjectList()
})

const { list } = storeToRefs(subjectStore)
console.log(list, '3322333')

uni.connectSocket({
  url: 'ws://127.0.0.1:7001/socket.io/?EIO=3&transport=websocket', //仅为示例，并非真实接口地址。
  complete: res => {
    console.log(res, 'WebSocketComplete')
  },
  success: res => {
    console.log(res, 'WebSocketSuccess')
  }
})

uni.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！', res)
  let socketMsgQueue = ['a', 'b', 'c']
  for (let i = 0; i < socketMsgQueue.length; i++) {
    uni.sendSocketMessage({
      data: JSON.stringify(['chat', socketMsgQueue[i]]),
      success: res => {
        console.log(res, 'success')
      },
      fail: res => {
        console.log(res, 'fail')
      }
    })
  }
})

uni.onSocketError(function (res) {
  console.log('WebSocket连接打开失败，请检查！', res)
})

uni.onSocketMessage(function (res) {
  console.log('WebSocket收到服务器内容：' + res.data)
})

onMounted(() => {
  console.log('onMounted')
})
</script>

<style>
.swiper {
  width: 100%;
}

.uni-swiper-wrapper {
  width: 100%;
  height: 100%;
}
</style>
