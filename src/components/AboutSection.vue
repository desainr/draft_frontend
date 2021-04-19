<template>
  <v-alert outlined color="dark">
    <p class="text-center">
      <span class="text-h4">Hello! Welcome to DraftQL.</span>
    </p>
    <p class="text-center text-subtitle-1">
      This is a tool that allows you to search through all of the NFL drafts since 2000 to filter it down to
      find exactly what you're looking for.
    </p>
    <v-divider></v-divider>
    <div style="color: #BDBDBD">
      <p>
        The idea is to build a query using the form below. Adding these filters will populate the left panel
        with your selected filters. Then just hit 'Execute Query'.
      </p>
      <p>
        The steps below include the generic flow as well as an example of what one might use this for - to
        find all of the wide receivers drafted out of Alabama in the first round since 2000 that ran a sub 4.5
        second 40 yard dash and have over 15 career receiving touchdowns.
      </p>
    </div>
    <v-list subheader two-line>
      <v-subheader>Steps to Use</v-subheader>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon
              class="primary"
              dark
          >
            mdi-arrow-right
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Choose a filter category - <span class="tab-font">Draft</span>, <span
              class="tab-font">Player</span>, <span class="tab-font">Stats</span>, or <span
              class="tab-font">Combine</span>
          </v-list-item-title>
          <v-list-item-subtitle>For our example: select <span class="tab-font">Draft</span></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon
              class="primary"
              dark
          >
            mdi-arrow-right
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Choose a field from the first dropdown selector</v-list-item-title>
          <v-list-item-subtitle>For our example: select "Year"</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon
              class="primary"
              dark
          >
            mdi-arrow-right
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Choose a comparison phrase (Is Equal To, Is Between, Is Over, Is Under) from the second
            dropdown
          </v-list-item-title>
          <v-list-item-subtitle>For our example: select "Is Over". Note - the <span class="tab-font">Player</span>
            category does not require this.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon
              class="primary"
              dark
          >
            mdi-arrow-right
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Enter a value into the last box</v-list-item-title>
          <v-list-item-subtitle>For our example: enter 2000</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon
              class="primary"
              dark
          >
            mdi-arrow-right
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Press <span style="color: #4caf50;">ADD FILTER</span></v-list-item-title>
          <v-list-item-subtitle>Your filter will now show in the left pane under "Active Filters"</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon
              class="primary"
              dark
          >
            mdi-arrow-right
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Repeat the above to add the <span class="tab-font">PLAYER</span>, <span class="tab-font">COMBINE</span>,
            and <span class="tab-font">STATS</span> filters
          </v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider class="mt-2"></v-divider>
    <p>
      <span class="text-h6">A Couple of Notes...</span>
    </p>
    <p>
      &#8226; <span style="color: #4caf50;">ADD FILTER</span> also updates an existing filter of the same field.
    </p>
    <p>
      &#8226; Please note that the combine data is not complete for every player. If you don't see a player show up when you think they should, it's probably because there's no data for them. Also some players have default values (like 9.99 for 40 time) if they didn't run it.
    </p>
    <p>
      &#8226; The player search may be a bit confusing. It does a basic search for any terms you type in. For example, if I
      enter just "Tom", it will return all players that have "Tom" in any part of their name, first or last. It's not
      really that useful but whatever.
    </p>
    <p>
      &#8226; There is no input validation, so what you query is what you get. You can search for a negative year. Nothing will
      happen except you'll get no results.
    </p>
    <p>
      &#8226; On the <span class="tab-font">Player</span> group, you are prevented from adding a filter of 'All' as that is the
      default.
    </p>
    <p>
      &#8226; All data credit to <a href="http://pro-football-reference.com">Pro Football Reference</a> and <a
        href="http://nflcombineresults.com">nflcombineresults.com</a>
    </p>
    <p>
      &#8226; I'm just a smol indie developer so if you notice any bugs or it's not as performant as you like, I apologize.
    </p>

  </v-alert>
</template>

<script>
export default {
  name: "AboutSection"
}
</script>

<style scoped>
.tab-font {
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.0892857143em;
  text-transform: uppercase;
}
</style>
