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
        <draft-form @filterAdded="filterAdded"></draft-form>
      </v-tab-item>
      <v-tab-item>
        <player-form @filterAdded="filterAdded"></player-form>
      </v-tab-item>
      <v-tab-item>
        Stats form
      </v-tab-item>
      <v-tab-item>
        Combine form
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import DraftForm from "@/components/forms/DraftForm";
import PlayerForm from "@/components/forms/PlayerForm";
import {EVENT_NAMES} from "@/lib/constants/constants";

export default {
  name: "QueryForm",
  components: {DraftForm, PlayerForm},
  data: () => ({
    tabs: null,
  }),
  methods: {
    filterAdded: function (filter) {
      this.$emit(EVENT_NAMES.FILTER_ADDED, filter)
    }
  }
}
</script>
