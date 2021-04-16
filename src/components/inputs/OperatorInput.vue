<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
            :items="operators"
            :label="label"
        >
        </v-select>
      </v-col>
      <v-col>
        <v-text-field
            placeholder="Value"
            :type="type"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OperatorInput",
  props: ['label', 'fieldName', 'type'],
  data: () => ({
    operators: ['<', '>', '=']
  }),
  methods: {
  }
}
</script>

<style scoped>

</style>
