<script setup lang="ts">
defineProps<{
  onNext: () => void
  onPrev: () => void
  currentPage: number
  totalPages: number
}>()
</script>

<template>
  <button
    @click="onPrev"
  >
    Prev
  </button>
  <div>
    {{ currentPage }}
  </div>
  <div>
    {{ totalPages }}
  </div>
  <button @click="onNext">
    Next
  </button>
</template>
