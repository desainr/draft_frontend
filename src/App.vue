<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <filter-list
          :filters="query.filters"
          :showWarning="showWarning"
          @filterRemoved="removeFilter"
          @querySubmitted="submitQuery"
      >
      </filter-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        prominent
        shrink-on-scroll
        :src="backgroundImagePath"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-icon @click="drawer = !drawer">mdi-filter-menu</v-icon>
      <v-toolbar-title class="ml-4">
        <span class="text-h2 title">Draft&#8226;QL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="() => this.showInformation = !showInformation"
      >
        <v-icon
            color="white"
            dark
        >
          mdi-information-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row v-if="showInformation">
          <v-col>
            <about-section></about-section>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <query-form @filterAdded="addFilter"></query-form>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-alert text type="error" v-if="showError">An error occurred while processing query.</v-alert>
            <result-table
                @copyQueryLink="copyQueryLink"
                @downloadCsv="downloadCsv"
                :draft-data="draftData"
                :loading="loading"
            >
            </result-table>
          </v-col>
        </v-row>
      </v-container>
      <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
      >
        Copied link to clipboard!

        <template v-slot:action="{ attrs }">
          <v-btn
              color="blue"
              text
              v-bind="attrs"
              @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
    <v-footer>
      <p>
        All data credit to <a href="http://pro-football-reference.com">Pro Football Reference</a> and <a
          href="http://nflcombineresults.com">nflcombineresults.com</a>
      </p>
      <v-divider></v-divider>
      <p>
        <a href="mailto: draftqlapp@gmail.com">Contact Me</a>
      </p>
    </v-footer>
  </v-app>
</template>

<script>

import {executeQuery} from '@/lib/api'
import ResultTable from "@/components/ResultTable";
import QueryForm from "@/components/FormGroups";
import {Query} from "@/lib/models";
import FilterList from "@/components/FilterList";
import AboutSection from "@/components/AboutSection";
import backgroundImage from '@/static/app-bar-background.jpg';
import {generateCsv} from "@/lib/util/generateCsv";

export default {
  components: {AboutSection, FilterList, QueryForm, ResultTable},
  data: () => ({
    drawer: null,
    draftData: [],
    loading: true,
    showError: false,
    showInformation: false,
    showWarning: false,
    query: new Query(),
    backgroundImagePath: backgroundImage,
    snackbar: false,
    timeout: 1500,
  }),
  created: async function () {
    const routeParams = this.$route.query;

    if (Object.keys(routeParams).length !== 0) {
      this.query = Query.fromQueryString(routeParams);
    }

    await this.submitQuery();
  },
  methods: {
    addFilter: function (filter) {
      if (this.showWarning) {
        this.showWarning = false;
      }

      this.query.addFilter(filter);
    },
    submitQuery: async function () {

      if (this.query.filters.length === 0) {
        this.showWarning = true;
      } else {
        this.loading = true;

        try {
          this.draftData = await executeQuery(this.query.toQueryString());
          this.showError = false;
        } catch (ex) {
          this.loading = false;
          this.showError = true;
        }

        this.loading = false;
      }
    },
    removeFilter: function (filter) {
      this.query.removeFilter(filter);
    },
    downloadCsv: function() {
      const content = generateCsv(this.draftData);

      const uri = encodeURI(content);

      const link = document.createElement("a");
      link.setAttribute("href", uri);
      link.setAttribute("download", "draft_data.csv");
      document.body.appendChild(link); // Required for FF

      link.click();

      document.body.removeChild(link);
    },
    copyQueryLink: function () {
      const query = this.query.toQueryString();

      const fullQuery = `https://www.draftql.app?${query}`;

      const textarea = document.createElement("textarea");
      textarea.textContent = fullQuery;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand("copy");
        this.snackbar = true;
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Iceland&family=Krona+One&display=swap');

.title {
  font-family: 'Iceland', cursive !important;
}
</style>
