<script setup lang="ts">
import type { Character } from '~/types'

interface Props {
  characters: Character[]
}

const { characters } = defineProps<Props>()
</script>

<template>
  <div>
    <div v-for="character in characters" :key="character.id">
      <RickCard :character="character" />
    </div>
  </div>
</template>
