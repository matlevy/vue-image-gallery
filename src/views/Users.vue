<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="users" class="gallery-grid">
            <user-card
                v-for="(user, index) in users" v-bind:key="index"
                :user="user"
            />
        </div>
    </div>
</template>

<style lang="scss">
    .gallery-grid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
</style>


<script>
import UserCard from "@/components/UserCard.vue";
import {
    userService
} from '@/services/users.js';

export default {
  name: 'users',
  props: ['id'],
  data () {
      return {
          loading: false,
          users: [],
          error: null
      }
  },
  created () {
    this.fetch();
  },
  watch: {
    '$route': 'fetch'
  },
  components: {
      UserCard
  },
  methods: {
      fetch() {
          this.error = null;
          this.users = [];
          this.loading = true;
          userService.getAll().then(
              (data) => {
                  this.users = data;
                  this.loading = false;
              }
          )
      }
  }
}
</script>
