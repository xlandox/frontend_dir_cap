<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de noticias:</h3>
            </b-col>
        </b-row>
        <b-row class="mb-5 d-flex justify-content-center">
            <b-col cols="12" v-if="!editar && !crear">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Fecha de Creación</th>
                            <th scope="col" class="d-flex justify-content-center">
                                <b-button variant="primary" @click="cambiarCrear()">Nueva Noticia</b-button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in noticias" :key="index">
                            <td>{{item.titulo}}</td>
                            <td>{{item.autor_id}}</td>
                            <td>{{item.foto}}</td>
                            <td>{{item.f_crea}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger" @click="cambiarEditar(item._id)">Editar</b-button>
                                <b-button variant="warning" @click="eliminarNoticia(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
            </b-col>
            <b-col sm="8" v-if="crear">
                <h4>Crear Noticia</h4>
                <b-form @submit.prevent="agregarNoticia()">
                    <b-form-group
                        id="Titulo"
                        label="Titulo"
                        label-for="titulo"
                    >
                        <b-form-input
                            id="titulo"
                            v-model="noticia.titulo"
                            type="text"
                            required
                            placeholder="Escribe el titulo de la noticia"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group
                        id="Artículo"
                        label="Artículo"
                        label-for="articulo"
                    >
                        <b-form-textarea
                            id="articulo"
                            v-model="noticia.articulo"
                            placeholder="Redacta el artículo ..."
                            rows="6"
                        ></b-form-textarea>
                    </b-form-group>   
                    <b-form-group
                        id="Foto"
                        label="Foto"
                        label-for="foto"
                    >
                        <b-form-input
                            id="foto"
                            v-model="noticia.foto"
                            type="text"
                            required
                            placeholder="Introduce la URL"
                        ></b-form-input> 
                    </b-form-group>  
                    <div class="d-flex justify-content-center">
                        <b-button type="submit" variant="primary" class="my-5 mx-2">Agregar</b-button>
                        <b-button variant="warning" class="my-5 mx-2" @click="crear = false">Regresar</b-button>
                    </div>
                </b-form>
            </b-col>
            <b-col sm="8" v-if="editar">
                <h4>Editar Noticia</h4>
                <b-form @submit.prevent="editarNoticia(noticia_e)">
                    <b-form-group
                        id="Titulo"
                        label="Titulo"
                        label-for="titulo"
                    >
                        <b-form-input
                            id="titulo"
                            v-model="noticia_e.titulo"
                            type="text"
                            required
                            placeholder="Escribe el titulo del blog"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group
                        id="Artículo"
                        label="Artículo"
                        label-for="articulo"
                    >
                        <b-form-textarea
                            id="articulo"
                            v-model="noticia_e.articulo"
                            placeholder="Redacta el artículo ..."
                            rows="6"
                        ></b-form-textarea>
                    </b-form-group>   
                    <b-form-group
                        id="Foto"
                        label="Foto"
                        label-for="foto"
                    >
                        <b-form-input
                            id="foto"
                            v-model="noticia_e.foto"
                            type="text"
                            required
                            placeholder="Introduce la URL"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-button type="submit" variant="primary" class="mr-2">Editar</b-button>
                    <b-button type="submit" variant="warning" @click="editar = false">Regresar</b-button>
                </b-form>
            </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center">
            <b-col sm="8">
                <b-alert
                    :show="dismissCountDown"
                    dismissible
                    :variant="mensaje.color"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                >
                    {{mensaje.texto}}
                </b-alert>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Table_n',
        data() {
            return {
                mensaje: {color: '', texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                totalNoticias: 0,
                limite: 5,
                paginaActual: 1,
                noticias: [],
                crear: false,
                editar: false,
                noticia: {
                    titulo: '',
                    articulo: '',
                    foto: ''
                },
                noticia_e: {}
            }
        },
        computed: {
            ...mapState(['token']),
            cantidadPaginas(){
                return Math.ceil(this.totalNoticias / this.limite);
            }
        },
        /*created(){
            this.listarNoticias();
        },*/
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
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            paginacion(pagina){
                let skip = (pagina - 1) * this.limite;
                this.axios.get(`/noticias?skip=${skip}&limit=${this.limite}`).then(res => {
                    this.noticias = res.data.noticiaDB;
                    this.totalNoticias = res.data.totalNoticias;
                }).catch(e => {
                    console.log(e.respone)
                })
            },
            /*listarNoticias(){
                this.axios.get('/noticias').then(res => {
                    this.noticias = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },*/
            cambiarCrear(){
                this.crear = true;
            },
            agregarNoticia(){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.post('/nueva_noticia', this.noticia, config).then(res => {
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue exitoso'
                    this.showAlert();
                    this.noticia.push(res.data);
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            cambiarEditar(id){
                this.editar = true;
                this.axios.get(`/noticia/${id}`).then(res => {
                    this.noticia_e = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            editarNoticia(item){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.put(`/noticia/${item._id}`, item, config).then(res => {
                    const index = this.noticias.findIndex(n => n._id === res.data._id);
                    this.noticias[index].titulo = res.data.titulo;
                    this.noticias[index].articulo = res.data.articulo;
                    this.noticias[index].foto = res.data.foto;
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'Se actualizo con exito';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            eliminarNoticia(id){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.delete(`/noticia/${id}`, config).then(res => {
                    const index = this.noticias.findIndex(item => item._id === res.data._id);
                    this.noticias.splice(index, 1);
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue eliminado con exito';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            }
        }
    }
</script>