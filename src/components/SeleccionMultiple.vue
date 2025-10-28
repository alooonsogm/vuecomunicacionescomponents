<template>
    <div>
        <h1>Selección multiple</h1>
        <form>
            <select v-model="seleccion" multiple @change.prevent="quitarSeleccionado">
                <option v-for="num in 8" :key="num" :value="'Elemento '+ num">Elemento {{ num }}</option>
            </select>
            <button @click.prevent="mostrarSeleccionado">Mostrar Seleccionados</button>
        </form>
        <h3 style="color: blue;" v-if="status == false">{{ seleccion.join(", ") }}</h3>
    </div>
</template>

<script>
    export default {
        name: "SeleccionMultiple",
        data(){
            return {
                seleccion: [],
                status: true,
            }
        },
        methods: {
            mostrarSeleccionado(){
                this.status = false
            },
            quitarSeleccionado(){
                this.status = true
            }
        }
}
</script>