<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value?: string): void
}>()

function handleInput(event: Event) {
  const { value } = event.target as HTMLInputElement
  // emit undefined if value is empty in order to pass undefined query param
  const emitValue = value === '' ? undefined : value
  emit('update:modelValue', emitValue)
}
</script>

<template>
  <div>
    <input
      :value="modelValue"
      type="text" name="searchBar"
      @input="handleInput"
    >
  </div>
</template>
