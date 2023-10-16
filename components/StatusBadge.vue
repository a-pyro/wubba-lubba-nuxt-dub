<script setup lang="ts">
import type { Status } from '~/types'
import { statusColorMap } from '~/utils/maps'

interface Props {
  status: Status
}
const { status } = defineProps<Props>()
</script>

<template>
  <span class="px-4 py-0.5 rounded-md text-green-dark" :class="statusColorMap[status]">
    {{ status }}
  </span>
</template>
