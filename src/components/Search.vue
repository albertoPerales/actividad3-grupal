<template>
  <div class="buscador-contenedor">
    <input
      type="text"
      v-model="inputValue"
      placeholder="Buscar actividad..."
      class="busqueda"
    />
    <select
          v-model="inputCategory"
          class="selectorCategoria">
          <option value="">Todas las categorías</option>
          <option value="bienestar">Bienestar</option>
          <option value="gastronomia">Gastronomía</option>
          <option value="arte">Arte</option>
          <option value="aventura">Aventura</option>
          <option value="cultura">Cultura</option>
        </select>
        <input
          type="number"
          v-model="inputPrice"
          placeholder="Precio máximo"
          class="precioMax"
        />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  searchTerm: String,
  selectedCategory: String,
  maxPrice: [Number, String]
});

const emit = defineEmits(['update:searchTerm', 'update:selectedCategory', 'update:maxPrice']);


const inputValue = computed({
  get: () => props.searchTerm,
  set: (val) => emit('update:searchTerm', val)
});

const inputCategory = computed({
  get: () => props.selectedCategory,
  set: (val) => emit('update:selectedCategory', val)
});

const inputPrice = computed({
  get: () => props.maxPrice,
  set: (val) => emit('update:maxPrice', val)
});
</script>

<style scoped>
.buscador-contenedor {
    width: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.busqueda, .selectorCategoria, .precioMax{
    width: 30%;
    height: 35px;
    padding-left: 10px;
    border: 1px solid var(--color-primario); 
    border-radius: 5px;
    color: var(--color-texto-secundario);
}
</style>
