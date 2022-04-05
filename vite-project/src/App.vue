<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Escena from '.Escena.vue'
</script>

<template id="Home">
<div>
  <ul>
    <li v-for="(text, index) in textos" :key="index">
      {{text.nom}}
    </li>
  </ul>
<div v-if="mostrar">
  {{missatge}}
</div>
<button @click="ensenya()">Ensenya</button>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
