<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import CodeEditor from '@/components/CodeEditor.vue'

const code = ref<string>('')
let time = ref(600);

const timer = computed<string>(() => {
  const minutes = Math.floor(time.value / 60).toString().padStart(2, '0');
  const seconds = (time.value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
});

onMounted(() => {
  const interval = setInterval(() => {
    time.value--
    if (time.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
})

function onSubmit() {
  console.log(code.value)
}
</script>

<template>
  <div class="page">
    <p class="home-page__timer">
      {{ timer }}
    </p>

    <code-editor
      v-model="code"
      :language="'javascript'"
      class="home-page__code-editor"
    />

    <button @click="onSubmit">Отправить решение</button>
  </div>
</template>

<style lang="scss">
.home-page__code-editor {
  height: 350px;
}
</style>