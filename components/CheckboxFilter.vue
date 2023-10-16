<script setup lang="ts" generic="T extends string">
interface Props {
  options: Option<T>[]
  value?: T
}
const { options, value } = defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:change', value?: T): void
}>()

function handleChange(e: Event, value?: T) {
  const isChecked = (e.target as HTMLInputElement).checked
  const emitValue = isChecked ? value : undefined
  emit('update:change', emitValue)
}
</script>

<template>
  <div v-for="option in options" :key="option.value">
    <label :for="option.value">{{ option.label }}</label>
    <input
      :id="option.value"
      type="checkbox"
      name="checkbox"
      :value="option.value"
      :checked="value === option.value"
      @change="(e) => handleChange(e, option.value)"
    >
  </div>
</template>
