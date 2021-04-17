<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-select
              label="Field"
              :items="fieldOpts"
              v-model="selectedField"
              @change="updateDefaults()"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-select
              v-if="selectedField.type === 'select'"
              multiple
              :items="options[selectedField.field]"
              v-model="selectedValues"
          >
            <template
              v-slot:prepend-item
            >
              <v-list-item
                  ripple
                  @click="toggleSelectAll"
              >
                <v-list-item-action>
                  <v-icon :color="selectedValues.length > 0 ? 'indigo darken-4' : ''">
                    {{ icon }}
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Select All
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="mt-2"></v-divider>
            </template>
            <template v-slot:selection="{ item, index }">
              <div v-if="selectAll">
                <v-chip v-if="index === 0">
                  <span>All</span>
                </v-chip>
              </div>
              <div v-else>
                <v-chip v-if="index < 5">
                  <span>{{ item }}</span>
                </v-chip>
                <span
                    v-if="index === 4"
                    class="grey--text caption"
                >
              (+{{ selectedValues.length - 4 }} others)
              </span>
              </div>
            </template>
          </v-select>
          <v-text-field
              v-if="selectedField.field === 'player'"
              v-model="playerSearchString"
              type="text"
              hint="Enter player name(s) to search. Search multiple by separating with |"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-btn color="success" rounded @click="addFilter">
            Add Filter
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import {EVENT_NAMES, FILTER_CATEGORIES, OPERATORS} from "@/lib/constants/constants";
import {QUERY_FORM_SETTINGS} from '@/lib/config/formConfig';
import {Filter} from "@/lib/models";

export default {
  name: "PlayerForm",
  data: () => ({
    fieldOpts: QUERY_FORM_SETTINGS.player.selectOptions,
    options: {
      college: ['Michigan', 'Michigan St.', 'Ohio St.', 'Nebraska'],
      position: ['QB', 'RB', 'WR', 'TE', 'T', 'G', 'C', 'FB', 'DT', 'DT', 'LB', 'S', 'CB', 'K', 'P', 'LS'],
      team: ['Broncos', 'Chiefs', 'Lions', 'Packers', 'Cardinals', '49ers', 'Rams'],
    },
    selectedField: QUERY_FORM_SETTINGS.player.selectOptions[0].value,
    selectAll: true,
    selectedValues: [],
    playerSearchString: '',
  }),
  methods: {
    addFilter() {
      if (this.playerSearchString || this.selectedValues.length < this.options[this.selectedField.field].length) {
        const operator = this.selectedField.type === 'select' ? OPERATORS.IN : OPERATORS.LIKE;
        const value = this.selectedField.type === 'select' ? this.selectedValues : this.playerSearchString;

        const filter = new Filter(FILTER_CATEGORIES.PLAYER, this.selectedField.field, operator, value);
        this.$emit(EVENT_NAMES.FILTER_ADDED, filter)
      }
    },
    toggleSelectAll() {
      this.selectAll = !this.selectAll;
      if (this.selectAll) {
        this.selectedValues = this.options[this.selectedField.field].slice();
      } else {
        this.selectedValues = [];
      }
    },
    updateDefaults() {
      this.selectAll = true;
      if (this.selectedField.type === 'select') {
        this.selectedValues = this.options[this.selectedField.field].slice();
      } else {
        this.playerSearchString = '';
      }
    }
  },
  computed: {
    icon () {
      if (this.selectAll) {
        return 'mdi-close-box'
      } else {
        return 'mdi-checkbox-blank-outline'
      }
    },
  }
}
</script>

<style scoped>

</style>
