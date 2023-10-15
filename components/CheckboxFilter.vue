<script setup lang="ts" generic="T extends string">
// TODO - handle null/undefined and revert fetch results
interface Props {
  options: Option<T>[]
  value?: T
}
const { options, value } = defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:change', value?: T): void
}>()

function handleChange(value: T) {
  emit('update:change', value)
}
</script>

<template>
  <div v-for="option in options" :key="option.value">
    <label>{{ option.label }}</label>
    <input
      type="checkbox"
      :value="option.value"
      :checked="option.value === value"
      @change="() => handleChange(option.value)"
    >
  </div>
</template>
