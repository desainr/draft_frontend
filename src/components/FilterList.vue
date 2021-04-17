<template>
  <div>
    <v-banner>
      <div class="text-h5">
        Active Filters
      </div>
      <div class="text-caption">
        Click to remove
      </div>
    </v-banner>
    <v-list>
      <v-list-item class="mt-1" v-for="filter of filters" v-bind:key="filter.fieldName">
        <v-card hover rounded color="grey lighten-2" @click="removeFilter(filter)">
          <v-card-text>
            {{filter.toDisplayString()}}
          </v-card-text>
        </v-card>
      </v-list-item>
    </v-list>

    <v-btn width="100%" color="primary" @click="querySubmitted">
      Execute Query
    </v-btn>
    <v-card>
    </v-card>
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
    },
    querySubmitted() {
      this.$emit(EVENT_NAMES.QUERY_SUBMITTED, true);
    }
  }
}
</script>

<style scoped>
</style>
