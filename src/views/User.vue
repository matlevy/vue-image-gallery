<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <b-row v-if="user">
            <b-col sm="12" md="3">
                <user-card :user="user" class="user-card"/>
            </b-col>
            <b-col sm="12" md="9">
                <router-view/>
            </b-col>
        </b-row>
    </div>
</template>

<style lang="scss">
    .user-card {
        width: 100%;
    }
</style>

<script>
import UserCard from "@/components/UserCard.vue";
import {
    userService
} from './../services/users.js';

export default {
  name: 'user',
  props: ['id'],
  data () {
      return {
          loading: false,
          user: null,
          error: null
      }
  },
  created () {
    this.fetch();
  },
  components: {
      UserCard
  },
  watch: {
    '$route': 'fetch'
  },
  methods: {
      fetch() {
          this.error = this.user = null;
          this.loading = true;
          userService.getUser(this.$route.params.id).then(
              (data) => {
                  this.user = data;
                  this.loading = false;
              }
          )
      }
  }
}
</script>
