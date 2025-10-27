<template>
    <div>
        <h1 style="color:blue">Padre deportes</h1>
        <ul>
            <li v-for="deport in deportes" :key="deport">
                <HijoDeporte :nombredeporte="deport"/>
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
            }
        }
    }
</script>