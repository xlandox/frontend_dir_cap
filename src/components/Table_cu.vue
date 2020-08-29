<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de cursos:</h3>
            </b-col>
        </b-row>
        <b-row class="mb-5 d-flex justify-content-center">
            <b-col cols="12" v-if="!editar && !crear">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Fecha I</th>
                            <th scope="col">Fecha F</th>
                            <th scope="col">Cupo</th>
                            <th scope="col" class="d-flex justify-content-center">
                                <b-button variant="primary" @click="cambiarCrear()">Nuevo Curso</b-button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cursos" :key="index">
                            <td>{{item.nom}}</td>
                            <td>{{item.foto}}</td>
                            <td>{{item.f_ini}}</td>
                            <td>{{item.f_fin}}</td>
                            <td>{{item.cupo}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger" @click="cambiarEditar(item._id)">Editar</b-button>
                                <b-button variant="warning" @click="eliminarCurso(item._id)">Eliminar</b-button>
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
                <h4>Crear Curso</h4>
                <b-form @submit.prevent="agregarCurso()">
                    <b-form-group
                        id="Nombre"
                        label="Nombre"
                        label-for="nombre"
                    >
                        <b-form-input
                            id="nombre"
                            v-model="curso.nom"
                            type="text"
                            required
                            placeholder="Escribe el nombre del curso"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group
                        id="Foto"
                        label="Foto"
                        label-for="foto"
                    >
                        <b-form-input
                            id="foto"
                            v-model="curso.foto"
                            type="text"
                            required
                            placeholder="Introduce la URL https://dominio.com/nombreimagen.tipodeimagen"
                        ></b-form-input> 
                        Las dimensiones de la imagen deben ser 600x300 pixeles para un mejor funcionamiento.
                    </b-form-group>
                    <b-form-group
                        id="Descripcion"
                        label="Descripcion"
                        label-for="descripcion"
                    >
                        <b-form-textarea
                            id="descripcion"
                            v-model="curso.des"
                            placeholder="Redacta una descripcion ..."
                            rows="6"
                        ></b-form-textarea>
                    </b-form-group> 
                    <b-form-group
                        id="Fecha_inicio"
                        label="Fecha de inicio"
                        label-for="f_ini"
                    >
                        <b-form-datepicker 
                            id="f_ini" 
                            v-model="curso.f_ini" 
                            required
                            placeholder="Selecciona la fecha de inicio" 
                            local="es"
                        ></b-form-datepicker>
                    </b-form-group> 
                    <b-form-group
                        id="Fecha_fin"
                        label="Fecha de finalizacion"
                        label-for="f_fin"
                    >
                        <b-form-datepicker 
                            id="f_fin" 
                            v-model="curso.f_fin" 
                            required
                            placeholder="Selecciona la fecha de finalizacion" 
                            local="es"
                        ></b-form-datepicker>
                    </b-form-group>   
                    <b-form-group
                        id="Cupo"
                        label="Cupo"
                        label-for="cupo"
                    >
                        <b-form-input
                            id="cupo"
                            v-model="curso.cupo"
                            type="number"
                            required
                            placeholder="Ingrese el cupo maximo del curso"
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
                <b-form @submit.prevent="editarCurso(curso_e)">
                    <b-form-group
                        id="Nombre"
                        label="Nombre"
                        label-for="nombre"
                    >
                        <b-form-input
                            id="nombre"
                            v-model="curso_e.nom"
                            type="text"
                            required
                            placeholder="Escribe el nombre del curso"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group
                        id="Foto"
                        label="Foto"
                        label-for="foto"
                    >
                        <b-form-input
                            id="foto"
                            v-model="curso_e.foto"
                            type="text"
                            required
                            placeholder="Introduce la URL https://dominio.com/nombreimagen.tipodeimagen"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group
                        id="Descripcion"
                        label="Descripcion"
                        label-for="descripcion"
                    >
                        <b-form-textarea
                            id="descripcion"
                            v-model="curso_e.des"
                            placeholder="Redacta una descripcion ..."
                            rows="6"
                        ></b-form-textarea>
                    </b-form-group> 
                    <b-form-group
                        id="Fecha_inicio"
                        label="Fecha de inicio"
                        label-for="f_ini"
                    >
                        <b-form-datepicker 
                            id="f_ini" 
                            v-model="curso_e.f_ini" 
                            required
                            placeholder="Selecciona la fecha de inicio" 
                            local="es"
                        ></b-form-datepicker>
                    </b-form-group> 
                    <b-form-group
                        id="Fecha_fin"
                        label="Fecha de finalizacion"
                        label-for="f_fin"
                    >
                        <b-form-datepicker 
                            id="f_fin" 
                            v-model="curso_e.f_fin" 
                            required
                            placeholder="Selecciona la fecha de finalizacion" 
                            local="es"
                        ></b-form-datepicker>
                    </b-form-group>   
                    <b-form-group
                        id="Cupo"
                        label="Cupo"
                        label-for="cupo"
                    >
                        <b-form-input
                            id="cupo"
                            v-model="curso_e.cupo"
                            type="number"
                            required
                            placeholder="Ingrese el cupo maximo del curso"
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
        name: 'Table_cu',
        data() {
            return {
                mensaje: {color: '', texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                totalCursos: 0,
                limite: 6,
                paginaActual: 1,
                cursos: [],
                crear: false,
                editar: false,
                curso: {
                    nom: '',
                    foto: '',
                    des: '',
                    f_ini: '',
                    f_fin: '',
                    cupo: ''
                },
                curso_e: {}
            }
        },
        computed: {
            ...mapState(['token']),
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
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            paginacion(pagina){
                let skip = (pagina - 1) * this.limite;
                this.axios.get(`/cursos?skip=${skip}&limit=${this.limite}`).then(res => {
                    this.cursos = res.data.cursoDB;
                    this.totalCursos = res.data.totalCursos;
                }).catch(e => {
                    console.log(e.respone)
                })
            },
            cambiarCrear(){
                this.crear = true;
            },
            agregarCurso(){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.post('/nuevo_curso', this.curso, config).then(res => {
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue exitoso'
                    this.showAlert();
                    this.curso.push(res.data);
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            cambiarEditar(id){
                this.editar = true;
                this.axios.get(`/curso/${id}`).then(res => {
                    this.curso_e = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            editarCurso(item){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.put(`/curso/${item._id}`, item, config).then(res => {
                    const index = this.cursos.findIndex(c => c._id === res.data._id);
                    this.cursos[index].nom = res.data.nom;
                    this.cursos[index].foto = res.data.foto;
                    this.cursos[index].des = res.data.des;
                    this.cursos[index].f_ini = res.data.f_ini;
                    this.cursos[index].f_fin = res.data.f_fin;
                    this.cursos[index].cupo = res.data.cupo;
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'Se actualizo con exito';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            eliminarCurso(id){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.delete(`/curso/${id}`, config).then(res => {
                    const index = this.cursos.findIndex(item => item._id === res.data._id);
                    this.cursos.splice(index, 1);
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