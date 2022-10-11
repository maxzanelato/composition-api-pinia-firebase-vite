import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My counter title',
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    doubleIncrement() {
      this.count += 2;
    },
    doubleDecrement() {
      this.count -= 2;
    },
  },
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? 'Even' : 'Odd';
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useCounterStore, import.meta.hot)
  );
}
