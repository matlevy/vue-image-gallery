<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="users">
            {{ users }}
        </div>
    </div>
</template>

<script>
import {
    userService
} from './../services/users.js';

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
