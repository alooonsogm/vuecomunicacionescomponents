<template>
  <div>
    <ComicsComponent/>
  </div>
</template>

<script>
//import PadreDeporte from './components/PadreDeporte.vue'
//import PadreNumeros from './components/PadreNumeros.vue';
import ComicsComponent from './components/ComicsComponent.vue';

export default {
  name: 'App',
  components: {
    //PadreDeporte,
    //PadreNumeros,
    ComicsComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
