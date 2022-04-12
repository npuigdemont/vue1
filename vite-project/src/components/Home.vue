

<template>
<div>
    <botons @canvia ="canviaFrase"></botons>

  <Escena :msg="text" v-for="(text, index) in textos"
  :key="index"
  :text="text"
  :class="{active: index === num}"
  >
  
  </Escena>
  
  </div>
  </template>

  

<script>
    import Botons from './botons.vue';
    import Escena from "./Escena.vue";
  

export default {
    components: {
        'Escena': Escena,
        Botons
    },
    name: "Home",
    data() {
        return {
            num: 0,
            activeItem: 0,
            textos: [
            "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
            "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
            "L'heroi va decidir travessar la porta que el portava a casa",
            "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
            ]
        }
    },
    methods: {
        canviaFrase(data) {
            this.num = data;
        }
    },
    }
    
</script>

<style scoped>
    .active
{
  background: rgba(204, 127, 192, 0.95);
}
</style>
  