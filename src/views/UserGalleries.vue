<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="galleries">
            {{ galleries }}
        </div>
    </div>
</template>
<script>
import {
    photoService
} from './../services/photos.js';

export default {
  name: 'user-galleries',
  props: ['id'],
  data () {
      return {
          loading: false,
          galleries: [],
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
          this.galleries = [];
          this.loading = true;
          photoService.getAlbumsByUser(this.$route.params.id).then(
              (data) => {
                  this.galleries = data;
                  this.loading = false;
              }
          )
      }
  }
}
</script>