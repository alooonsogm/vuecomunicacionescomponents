<template>
    <ul id="menu">
        <li>
            <router-link to="/">Home</router-link> |
        </li>
        <li>
            <router-link to="/sumacheckbox">Suma de checkbox</router-link> |
        </li>
        <li>
            <router-link to="/seleccionmultiple">Seleccion multiple</router-link> |
        </li>
        <li>
            <router-link to="/numeros">Padre numeros</router-link> |
        </li>
        <li>
            <router-link to="/deporte">Padre deporte</router-link> |
        </li>
        <li>
            <router-link to="/comics">Comics</router-link> |
        </li>
        <li>
            <router-link to="/doble">Numero doble sin parametro</router-link> |
        </li>
        <li v-for="num in numeros" :key="num">
            <router-link :to="'/doble/' + num">Doble {{num}}</router-link> |
        </li>
    </ul>
</template>

<script>
    export default {
        name: "MenuComponent",
        data (){
            return {
                numeros: [23,4,26,13],
            }
        }
    }
</script>

<style>
    #menu li {
        display: inline;
    }
</style>