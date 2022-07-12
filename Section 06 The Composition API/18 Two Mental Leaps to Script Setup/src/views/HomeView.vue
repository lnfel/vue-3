<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
//import { onMounted, ref } from "vue";

// check vite.config.js
// https://vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform
// reactivityTransforms at the time of this writing is an expiremental feature
// that allows omitting .value on a reactive data when accessing the data value
// to use reactivityTransforms use $ref instead of ref, no need to import $ref

let message = $ref("Hello World");

setTimeout(() => {
  //message.value = "I have been changed";
  // no more .value syntax
  message = "I have been changed";
}, 2000);

// sample method using composition api
let doSomething = () => {
  alert("doing it now");
};

/*export default {
  // With Composition API, no need to declare components. Simply import the file.
  components: { TheWelcome },

  // setup() is the old way of using composition api before,
  // now we can just add the attribute setup to our script tag
  setup() {
    onMounted(() => {
      alert("I have been mounted");
    });

    /*let message = ref("Hello World");

    setTimeout(() => {
      message.value = "I have been changed";
    }, 2000);

    // With latest Composition API no need to return anything, just define the data and we're all set
    return {
      message
    };
  },

  // With Composition API no need to return anything, just define the data and we're all set
  data() {
    return {
      message: "Hello World",
    };
  },

  mounted() {
    alert("I have been mounted");
  },
}*/
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message">
    </p>
    <p>
      <button @click="doSomething">Click Me</button>
    </p>
  </main>
</template>
