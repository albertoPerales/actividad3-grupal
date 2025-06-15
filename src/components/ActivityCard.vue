<template>
  <div v-if="activity?.activity_id && activity?.name" class="activity-card">
    <img
      :src="activity.images?.[0]"
      :alt="activity.name"
      class="activity-card-image"
    />
    <div class="activity-card-content">
      <h2 class="activity-card-title">{{ activity.name }}</h2>
      <p class="activity-card-description">
        {{ activity.short_description?.slice(0, 100) || 'Sin descripción.' }}
      </p>
    </div>
  </div>

  <div v-else class="invalid-card">
    Actividad inválida
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  activity: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})
</script>

<style scoped>
.activity-card {
  display: flex;
  align-items: flex-start;
  width: 40vw;
  gap: 12px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.11);
  background-color: #fff;
  margin: 8px auto;
}

.activity-card-image {
  width: 30%;
  height: 130px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 6px;
}

.activity-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.activity-card-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: var(--color-primario);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.activity-card-description {
  font-size: 12px;
  color: var(--color-texto-secundario);
  margin: 0 0 6px 0;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.activity-card-link {
  font-size: 11px;
  font-weight: bold;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  background-color: var(--color-primario);
  border-radius: 5px;
  color: var(--color-fondo);
  text-decoration: none;
  transition: all 0.2s ease;
}

.activity-card-link:hover {
  background-color: var(--color-acento);
  scale: 1.05;
}

.invalid-card {
  padding: 0.5rem;
  border: 1px solid red;
  color: red;
}
</style>
