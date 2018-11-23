<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <b-row v-if="users">
            <b-col>
                <b-row>
                    <b-col>
                        <b-form-input v-model="userSearchTerm"
                            type="text"
                            placeholder="Enter your search term">
                        </b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="gallery-grid">
                        <user-card
                            v-for="(user, index) in filteredUsers" v-bind:key="index"
                            :user="user"
                        />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
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
          error: null,
          userSearchTerm: ''
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
  computed: {
      filteredUsers: function() {
        return this.users.filter( v => String(v.name).toLowerCase().includes(this.userSearchTerm.toLowerCase()) );      
      }
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
