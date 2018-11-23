<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="photos">
            <b-img :key="index" v-for="(image, index) in photos" thumbnail fluid :src="image.thumbnailUrl" :alt="image.title"></b-img>
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
          photos: [],
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
          this.photos = [];
          this.loading = true;
          photoService.getAlbumPhotos(this.$route.params.id).then(
              (data) => {
                  this.photos = data;
                  this.loading = false;
              }
          )
      }
  }
}
</script>