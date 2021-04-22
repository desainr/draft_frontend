<template>
  <div>
    <v-sheet>
      <v-container>
        <v-row>
          <v-col sm="2">
            <v-btn
                class="mt-4"
                @click="copyQueryLink"
                outlined
                style="border-color: orange"
            >
              Copy Link to Results
            </v-btn>
          </v-col>
          <v-col sm="4"></v-col>
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
        :items="activeData ? activeData : draftData"
        :headers="currentHeaders"
        @update:sort-by="updateSortBy"
    >
    </v-data-table>
  </div>
</template>

<script>

import {COMBINE_VALUES, TABLE_HEADERS} from "@/lib/config/tableConfig";
import {EVENT_NAMES} from "@/lib/constants/constants";

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
  data: function () {
    return {
      showStats: false,
      showCombine: false,
      defaultHeaders: TABLE_HEADERS.default,
      statsHeaders: TABLE_HEADERS.stats,
      combineHeaders: TABLE_HEADERS.combine,
      combineSortBy: [],
      activeData: null,
      inactiveData: [],
    }
  },
  computed: {
    currentHeaders: function () {
      let currentHeaders = this.defaultHeaders;

      if (this.showStats) {
        currentHeaders = [...currentHeaders, ...this.statsHeaders];
      }

      if (this.showCombine) {
        currentHeaders = [...currentHeaders, ...this.combineHeaders];
      }

      return currentHeaders;
    }
  },
  methods: {
    copyQueryLink: function() {
      this.$emit(EVENT_NAMES.COPY_LINK_CLICKED, true);
    },
    updateSortBy(sortFields) {
      // This long and confusing function dynamically removes null data when sorting by a combine field.
      // we are removing a field
      if (this.combineSortBy.length > sortFields.length) {
        const removedField = this.combineSortBy.filter(s => !sortFields.includes(s))[0];

        // is it a combine field being removed?
        if (COMBINE_VALUES.includes(removedField)) {

          // remove removedField from the current combine sorters
          this.combineSortBy = [...this.combineSortBy.filter(s => s !== removedField)];

          // find the data that needs to be made active
          // this is all the currently inactive rows that don't have values for the removed field
          // but does have values for the other combine sorters
          const dataToBeActive = [...this.inactiveData.filter(d => (!d[removedField]) && this.combineSortBy.every(s => d[s] || d[s] === 0))];

          // new inactive data = all the values still left after removing the data that needs to be made active
          const newInactiveData = this.inactiveData.filter(d => !dataToBeActive.includes(d));

          // no inactive data means we're no longer sorting by any combine fields, so restore all data
          if (newInactiveData.length === 0) {
            this.activeData = [...this.draftData];
            this.inactiveData = newInactiveData;
          } else {
            // otherwise, add the active data, update with the new inactive data
            this.activeData = [...this.activeData, ...dataToBeActive];
            this.inactiveData = newInactiveData;
          }
        }
      } else {

        // get newly added combine field
        const newCombineFields = sortFields.filter(s => !this.combineSortBy.includes(s) && COMBINE_VALUES.includes(s));

        // if newCombineFields is empty, the new field is a non-combine field, so just ignore all of this
        if (newCombineFields.length === 1) {
          const newField = newCombineFields[0];

          // add new field to the list of combine sorters
          this.combineSortBy = [...this.combineSortBy, newField];

          const initialActiveData = this.activeData ? [...this.activeData] : [...this.draftData];
          const newInactiveData = [...this.inactiveData];
          const newActiveData = [];

          // add rows where field is not null to active data (to be used in table)
          // add rows where field is null to inactive data (to not be used in table)
          initialActiveData.forEach(d => {
            if (d[newField] || d[newField] === 0) {
              newActiveData.push(d);
            } else {
              newInactiveData.push(d);
            }
          })

          this.activeData = newActiveData;
          this.inactiveData = newInactiveData;
        }
      }
    },
  }
}

</script>

<style>
.green-text {
  color: lightgreen !important;
}

.orange-text {
  color: #FFB74D !important;
}

.blue-text {
  color: #2196f3 !important;
}
</style>
