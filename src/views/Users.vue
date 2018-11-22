<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="users" class="gallery-grid">
            <b-card 
                :title="user.name"
                v-for="(user, index) in users" v-bind:key="index"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="m-2">
                <p class="card-text">
                    {{user.email}}
                </p>
                <router-link :to="{ name: 'user', params: { id: user.id }}"><b-button variant="primary">View</b-button></router-link>
            </b-card>
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
