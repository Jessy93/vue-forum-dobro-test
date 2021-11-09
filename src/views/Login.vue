<template>
  <div class="login">
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title class="mx-a">LOG IN</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-form ref="loginform" v-model="valid" lazy-validation>
          <v-text-field v-model="email" :rules="emailRules" label="Email" placeholder="adresse@email.conn"  required>
          </v-text-field>
          <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[pwRules.required, pwRules.min]" :type="show1 ? 'text' : 'password'" 
            name="current-password" label="Password" placeholder="Password" hint="Not less 8 characters" 
            counter  @click:append="show1 = !show1">
          </v-text-field>
          <v-card-actions>
            <v-btn class="mt-6 mx-auto px-8" :disabled="!valid" color="primary"  @click="validate">
              LOG IN
            </v-btn>
          </v-card-actions>
          <p class="mt-8 mx-auto px-4">
            Don't have an account?
            <router-link to="/registration">Sign up</router-link>
          </p>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: '',
      show1: false,
      valid: false,
      emailRules: [
        v => !!v || 'E-mail required',
        v => /.+@.+\..+/.test(v) || 'Invalid E-mail format',
      ],
      pwRules: {
        required: value => !!value || 'Password required',
        min: v => v.length >= 8 || '8 character minimum',
      },
    }),
    computed: {
      loginform () {
        return {
          email: this.email,
          password: this.password,
        }
      }
    },
    mounted() {
    },
    methods: {
      async validate () {
        if (this.$refs.loginform.validate()) {
          console.log(this.loginform);
          try {
            // to Backend
          } catch (e) {
            // console.log(e);
          }
        }
      }
    }

}
</script>

<style scoped>
  .login {
    width: 500px;
    height: auto;
    padding: 15px;
    margin: 50px  auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
  }
  .login > .elevation-12 {
    width: 100%;
  }
  .v-btn {
    letter-spacing: 0;
    text-transform:lowercase;
  }

  @media screen and (max-width: 499px) {
    .login {
      width: 320px;
    }
  }

</style>