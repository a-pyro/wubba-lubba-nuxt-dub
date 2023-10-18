<script setup lang="ts">
import type { CharacterListResponse, FilterQuery } from '~/types'
import { PAGE_REGEX } from '~/utils/const'

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
  const match = url.value.match(PAGE_REGEX)
  const page = match ? +match[1] : 1
  return page
})

watch(query, () => {
  url.value = `${apiBase}/character`
})
</script>

<template>
  <div class="container mx-auto p-5">
    <PageNagivator
      :current-page="currentPage"
      :total-pages="data?.info.pages ?? 1"
      :on-next="() => setUrl('next')"
      :on-prev="() => setUrl('prev')"
    />
    <RickFilters v-model:name="query.name" v-model:species="query.species" />
    <RickList :characters="data?.results ?? []" />
  </div>
</template>
