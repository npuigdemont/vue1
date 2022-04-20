

<template>
<div id="fondo"
:style="setBackgroundImage">
        <h1>Benvingut</h1>
         <h2>Informació d'utilitat</h2>
        <p>Clicant al botó de continuar podeu accedir al contingut de la història.</p>
     <button type="button" class="btn btn-outline-info" v-on:click="isHidden = !isHidden">{{ isHidden === true ? "Continuar" : "Amaga" }}</button>
<br>

<br>
<div v-if="!isHidden">
    <botons @canviaFrase ="canviaFrase"></botons>



  <Escena :msg="text.txt" v-for="(text, id) in textos"
  :key="id"
  :image="text.img"
  :text="text.txt"
  :class="{active: id === num}"
  
  >  </Escena>
  </div>
  </div>
  
   
  </template>

  

<script>
    import Botons from './botons.vue';
    import Escena from './Escena.vue';
    import {ref} from 'vue';
    

export default {
    components: {
        Escena,
        Botons,
        
    },
    name: "Home",
    data() {
        return {
            value: true,
            num: 0,
            activeItem: 0,
            textos: [
             {
        id: 1,
        img: "/1.jpg",
        txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial. "
    },
    {
        id: 2,
        img: "/2.jpg",
        txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes. "
    },
    {
        id: 3,
        img: "/3.jpg",
        txt: "L'heroi va decidir travessar la porta que el portava a casa. "
    },
    {
        id: 4,
        img: "/4.jpg",
        txt: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
    }
            ],
            isHidden: false
            
        }
        
    },
    setup() {
            const images = ref([
            {
        id: 1,
        img: "/1.jpg",
        txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial. "
    },
    {
        id: 2,
        img: "/2.jpg",
        txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes. "
    },
    {
        id: 3,
        img: "/3.jpg",
        txt: "L'heroi va decidir travessar la porta que el portava a casa. "
    },
    {
        id: 4,
        img: "/4.jpg",
        txt: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
    }
            ])
            return {images}
        },

    methods: {
        canviaFrase(data) {
            this.num = data;
        },
        toggle(){
            this.mostrar = !this.mostrar;
        }
    },
    computed: {
        setBackgroundImage: function() {
            return { 'background-image': 'url("' + this.textos.img + '")' };
        }
    }
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
#fondo{
   width: 100%;
   height: 100%;
   position: fixed;
   background-size: 100% 100%;
}
h1 {
color: white;
letter-spacing: 2px;
text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
}
h2 {
color: white;
letter-spacing: 2px;
text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
}
p {
color: white;
letter-spacing: 2px;
text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
}

</style>
  