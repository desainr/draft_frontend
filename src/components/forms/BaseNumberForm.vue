<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="selectedField"
            :items="fieldOpts"
            @change="updateDefaults"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="selectedOperator"
            :items="operatorOpts"
            @change="addFilter"
          >
          </v-select>
        </v-col>
        <v-col v-if="selectedOperator !== 'bt'">
          <v-text-field
              type="number"
              v-model="startValue"
              :label="selectedField.text"
              @change="addFilter"
          >
          </v-text-field>
        </v-col>
        <v-col v-if="selectedOperator === 'bt'">
          <v-text-field
              type="number"
              v-model="startValue"
              @change="addFilter"
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
        <v-col v-if="selectedOperator === 'bt'">
          <v-text-field
              type="number"
              v-model="endValue"
              @change="addFilter"
          >
          </v-text-field>
        </v-col>
<!--        <v-col>-->
<!--          <v-btn block rounded outlined color="success" @click="addFilter">-->
<!--            Add Filter-->
<!--          </v-btn>-->
<!--        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>

<script>

import {OPERATORS, FILTER_CATEGORIES, EVENT_NAMES} from "@/lib/constants/constants";
import {Filter} from "@/lib/models";
import {OPERATOR_OPTIONS} from '@/lib/config/formConfig';

export default {
  name: "BaseNumberForm",
  props: ['formSettings'],
  data: function() {
    return {
      selectedField: this.formSettings.selectOptions[0].value,
      selectedOperator: OPERATOR_OPTIONS[0].value,
      fieldOpts: this.formSettings.selectOptions,
      operatorOpts: OPERATOR_OPTIONS,
      startValue: this.formSettings.selectOptions[0].value.min,
      endValue: this.formSettings.selectOptions[0].value.max,
    }
  },
  methods: {
    addFilter: function() {
      if ((this.startValue || this.startValue === 0) && (this.selectedOperator === OPERATORS.BETWEEN ? this.endValue || this.endValue === 0 : true)) {
        const filterObj = new Filter(this.selectedField.field, this.selectedOperator, this.startValue, this.selectedOperator === OPERATORS.BETWEEN ? this.endValue : null);
        this.$emit(EVENT_NAMES.FILTER_ADDED, filterObj)
      }
    },
    updateDefaults(option) {
      this.startValue = option.min;
      this.endValue = option.max;
    }
  },
}
</script>

<style scoped>

</style>
