export const TABLE_HEADERS = {
  default: [
    {text: 'Year', align: 'start', value: 'year', class: 'orange-text'},
    {text: 'Round', value: 'round', class: 'orange-text'},
    {text: 'Pick', value: 'pick', class: 'orange-text'},
    {text: 'Player', value: 'player', class: 'orange-text'},
    {text: 'Position', value: 'position', class: 'orange-text'},
    {text: 'Team', value: 'team', class: 'orange-text'},
    {text: 'College', value: 'college', class: 'orange-text'},
  ],
  stats: [
    {text: 'Games Played', align: 'start', value: 'games', class: 'blue-text'},
    {text: 'Pass Yards', value: 'pass_yds', class: 'blue-text'},
    {text: 'Pass TDs', value: 'pass_tds', class: 'blue-text'},
    {text: 'Completion %', value: 'comp_pct', class: 'blue-text'},
    {text: 'Yards/Attempt', value: 'yds_per_att', class: 'blue-text'},
    {text: 'Passing INTs', value: 'pass_ints', class: 'blue-text'},
    {text: 'Rush Yards', value: 'rush_yds', class: 'blue-text'},
    {text: 'Rush TDS', value: 'rush_tds', class: 'blue-text'},
    {text: 'Yards/Carry', value: 'yds_per_rush', class: 'blue-text'},
    {text: 'Receptions', value: 'recs', class: 'blue-text'},
    {text: 'Receiving Yards', value: 'rec_yds', class: 'blue-text'},
    {text: 'Receiving TDs', value: 'rec_tds', class: 'blue-text'},
    {text: 'Yards/Reception', value: 'yds_per_rec', class: 'blue-text'},
    {text: 'Sacks', value: 'sacks', class: 'blue-text'},
    {text: 'Tackles', value: 'tackles', class: 'blue-text'},
    {text: 'Defensive INTs', value: 'def_ints', class: 'blue-text'},
  ],
  combine: [
    {text: 'Height (in)', align: 'start', value: 'height', class: 'green-text'},
    {text: 'Weight (lbs)', value: 'weight', class: 'green-text'},
    {text: '40 Time', value: 'forty_time', class: 'green-text'},
    {text: 'Bench Press', value: 'bench_press', class: 'green-text'},
    {text: 'Vert Leap', value: 'vert_leap', class: 'green-text'},
    {text: 'Broad Jump', value: 'broad_jump', class: 'green-text'},
    {text: 'Shuttle', value: 'shuttle', class: 'green-text'},
    {text: 'Three Cone', value: 'three_cone', class: 'green-text'},
  ]
}

export const COMBINE_VALUES = ['height', 'weight', 'forty_time', 'bench_press', 'vert_leap', 'broad_jump', 'shuttle', 'three_cone'];
