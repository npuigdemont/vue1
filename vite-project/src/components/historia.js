Vue.component('historia', {
    props: ['img', 'txt'],
    template: `
    <div v-for='item of 
    :key='key'
    :style='{background-image: url("item.img"}'>
    </div>
    `
})
[
    {
        "img": "/1.jpg",
        "txt": "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial. "
    },
    {
        "img": "/2.jpg",
        "txt": "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes. "
    },
    {
        "img": "/3.jpg",
        "txt": "L'heroi va decidir travessar la porta que el portava a casa. "
    },
    {
        "img": "/4.jpg",
       "txt": "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
    }
]