<template>
  <div>
    <v-tabs class="center mx-auto mt-10">
      <v-tab>
          <router-link to="/all-publications">See all Post</router-link>
      </v-tab>
      <v-tab>
          <router-link to="/new-publication">Write new post</router-link>
      </v-tab>
      <v-tab>
          <router-link to="/profile">See my profile</router-link>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style>
.v-slide-group__content.v-tabs-bar__content {
  justify-content: center;
}

@media screen and (max-width:500px) {
  .v-slide-group__content.v-tabs-bar__content {
    justify-content: center;
    flex-wrap: wrap !important;
  }
}
</style>