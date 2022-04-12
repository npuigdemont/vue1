<template>
  <div class="botons">
    <div class='d-grid gap-2'>
    
            <button class='btn btn-secondary btn-lg mx-auto' @click="clickAnterior">Anterior</button>
        
            <button class='btn btn-secondary btn-lg mx-auto' @click="clickSeguent">Següent</button>
       
    </div>
  </div>
</template>

<script>
export default {
    name: 'botons',
    data() {
        return {
            num: 0
        }
    },
    methods: {
        clickAnterior() {
            if (this.num == 0) {
                this.num = 3;
            } else {
                this.num--;
            }
            this.$emit("canviaFrase", this.num);
        },
        clickSeguent() {
            if (this.num >=0 && this.num < 4) {
                this.num++
            } else {
                this.num = 0;
            }
            this.$emit("canviaFrase", this.num);
        }
    }
}
</script>

<style scoped>
.botons {
    background: rgba(97, 89, 96, 0.95);
}

</style>