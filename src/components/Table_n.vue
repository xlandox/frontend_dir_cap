<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de noticias:</h3>
            </b-col>
            <b-col class="d-flex justify-content-end">
                <b-button id="show-btn" variant="primary" @click="$bvModal.show('modal')">Nueva noticia</b-button>
                <b-modal id="modal" hide-footer>
                    <template v-slot:modal-title>
                        Inserte los datos:
                    </template>
                    <div>
                    <Formulario_n></Formulario_n>
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
                        <tr v-for="(item, index) in noticias" :key="index">
                            <td>{{item.titulo}}</td>
                            <td>{{item.autor}}</td>
                            <td>{{item.foto}}</td>
                            <td>{{item.f_crea}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger" @click="cambiarEditar(item._id)">Editar</b-button>
                                <b-button variant="warning" @click="eliminarNoticia(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
            <b-col sm="8" v-if="editar">
                <h4>Editar Noticia</h4>
                <b-form @submit="editarNoticia(noticia_e)">
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
                        id="Autor"
                        label="Autor"
                        label-for="autor"
                    >
                        <b-form-input
                            id="autor"
                            v-model="noticia_e.autor"
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
                    <b-button type="submit" variant="primary" class="mr-1">Agregar</b-button>
                    <b-button type="submit" variant="warning" @click="editar = false">Cancelar</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Formulario_n from '@/components/Formulario_n.vue'

    export default {
        name: 'Table_n',
        components: {
            Formulario_n
        },
        data() {
            return {
                noticias: [],
                noticia: {
                    titulo: '',
                    autor: '',
                    articulo: '',
                    foto: ''
                },
                editar: false,
                noticia_e: {}
            }
        },
        created(){
            this.listarNoticias();
        },
        methods: {
            listarNoticias(){
                this.axios.get('/noticias').then(res => {
                    console.log(res.data);
                    this.noticias = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            eliminarNoticia(id){
                this.axios.delete(`/noticia/${id}`).then(res => {
                    const index = this.noticias.findIndex(item => item._id === res.data._id);
                    this.noticias.splice(index, 1);
                }).catch(e => {
                    console.log(e.response);
                })
            },
            cambiarEditar(id){
                this.editar = true;
                console.log(id);
                this.axios.get(`/noticia/${id}`).then(res => {
                    this.noticia_e = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            editarNoticia(item){
                this.axios.put(`/noticia/${item._id}`, item).then(res => {
                    const index = this.noticias.findIndex(n => n._id === res.data._id);
                    this.noticias[index].titulo = res.data.titulo;
                    this.noticias[index].autor = res.data.autor;
                    this.noticias[index].articulo = res.data.articulo;
                    this.noticias[index].foto = res.data.foto;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>