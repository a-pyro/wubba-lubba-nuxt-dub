<script setup lang="ts">
import type { CharacterListResponse, FilterQuery } from '~/types'

const { public: { apiBase } } = useRuntimeConfig()

const url = ref<string>(`${apiBase}/character`)

const query = reactive<FilterQuery>({
  name: undefined,
  gender: undefined,
  species: undefined,
  status: undefined,
})

const { data } = useFetch<CharacterListResponse>(
  // TODO - handle null/undefined and revert fetch results
  // handle 404 and empty results
  () => url.value,
  {
    transform: (resp) => {
      return resp
    },
    query,
  },
)

function setUrl(time: 'prev' | 'next') {
  url.value = data.value?.info[time] ?? url.value
}
</script>

<template>
  <div>
    <h1>RickStar</h1>
    <button
      @click="() => setUrl('prev')"
    >
      Prev
    </button>
    <button @click="() => setUrl('next')">
      Next
    </button>
    <RickFilters v-model:name="query.name" v-model:species="query.species" />
    <RickList :characters="data?.results ?? []" />
  </div>
</template>
