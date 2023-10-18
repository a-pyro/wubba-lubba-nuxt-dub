<script setup lang="ts">
import type { Character } from '~/types'

interface Props {
  character: Character
}
const { character } = defineProps<Props>()
</script>

<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 transform transition-transform hover:-translate-y-1 p-5">
    <div class="rounded shadow-md hover:shadow-lg">
      <img :src="character.image" alt="Character Image" class="w-full h-80 object-cover rounded-t">
      <div class="p-4">
        <h2 class="text-lg font-bold">
          {{ character.name }}
        </h2>
        <StatusBadge :status="character.status" />
        <!-- You can add more character details here -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos molestiae nesciunt tenetur accusamus debitis repellendus. Temporibus cumque nemo, quaerat in ullam facere adipisci magni repellendus atque aperiam inventore dolorum mollitia. Error accusantium assumenda architecto unde voluptatem rem, sunt magni ab dolorem, nemo hic est dolorum, possimus inventore? Mollitia, modi!</p>
      </div>
    </div>
  </div>
</template>
