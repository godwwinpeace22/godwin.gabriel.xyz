<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
      dark
      style="background-color: rgb(36, 59, 70)"
    >
      <div class="mx-auto mt-12" style="width: 110px; height: 110px">
        <v-avatar size="110" color="primary" class="text-white">
          <v-img
            src="https://res.cloudinary.com/unplugged/image/upload/c_thumb,w_250,g_face/v1580219428/profile.jpg"
            alt="alt"
          />
          <!-- <span>GG</span> -->
        </v-avatar>
      </div>

      <div>
        <div class="text-center">
          <div class="title text-white mt-4 font-weight-bold">
            Godwin Gabriel
          </div>
          <div class="text-grey">Software Engineer</div>
        </div>
      </div>

      <div class="mt-5 px-md-5" id="menu-items">
        <v-divider></v-divider>
        <template v-for="item in menu_items" :key="item.name + 'm'">
          <div
            class="text-white text-center font-weight-light py-1 text-uppercase"
          >
            <router-link
              :class="[
                $route.path == item.link
                  ? 'text-primary font-weight-bold'
                  : 'text-white',
              ]"
              :to="item.link"
              >{{ item.name }}</router-link
            >
          </div>
          <v-divider></v-divider>
        </template>
        <div class="d-inline-b mt-5 text-center">
          <template v-for="(item, i) in icons" :key="item.name">
            <v-btn
              icon
              color="white"
              size="small"
              variant="outline"
              :class="[{ 'mr-3': i < icons.length }]"
              :href="item.link"
              target="blank"
            >
              <v-icon small color="grey lighten-2">mdi-{{ item.name }}</v-icon>
            </v-btn>
          </template>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-btn class="hidden-md-and-up" icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <router-view />
      </v-container>
    </v-main>

    <!-- <v-footer
      app
    >
      <span>&copy; 2020</span>
		</v-footer>-->
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      miniVariant: false,
      title: "Welkome",
      menu_items: [
        { name: "home", link: "/" },
        { name: "portfolio", link: "/portfolio" },
        { name: "blog", link: "" },
        { name: "contact", link: "/contact" },
      ],
      icons: [
        { name: "linkedin", link: "https://linkedin.com/in/godwin-gabriel" },
        { name: "twitter", link: "https://twitter.com/godwinpeace22" },
        { name: "github", link: "https://github.com/godwwinpeace22" },
        { name: "email", link: "mailto:godwinpeace22@gmail.com" },
      ],
    };
  },
};
</script>
<style>
#menu-items a {
  text-decoration: none;
}

.linkified {
  cursor: pointer;
}

a {
  text-decoration: none;
}
a:hover {
  color: cornflowerblue;
}
</style>
