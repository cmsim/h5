import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useSubjectStore = defineStore('subject', {
  // a function that returns a fresh state
  state: () => ({
    list: [{ id: 1 }]
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    reset() {
      this.list = [{ id: 1 }]
    }
  }
})
