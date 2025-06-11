<template>
  <div class="activities-page">
    <h1 class="titulo">Actividades Disponibles</h1>

    <Search v-model="searchTerm" />

    <div class="activity">
      <ActivityCard
        v-for="actividad in actividadesFiltradas"
        :key="actividad.activity_id"
        :activity="actividad"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Search from '../components/Search.vue'
import ActivityCard from '../components/ActivityCard.vue'

const searchTerm = ref('')

const actividades = ref([
  {
    activity_id: 1,
    name: 'Senderismo en la montaña',
    short_description: 'Una experiencia en plena naturaleza.',
    images: ['https://images.pexels.com/photos/552958/pexels-photo-552958.jpeg']
  },
  {
    activity_id: 2,
    name: 'Clase de cocina italiana',
    short_description: 'Aprende a preparar auténtica pasta casera.',
    images: ['https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg']
  },
  {
    activity_id: 3,
    name: 'Visita guiada a museo de arte',
    short_description: 'Explora obras de arte clásicas y modernas.',
    images: ['https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg']
  }
])

const actividadesFiltradas = computed(() =>
  actividades.value.filter((actividad) =>
    actividad.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
</script>

<style scoped>
.activities-page {
  padding: 2rem;
}

.titulo {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}

.activity {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
