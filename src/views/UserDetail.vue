<template>
    <div>
        <GmapMap
        :center="{lat:Number(user.address.geo.lat|0), lng:Number(user.address.geo.lng|0)}"
        :zoom="4"
        map-type-id="terrain"
        style="width: 100%; height: 500px"
        ></GmapMap>
        <div class="user-address">
            <address>
            {{ user.address.street }}<br>
            {{ user.address.suite }}<br>
            {{ user.address.city }}<br>
            {{ user.address.zipcode }}<br>
            </address>
            <div>{{user.phone}}</div>
            <div><a :href="`//${user.website}`" target="blank">{{user.website}}</a></div>
        </div>
    </div>
</template>
<style lang="scss">
    .user-address {
        margin-top: 1em;
    }
</style>
<script>

import { userService } from "./../services/users.js";

export default {
  name: "user-detail",
  props: ["id"],
  data() {
    return {
      loading: false,
      user: null,
      error: null
    };
  },
  created() {
    this.fetch();
  },
  watch: {
    $route: "fetch"
  },
  methods: {
    fetch() {
      this.error = null;
      this.user = {
          address: {
              geo: {}
          }
      };
      this.loading = true;
      userService.getUser(this.$route.params.id).then(data => {
        this.user = data;
        this.loading = false;
      });
    }
  }
};
</script>
