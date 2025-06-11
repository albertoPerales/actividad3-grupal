<template>
  <div class="buscador-contenedor">
    <input
      type="text"
      v-model="inputValue"
      placeholder="Buscar actividad..."
      class="busqueda"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

<style scoped>
.buscador-contenedor {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.busqueda {
  width: 50%;
  height: 35px;
  padding-left: 10px;
  border: 1px solid var(--color-primario);
  border-radius: 5px;
  color: var(--color-texto-secundario);
}
</style>
