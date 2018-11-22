<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="galleries" class="gallery-grid">
            <gallery-card
                v-for="(gallery, index) in galleries" v-bind:key="index"
                :gallery="gallery"
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
import GalleryCard from "@/components/GalleryCard.vue";
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
  components: {
      GalleryCard
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