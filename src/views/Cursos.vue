<template>
    <div class="cusos">
        <Title msg="Cursos Nuevos"/>
        <Card></Card>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import Card from '@/components/Card.vue'
    
    
    export default {
        name: 'Cursos',
        components: {
            Title,
            Card
        } 
    }
</script>
