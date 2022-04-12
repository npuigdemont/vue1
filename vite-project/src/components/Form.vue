<template>
    <div>
        <p>{{name}}</p>
        <input ref="el" type="text" placeholder="Nom" v-model="name"/>
        <div>
            <button
             @click="submitForm"
             v-bind:disabled="name.length == 0"
             >Envia</button>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
export default {
    setup (){
        const name = ref('')
        const el = ref()

        const submitForm = ()=> {
            console.log(`Formulari enviat! Nom = ${name.value}`)
        }
        
        onMounted(()=>{
            el.value.focus()
        } )
        return {
            el,
            name,
            submitForm,
            }
    }
}

</script>

<style scoped>
input[type='text'] {
    padding: 7px;
}

button {
    margin-top: 15px;
}
</style>