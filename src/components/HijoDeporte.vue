<template>
    <div>
        <h1 style="color: red">Hijo deporte - {{nombredeporte}}</h1>
    </div>
</template>

<script>
    export default{
        name: "HijoDeporte",
        props: ["nombredeporte"],
    }
</script>