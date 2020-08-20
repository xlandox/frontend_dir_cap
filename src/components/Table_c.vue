<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de Carrusel:</h3>
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
                            <th scope="col"><b-button variant="primary" @click="cambiarCrear()">Nueva Imagen</b-button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in imagenes" :key="index">
                            <td>{{item.titulo}}</td>
                            <td>{{item.autor_id}}</td>
                            <td>{{item.foto}}</td>
                            <td>{{item.f_crea}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger" @click="cambiarEditar(item._id)">Editar</b-button>
                                <b-button variant="warning" @click="eliminarImagen(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
            <b-col sm="8" v-if="crear">
                <h4>Insertar Imagen</h4>
                <b-form @submit.prevent="agregarImagen()">
                    <b-form-group
                        id="Titulo"
                        label="Titulo"
                        label-for="titulo"
                    >
                        <b-form-input
                            id="titulo"
                            v-model="imagen.titulo"
                            type="text"
                            required
                            placeholder="Escribe el titulo de la imagen"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group
                        id="Foto"
                        label="Foto"
                        label-for="foto"
                    >
                        <b-form-input
                            id="foto"
                            v-model="imagen.foto"
                            type="text"
                            required
                            placeholder="Introduce la URL"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-button type="submit" block variant="primary">Agregar</b-button>
                    <b-button type="submit" block variant="warning" @click="crear = false" class="mt-2">Regresar</b-button>
                </b-form>
            </b-col>
            <b-col sm="8" v-if="editar">
                <h4>Editar Imagen</h4>
                <b-form @submit.prevent="editarImagen(imagen_e)">
                    <b-form-group
                        id="Titulo"
                        label="Titulo"
                        label-for="titulo"
                    >
                        <b-form-input
                            id="titulo"
                            v-model="imagen_e.titulo"
                            type="text"
                            required
                            placeholder="Escribe el titulo de la imagen"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group
                        id="Foto"
                        label="Foto"
                        label-for="foto"
                    >
                        <b-form-input
                            id="foto"
                            v-model="imagen_e.foto"
                            type="text"
                            required
                            placeholder="Introduce la URL"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-button type="submit" variant="primary" class="mr-1">Editar</b-button>
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
        name: 'Table_c',
        data() {
            return {
                mensaje: {color: '', texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                imagenes: [],
                crear: false,
                editar: false,
                imagen: {
                    titulo: '',
                    articulo: '',
                    foto: ''
                },
                imagen_e: {}
            }
        },
        computed: {
            ...mapState(['token'])
        },
        created(){
            this.listarImagenes();
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            listarImagenes(){
                this.axios.get('/Imagenes').then(res => {
                    this.imagenes = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            cambiarCrear(){
                this.crear = true;
            },
            agregarImagen(){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.post('/nueva_imagen', this.imagen, config).then(res => {
                    this.imagen.push(res.data);
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue exitoso';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            cambiarEditar(id){
                this.editar = true;
                this.axios.get(`/imagen/${id}`).then(res => {
                    this.imagen_e = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            editarImagen(item){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.put(`/imagen/${item._id}`, item, config).then(res => {
                    const index = this.imagenes.findIndex(n => n._id === res.data._id);
                    this.imagenes[index].titulo = res.data.titulo;
                    this.imagenes[index].foto = res.data.foto;
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'Se actualizo con exito';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            eliminarImagen(id){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.delete(`/imagen/${id}`, config).then(res => {
                    const index = this.imagenes.findIndex(item => item._id === res.data._id);
                    this.imagenes.splice(index, 1);
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue eliminado con exito';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
        }
    }
</script>