<template>
    <div class="home">
        <Carousel></Carousel>
        <Title msg="Cursos Nuevos"/>
        <Card></Card>
        <b-row class="mt-5 mr-5">
            <b-col cols="12" class="d-flex justify-content-end">
                <b-button variant="outline-success" :to="{name:'Cursos'}">Ver más</b-button>
            </b-col>
        </b-row>
        <Title msg="Nuestro Blog"/>
        <CardImage></CardImage>
        <b-row class="mt-5 mr-5">
            <b-col cols="12" class="d-flex justify-content-end">
                <b-button variant="outline-success" :to="{name:'Blogs'}">Ver más</b-button>
            </b-col>
        </b-row>
        <Title msg="Últimas Noticias"/>
        <CardRight></CardRight>
        <b-row class="mt-5 mr-5">
            <b-col cols="12" class="d-flex justify-content-end">
                <b-button variant="outline-success" :to="{name:'Noticias'}">Ver más</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import Carousel from '@/components/Carousel.vue'
    import Card from '@/components/Card.vue'
    import CardImage from '@/components/CardImage.vue'
    import CardRight from '@/components/CardRight.vue'
    
    export default {
        name: 'Home',
        components: {
            Carousel,
            Title,
            Card,
            CardImage,
            CardRight
        } 
    }
</script>