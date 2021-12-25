<template>
  <p class="text-4xl text-cool-gray-400 m-10">SHELTER ZONE - 🚧 邊境檢查</p>

  <Form />
</template>

<script setup>
import Form from "./layouts/Form.vue"
// import Maintenance from "./layouts/Maintenance.vue";
</script>

<style lang="postcss">
body{
  @apply bg-cool-gray-800;
}

#app{
  @apply flex flex-col justify-center items-center mb-20;
}

.gate-row{
  @apply flex flex-col w-3/4 sm:flex-row sm:w-2/4;
}

.gate-column{
  @apply flex flex-col items-center justify-center w-3/4 sm:w-2/4;
}

.form-input{
  @apply text-teal-400 bg-cool-gray-700 focus:border-b-1  focus:border-cool-gray-400 focus:text-gray-100 outline-none  px-2 m-2;
}

.error-input{
  @apply border-b-1 border-rose-500 text-rose-500;
}

.right-input{
  @apply border-b-1 border-teal-400;
}

.input-container{
  @apply flex flex-wrap justify-around sm:block mb-5;
}

.other-notice{
  @apply text-gray-400;
}

.btn{
  @apply text-gray-400 border-gray-400 border-1 px-4 w-1/2 cursor-pointer text-center select-none;
}

.btn-container{
  @apply flex flex-wrap w-3/4 w-full;
}

.checkbox-container{
  @apply border-gray-400 border-1 text-center mt-5 rounded-sm p-1;
}

.selected{
  @apply bg-teal-400 border-teal-400 text-cool-gray-700;
}

.description{
  @apply text-gray-500 mb-5;
}
</style>