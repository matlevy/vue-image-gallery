<template>
    <div>
        <b-row>
            <b-col style="text-align:left">
                <b-button v-on:click="emptyLightBox" variant="primary" class="mt-3 mr-3 mb-5">Empty LightBox</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col style="text-align:left">
                <span :key="index" v-for="(image, index) in lightBox">
                    <b-img thumbnail fluid :src="image.thumbnailUrl" :alt="image.title" class="mr-3"></b-img>
                </span>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import {
    lightbox
} from './../events/lightbox.js';

export default {
  name: "lightbox",
  computed: {
    lightBox: function() {
      return this.$store.state.lightbox;
    }
  },
  methods: {
    emptyLightBox() {
      this.$store.dispatch(lightbox.LIGHTBOX_EMPTY);
    }
  }
};
</script>