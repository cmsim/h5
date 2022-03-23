<template>
  <view class="flex flex-col justify-center items-center">
    <swiper
      class="swiper h-40"
      @change="change"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item>
        <view class="swiper-item bg-red-600 h-40">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item bg-green-600 h-40">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item bg-blue-600 h-40">C</view>
      </swiper-item>
    </swiper>
    <image class="w-40 h-40 mt-20 mx-auto mb-10" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-xl text-gray-500">
        {{ title }}
      </text>
      <text v-for="item in list" :key="item.id">
        {{ item.id }}
      </text>
    </view>
    <uni-calendar ref="calendar" :insert="false" />
    <button @click="open">打开日历</button>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { subject } from '@/utils/api'
import { useSubjectStore } from '@/store/subject'
const title = ref('Hello')
const calendar = ref<{ open: () => void }>()
const duration = ref(500)
const interval = ref(2000)
const autoplay = ref(false)
const indicatorDots = ref(false)
watchEffect(async () => {
  const response = await subject()
  console.log('xxxx', response)
})
const subjectStore = useSubjectStore()

const { list } = storeToRefs(subjectStore)
console.log(list, '3322333')

const open = () => {
  calendar.value!.open?.()
}

const change = (e: any) => {
  console.log(e, 'swiper')
}

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
