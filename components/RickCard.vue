<script setup lang="ts">
import type { Character } from '~/types'

interface Props {
  character: Character
}
const { character } = defineProps<Props>()
</script>

<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 transform transition-transform hover:-translate-y-1 p-1">
    <div class="border rounded shadow-sm hover:shadow-md">
      <img :src="character.image" alt="Character Image" class="w-full h-80 object-cover rounded-t">
      <div class="p-4">
        <h2 class="text-lg font-bold">
          {{ character.name }}
        </h2>
        <p class="text-sm text-gray-600">
          {{ character.status }}
        </p>
        <!-- You can add more character details here -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos molestiae nesciunt tenetur accusamus debitis repellendus. Temporibus cumque nemo, quaerat in ullam facere adipisci magni repellendus atque aperiam inventore dolorum mollitia. Error accusantium assumenda architecto unde voluptatem rem, sunt magni ab dolorem, nemo hic est dolorum, possimus inventore? Mollitia, modi!</p>
      </div>
    </div>
  </div>
</template>
