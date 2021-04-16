<template>
  <div>
    <v-container>
      <v-row>
        <v-col sm="2">
          <v-select
            label="Field"
            v-model="selectedField"
            :items="fieldOpts"
          >
          </v-select>
        </v-col>
        <v-col sm="2">
          <v-select
            label="Operator"
            v-model="selectedOperator"
            :items="operatorOpts"
          >
          </v-select>
        </v-col>
        <v-col sm="3" v-if="selectedOperator === '='">
          <v-text-field
              type="number"
              v-model="startValue"
              :label="selectedField.text"
          >
          </v-text-field>
        </v-col>
        <v-col sm="2" v-if="selectedOperator === 'bt'">
          <v-text-field
              type="number"
              v-model="startValue"
          >
          </v-text-field>
        </v-col>
        <v-col sm="1" v-if="selectedOperator === 'bt'">
          <v-text-field
            value="AND"
            disabled
          >
          </v-text-field>
        </v-col>
        <v-col sm="2" v-if="selectedOperator === 'bt'">
          <v-text-field
              type="number"
              v-model="endValue"
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

import {OPERATORS, FILTER_CATEGORIES, EVENT_NAMES} from "@/lib/constants/constants";
import {QUERY_FORM_SETTINGS} from '@/lib/config/formConfig';
import {Filter} from "@/lib/classes/filter.model";

export default {
  name: "DraftForm",
  data: () => ({
    selectedField: QUERY_FORM_SETTINGS.draft.selectOptions[0].value,
    selectedOperator: QUERY_FORM_SETTINGS.draft.operators[0].value,
    fieldOpts: QUERY_FORM_SETTINGS.draft.selectOptions,
    operatorOpts: QUERY_FORM_SETTINGS.draft.operators,
    startValue: QUERY_FORM_SETTINGS.draft.selectOptions[0].value.min,
    endValue: QUERY_FORM_SETTINGS.draft.selectOptions[0].value.max,

  }),
  methods: {
    addFilter: function() {
      const filterObj = new Filter(FILTER_CATEGORIES.DRAFT, this.selectedField.field, this.selectedOperator, this.startValue, this.selectedOperator === OPERATORS.BETWEEN ? this.endValue : null);
      this.$emit(EVENT_NAMES.FILTER_ADDED, filterObj)
    }
  },
}
</script>

<style scoped>

</style>
