<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <b-row v-if="photos">
            <b-col>
                <b-row>
                    <b-col>
                        <b-form-input v-model="imageSearchTerm"
                            class="mb-3"
                            type="text"
                            placeholder="Enter your search term">
                        </b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <router-link  :key="index" v-for="(image, index) in filteredPhotos" :to="{ name: 'user-photo', params: { photoId: image.id }}">
                            <b-img thumbnail fluid :src="image.thumbnailUrl" :alt="image.title" class="m-1"></b-img>
                        </router-link>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { photoService } from "./../services/photos.js";

export default {
  name: "user-galleries",
  props: ["id"],
  data() {
    return {
      loading: false,
      photos: [],
      error: null,
      imageSearchTerm: ''
    };
  },
  created() {
    this.fetch();
  },
  watch: {
    $route: "fetch"
  },
  computed: {
      filteredPhotos: function() {
          return this.photos.filter( v => v.title.toLowerCase().includes(this.imageSearchTerm.toLowerCase()) );
      }
  },
  methods: {
    fetch() {
      this.error = null;
      this.photos = [];
      this.loading = true;
      photoService.getAlbumPhotos(this.$route.params.id).then(data => {
        this.photos = data;
        this.loading = false;
      });
    }
  }
};
</script>