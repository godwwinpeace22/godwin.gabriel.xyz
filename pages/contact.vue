<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="display-1 font-weight-bold">CONTACT</h1>
        <v-divider></v-divider>
        <v-card flat>
          <p class="mt-4">Fill in the form below to get in touch</p>
          <v-form>
            <v-card-text class="pl-0">
              <v-text-field
                name="name"
                label="Your Name*"
                outlined
              ></v-text-field>
              <v-text-field
                name="email"
                label="Email*"
                outlined
              ></v-text-field>
              <v-textarea
                name="message"
                label="Your Message*"
                outlined
                rows="8"
              ></v-textarea>
            </v-card-text>

            <v-card-actions>
              <v-btn 
                color="info"
                depressed
                large
                type="submit"
              >Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>