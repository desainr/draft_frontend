import {OPERATORS} from "@/lib/constants/constants";

export const OPERATOR_OPTIONS = [
  {
    text: 'Is Equal To',
    value: OPERATORS.EQUALS,
  },
  {
    text: 'Is Between',
    value: OPERATORS.BETWEEN,
  },
  {
    text: 'Is Over',
    value: OPERATORS.GREATER_THAN,
  },
  {
    text: 'Is Under',
    value: OPERATORS.LESS_THAN,
  },
]

export const QUERY_FORM_SETTINGS = {
  draft: {
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
  },
  stats: {
    selectOptions: [
      {
        text: 'Games Played',
        value: {
          field: 'games',
          min: 0,
          max: 400
        }
      },
      {
        text: 'Passing Yards',
        value: {
          field: 'pass_yds',
          min: 0,
          max: 85000,
        }
      },
      {
        text: 'Completion %',
        value: {
          field: 'comp_pct',
          min: 0,
          max: 100,
        }
      },
      {
        text: 'Yards/Attempt',
        value: {
          field: 'yds_per_att',
          min: 0,
          max: 50,
        }
      },
      {
        text: 'Passing TDs',
        value: {
          field: 'pass_tds',
          min: 0,
          max: 700,
        }
      },
      {
        text: 'Interceptions Thrown',
        value: {
          field: 'pass_ints',
          min: 0,
          max: 300
        }
      },
      {
        text: 'Rushing Yards',
        value: {
          field: 'rush_yds',
          min: 0,
          max: 16000
        }
      },
      {
        text: 'Yards/Rush',
        value: {
          field: 'yds_per_rush',
          min: 0,
          max: 7,
        }
      },
      {
        text: 'Rush TDs',
        value: {
          field: 'rush_tds',
          min: 0,
          max: 150,
        }
      },
      {
        text: 'Receptions',
        value: {
          field: 'recs',
          min: 0,
          max: 2000,
        }
      },
      {
        text: 'Receiving Yds',
        value: {
          field: 'rec_yds',
          min: 0,
          max: 20000
        }
      },
      {
        text: 'Receiving TDs',
        value: {
          field: 'rec_tds',
          min: 0,
          max: 150,
        }
      },
      {
        text: 'Yards/Reception',
        value: {
          field: 'yds_per_rec',
          min: 0,
          max: 100,
        }
      },
      {
        text: 'Tackles',
        value: {
          field: 'tackles',
          min: 0,
          max: 200,
        }
      },
      {
        text: 'Defensive Interceptions',
        value: {
          field: 'def_ints',
          min: 0,
          max: 100,
        }
      },
      {
        text: 'Sacks',
        value: {
          field: 'sacks',
          min: 0,
          max: 200,
        }
      },
    ]
  },
  combine: {
    selectOptions: [
      {
        text: '40 Yard Dash',
        value: {
          field: 'forty_time',
          min: 0,
          max: 10,
        }
      },
      {
        text: 'Bench Press',
        value: {
          field: 'bench_press',
          min: 0,
          max: 60,
        }
      },
      {
        text: 'Vert Leap',
        value: {
          field: 'vert_leap',
          min: 0,
          max: 60,
        }
      },
      {
        text: 'Broad Jump',
        value: {
          field: 'broad_jump',
          min: 0,
          max: 200,
        }
      },
      {
        text: 'Shuttle',
        value: {
          field: 'shuttle',
          min: 0,
          max: 10,
        }
      },
      {
        text: '3 Cone',
        value: {
          field: 'three_cone',
          min: 0,
          max: 10,
        }
      }
    ]
  }
}
