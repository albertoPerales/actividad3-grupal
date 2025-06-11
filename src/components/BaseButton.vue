<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script setup>
</script>

<style scoped>
.base-button {
  background-color: var(--color-primario);
  color: var(--color-fondo);
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s ease, background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.base-button:hover {
  background-color: var(--color-acento);
  transform: scale(1.05);
}
</style>
