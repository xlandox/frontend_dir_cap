<template>
    <div class="noticias">
        <Title msg="Noticias"/>
        <CardRight></CardRight>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import CardRight from '@/components/CardRight.vue'

    export default {
        name: 'Noticias',
        components: {
            Title,
            CardRight
        }
    }
</script>