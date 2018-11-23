<template>
    <div>
        <b-row>
            <b-col>
                <span :key="index" v-for="(image, index) in lightBox">
                    <b-img thumbnail fluid :src="image.thumbnailUrl" :alt="image.title"></b-img>
                </span>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
  name: "lightbox",
  computed: {
    lightBox: function() {
      return this.$store.state.lightbox;
    },
    foo: function() {
        return 999
    }
  },
};
</script>