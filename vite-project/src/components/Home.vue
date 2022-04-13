

<template>
<div>
     
        <h1>Benvingut</h1>
         <h2>Informació d'utilitat</h2>
        <p>Clicant al botó de continuar podeu accedir al contingut de la història.</p>
     <button type="button" class="btn btn-outline-info" v-on:click="isHidden = !isHidden">{{ isHidden === true ? "Mostrar" : "Amaga" }}</button>
<br>


    <botons @canviaFrase ="canviaFrase"></botons>
<div v-if="!isHidden">
  <Escena :msg="text" v-for="(text, index) in textos"
  :key="index"
  :text="text"
  :class="{active: index === num}"
  >  </Escena>
  </div>
  </div>
  
   
  </template>

  

<script>
    import Botons from './botons.vue';
    import Escena from './Escena.vue';
    

export default {
    components: {
        Escena,
        Botons,
       
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
            "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
            ],
            mostrar: false,
            isHidden: false
            
        }
    },
    methods: {
        canviaFrase(data) {
            this.num = data;
        },
        toggle(){
            this.mostrar = !this.mostrar;
        }
    },
    }
    
</script>

<style scoped>
    .active
{
  background: rgba(204, 127, 192, 0.95);
}
button {
    margin: 2%;
    padding: 2%;
 
}
</style>
  