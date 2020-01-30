<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="mb-5 text-capitalize">{{blogPost.title}}</h1>
        <v-card flat min-height="300">
          <v-img 
            src="../sunset-pool.jpg"
            lazy-src="../sunset-pool.jpg"
            width="100%" 
            height="400"
            class="grey lighten-2 linkified"
            @click="$router.push(`/blog/${blogPost.slug}`)"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text class="pl-0 mt-2 post-body">
            <div v-html="$md.render(blogPost.body)"></div>
          </v-card-text>
          <v-subheader class="pl-0 text-uppercase">
            {{formatDate()}}
          </v-subheader>
        </v-card>
      </v-col>
    </v-row>

    <article>
      
      
    </article>
  </v-container>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      };
  },
  methods: {
    formatDate(){
      let d = new Date(this.blogPost.date_created)
      return d.toLocaleString('en-Us', {
        month: 'short', 
        day: 'numeric', 
        year: 'numeric'
      })
    }
  }
}
</script>

<style>
  .post-body {
    font-size: 1.12rem;
    line-height: 1.38;
  }
</style>





/*{
  "title": "My first blog post",
  "body": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corporis impedit iure, labore nulla, soluta, exercitationem sapiente eveniet eaque aut quide",
  "excert": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corporis impedit iure, labore nulla, soluta, exercitationem sapiente eveniet eaque aut quide",
  "date_created": "2020-1-28",
  "author": "Godwin Gabriel",
  "category": "general",
  "tags": "tag1",
  "slug": "2020-1-28-my-first-blog-post"
}
*/

