<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark" :sticky="true">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"><b-button size="sm" variant="warning">LightBox <b-badge>{{ lightBoxSize }}</b-badge></b-button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container id="app">
      <router-view/>
    </b-container>
    <footer>

    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    lightBoxSize: function() {
      return this.$store.getters.lightBoxSize
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  background-color: #2c3e50;
  min-height: 200px;
  margin-top: 20px;
}
</style>
