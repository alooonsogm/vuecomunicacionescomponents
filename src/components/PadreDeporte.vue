<template>
    <div>
        <h1 style="color:blue">Padre deportes</h1>
        <h2 style="background-color: yellow;" v-if="favorito">Su deporte favorito es: {{ favorito }}</h2>
        <ul>
            <li v-for="deport in deportes" :key="deport">
                <HijoDeporte :nombredeporte="deport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'
    export default{
        name: "PadreDeporte",
        components: {
            HijoDeporte
        },
        data(){
            return {
                deportes: ["Curling", "Futbol", "Bolos", "Padel"],
                favorito: null,
            }
        },
        methods: {
            seleccionarFavoritoParent(deporteFavorito){
                console.log("Yo soy tu padre");
                this.favorito = deporteFavorito
            }
        }
    }
</script>