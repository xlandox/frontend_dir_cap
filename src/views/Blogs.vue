<template>
    <div class="blogs">
        <Title msg="Blogs"/>
        <CardImage></CardImage>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import CardImage from '@/components/CardImage.vue'

    export default {
        name: 'Blogs',
        components: {
            Title,
            CardImage
        }
    }
</script>