<script setup lang="ts">
import type { FilterQuery } from '~/types'
import { speciesOptions } from '~/utils/options'

// TODO - Handle reset pagination when emitting other filters

const { name, species } = defineProps<FilterQuery>()

const emit = defineEmits<{
  (event: 'update:name', value?: string): void
  (event: 'update:species', value?: string): void

}>()

function handleNameChange(event: Event) {
  const { value } = event.target as HTMLInputElement
  const emitValue = value === '' ? undefined : value
  emit(`update:name`, emitValue)
}

function handleSpeciesChange(specie?: string) {
  emit('update:species', specie)
}
</script>

<template>
  <div>
    <input
      :value="name"
      type="text" name="name"
      @input="handleNameChange"
    >
    <CheckboxFilter
      :value="species"
      :options="speciesOptions"
      @update:change="handleSpeciesChange"
    />
  </div>
</template>
