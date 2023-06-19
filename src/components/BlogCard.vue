<template>
  
  <v-card :min-height="height" outlined>
    <v-img 
      src="./sunset-pool.jpg"
      lazy-src="./sunset-pool.jpg"
      width="100%" 
      height="50%"
      class="grey lighten-2 linkified"
      @click="$router.push(`/blog/${post.slug}`)"
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
    <v-card-title class="text-uppercase">
      <router-link :to="`/blog/${post.slug}`">
        {{post.title}}
      </router-link>
    </v-card-title>
    <v-card-text>
      {{post.excert}}
    </v-card-text>
    <v-subheader class="text-uppercase">
      {{post.date_created}}
    </v-subheader>
  </v-card>
 
</template>

<script>
export default {
  props: {
    post: {
      required: true
    },
    height: {
      default: '450'
    }
  }
}
</script>

<style>

</style>