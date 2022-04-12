

<template>
<div class="escena justify-content-center">
  {{msg}}
 </div>
  </template>

<script>
export default {
    data(){return{};},
    name: "Escena", 
    props: {
        msg: Object
    }
};

</script>

<style scoped>
    h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.escena
{
margin: 25px;
border: 1px solid #000000;
border-radius: 20px;
padding: 10px;
background: rgba(247, 241, 241, 0.95);
}

</style>


