<template>
  <div>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="ACE Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('@/assets/logo.svg')"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <div
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="white-text my-5">{{ date | date('datetime' )}}</span>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append dark>
        <div class="pa-2">
          <v-btn block dark @click="logout">
            Se deconnecter
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    date: new Date(),
    interval: null,
    drawer: false,
    items: [
      { title: 'Home', icon: 'mdi-home-city', link: '/' },
      { title: 'New Publication', icon: 'mdi-clipboard-text', link: '/new-publication' },
      { title: 'View all publications', icon: 'mdi-view-dashboard', link: '/all-publications' },
      { title: 'Account', icon: 'mdi-account-box', link: '/profile' },
    ],
  }),
  watch: {
      group () {
        this.drawer = false
      },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/connexion?message=logout')
    }
  },
  mounted() {
    this.interval = setInterval(() => {
    this.date = new Date()
    }, 1000);
  },
  beforeDestroy() {
      clearInterval(this.interval)
  }
}
</script>

<style>

</style>