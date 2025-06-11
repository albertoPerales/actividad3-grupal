<template>
  <nav>
    <RouterLink to="/">
      <img :src="logo" alt="Logo" class="logo" />
    </RouterLink>
    <RouterLink to="/activities">Actividades</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import logo from '../assets/logo.png'
</script>

<style scoped>
nav {
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  height: 40px;
  width: auto;
  margin-right: 1rem;
}

nav a {
  color: var(--color-primario);
  text-decoration: none;
  margin-right: 1rem;
  font-weight: 600;
}

nav a:hover {
  color: var(--color-acento);
  text-decoration: underline;
}
</style>
