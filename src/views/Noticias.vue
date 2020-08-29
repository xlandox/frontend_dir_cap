<template>
    <div class="noticias">
        <div v-if="!editar">
            <Title msg="Noticias"/>
            <b-row>
                <b-col>
                    <div v-for="(item, index) in noticias" :key="index">
                        <b-card bg-variant="warning" text-variant="white" :title="item.titulo" class="mb-3">
                            <b-card-text>
                                {{item.resumen}}
                            </b-card-text>
                            <b-button @click="cambiarVer(item._id)" variant="danger">Ver noticia</b-button>
                        </b-card>
                    </div>
                    <div>
                        <nav aria-label="Paginacion">
                            <ul class="pagination justify-content-center">
                                <li class="page-item" :class="{'disabled': paginaActual === 1}">
                                    <router-link :to="{query: {pagina: paginaActual - 1}}" class="page-link" href="#">Anterior</router-link>
                                </li>
                                <li class="page-item" :class="{'active': paginaActual === index + 1}"
                                v-for="(item, index) in cantidadPaginas" :key="index">
                                    <router-link :to="{query: {pagina: index + 1}}" class="page-link" href="#">{{index + 1}}</router-link>
                                    </li>
                                <li class="page-item" :class="{'disabled': paginaActual === cantidadPaginas}">
                                    <router-link :to="{query: {pagina: paginaActual + 1}}" class="page-link" href="#">Siguiente</router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div v-if="editar">
            <b-row class="d-flex justify-content-center">
                <b-col sm="8">
                    <div>
                        <h3 class="text-center my-5">{{noticia.titulo}}</h3>
                    </div>
                    <div>
                        <b-img center :src="noticia.foto" fluid alt="Responsive image" class="mb-5"></b-img>
                    </div>
                    <div class="text-justify">
                        {{noticia.articulo}}
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="d-flex justify-content-center">
                    <b-button type="submit" variant="warning" @click="editar = false" class="my-5">Regresar</b-button>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'

    export default {
        name: 'Noticias',
        components: {
            Title
        },
        data() {
            return {
                totalNoticias: 0,
                limite: 5,
                paginaActual: 1,
                editar: false,
                noticias: [],
                noticia: []
            }
        },
        computed: {
            cantidadPaginas(){
                return Math.ceil(this.totalNoticias / this.limite);
            }
        },
        watch: {
            "$route.query.pagina":{
                immediate: true,
                handler(pagina){
                    pagina = parseInt(pagina) || 1;
                    this.paginacion(pagina);
                    this.paginaActual = pagina;
                }
            }
        },
        methods: {
            paginacion(pagina){
                let skip = (pagina - 1) * this.limite;
                this.axios.get(`/noticias?skip=${skip}&limit=${this.limite}`).then(res => {
                    this.noticias = res.data.noticiaDB;
                    this.totalNoticias = res.data.totalNoticias;
                }).catch(e => {
                    console.log(e.respone)
                })
            },
            cambiarVer(id){
                this.editar = true;
                this.axios.get(`/noticia/${id}`).then(res => {
                    this.noticia = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>