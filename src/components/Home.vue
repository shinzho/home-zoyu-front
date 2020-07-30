<template>
  <div id="app" class="back">
    <v-app id="inspire">
      <Navbar></Navbar>
      <v-card color="transparent" style="margin-top: 4.5rem;">
        <v-card-title class="pb-0 pl-6">username</v-card-title>
        <v-col
          cols="12"
          style="margin-top: 0rem; text-align: center !important;"
        >
          <!-- <v-text-field
            label="Filled"
            filled
            rounded
            dense
          ></v-text-field> -->
          <v-btn color="primary" class="pl-5" min-width="50%" rounded
            >Create a poll</v-btn
          >
        </v-col>
      </v-card>
      <div class="filter">
        <div
          class="mt-4 filter-inner"
          style="text-align: end; position: relative;"
        >
          <v-divider></v-divider>
          <div
            class="py-2 px-2"
            style="background-color: black; opacity: ; border-radius: 10px;"
          >
            <!-- <v-btn rounded color="red">filter</v-btn> -->
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Open Dialog
                  </v-btn>
                </template>
                <v-card class="dialog">
                  <v-card-title>
                    <span class="headline">User Profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal first name*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal middle name"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal last name*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Password*"
                            type="password"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="[
                              'Skiing',
                              'Ice hockey',
                              'Soccer',
                              'Basketball',
                              'Hockey',
                              'Reading',
                              'Writing',
                              'Coding',
                              'Basejump',
                            ]"
                            label="Interests"
                            multiple
                          ></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false"
                      >Close</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="dialog = false"
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>

          <v-divider></v-divider>
        </div>
      </div>

      <v-card color="transparent" class="mx-auto mt-4">
        <v-row
          ><div class="ml-6 mt-2"><i>username</i></div><v-spacer></v-spacer><div class="mx-4 mt-2" style="text-align: -moz-right; display:flex; flex-wrap: wrap; justify-content:end">
              <div
                class="mr-2"
                style="
                  background-color: #ab8585;
                  border-radius: 15px;
                  max-width: max-content;
                "
              >
                <strong style="padding-inline: 10px;">Hello</strong>
              </div>
              <div
                class="mr-2"
                style="
                  background-color: #ab8585;
                  border-radius: 15px;
                  max-width: max-content;
                "
              >
                <strong style="padding-inline: 10px;">Depression</strong>
              </div>
              <div
                class="mr-2"
                style="
                  background-color: #ab8585;
                  border-radius: 15px;
                  max-width: max-content;
                "
              >
                <strong style="padding-inline: 10px;">ADHD</strong>
              </div>
            </div></v-row
        >
        <v-card-title class="my-0 py-0"
          >Unwilling sportsmen he in questions september therefore described so.
          Attacks may set few believe moments was. Reasonably how possession shy
          way introduced age inquietude</v-card-title
        >

        <div>
          <v-row
            ><v-col cols="10" class="my-0 py-0"
              ><v-checkbox
                class="mx-4 mt-1 mb-0"
                v-model="ex4"
                label="Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. "
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox></v-col
            ><v-col cols="2" style="text-align: center; color: red;"
              >212</v-col
            ></v-row
          >
          <v-row
            ><v-col cols="10" class="my-0 py-0"
              ><v-checkbox
                class="mx-4 mt-1 mb-0"
                v-model="ex4"
                label="Whole wound wrote at whose to style in. Figure ye innate former do so we. Shutters but sir yourself provided you required his. "
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox></v-col
            ><v-col cols="2" style="text-align: center; color: red;"
              >22</v-col
            ></v-row
          >
          <v-row
            ><v-col cols="10" class="my-0 py-0"
              ><v-checkbox
                class="mx-4 mt-1 mb-0"
                v-model="ex4"
                label="Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. "
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox></v-col
            ><v-col cols="2" style="text-align: center; color: red;"
              >452</v-col
            ></v-row
          >
        </div>
        <div>
          <v-row clas="mt-2">
            <v-col cols="10">
              <v-text-field
                color="black"
                class="pl-4"
                label="Add answer here"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="pt-5"
              ><v-icon class="px-0 mx-0" large>mdi-send</v-icon></v-col
            >
          </v-row>
        </div>
      </v-card>

      <v-card color="transparent" class="mx-auto mt-4">
        <div class="my-2 ml-4">username</div>
        <v-card-title class="my-0 py-0"
          >Unwilling sportsmen he in questions september therefore described so.
          Attacks may set few believe moments was. Reasonably how possession shy
          way introduced age inquietude</v-card-title
        >
        <div>
          <v-checkbox
            class="mx-4 mt-1 mb-0"
            v-model="ex4"
            label="Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. "
            color="red darken-3"
            value="red darken-3"
            hide-details
          ></v-checkbox>
          <v-checkbox
            class="mx-4 mt-1 mb-0"
            v-model="ex4"
            label="Whole wound wrote at whose to style in. Figure ye innate former do so we. Shutters but sir yourself provided you required his. "
            color="red darken-3"
            value="red darken-3"
            hide-details
          ></v-checkbox>
          <v-checkbox
            class="mx-4 mt-1 mb-0"
            v-model="ex4"
            label="Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. "
            color="red darken-3"
            value="red darken-3"
            hide-details
          ></v-checkbox>
        </div>
        <div>
          <v-row clas="mt-2">
            <v-col cols="10">
              <v-text-field
                color="black"
                class="pl-4"
                label="Add answer here"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="pt-5"
              ><v-icon class="px-0 mx-0" large>mdi-send</v-icon></v-col
            >
          </v-row>
        </div>
      </v-card>
      <v-card color="transparent" class="mx-auto mt-4">
        <div class="my-2 ml-4">username</div>
        <v-card-title class="my-0 py-0"
          >Unwilling sportsmen he in questions september therefore described so.
          Attacks may set few believe moments was. Reasonably how possession shy
          way introduced age inquietude</v-card-title
        >
        <div>
          <v-checkbox
            class="mx-4 mt-1 mb-0"
            v-model="ex4"
            label="Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. "
            color="red darken-3"
            value="red darken-3"
            hide-details
          ></v-checkbox>
          <v-checkbox
            class="mx-4 mt-1 mb-0"
            v-model="ex4"
            label="Whole wound wrote at whose to style in. Figure ye innate former do so we. Shutters but sir yourself provided you required his. "
            color="red darken-3"
            value="red darken-3"
            hide-details
          ></v-checkbox>
          <v-checkbox
            class="mx-4 mt-1 mb-0"
            v-model="ex4"
            label="Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. "
            color="red darken-3"
            value="red darken-3"
            hide-details
          ></v-checkbox>
        </div>
        <div>
          <v-row clas="mt-2">
            <v-col cols="10">
              <v-text-field
                color="black"
                class="pl-4"
                label="Add answer here"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="pt-5"
              ><v-icon class="px-0 mx-0" large>mdi-send</v-icon></v-col
            >
          </v-row>
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./Navbar";
//import { ScrollMagnetContainer,  } from 'vue-scroll-magnet';
export default {
  components: {
    Navbar,
    //ScrollMagnetContainer,
    //ScrollMagnetItem
  },
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {},
};
</script>

<style scoped>
.filter {
  position: sticky;
  top:0px;
  z-index: 1;
}
.back {
  background-image: url("./image-from-rawpixel-id-576260-jpeg.jpg");
  background-size: cover;
}
#inspire {
  background: none;
}
.transparent {
  /* background-color: rgb(152, 136, 223) !important; */
  background-color: none;
  /* opacity: 0.6; */
  border-color: transparent !important;
}
@media (min-width: 960px) {
  .v-card {
    width: 40%;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 4.5rem;
    padding: auto !important;
  }
  .filter {
    width: 40%;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .dialog {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>
