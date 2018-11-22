<template>
    <b-card 
        :title="user.name"
        :img-src="`https://picsum.photos/600/300/?image=${user.id}`"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="m-2">
        <p class="card-text">
            {{user.email}}
        </p>
        <p><router-link :to="{ name: 'user-gallery', params: { id: user.id }}"><b-button :block="true" variant="primary">View Gallery</b-button></router-link></p>
        <router-link :to="{ name: 'user-details', params: { id: user.id }}"><b-button :block="true" variant="secondary">Contact</b-button></router-link>
    </b-card>
</template>

<script>
export default {
  name: 'user-card',
  props: ['user'],
}
</script>