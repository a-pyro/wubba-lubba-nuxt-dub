<script setup lang="ts">
defineProps<{
  onNext: () => void
  onPrev: () => void
  currentPage: number
  totalPages: number
}>()
</script>

<template>
  <header class="flex w-full justify-center items-center gap-1 h-10v bg-white">
    <button
      @click="onPrev"
    >
      Prev
    </button>
    <div>
      Page {{ currentPage }}
    </div>
    <div>
      of {{ totalPages }}
    </div>
    <button @click="onNext">
      Next
    </button>
  </header>
</template>
