<script setup lang="ts">
import type { CharacterListResponse } from '~/types'

const { public: { apiBase } } = useRuntimeConfig()

const url = ref<string>(`${apiBase}/character`)

const { data } = useFetch<CharacterListResponse>(
  () => url.value,
  {
    transform: (resp) => {
      console.log('🚀 ~ resp:', resp)
      return resp
    },
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
    <RickFilters />
    <RickList :characters="data?.results ?? []" />
  </div>
</template>
