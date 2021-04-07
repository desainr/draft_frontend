<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <!-- FORM -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>NFL Draft History</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- TABLE -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  data: () => ({ drawer: null }),
}

</script>
