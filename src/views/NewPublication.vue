<template>
    <v-container>
        <div>
          <v-card
            class="mx-auto mt-16"
            max-width="600"
          >
            <v-card-title>
              <h2 class="text-h4">
                New Publication
              </h2>
              <v-spacer></v-spacer>
              <span class="text-h6"><router-link to="/all-publications">See all Post</router-link></span>
            </v-card-title>

            <v-card-text>
              Fill out the form to make a publication
            </v-card-text>
            <v-divider class="mx-4 my-4"></v-divider>

            <v-form ref="formPost" v-model="valid" lazy-validation class="pa-4">
              <v-text-field v-model="namePost" :rules="[rules.required, rules.min]" auto-grow filled color="deep-purple" label="Title of Publication" placeholder="Title of Publication" class="mt-8" required>
              </v-text-field>
              <v-textarea v-model="messagePost" :rules="[rules.required, rules.mincom]" auto-grow filled color="deep-purple" label="Message in Publication" rows="4" class="mt-8" required>

              </v-textarea>

              <v-checkbox
                v-model="agreement"
                :rules="[rules.required]"
                color="primary"
              >
                <template v-slot:label>
                  I agree to the&nbsp;
                  <a
                    href="#"
                    @click.stop.prevent="dialog = true"
                  >Terms of Service</a>
                  &nbsp;and&nbsp;
                  <a
                    href="#"
                    @click.stop.prevent="dialog = true"
                  >Privacy Policy</a>*
                </template>
              </v-checkbox>



              <v-dialog
                v-model="dialog"
                absolute
                max-width="400"
                persistent
              >
                <v-card>
                  <v-card-title class="text-h5 grey lighten-3">
                    Legal
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                      text
                      @click="agreement = false, dialog = false"
                    >
                      No
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="white--text"
                      color="deep-purple accent-4"
                      @click="agreement = true, dialog = false"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-card-actions>
              <v-btn
                block
                class="white--text"
                color="primary accent-3"
                :disabled="!valid"
                @click="validate"
              >
                Publish
              </v-btn>
            </v-card-actions>
              
            </v-form>
          </v-card>

        </div>
    </v-container>
</template>

<script>
  export default {
    name: 'NewPublication',
    data: () => ({
      valid: false,
      namePost: '',
      messagePost: '',
      agreement: false,
      dialog: false,
      isLoading: false,
      rules: {
        required: v => !! v || 'This field is required',
        min: v => v.length >= 8 || '8 character minimum',
        mincom: v => v.length >= 20 || '20 character minimum',
      }
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