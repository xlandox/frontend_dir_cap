<template>
    <div class="login">
        <Title msg="Iniciar Sesión"/>
        <Sesion></Sesion>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import Sesion from '@/components/Sesion.vue'

    export default {
        name: 'Login',
        components: {
            Title,
            Sesion
        }
    }
</script>