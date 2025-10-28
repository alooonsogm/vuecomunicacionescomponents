<template>
    <div>
        <h1 style="color: red">Hijo deporte - {{nombredeporte}}</h1>
        <button @click="seleccionarFavorito">Seleccionar favorito</button>
    </div>
</template>

<script>
    export default{
        name: "HijoDeporte",
        props: ["nombredeporte"],
        mounted(){
            console.log("Montado")
        },
        methods: {
            seleccionarFavorito(){
                console.log("Soy el hijo");
                //Para enviar informacion se realiza a partir de la llamada con cada parametro separado con comas, dentro de $emit
                this.$emit("seleccionarFavoritoParent", this.nombredeporte);
            }
        }
    }
</script>