<script setup lang="ts">

type Props = {
  code: string
  errors: Record<string, unknown>[]
}

type Emits = {
  (e: 'update:code', value: string): void
  (e: 'update:errors', errors: Record<string, unknown>[]): void
}

defineProps<Props>()
const emits = defineEmits<Emits>()

import CodeEditor from '@/components/CodeEditor.vue'

</script>

<template>
<div class="page">
  <header>
    <h4>
      В этом задании вам нужно написать сортировку массива чисел.
      Вам нужно создать функцию, которая принимает массив чисел и возвращает новый массив,
      в котором числа отсортированы по возрастанию. Код должен быть написан на JavaScript.
    </h4>

    <code-editor
      :model-value="code"
      language="javascript"
      :errors="errors"
      @update:model-value="emits('update:code', $event)"
      @update:errors="emits('update:errors', $event)"
    />

  </header>
</div>
</template>

<style lang="scss">

</style>