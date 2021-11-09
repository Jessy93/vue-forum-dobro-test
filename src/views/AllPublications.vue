<template>
    <v-container>
        <div>
          <v-card
            class="mx-auto mt-16"
            max-width="600"
          >
            <v-card-title>
              <h2 class="text-h4">
                All Publications
              </h2>
              <v-spacer></v-spacer>
              <span class="text-h6"><router-link to="/new-publication">Write new post</router-link></span>
            </v-card-title>

            <v-card-text>
              Here you can see all post ...
            </v-card-text>
            <v-divider class="mx-4 my-4"></v-divider>
          </v-card>
          <div v-for="(post, i) in posts" :key="i">
            <v-list-item three-line class="mb-8">
              <v-list-item-content>
                <div class="text-overline mb-4">
                  Publication {{i}}
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  {{post.title}}
                </v-list-item-title>
                <v-list-item-subtitle>{{post.subtitle}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="100"
                :color="post.color"
              ></v-list-item-avatar>
            </v-list-item>
          </div>

        </div>
    </v-container>
</template>

<script>
  export default {
    name: 'AllPublications',
    data: () => ({
      posts: [
        {title: "Bonjour, What is Lorem Ipsum?", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", color: 'success'},
        {title: "Bonsoir, Why do we use it?", subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", color: 'secondary'},
        {title: "Bon arrive, Where does it come from?", subtitle: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.", color: 'orange darken-1'},
        {title: "Bonne journee, Where can I get some?", subtitle: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", color: 'red lighten-2'},
        {title: "Bienvenue, Добро пожаловать", subtitle: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.", color: 'yellow darken-2'},
      ]
    }),
    computed: {
      formPost () {
        return {
          namePost: this.namePost,
          messagePost: this.messagePost,
        }
      }
    },
    methods: {
      async validate () {
        if (this.$refs.formPost.validate()) {
          console.log(this.formPost);
          try {
            // to Backend
          } catch (e) {
            // console.log(e);
          }
        }
      }
      
    },
  }
</script>

<style>
.info-user {
  font-size: 20px;
  font-weight: 500;
}
</style>