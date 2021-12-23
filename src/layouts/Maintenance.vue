<template>
  <div class="wrapper">
    <div class="container">
      <p>
        目前驗證伺服器維修中, 故此暫無法提供驗證服務.
        <br>
        請擇日再試或向管理員查詢.
        <br><br>
        不便之處, 敬請原諒! QAQ
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="postcss">
.wrapper{
    @apply grid place-items-center;
    @apply fixed top-0 bottom-0 left-0 right-0 p-5;
    @apply bg-gray-900 bg-opacity-80;
    @apply select-none;
}

.container{
    @apply border p-5;
    @apply bg-gray-800 border-gray-500 rounded-sm text-center;
}

p {
  @apply text-cyan-400 text-xl;
}
</style>