<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de blogs:</h3>
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
                                <b-button variant="primary" @click="cambiarCrear()">Nuevo Blog</b-button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in blogs" :key="index">
                            <td>{{item.titulo}}</td>
                            <td>{{item.autor_id}}</td>
                            <td>{{item.foto}}</td>
                            <td>{{item.f_crea}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger" @click="cambiarEditar(item._id)">Editar</b-button>
                                <b-button variant="warning" @click="eliminarBlog(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
            <b-col sm="8" v-if="crear">
                <h4>Crear Blog</h4>
                <b-form @submit.prevent="agregarBlog()">
                    <b-form-group
                        id="Titulo"
                        label="Titulo"
                        label-for="titulo"
                    >
                        <b-form-input
                            id="titulo"
                            v-model="blog.titulo"
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
                            v-model="blog.articulo"
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
                            v-model="blog.foto"
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
                <h4>Editar Blog</h4>
                <b-form @submit.prevent="editarBlog(blog_e)">
                    <b-form-group
                        id="Titulo"
                        label="Titulo"
                        label-for="titulo"
                    >
                        <b-form-input
                            id="titulo"
                            v-model="blog_e.titulo"
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
                            v-model="blog_e.articulo"
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
                            v-model="blog_e.foto"
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
        name: 'Table_b',
        data() {
            return {
                mensaje: {color: '', texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                blogs: [],
                crear: false,
                editar: false,
                blog: {
                    titulo: '',
                    articulo: '',
                    foto: ''
                },
                blog_e: {}
            }
        },
        computed: {
            ...mapState(['token'])
        },
        created(){
            this.listarBlogs();
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            listarBlogs(){
                this.axios.get('/blogs').then(res => {
                    this.blogs = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            cambiarCrear(){
                this.crear = true;
            },
            agregarBlog(){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.post('/nuevo_blog', this.blog, config).then(res => {
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue exitoso'
                    this.showAlert();
                    this.blog.push(res.data);
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            cambiarEditar(id){
                this.editar = true;
                this.axios.get(`/blog/${id}`).then(res => {
                    this.blog_e = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            editarBlog(item){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.put(`/blog/${item._id}`, item, config).then(res => {
                    const index = this.blogs.findIndex(b => b._id === res.data._id);
                    this.blogs[index].titulo = res.data.titulo;
                    this.blogs[index].articulo = res.data.articulo;
                    this.blogs[index].foto = res.data.foto;
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'Se actualizo con exito';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            eliminarBlog(id){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.delete(`/blog/${id}`, config).then(res => {
                    const index = this.blogs.findIndex(item => item._id === res.data._id);
                    this.blogs.splice(index, 1);
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