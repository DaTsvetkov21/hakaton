<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Task1 from '@/components/Task-1.vue'
import { TaskProgress } from '@/enums/TaskProgress'
import { task1Tests, test1Data } from '@/tasks/1/task1'

let time = ref(600);
const code = ref<string>('')
const errors = ref<Record<string, unknown>[]>([])

type TaskMap = {
  [key: number]: {
    status: TaskProgress
    test: (code: string, data: number[]) => boolean
  }
}

let currentTask = 1

const timer = computed<string>(() => {
  const minutes = Math.floor(time.value / 60).toString().padStart(2, '0');
  const seconds = (time.value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
});

const tasksProgress = ref<TaskMap>({
  1: {
    status: TaskProgress.IN_PROGRESS,
    test: (code: string, data: number[]) => task1Tests(code, data)
  }
})

onMounted(() => {
  const interval = setInterval(() => {
    time.value--
    if (time.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
})

function onSubmit() {
  if (validateResult()) {
    tasksProgress.value[currentTask].status = TaskProgress.COMPLETE
  } else {
    console.log('error')
  }
}

function validateResult(): boolean {
  let valid = false
  test1Data.forEach((data) => {
    valid = tasksProgress.value[currentTask].test(code.value, data)
  })
  return valid
}
</script>

<template>
  <div class="page">
    <p>
      {{ timer }}
    </p>

    {{tasksProgress}}

    <task1
      v-model:code="code"
      v-model:errors="errors"
    />

    <button
      :disabled="!code || !!errors.length"
      class="tasks-page__submit-button"
      @click="onSubmit"
    >
      Отправить решение
    </button>
  </div>
</template>

<style lang="scss">
.tasks-page__submit-button {
  margin-top: 20px;
  align-self: flex-end;

}
</style>