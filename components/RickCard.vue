<script setup lang="ts">
import type { Character } from '~/types'

interface Props {
  character: Character
}
const { character } = defineProps<Props>()
</script>

<template>
  <div>
    {{
      character.name
    }}
  </div>
</template>
