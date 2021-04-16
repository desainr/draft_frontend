<template>
  <div>
    <v-banner>
      Active Filters
    </v-banner>
    <v-list>
      <v-list-item v-for="filter of filters" v-bind:key="filter.fieldName">
        <v-chip close @click:close="removeFilter(filter)">{{filter.toDisplayString()}}</v-chip>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import {EVENT_NAMES} from "@/lib/constants/constants";

export default {
  name: "FilterList",
  props: ['filters'],
  methods: {
    removeFilter(filter) {
      this.$emit(EVENT_NAMES.FILTER_REMOVED, filter);
    }
  }
}
</script>

<style scoped>

</style>
