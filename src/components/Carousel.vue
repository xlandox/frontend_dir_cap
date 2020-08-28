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
            >{{imagen1.resumen}}</b-carousel-slide>
            <b-carousel-slide
            :caption="imagen2.titulo"
            :img-src="imagen2.foto"
            >{{imagen2.resumen}}</b-carousel-slide>
            <b-carousel-slide
            :caption="imagen3.titulo"
            :img-src="imagen3.foto"
            >{{imagen3.resumen}}</b-carousel-slide>
            <b-carousel-slide
            :caption="imagen4.titulo"
            :img-src="imagen4.foto"
            >{{imagen4.resumen}}</b-carousel-slide>
            <b-carousel-slide
            :caption="imagen5.titulo"
            :img-src="imagen5.foto"
            >{{imagen5.resumen}}</b-carousel-slide>
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
            imagen1: {titulo: '', foto: '', resumen: ''},
            imagen2: {titulo: '', foto: '', resumen: ''},
            imagen3: {titulo: '', foto: '', resumen: ''},
            imagen4: {titulo: '', foto: '', resumen: ''},
            imagen5: {titulo: '', foto: '', resumen: ''}
        }
    },
    created() {
        this.listarImagenes();
    },
    methods:{
        listarImagenes(){
            this.axios.get('/imageness').then(res => {
                this.imagenes = res.data.carruselDB;
                this.totalImagenes = res.data.totalImagenes;
                console.log(res.data)
                this.imagen1.titulo = this.imagenes[this.totalImagenes - 1].titulo;
                this.imagen1.foto = this.imagenes[this.totalImagenes - 1].foto;
                this.imagen1.resumen = this.imagenes[this.totalImagenes - 1].resumen;
                this.imagen2.titulo = this.imagenes[this.totalImagenes - 2].titulo;
                this.imagen2.foto = this.imagenes[this.totalImagenes - 2].foto;
                this.imagen2.resumen = this.imagenes[this.totalImagenes - 2].resumen;
                this.imagen3.titulo = this.imagenes[this.totalImagenes - 3].titulo;
                this.imagen3.foto = this.imagenes[this.totalImagenes - 3].foto;
                this.imagen3.resumen = this.imagenes[this.totalImagenes - 3].resumen;
                this.imagen4.titulo = this.imagenes[this.totalImagenes - 4].titulo;
                this.imagen4.foto = this.imagenes[this.totalImagenes - 4].foto;
                this.imagen4.resumen = this.imagenes[this.totalImagenes - 4].resumen;
                this.imagen5.titulo = this.imagenes[this.totalImagenes - 5].titulo;
                this.imagen5.foto = this.imagenes[this.totalImagenes - 5].foto;
                this.imagen5.resumen = this.imagenes[this.totalImagenes - 5].resumen;
            }).catch(e => {
                console.log(e.response);
            })
        },
    }
}
</script>