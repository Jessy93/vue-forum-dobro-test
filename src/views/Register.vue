<template>
  <div class="login">
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>SIGN UP, IT'S FREE :)</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-form ref="FormRegister" v-model="valid" lazy-validation >
            <v-text-field v-model="firstName" label="Firstname" :rules="firstNameRules"></v-text-field>
            <v-text-field v-model="lastName" label="LastName" :rules="lastNameRules"></v-text-field>
            <v-text-field v-model="email" :rules="emailRules"  placeholder="xxx@mail.com" ></v-text-field>
            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[pwRules.required, pwRules.min]" :type="show1 ? 'text' : 'password'" 
              name="input-10-1" label="" placeholder="Password" hint="Not less 8 caractere" 
              counter  @click:append="show1 = !show1">
            </v-text-field>
            <v-text-field v-model="phoneNumber"  placeholder="8-987-536-24-23" type="number"  required pattern="[0-9]-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" :rules="phoneNumberRules"></v-text-field>
          <v-card-actions>
            <v-btn class="mt-4 mx-auto px-8" :disabled="!valid" color="primary" @click="validate">
              Sign in
            </v-btn>
          </v-card-actions>

          <p class="mt-8 mx-auto px-4">
            Got an account?
            <router-link to="/login">Login</router-link>
          </p>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'Register',
    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      isActive: true,
      show1: false,
      valid: false,

      firstNameRules: [ v => !!v || 'Your firstname is required'],
      lastNameRules: [ v => !!v || 'Your lastname is required'],
      phoneNumberRules: [ v => !!v || 'Phone number is required'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'invalid format E-mail',
      ],
      pwRules: {
        required: value => !!value || 'Password required.',
        min: v => v.length >= 6 || 'Not less Than characters',
      },
    }),
    computed: {
      FormRegister () {
        return {
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          isActive: this.isActive
        }
      }
    },
    methods: {
      async validate () {
        if (this.$refs.FormRegister.validate()) {
          console.log(this.FormRegister);
          try {
            
          } catch (e) {}
        }
      },
      reset () {
        this.$refs.FormRegister.reset()
      },
    },

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