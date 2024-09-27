<script setup lang="ts">
import { shallowRef } from 'vue';


type Props = {
  modelValue: string;
  language?: string;
  errors?: Record<string, unknown>[];
};
type Emits = {
  (e: 'update:model-value', value: string): void;
  (e: 'update:errors', errors: Record<string, unknown>[]): void;
};

defineProps<Props>();
const emits = defineEmits<Emits>();

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  wrappingStrategy: 'advanced',
  wordWrap: 'on',
  wordBreak: 'keepAll',
  tabSize: 2,
  minimap: { enabled: false },
  scrollbar: {
    vertical: 'hidden',
    horizontal: 'hidden',
    handleMouseWheel: true,
  },
  fixedOverflowWidgets: true,
};

const editorRef = shallowRef();
const handleMount = (editor: HTMLElement) => (editorRef.value = editor);

function formatCode(): void {
  editorRef.value?.getAction('editor.action.formatDocument').run();
}

function onValidate(markers: Record<string, unknown>[]): void {
  emits('update:errors', markers);
}
</script>

<template>
  <div class="code-editor" @keydown.enter="formatCode">
    <vue-monaco-editor
      class="code-editor__editor"
      :value="modelValue"
      :theme="'vs-dark'"
      :language="language"
      :options="MONACO_EDITOR_OPTIONS"
      @mount="handleMount"
      @change="emits('update:model-value', $event)"
      @validate="onValidate"
    />
  </div>
</template>

<style lang="scss">
.code-editor {
  height: 100%;

  .decorationsOverviewRuler {
    display: none !important;
  }
}
</style>
