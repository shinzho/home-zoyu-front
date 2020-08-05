<template>
  <div id="app" class="back">
    <v-app id="inspire">
      <Navbar
        @sign-in="handleClickSignIn"
        @sign-out="handleClickSignOut"
        v-if="user_details !== null"
        v-bind:username="user_details[0].username"
        v-bind:user="user_details"
      ></Navbar>
      <Navbar
        @sign-out="handleClickSignOut"
        @sign-in="handleClickSignIn"
        v-if="user_details === null"
        v-bind:username="null"
      ></Navbar>
      <v-card color="transparent" style="margin-top: 4.5rem;">
        <v-card-title
          v-if="user_details !== null"
          class="pb-0 pl-6"
          style="word-break: break-word;"
          >Hi<span style="color: red;">
            <i>{{ "\xa0" + user_details[0].username }}</i></span
          >, wanna tell/ask something?</v-card-title
        >
        <v-card-title
          v-if="user_details === null"
          class="pb-0 pl-6"
          style="word-break: break-word;"
          >Hi, wanna tell/ask something?</v-card-title
        >
        <v-row justify="center"
          ><v-col style="text-align: center;">
            <v-dialog v-model="post" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn color="red darken-2" class="mr-2" rounded dark v-on="on">
                  Create a Poll
                </v-btn>
              </template>
              <v-card class="dialog">
                <v-card-title>
                  <span class="headline">Create a Poll</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          rounded
                          filled
                          v-model="pollText"
                          label="What's on your mind?"
                        ></v-text-field> </v-col></v-row
                    ><v-row>
                      <v-col cols="12">
                        <v-autocomplete
                          v-model="pollTags"
                          :items="tags"
                          outlined
                          chips
                          color="blue-grey lighten-2"
                          label="Select Tags"
                          item-text="tag_text"
                          return-object
                          multiple
                        >
                          <template slot="selection" slot-scope="data">
                            <v-chip
                              :input-value="data.selected"
                              close
                              class="chip--select-multi"
                              @input="data.parent.selectItem(data.item.id)"
                            >
                              {{ data.item.tag_text }}
                            </v-chip>
                          </template></v-autocomplete
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-container>
                    <v-row justify="center"
                      ><v-btn
                        v-on:click="postPoll()"
                        color="red darken-2"
                        :disabled="disabledForm"
                        rounded
                        ><span style="color: white;">Post</span></v-btn
                      ></v-row
                    ><v-row justify="center"
                      ><v-btn color="blue darken-1" text @click="post = false"
                        >Close</v-btn
                      ></v-row
                    >
                  </v-container>
                </v-card-actions>
              </v-card>
            </v-dialog></v-col
          >
        </v-row>
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
            <v-row justify="end">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="red darken-2"
                    class="mr-2"
                    rounded
                    dark
                    v-on="on"
                  >
                    Filter
                  </v-btn>
                </template>
                <v-card class="dialog">
                  <v-card-title>
                    <span class="headline">Filter Feed</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="['Newer Posts First', 'Older Posts First']"
                            label="Sort by Post Time"
                            required
                            v-model="sort_order"
                            @change="reversePolls()"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="tags"
                            label="Filter by Tag"
                            item-text="tag_text"
                            item-value="id"
                            v-model="filterTag"
                            @change="filterByTag()"
                          ></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false"
                      >Apply</v-btn
                    ><v-spacer></v-spacer>
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
          ><div class="ml-6 mt-2"><i>username</i></div>
          <v-spacer></v-spacer>
          <div
            class="mx-4 mt-2"
            style="
              text-align: -moz-right;
              display: flex;
              flex-wrap: wrap;
              justify-content: end;
            "
          >
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
        <v-card-title class="my-0 py-0" style="word-break: break-word;"
          >Unwilling sportsmen he in questions september therefore described so.
          Attacks may set few believe moments was. Reasonably how possession shy
          way introduced age inquietude</v-card-title
        >

        <div>
          <v-row
            ><v-col cols="10" class="my-0 py-0"
              ><v-checkbox
                class="mx-4 mt-1 mb-0"
                label="Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. "
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox></v-col
            ><v-col
              cols="2"
              class="pl-0 pr-9"
              style="text-align: right; white-space: pre; color: red;"
              >212<v-icon color="red">whatshot</v-icon></v-col
            ></v-row
          >
          <v-row
            ><v-col cols="10" class="my-0 py-0"
              ><v-checkbox
                class="mx-4 mt-1 mb-0"
                label="Whole wound wrote at whose to style in. Figure ye innate former do so we. Shutters but sir yourself provided you required his. "
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox></v-col
            ><v-col
              cols="2"
              class="pl-0"
              style="text-align: left; white-space: pre; color: red;"
              >22<v-icon color="red">whatshot</v-icon></v-col
            ></v-row
          >
          <v-row
            ><v-col cols="10" class="my-0 py-0"
              ><v-checkbox
                class="mx-4 mt-1 mb-0"
                label="Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. "
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox></v-col
            ><v-col
              cols="2"
              class="pl-0"
              style="text-align: left; white-space: pre; color: red;"
              >452<v-icon color="red">whatshot</v-icon></v-col
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
                v-model="pollAnswer[0]"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="pt-5 px-0"
              ><v-btn
                class="mx-0 my-0 px-0 py-0"
                color="transparent"
                disabled=""
                text
                ><v-icon color="red" class="px-0 mx-0" large
                  >mdi-send</v-icon
                ></v-btn
              ></v-col
            >
          </v-row>
        </div>
      </v-card>
      <v-card
        v-for="poll in questions"
        v-bind:key="poll.id"
        color="transparent"
        class="mx-auto mt-4"
      >
        <v-row v-if="poll.created_by !== undefined"
          ><div class="ml-6 mt-2">
            <i>{{ poll.created_by["username"] }}</i>
          </div>
          <v-spacer></v-spacer>
          <div
            class="mx-4 mt-2"
            style="
              text-align: -moz-right;
              display: flex;
              flex-wrap: wrap;
              justify-content: end;
            "
          >
            <div
              class="mr-2"
              v-for="tag in poll.tags"
              v-bind:key="tag.id"
              style="
                background-color: #ab8585;
                border-radius: 15px;
                max-width: max-content;
              "
            >
              <strong style="padding-inline: 10px;">{{
                tag["tag_text"]
              }}</strong>
            </div>
          </div></v-row
        >
        <v-card-title class="my-0 py-0" style="word-break: break-word;">{{
          poll.question_text
        }}</v-card-title>
        <small class="mx-4" v-if="Object.keys(poll.choice_set).length == 0"
          >(<strong> Note:</strong> This question isnt answered yet.)</small
        >

        <div>
          <v-row v-for="choice in poll.choice_set" v-bind:key="choice.id"
            ><v-col cols="10" class="my-0 py-0"
              ><v-checkbox
                @change="upvote(choice)"
                class="mx-4 mt-1 mb-0"
                :label="choice.choice_text"
                color="red darken-3"
                :input-value="checkedOrNot(choice)"
                hide-details
                :disabled="user_details==null"
              ></v-checkbox></v-col
            ><v-col
              class="my-0 py-0"
              v-if="Object.keys(choice.upvoted_by).length != 0"
              cols="2"
              style="text-align: center; color: red;"
              >{{ choice.upvoted_by.length
              }}<v-icon color="red">whatshot</v-icon></v-col
            ></v-row
          >
        </div>
        <div>
          <v-row clas="mt-2">
            <v-col cols="10">
              <v-text-field
                color="black"
                class="pl-4"
                v-model="pollAnswer[poll.id]"
                label="Add answer here"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="pt-5 px-0"
              ><v-btn
                class="mx-0 my-0 px-0 py-0"
                color="transparent"
                :disabled="disabledAnswer(poll.id)"
                text
                v-on:click="postAnswer(poll.id, poll)"
                ><v-icon color="red" class="px-0 mx-0" large
                  >mdi-send</v-icon
                ></v-btn
              ></v-col
            >
          </v-row>
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import axios from "axios";

