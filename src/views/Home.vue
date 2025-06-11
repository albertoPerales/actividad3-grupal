<template>
  <div class="home-banner">
    <h1>Outdoor Adventure</h1>
    <p>Descubre experiencias al aire libre y deportivas</p>
    <RouterLink to="/activities">
      <BaseButton>Ver ahora</BaseButton>
    </RouterLink>
  </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-banner {
  background-image: url("https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;
  background-position: center;
  min-height: 70vh;
  color: white;
  text-align: center;
  padding-top: 8rem;
}
</style>
