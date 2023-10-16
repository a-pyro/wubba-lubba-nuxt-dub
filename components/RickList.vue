<script setup lang="ts">
import type { Character } from '~/types'

interface Props {
  characters: Character[]
}

const { characters } = defineProps<Props>()
</script>

<template>
  <main class="flex flex-wrap -m-1">
    <RickCard v-for="character in characters" :key="character.id" :character="character" />
  </main>
</template>
