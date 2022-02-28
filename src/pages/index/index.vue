<template>
  <view class="flex flex-col justify-center items-center">
    <image class="w-40 h-40 mt-20 mx-auto mb-10" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-xl text-gray-500"> {{ title }} </text>
      <text v-for="item in list" :key="item.id">{{ item.id }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { subject } from '@/utils/api'
import { useSubjectStore } from '@/store/subject'
import { storeToRefs } from 'pinia'
const title = ref('Hello')
watchEffect(async () => {
  const response = await subject()
  console.log('xxxx', response)
})
const subjectStore = useSubjectStore()

const { list } = storeToRefs(subjectStore)

console.log(list, '3322333')
</script>

<style></style>
