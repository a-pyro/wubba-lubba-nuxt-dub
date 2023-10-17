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

const currentPage = computed(() => {
  const page = url.value.split('?page=')[1]
  // this canbe 7&species=human so we need to extract the number

  return page
})
</script>

<template>
  <div
    class="container mx-auto p-5"
  >
    <img
      src="~assets/icons/arrow.svg" class="
    w-2 bg-red-600
    "
    >
    <button

      @click="() => setUrl('prev')"
    >
      Prev
    </button>
    <div>
      {{ currentPage }}
    </div>
    <div>
      {{ data?.info.pages }}
    </div>
    <button @click="() => setUrl('next')">
      Next
    </button>
    <RickFilters v-model:name="query.name" v-model:species="query.species" />
    <RickList :characters="data?.results ?? []" />
  </div>
</template>
