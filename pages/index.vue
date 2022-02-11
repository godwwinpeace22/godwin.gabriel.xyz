<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="10" class="mt-md-8">
      <div class="display-2">Hi, I'm Godwin</div>
      <p class="hero-text mt-5">I solve problems with code.</p>
    </v-col>

    <v-col cols="12" md="10">
      <h3 class="mt-8">ABOUT</h3>
      <v-divider></v-divider>
      <v-card flat class="mt-2">
        <v-card-text class="pl-0 title">
          {{ about_me }}
        </v-card-text>
        <v-card-actions class="pl-0">
          <v-btn color="info" large depressed to="/contact">Contact Me</v-btn>
          <v-btn color="teal" dark class="ml-3" large depressed to="/portfolio"
            >My Recent Work</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col md="10">
      <h3 class="mt-8">RECENT POSTS</h3>
      <v-divider></v-divider>
      <v-row class="mt-5">
        <v-col cols="12" sm="6" v-for="(post, i) in recentPosts" :key="i + 'm'">
          <blog-card :post="post" />
        </v-col>
      </v-row>
      <v-btn color="info" depressed large to="/blog" class="mt-10"
        >View Blog</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    limit_posts: 4,
    about_me: `I am a full-stack engineer with a flare for design. I like to build awesome software from small business websites to rich interactive web apps. Need a website or a mobile app? Contact me! 
      When not coding I enjoy playing the piano and meeting new people.`,
  }),
  computed: {
    blogPosts() {
      let posts = [...this.$store.state.blogPosts];
      return posts
        .sort((a, b) => a.date_created - b.date_created)
        .map((item) => {
          let d = new Date(item.date_created);

          return {
            ...item,
            date_created: d.toLocaleString("en-Us", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          };
        });
    },
    recentPosts() {
      return this.blogPosts.slice(0, 4);
    },
  },
  components: {
    BlogCard,
  },
};

import BlogCard from "@/components/BlogCard.vue";
</script>

<style>
.hero-text {
  font-size: 1.3rem;
  line-height: 1.5;
}
</style>
