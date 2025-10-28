<template>
    <div>
        <h1>Ejemplo Checkbox</h1>
        <form>
            <button @click.prevent="generarCheckbox">Generar boton</button>
            <div v-for="num in numeros" :key="num">
                <input type="checkbox" :value="num" v-model="checkboxSelected" @change.prevent="hacerSuma()"/>
                <label>{{ num }}</label>
            </div>
        </form>
        <h3>La suma es: {{ laSuma }}</h3>
        <h3> {{ checkboxSelected }}</h3>
    </div>
</template>

<script>
    export default {
        name: "SumaCheckbox",
        data(){
            return{
                numeros: [parseInt(Math.random() * 100 + 1), parseInt(Math.random() * 100 + 1), parseInt(Math.random() * 100 + 1)],
                laSuma: 0,
                checkboxSelected: [],
            }
        },
        methods: {
            generarCheckbox(){
                this.numeros.push(parseInt(Math.random() * 100 + 1));
            },
            hacerSuma(){
                this.laSuma = 0;
                for(var num of this.checkboxSelected){
                    this.laSuma += num;
                }
            }
        }
    }
</script>