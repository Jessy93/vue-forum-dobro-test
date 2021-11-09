<template>
    <v-container>
        <div>
          <v-card
            class="mx-auto mt-15" max-width="800px"
          >
              <!-- src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" -->
            <v-img height="132px" >
              <v-card-title class="dark--text mt-50">
                <v-avatar size="100">
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  >
                </v-avatar>
                <div class="ml-5 mt-2">
                  <p>{{firstName}} {{lastName}}</p>
                </div>
              </v-card-title>
            </v-img>

            <v-card-title>
              {{email}}
            </v-card-title>
            <v-card-subtitle>
               {{phoneNumber}}
            </v-card-subtitle>
            <v-divider class="mx-16"></v-divider>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
                @click="show = !show"
              >
                Edit my profile
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-card-text>
                  <v-form ref="ChangeInfos" v-model="valid" lazy-validation >
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
                        Change
                      </v-btn>
                    </v-card-actions>
                  </v-form>



                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>


        </div>
    </v-container>
</template>

<script>
  export default {
    name: 'Profile',
    data: () => ({
      show: false,
      firstName: 'Adiatou',
      lastName: 'Jessy',
      email: 'adiatou.ibrahim@gmail.com',
      password: '1234566',
      phoneNumber: '89875362423',
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
      ChangeInfos () {
        return {
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
        }
      }
    },
    methods: {
      async validate () {
        if (this.$refs.ChangeInfos.validate()) {
          console.log(this.ChangeInfos);
          try {
            
          } catch (e) {}
        }
      },
    },
  }
</script>

<style>
.info-user {
  font-size: 20px;
  font-weight: 500;
}
</style>