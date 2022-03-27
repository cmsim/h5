import { subject } from '~/utils/api'
import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useSubjectStore = defineStore('subject', {
  // a function that returns a fresh state
  state: (): { list: { name: string; id: number; pic: string }[] } => ({
    list: []
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    async subjectList() {
      const res = await subject()
      console.log(res, 'store')
      this.list = res.data.list
    }
  }
})
