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
  () => url.value,
  {
    transform: (resp) => {
      return resp
    },
    query,
  },
)

function fetchPrevious() {
  url.value = data.value?.info.prev ?? apiBase
}

function fetchNext() {
  url.value = data.value?.info.next ?? url.value
}
</script>

<template>
  <div>
    <h1>RickStar</h1>
    <button
      @click="fetchPrevious"
    >
      Prev
    </button>
    <button @click="fetchNext">
      Next
    </button>
    <RickFilters v-model="query.name" />
    <RickList :characters="data?.results ?? []" />
  </div>
</template>
