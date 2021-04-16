<template>
  <div>
    <v-data-table
        dense
        multi-sort
        loading-text="loading..."
        :loading="loading"
        :items="draftData"
        :headers="headers"
    >
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'result-table',
  props: {
    draftData: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: true,
    }
  },
  data: () => ({
    headers: [
      {text: 'Year', align: 'start', value: 'year'},
      {text: 'Round', value: 'round'},
      {text: 'Pick', value: 'pick'},
      {text: 'Player', value: 'player'},
      {text: 'Position', value: 'position'},
      {text: 'College', value: 'college'},
    ]
  })
}

</script>
