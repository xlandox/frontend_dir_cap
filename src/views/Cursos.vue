<template>
    <div class="cusos">
        <div v-if="!editar">
            <Title msg="Nuestros Nuevos"/>
            <b-row class="d-flex justify-content-center">
                <div v-for="(item, index) in cursos" :key="index">
                    <b-col class="d-flex justify-content-center">
                        <b-card
                            :title="item.nom"
                            :img-src="item.foto"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-3"
                        >
                            <b-card-text>
                            {{item.resumen}}
                            </b-card-text>
                            <b-button class="mr-1" variant="primary" @click="cambiarVer(item._id)">Ver</b-button>
                        </b-card>
                    </b-col>
                </div>
            </b-row>
            <b-row class="d-flex justify-content-center">
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
            </b-row>
        </div>
        <div v-if="editar">
            <b-row class="d-flex justify-content-center">
                <b-col sm="8">
                    <div>
                        <h3 class="text-center my-5">{{curso.nom}}</h3>
                    </div>
                    <div>
                        <b-img center :src="curso.foto" fluid alt="Responsive image" class="mb-5"></b-img>
                    </div>
                    <div class="text-justify">
                        <p>Informacion:</p>
                        <p>{{curso.des}}</p>
                        <p>Cupo: {{curso.cupo}} personas</p>
                        <p>Fecha de inicio: {{curso.f_ini}}</p>
                        <p>Fecha final: {{curso.f_fin}}</p>
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
        name: 'Cursos',
        components: {
            Title
        } ,
        data() {
            return {
                totalCursos: 0,
                limite: 6,
                paginaActual: 1,
                editar: false,
                cursos: [],
                curso: []
            }
        },
        computed: {
            cantidadPaginas(){
                return Math.ceil(this.totalCursos / this.limite);
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
                this.axios.get(`/cursos?skip=${skip}&limit=${this.limite}`).then(res => {
                    this.cursos = res.data.cursoDB;
                    this.totalCursos = res.data.totalCursos;
                }).catch(e => {
                    console.log(e.respone)
                })
            },
            cambiarVer(id){
                this.editar = true;
                this.axios.get(`/curso/${id}`).then(res => {
                    this.curso = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>
