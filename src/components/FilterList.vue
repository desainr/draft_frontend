<template>
  <div>
    <v-banner>
      <div class="text-h6">
        Active Filters
      </div>
      <div class="text-caption">
        Click to remove
      </div>
    </v-banner>
    <v-list>
      <v-list-item class="mt-1" v-for="filter of filters" v-bind:key="filter.fieldName">
        <v-card hover outlined rounded color="grey darken-3" style="border-color: orange !important" @click="removeFilter(filter)">
          <v-card-text>
            {{filter.toDisplayString()}}
          </v-card-text>
        </v-card>
      </v-list-item>
    </v-list>

    <v-alert type="warning" v-if="showWarning" outlined>
      You must have at least one filter.
    </v-alert>
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
  props: ['filters', 'showWarning'],
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
