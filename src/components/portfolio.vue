<template>
  <div>
    <v-container>
      <transition name="fade">
        <v-row justify="center">
          <v-col cols="12" md="10">
            <h3 class="my-3 display-1">My Skills</h3>
            <div class>
              <template v-for="(skill, i) in mySkills" :key="i">
                <v-avatar
                  size="50"
                  color="primary"
                  dark
                  class="mr-2 mb-2"
                  :title="skill.text"
                >
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon large color="white" v-on="on"
                        >mdi-{{ skill.icon }}</v-icon
                      >
                    </template>
                    <span>
                      {{ skill.text }}
                    </span>
                  </v-tooltip>
                </v-avatar>
              </template>
            </div>
          </v-col>
          <v-col cols="12" md="10">
            <h3 class="mt-3 mb-5 display-1">Recent Work</h3>

            <v-list three-line>
              <template v-for="project in projects" :key="project.name">
                <v-list-item
                  :href="project.link"
                  target="_blank"
                  class="pl-0 mb-5"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-uppercase">{{
                      project.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle
                      class="text-primary text-high-emphasis"
                      >{{ project.link }}</v-list-item-subtitle
                    >
                    <v-list-item-subtitle>{{
                      project.about
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
        </v-row>
      </transition>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    showUi: () => {
      return true;
    },
    mySkills() {
      return [
        { text: "Nodejs", icon: "nodejs" },
        { text: "Javascript", icon: "language-javascript" },
        { text: "PHP", icon: "language-php" },
        { text: "Vue", icon: "vuejs" },
        { text: "Firebase", icon: "firebase" },
        { text: "React", icon: "react" },
        { text: "HTML 5", icon: "language-html5" },
        { text: "CSS3", icon: "language-css3" },
        { text: "Wordpress", icon: "wordpress" },
        { text: "Vuetify", icon: "vuetify" },

        { text: "React Native", icon: "android" },
      ];
    },
    projects() {
      return [
        {
          name: "Eazzyhomes",
          link: "https://eazzyhomes.com",
          about:
            "Real estate platform to buy, sell and rent or shortlet properties from anywhere in the world",
        },
        {
          name: "FollowThePromises App",
          link: "https://play.google.com/store/apps/details?id=com.rtla.follow_the_promises",
          about: "FollowThePromises  mobile app for iOS and Android",
        },
        {
          name: "FollowThePromises",
          link: "https://www.followthepromises.org",
          about:
            "FollowThePromises is a citizen led and tech-driven public accountability project by ReadyToLeadAfrica, targeted at measuring the execution of promises by State Governors across the country.",
        },
        {
          name: "A023",
          link: "https://play.google.com/store/apps/details?id=com.ao23.ao23",
          about:
            "Campaign monitoring and election results collation mobile app for Atiku-Okowa campaign organization",
        },
        {
          name: "Artsplit",
          link: "http://artsplit.com/",
          about:
            "ARTSPLIT is an art technology platform that enables you to own and earn from fractions of valuable African artworks and music, all with the common goal of raising the global profile of African artists and art.",
        },
        {
          name: "OCP Africa",
          link: "https://ocp-v2.vercel.app/",
          about: "(On mobile web only)",
        },
        {
          name: "51st ICAN Conference Mobile App",
          link: "https://apps.apple.com/us/app/id1591915451?platform=iphone",
          about: "",
        },

        {
          name: "Guestsmart",
          link: "https://guestsmart.ng",
          about:
            "Simplified customer ordering and reservations for restaurants and hotels",
        },

        {
          name: "Lashr",
          link: "https://getlashr.com",
          about: "Find and book personal services",
        },

        {
          name: "Hotelsmart",
          link: "https://hotelsmart.com.ng",
          about: "Online OTA and Hotel management system",
        },
        {
          name: "Docuhelp",
          link: "https://github.com/godwwinpeace22/docuhelp",
          about:
            "Free and opensource knowledgebase/self-service widget in Javascript with Markdown support.",
        },
        {
          name: "Nigerian cities and attraction",
          link: "https://www.npmjs.com/package/nigerian-cities-and-attractions",
          about:
            "An api to get a comprehensive list of major cities in Nigeria and their attractions",
        },
      ];
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.v-list-item-subtitle {
  opacity: 1 !important;
}
</style>
