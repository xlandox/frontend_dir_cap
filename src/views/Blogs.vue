<template>
    <div class="blogs">
        <div v-if="!editar">
            <Title msg="Blogs"/>
            <b-row>
                <b-col>
                    <div v-for="(item, index) in blogs" :key="index">
                        <b-card
                            overlay
                            :img-src="item.foto"
                            img-alt="Card Image"
                            text-variant="white"
                            :title="item.titulo"
                            class="mb-3"
                        >
                            <b-card-text>
                            {{item.resumen}}
                            </b-card-text>
                            <b-button class="mr-1" variant="danger" @click="cambiarEditar(item._id)">Editar</b-button>
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
                        <h3 class="text-center my-5">{{blog.titulo}}</h3>
                    </div>
                    <div>
                        <b-img center :src="blog.foto" fluid alt="Responsive image" class="mb-5"></b-img>
                    </div>
                    <div class="text-justify">
                        {{blog.articulo}}
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
        name: 'Blogs',
        components: {
            Title
        },
        data() {
            return {
                totalBlogs: 0,
                limite: 5,
                paginaActual: 1,
                editar: false,
                blogs: [],
                blog: []
            }
        },
        computed: {
            cantidadPaginas(){
                return Math.ceil(this.totalBlogs / this.limite);
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
                this.axios.get(`/blogs?skip=${skip}&limit=${this.limite}`).then(res => {
                    this.blogs = res.data.blogDB;
                    this.totalBlogs = res.data.totalBlogs;
                }).catch(e => {
                    console.log(e.respone)
                })
            },
            cambiarEditar(id){
                this.editar = true;
                this.axios.get(`/blog/${id}`).then(res => {
                    this.blog = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>