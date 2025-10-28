<template>
    <div>
        <h1>{{ comic.titulo }}</h1>
        <button @click="elFavorito">Favorito comic</button>
        <button @click="deleteComic">Eliminar comic</button>
        <p>{{ comic.descripcion }}</p>
        <img :src="comic.imagen" alt="foto"/>
        <h4 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }"
        >Año: {{ comic.year }}</h4>
    </div>
</template>

<script>
    export default {
        name: "ComicComponent",
        props: ["comic", "index"],
        methods: {
            elFavorito(){
                this.$emit("seleccionarFavorito", this.comic)
            },
            deleteComic(){
                this.$emit("eliminarComic", this.index)
            }
        }
    }
</script>

<style>
    @import './../assets/css/comics.css';
</style>