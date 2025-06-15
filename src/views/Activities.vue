<template>
  <div class="activities-page">
    <h1 class="titulo">Actividades Disponibles</h1>

    <Search
      v-model:searchTerm="searchTerm"
      v-model:selectedCategory="selectedCategory"
      v-model:maxPrice="maxPrice"
    />

    <div v-if="loading">Cargando...</div>

    <div v-else class="activity">
      <ActivityCard
        v-for="actividad in actividadesFiltradas"
        :key="actividad.activity_id"
        :activity="actividad"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Search from '../components/Search.vue'
import ActivityCard from '../components/ActivityCard.vue'
import {fetchActivities} from '../services/activityService.js'

const searchTerm = ref('')
const selectedCategory = ref('')
const maxPrice = ref('')

const actividades = ref([])
const loading = ref(true)

const cargarActividades = async () => {
  loading.value = true;
  try {
    actividades.value = await fetchActivities();
  } catch (error) {
    console.error("Error al cargar actividades:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  cargarActividades();
});

const actividadesFiltradas = computed(() => {
  return actividades.value.filter(actividad => {
    const nameMatch = actividad.name.toLowerCase().includes(searchTerm.value.toLowerCase());
    const categoryMatch = selectedCategory.value ? actividad.category === selectedCategory.value : true;
    const priceMatch = maxPrice.value ? actividad.price <= Number(maxPrice.value) : true;
    return nameMatch && categoryMatch && priceMatch;
  });
});

console.log(actividadesFiltradas.value);

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
  color: black;
}

.activity {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
