<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counter.title }}</h3>

    <div>
      <button class="btn" @click="counter.doubleDecrement">--</button>
      <button class="btn" @click="counter.decrement">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increment">+</button>
      <button class="btn" @click="counter.doubleIncrement">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-autofocus v-model="counter.title" />
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus';

/*
  app title
*/

const appTitle = 'My Ok Counter App';

const appTitleRef = ref(null);

onMounted(() => {
  console.log(
    `The app title is ${appTitleRef.value.offsetWidth} px wide!`
  );
});

const counter = useCounterStore();
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
