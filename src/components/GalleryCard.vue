<template>
    <b-card 
        :img-src="`https://picsum.photos/350/160/?${gallery.id}`"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="m-2 gallery-card">
        <p class="copy">{{gallery.title}}</p>
        <router-link :to="{ name: 'gallery-photos', params: { id: gallery.id }}"><b-button block="true" variant="primary">View Images</b-button></router-link>
    </b-card>
</template>

<style lang="scss">
    .gallery-card {
        .copy {
            min-height: 50px;
        }
    }
</style>


<script>
export default {
  name: 'gallery-card',
  props: ['gallery'],
}
</script>