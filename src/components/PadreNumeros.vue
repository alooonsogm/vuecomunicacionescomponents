<template>
    <div>
        <h1 style="color: red;">Padre Numeros</h1>
        <h2 style="color: blue;">La suma es: {{ laSuma }}</h2>
        <button @click="nuevoNumero">Nuevo Numero</button>
        <div v-for="num in numeros" :key="num">
            <HijoNumeros :valor="num" v-on:hacerSumaPadre="hacerSumaPadre"/>
        </div>
    </div>
</template>

<script>
import HijoNumeros from './HijoNumeros.vue';
    export default {
        name: "PadreNumeros",
        components: {
            HijoNumeros
        },
        data(){
            return{
                numeros: [parseInt(Math.random() * 100 + 1), parseInt(Math.random() * 100 + 1), parseInt(Math.random() * 100 + 1)],
                laSuma: 0
            }
        },
        methods: {
            nuevoNumero(){
                this.numeros.push(parseInt(Math.random() * 100 + 1));
            },
            hacerSumaPadre(numero){
                this.laSuma = this.laSuma + parseInt(numero);
            }
        }
    }
</script>