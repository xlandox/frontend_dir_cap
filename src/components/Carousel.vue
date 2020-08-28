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
            :caption="imagen1.titulo"
            :img-src="imagen1.foto"
            ></b-carousel-slide>
            <b-carousel-slide
            :caption="imagen2.titulo"
            :img-src="imagen2.foto"
            ></b-carousel-slide>
            <b-carousel-slide
            :caption="imagen3.titulo"
            :img-src="imagen3.foto"
            ></b-carousel-slide>
            <b-carousel-slide
            :caption="imagen4.titulo"
            :img-src="imagen4.foto"
            ></b-carousel-slide>
            <b-carousel-slide
            :caption="imagen5.titulo"
            :img-src="imagen5.foto"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            imagenes: [],
            totalImagenes: 0,
            imagen1: {titulo: '', foto: ''},
            imagen2: {titulo: '', foto: ''},
            imagen3: {titulo: '', foto: ''},
            imagen4: {titulo: '', foto: ''},
            imagen5: {titulo: '', foto: ''}
        }
    },
    created() {
        this.listarImagenes();
    },
    methods:{
        listarImagenes(){
            this.axios.get('/imagenes').then(res => {
                this.imagenes = res.data.carruselDB;
                this.totalImagenes = res.data.totalImagenes;
                this.imagen1.titulo = this.imagenes[this.totalImagenes - 1].titulo;
                this.imagen1.foto = this.imagenes[this.totalImagenes - 1].foto;
                this.imagen2.titulo = this.imagenes[this.totalImagenes - 2].titulo;
                this.imagen2.foto = this.imagenes[this.totalImagenes - 2].foto;
                this.imagen3.titulo = this.imagenes[this.totalImagenes - 3].titulo;
                this.imagen3.foto = this.imagenes[this.totalImagenes - 3].foto;
                this.imagen4.titulo = this.imagenes[this.totalImagenes - 4].titulo;
                this.imagen4.foto = this.imagenes[this.totalImagenes - 4].foto;
                this.imagen5.titulo = this.imagenes[this.totalImagenes - 5].titulo;
                this.imagen5.foto = this.imagenes[this.totalImagenes - 5].foto;

            }).catch(e => {
                console.log(e.response);
            })
        },
    }
}
</script>