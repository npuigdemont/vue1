const Escena = new Vue ({
    el: '#app',
    template: '#Home',
    data: {
        textos: [
            {nom: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"}
            {nom: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."}
            {nom: "L'heroi va decidir travessar la porta que el portava a casa"}
            {nom: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."}
        ],
        mostrar: true,
        missatge: "Funciona!"
    },
    methods: {
        ensenya: function(){
            this.mostrar = !this.mostar
        }
    }


})