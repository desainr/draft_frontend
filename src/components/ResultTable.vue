<template>
  <div>
    <v-sheet>
      <v-container>
        <v-row>
          <v-col sm="6"></v-col>
          <v-col sm="3">
            <v-switch v-model="showStats" label="Show Player Stats"></v-switch>
          </v-col>
          <v-col sm="3">
            <v-switch v-model="showCombine" label="Show Combine Results"></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-data-table
        dense
        multi-sort
        loading-text="loading..."
        :disable-pagination="draftData.length < 100"
        :loading="loading"
        :items-per-page="32"
        :footer-props="{'items-per-page-options': [10, 32, 100, -1]}"
        :items="draftData"
        :headers="currentHeaders"
    >
    </v-data-table>
  </div>
</template>

<script>

import {TABLE_HEADERS} from "@/lib/config/tableConfig";

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
    },
  },
  data: function() {
    return {
      showStats: false,
      showCombine: false,
      defaultHeaders:  TABLE_HEADERS.default,
      statsHeaders: TABLE_HEADERS.stats,
      combineHeaders: TABLE_HEADERS.combine,
    }
  },
  computed: {
    currentHeaders: function() {
      let currentHeaders = this.defaultHeaders;

      if (this.showStats) {
        currentHeaders = [...currentHeaders, ...this.statsHeaders];
      }

      if (this.showCombine) {
        currentHeaders = [...currentHeaders, ...this.combineHeaders];
      }

      return currentHeaders;
    }
  }
}

</script>
