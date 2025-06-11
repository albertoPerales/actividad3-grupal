<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'

</script>

<template>
  <Header />

  <main>
    <router-view /> 
  </main>

  <Footer />
</template>

