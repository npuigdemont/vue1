<template>
  <div class="botons">
    <div class="btn-group btn-group-lg" role="group">
    
            <button class="btn col-md-6 btn-secondary btn-lg btn-block" @click="clickAnterior">Anterior</button>
        
            <button class="btn col-md-6 btn-secondary btn-lg btn-block" @click="clickSeguent">Següent</button>
       
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
button{
    height: 60px;
    width: 600px;
}

</style>