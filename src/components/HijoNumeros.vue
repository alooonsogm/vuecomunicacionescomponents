<template>
    <div>
        <h1>Numero hijo: {{ valor }}</h1>
        <button @click="hacerSuma">Sumar {{ valor }}</button>
    </div>
</template>

<script>
    export default{
        name: "HijoNumeros",
        props: ["valor"],
        methods: {
            hacerSuma(){
                this.$emit("hacerSumaPadre", this.valor);
            }
        }
    }
</script>