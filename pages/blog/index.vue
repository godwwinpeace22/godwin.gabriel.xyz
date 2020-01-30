<template>
  
  <v-container grid-list-xs>
   
    <v-row>
      <v-subheader v-if="blogPosts.length == 0">No recent posts</v-subheader>
      <v-col cols="12" md="6" v-for="(post,i) in blogPosts" :key="i">
        <blog-card :post="post"/>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
export default {
  computed: {
    blogPosts() {
      let posts = [...this.$store.state.blogPosts]
      return posts
      .sort((a,b) => a.date_created - b.date_created)
      .map(item => {
        let d = new Date(item.date_created)
        
        return {
          ...item,
          date_created: d.toLocaleString('en-Us', {
            month: 'short', 
            day: 'numeric', 
            year: 'numeric'
          })
        }
      })
    },
  },
  components: {
    BlogCard,
  },
}

import BlogCard from '@/components/BlogCard.vue'
</script>

<style>
  
</style>