//import { ScrollMagnetContainer,  } from 'vue-scroll-magnet';
export default {
  el: "#v-for-object",
  components: {
    Navbar,
    //ScrollMagnetContainer,
    //ScrollMagnetItem
  },
  props: {
    source: String,
  },
  data() {
    return {
      dialog: false,
      post: false,
      checked: false,
      //test_var:"I work fine",
      questions: [{ question_text: "1wsxs" }],
      django_auth: "",
      user_details: null,
      tags: null,
      pollTags: "",
      pollText: "",
      pollAnswer: {},
      sort_order: "Newer Posts First",
      filterTag: "",
    };
  },
  methods: {
    filterByTag() {
      console.log("id of tag selected", this.filterTag);
      this.getPolls("all", this.filterTag);
    },
    reversePolls() {
      console.log("sort_order", this.sort_order);
      this.questions.reverse();
    },
    checkedOrNot: function (choice) {
      let checked = false;
      if (localStorage.user_details) {
        let user = JSON.parse(localStorage.user_details);

        //console.log("checking" ,user[0].id, choice.upvoted_by.length);
        if (choice.upvoted_by.includes(user[0].id)) {
          //console.log("checked")
          checked = true;
        }
      }

      return checked;
    },
    upvote: function (choice) {
      var data = JSON.stringify({ choice_id: choice.id });
      
      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/upvoteChoices",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.django_auth.access_token,
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          if (response.data == "Upvoted") {
            choice.upvoted_by.push(this.user_details.id);
            //console.log("increased by 1")
          }
          if (response.data == "Removed") {
            choice.upvoted_by.pop(this.user_details.id);
            //console.log("removed by 1")
          }
        })
        .catch(function (error) {
          console.log(error);
          
        });
    },
    disabledAnswer: function (qid) {
      let disabled = true;
      if (this.pollAnswer[qid]) {
        disabled = false;
      }

      return disabled;
    },

    postAnswer(qid, poll) {
      var data = JSON.stringify({
        question: qid,
        choice_text: this.pollAnswer[qid],
      });
      console.log("trying to submit choice:", this.pollAnswer[qid]);
      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/addChoices",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.django_auth.access_token,
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          poll.choice_set.push({
            choice_text: this.pollAnswer[qid],
            upvoted_by: [],
          });
          this.pollAnswer[qid] = "";
          this.getPolls("all", -1);
          vm.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
          window.alert("Please Sign in first.")
        });
    },
    postPoll() {
      console.log("poll post function call", this.pollText);
      var tagIds = [];
      for (let i = 0; i < this.pollTags.length; i++) {
        tagIds.push(this.pollTags[i].id);
        console.log(this.pollTags[i].id);
        console.log(tagIds);
      }
      var data = JSON.stringify({
        question_text: this.pollText,
        tags: tagIds,
      });

      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/addQuestion",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.django_auth.access_token,
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.questions.push({
            question_text: this.pollText,
            tags: this.pollTags.tag_text,
          });
          this.getPolls("all", -1);
          window.alert("Post submmitted successfully!");
        })
        .catch(function (error) {
          console.log(error);
          window.alert("Please Sign in first.");
        });
      this.post = false;
      (this.pollTags = ""), (this.pollText = "");
    },
    getTags() {
      var config = {
        method: "get",
        url: "http://127.0.0.1:8000/tags",
        headers: {},
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.tags = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getAuthToken() {
      var config = {
        method: "post",
        url:
          "http://localhost:8000/auth/convert-token?grant_type=convert_token&client_id=olSMA6272EP5jp3yM419emocc3wbPS51ZdJyyEvL&client_secret=Of19YcDHQ7U0uyXAx4CFmDHf7tgF7d4VnePWKJRIC8eO7hA5vbaOLQ62NJEXdTzmIcM5cNraU8lizPmLFoqsDqgfcFsuVc39P5QNKq7is3OZ6d0LXXfV6Up0bvl8TMHB&backend=google-oauth2&token=" +
          this.googleToken,
        headers: {},
      };
      console.log("test");
      // const axios_response = axios(config);
      // console.log("django_response", response.data);
      axios(config)
        .then((response) => {
          console.log("django_token", JSON.stringify(response.data));
          this.django_auth = response.data;
          localStorage.django_tokens = JSON.stringify(this.django_auth);
          this.getUserDetails(this.django_auth.access_token);
        })
        .catch(function (error) {
          console.log(error);
        });
      // this.django_auth = response.data;
      // localStorage.django_tokens = JSON.stringify(this.django_auth);
    },
    handleClickSignOut() {
      localStorage.clear();
      this.user_details = null;
      vm.$forceUpdate();
    },
    handleClickSignIn() {
      //self= this
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          //on success do something

          console.log("getAuthResponse", GoogleUser.getAuthResponse());
          this.googleToken = GoogleUser.getAuthResponse().access_token;
          console.log("getAuthResponse", this.googleToken);
          this.getAuthToken();
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },
    getUserDetails: function (token) {
      var config = {
        method: "get",
        url: "http://localhost:8000/me/",
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.user_details = response.data;
          localStorage.user_details = JSON.stringify(response.data);
          console.log("user_details assigned", this.user_details);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getPolls: function (user_id, tag_id) {
      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/getQuestions",
        headers: {
          "Content-Type": "application/json",
          //...data.getHeaders(),
        },
        data: { user_id: user_id, tag_id: tag_id },
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.questions = response.data;
          this.questions.reverse();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    selectedTags: {
      get() {
        return this.value;
      },
      set(item) {
        this.pollTags.push(item);
        this.$emit("input", item);
      },
    },

    disabledForm: function () {
      let disabled = false;
      if (this.pollText == "" || this.pollTags == "") {
        disabled = true;
      }
      return disabled;
    },
  },
  created() {
    this.getPolls("all", -1);
    this.getTags();
    if (localStorage.user_details) {
      this.user_details = JSON.parse(localStorage.user_details);
      this.django_auth = JSON.parse(localStorage.django_tokens);
    }

    for (let i = 0; i < this.questions.length; i++) {
      let qid = this.questions[i][id];
      this.pollAnswer.qid = "";
    }
  },
};
</script>

<style scoped>
.v-card {
  width: 97%;
}
.filter {
  position: sticky;
  top: 2.5rem;
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
