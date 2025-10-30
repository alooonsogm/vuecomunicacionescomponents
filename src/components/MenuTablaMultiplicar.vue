<template>
    <ul id="menu">
        <li v-for="num in numeros" :key="num">
            <router-link :to="'/tabla/' + num">Tabla Multiplicar {{num}}</router-link> |
        </li>
    </ul>
</template>

<script>
    export default {
        name: "MenuTablaMultiplicar",
        data () {
            return {
                numeros: []
            }
        },
        mounted(){
            for(var x=0; x<5; x++){
                this.numeros.push(parseInt(Math.random() * 100) + 1);
            }
        }
    }
</script>

<style>
    #menu li {
        display: inline;
    }
</style>