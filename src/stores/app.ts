import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    version: "0.1.0",
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
