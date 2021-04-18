<template>
  <div>
    <v-tabs centered v-model="tabs">
      <v-tab>Draft</v-tab>
      <v-tab>Player</v-tab>
      <v-tab>Stats</v-tab>
      <v-tab>Combine</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <base-number-form :form-settings="formSettings.draft" @filterAdded="filterAdded"></base-number-form>
      </v-tab-item>
      <v-tab-item>
        <player-form @filterAdded="filterAdded"></player-form>
      </v-tab-item>
      <v-tab-item>
        <base-number-form :form-settings="formSettings.stats" @filterAdded="filterAdded"></base-number-form>
      </v-tab-item>
      <v-tab-item>
        <base-number-form :form-settings="formSettings.combine" @filterAdded="filterAdded"></base-number-form>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import {EVENT_NAMES} from "@/lib/constants/constants";
import {QUERY_FORM_SETTINGS} from "@/lib/config/formConfig";
import BaseNumberForm from "@/components/forms/BaseNumberForm";
import PlayerForm from "@/components/forms/PlayerForm";

export default {
  name: "QueryForm",
  components: {PlayerForm, BaseNumberForm},
  data: () => ({
    formSettings: QUERY_FORM_SETTINGS,
    tabs: null,
  }),
  methods: {
    filterAdded: function (filter) {
      this.$emit(EVENT_NAMES.FILTER_ADDED, filter)
    }
  }
}
</script>
