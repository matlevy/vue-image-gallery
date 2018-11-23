<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="photo" class="photo">
            <b-img :src="photo.url" fluid :alt="photo.title" />
            <h1 class="photo-title">{{ photo.title }}</h1>
            <b-button v-on:click="addToLightBox" variant="primary" class="mt-3 mr-3">Add To LightBox</b-button>
            <b-button v-on:click="removeFromLightBox" variant="primary" class="mt-3 mr-3">Remove From LigthBox</b-button>
            <b-button target="_blank" :href="photo.url" variant="secondary" class="mt-3 mr-3">Download</b-button>
            <router-link :to="{ name: 'user-photos', params: { gallery: photo.albumId }}"><b-button variant="secondary" class="mt-3 mr-3">View Gallery</b-button></router-link>
        </div>
    </div>
</template>
<style lang="scss">
    .photo {
        text-align: left;
    }
    .photo-title {
        margin-top: 1em;
        color: white;
    }
</style>

<script>

import {
    lightbox
} from './../events/lightbox.js';

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
          photoService.getPhoto(this.$route.params.photoId).then(
              (data) => {
                  this.photo = data;
                  this.loading = false;
              }
          )
      },
      addToLightBox() {
          this.$store.dispatch(lightbox.LIGHTBOX_ADD, this.photo);
      },
      removeFromLightBox() {
          this.$store.dispatch(lightbox.LIGHTBOX_REMOVE, this.photo);
      }
  }
}
</script>