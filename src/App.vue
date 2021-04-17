<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <filter-list :filters="query.filters" @filterRemoved="removeFilter" @querySubmitted="submitQuery"></filter-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-icon @click="drawer = !drawer">mdi-filter-menu</v-icon>
      <v-toolbar-title style="margin-left: 10px">DraftQL</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <query-form @filterAdded="addFilter"></query-form>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <result-table :draft-data="draftData" :loading="loading"></result-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import {executeQuery} from '@/lib/services'
import ResultTable from "@/components/ResultTable";
import QueryForm from "@/components/FormGroups";
import Query from "@/lib/classes/query.model";
import FilterList from "@/components/FilterList";

export default {
  components: {FilterList, QueryForm, ResultTable},
  data: () => ({
    drawer: null,
    draftData: [],
    loading: true,
    query: new Query(),
  }),
  created: async function () {
    this.draftData = await executeQuery(this.query);
    this.loading = false;
  },
  methods: {
    addFilter: function (filter) {
      this.query.addFilter(filter);
    },
    submitQuery: async function () {
      this.loading = true;
      this.draftData = await executeQuery(this.query);
      this.loading = false;
    },
    removeFilter: function (filter) {
      this.query.removeFilter(filter);
    }
  },
}

</script>
