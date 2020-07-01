<template>
    <div>
        <b-carousel
            id="carousel-no-animation"
            style="text-shadow: 0px 0px 2px #000"
            no-animation
            indicators
            img-width="1024"
            img-height="480"
        >
            <b-carousel-slide
            caption="Cursos de agricultura"
            img-src="https://picsum.photos/1024/480?random=1"
            ></b-carousel-slide>
            <b-carousel-slide
            caption="Apoyo a la mujer"
            img-src="https://picsum.photos/1024/480?random=2"
            ></b-carousel-slide>
            <b-carousel-slide
            caption="Cursos de apicultura"
            img-src="https://picsum.photos/1024/480?random=3"
            ></b-carousel-slide>
            <b-carousel-slide
            caption="Cuidados de áreas verdes"
            img-src="https://picsum.photos/1024/480?random=4"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>