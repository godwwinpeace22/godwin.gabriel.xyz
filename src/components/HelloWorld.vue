<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="10" class="mt-md-8">
      <div class="text-h3">Hi, I'm Godwin</div>
      <p class="hero-text mt-5">I solve problems with code.</p>
    </v-col>

    <v-col cols="12" md="10">
      <h3 class="mt-8">ABOUT</h3>
      <v-divider></v-divider>
      <v-card flat class="mt-2">
        <v-card-text class="pl-0 text-body-1 text-medium-emphasis">
          {{ about_me }}
        </v-card-text>
        <v-card-actions class="pl-0">
          <router-link to="/contact">
            <v-btn color="info" variant="flat" large depressed
              >Contact Me</v-btn
            >
          </router-link>

          <router-link to="/portfolio">
            <v-btn color="teal" dark class="ml-3" large depressed
              >My Recent Work</v-btn
            >
          </router-link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    limit_posts: 4,
    about_me: `I am a full-stack engineer with a flare for design. I like to build awesome software from small business websites to rich interactive web apps. Need a website or a mobile app? Contact me! 
      When not coding I enjoy playing the piano and meeting new people.`
  }),
  computed: {
    blogPosts() {
      let posts = [...this.$store.state.blogPosts];
      return posts
        .sort((a, b) => a.date_created - b.date_created)
        .map(item => {
          let d = new Date(item.date_created);

          return {
            ...item,
            date_created: d.toLocaleString("en-Us", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          };
        });
    },
    recentPosts() {
      return this.blogPosts.slice(0, 4);
    }
  }
};
</script>

<style>
.hero-text {
  font-size: 1.3rem;
  line-height: 1.5;
}
.body-text {
  font-size: 1.3rem;
  line-height: 1.5;
}
</style>
