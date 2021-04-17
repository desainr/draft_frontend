import {OPERATORS} from "@/lib/constants/constants";

export const QUERY_FORM_SETTINGS = {
  draft: {
    operators: [
      {
        text: 'Is Equal To',
        value: OPERATORS.EQUALS,
      },
      {
        text: 'Is Between',
        value: OPERATORS.BETWEEN,
      }
    ],
    selectOptions: [
      {
        text: 'Year',
        value: {
          field: 'year',
          min: 2000,
          max: 2020,
        },
      },
      {
        text: 'Round',
        value: {
          field: 'round',
          min: 1,
          max: 7,
        }
      },
      {
        text: 'Pick',
        value: {
          field: 'pick',
          min: 1,
          max: 262,
        },
      }]
  },
  player: {
    selectOptions: [
      {
        text: 'Player',
        value: {
          field: 'player',
          type: 'text',
        },
      },
      {
        text: 'Position',
        value: {
          default: 'All',
          field: 'position',
          type: 'select',
        }
      },
      {
        text: 'Team',
        value: {
          default: 'All',
          field: 'team',
          type: 'select',
        }
      },
      {
        text: 'College',
        value: {
          default: 'All',
          field: 'college',
          type: 'select',
        },
      },
    ]
  }
}
