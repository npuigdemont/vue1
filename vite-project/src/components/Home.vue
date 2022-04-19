

<template>
<div>
     
        <h1>Benvingut</h1>
         <h2>Informació d'utilitat</h2>
        <p>Clicant al botó de continuar podeu accedir al contingut de la història.</p>
     <button type="button" class="btn btn-outline-info" v-on:click="isHidden = !isHidden">{{ isHidden === true ? "Mostrar" : "Amaga" }}</button>
<br>
<Toggle v-model="value" />
<br>
<div v-if="!isHidden">
    <botons @canviaFrase ="canviaFrase"></botons>

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
    import Toogle from '@vueform/toggle'

export default {
    components: {
        Escena,
        Botons,
       Toogle
    },
    name: "Home",
    data() {
        return {
            value: true,
            num: 0,
            activeItem: 0,
            textos: [
            "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
            "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
            "L'heroi va decidir travessar la porta que el portava a casa",
            "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
            ],
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
Toogle {
    src:"@vueform/toggle/themes/default.css"
}
</style>
  