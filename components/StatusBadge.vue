<script setup lang="ts">
import type { Status } from '~/types'

interface Props {
  status: Status
}
const { status } = defineProps<Props>()
</script>

<template>
  <span class="px-4 py-0.5 rounded-md text-green-dark text-sm font-semibold bg-green-light">
    {{ status }}
  </span>
</template>
