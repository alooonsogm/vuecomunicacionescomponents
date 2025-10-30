<template>
    <div>
        <h1>Tabla Multiplicar {{ this.$route.params.numero }}</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in tabla" :key="result">
                    <td>{{ result.operacion }}</td>
                    <td>{{ result.resultado }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            tabla: []
        }
    },
    mounted() {
        for (var x = 1; x <= 10; x++) {
            var objetoTabla = {
                operacion: this.$route.params.numero + " * " + x,
                resultado: parseInt(this.$route.params.numero) * x
            }
            this.tabla.push(objetoTabla);
        }
    },
    watch: {
        '$route.params.numero'(nextVal, oldVal) {
            if (nextVal != oldVal) {
                this.tabla = [];
                for (var x = 1; x <= 10; x++) {
                    var objetoTabla = {
                        operacion: this.$route.params.numero + " * " + x,
                        resultado: parseInt(this.$route.params.numero) * x
                    }
                    this.tabla.push(objetoTabla);
                }
            }
        }
    }
}
</script>