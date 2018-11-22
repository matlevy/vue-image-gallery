<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="photo">
            {{ photo }}
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
          photo: null,
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
          this.error = this.photo = null;
          this.loading = true;
          photoService.getPhoto(this.$route.params.id).then(
              (data) => {
                  this.photo = data;
                  this.loading = false;
              }
          )
      }
  }
}
</script>