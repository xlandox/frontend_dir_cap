<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de blogs:</h3>
            </b-col>
            <b-col class="d-flex justify-content-end">
                <b-button id="show-btn" variant="primary" @click="$bvModal.show('modal')">Nuevo blog</b-button>
                <b-modal id="modal" hide-footer>
                    <template v-slot:modal-title>
                        Inserte los datos:
                    </template>
                    <div>
                    <Formulario_b></Formulario_b>
                    </div>
                    <b-button class="mt-3" block @click="$bvModal.hide('modal')">Cerrar</b-button>
                </b-modal>
            </b-col>
        </b-row>
        <b-row class="mb-5 d-flex justify-content-center">
            <b-col cols="12" v-if="!editar">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Fecha de Creación</th>
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
            <b-col sm="8" v-if="editar">
                <h4>Editar Blog</h4>
                <b-form @submit="editarBlog(blog_e)">
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
                        id="Autor"
                        label="Autor"
                        label-for="autor"
                    >
                        <b-form-input
                            id="autor"
                            v-model="blog_e.autor"
                            type="text"
                            required
                            placeholder="Escribe nombre del autor del blog"
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
                    <b-button type="submit" variant="primary" class="mr-1">Agregar</b-button>
                    <b-button type="submit" variant="warning" @click="editar = false">Cancelar</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Formulario_b from '@/components/Formulario_b.vue'

    export default {
        name: 'Table_b',
        components: {
            Formulario_b
        },
        data() {
            return {
                blogs: [],
                blog: {
                    titulo: '',
                    autor: '',
                    articulo: '',
                    foto: ''
                },
                editar: false,
                blog_e: {}
            }
        },
        created(){
            this.listarBlogs();
        },
        methods: {
            listarBlogs(){
                this.axios.get('/blogs').then(res => {
                    this.blogs = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            eliminarBlog(id){
                this.axios.delete(`/blog/${id}`).then(res => {
                    const index = this.blogs.findIndex(item => item._id === res.data._id);
                    this.blogs.splice(index, 1);
                }).catch(e => {
                    console.log(e.response);
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
                this.axios.put(`/blog/${item._id}`, item).then(res => {
                    const index = this.blogs.findIndex(b => b._id === res.data._id);
                    this.blogs[index].titulo = res.data.titulo;
                    this.blogs[index].autor = res.data.autor;
                    this.blogs[index].articulo = res.data.articulo;
                    this.blogs[index].foto = res.data.foto;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>