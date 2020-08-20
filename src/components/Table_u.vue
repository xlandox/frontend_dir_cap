<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de usuarios:</h3>
            </b-col>
        </b-row>
        <b-row class="mb-5 d-flex justify-content-center">
            <b-col cols="12" v-if="!editar && !crear">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Alcaldía</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Rol</th>
                            <th scope="col"><b-button variant="primary" @click="cambiarCrear()">Nuevo Usuario</b-button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in usuarios" :key="index">
                            <td>{{item.nom}}</td>
                            <td>{{item.a_pat}}</td>
                            <td>{{item.a_mat}}</td>
                            <td>{{item.f_nac}}</td>
                            <td>{{item.alca}}</td>
                            <td>{{item.tel}}</td>
                            <td>{{item.correo}}</td>
                            <td>{{item.rol}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button variant="danger" @click="cambiarEditar(item._id)" class="mr-1">Editar</b-button>
                                <b-button variant="warning" @click="eliminarUsuario(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
            <b-col sm="8" v-if="crear">
                <h4>Crear Usuario</h4>
                <b-form @submit.prevent="agregarUsuario()">
                    <b-form-group
                        id="Nombre"
                        label="Nombre"
                        label-for="nom"
                    >
                        <b-form-input
                            id="nom"
                            v-model="usuario.nom"
                            type="text"
                            required
                            placeholder="Escribe tu nombre"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-form-group
                        id="Apellido P."
                        label="Apellido Paterno"
                        label-for="a_pat"
                    >
                        <b-form-input
                            id="a_pat"
                            v-model="usuario.a_pat"
                            type="text"
                            required
                            placeholder="Escribe tu apellido paterno"
                        ></b-form-input>    
                    </b-form-group>
                    <b-form-group
                        id="Apellido M."
                        label="Apellido Materno"
                        label-for="a_mat"
                    >
                        <b-form-input
                            id="a_mat"
                            v-model="usuario.a_mat"
                            type="text"
                            required
                            placeholder="Escribe tu apellido materno"
                        ></b-form-input>  
                    </b-form-group>  
                    <b-form-group
                        id="Fecha_n"
                        label="Fecha de nacimiento"
                        label-for="f_nac"
                    >
                        <b-form-datepicker 
                            id="f_nac" 
                            v-model="usuario.f_nac" 
                            required
                            placeholder="Selecciona tu fecha de nacimiento" 
                            local="es"
                        ></b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                        id="Alcaldía"
                        label="Alcaldía"
                        label-for="alca"
                    >
                        <b-form-select 
                            id="alca"
                            v-model="usuario.alca" 
                            :options="alcaldias"
                            required
                        ></b-form-select> 
                    </b-form-group> 
                    <b-form-group
                        id="Teléfono"
                        label="Teléfono"
                        label-for="tel"
                    >
                        <b-form-input
                            id="tel"
                            v-model="usuario.tel"
                            type="number"
                            required
                            placeholder="Ingrese su número"
                        ></b-form-input>  
                    </b-form-group> 
                    <b-form-group
                        id="Correo"
                        label="Correo Electrónico"
                        label-for="correo"
                    >
                        <b-form-input
                            id="correo"
                            v-model="usuario.correo"
                            type="email"
                            required
                            placeholder="Eje. correo@dominio.com"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-form-group
                        id="Contraseña"
                        label="Contraseña"
                        label-for="contra"
                    >
                        <b-form-input
                            id="contra"
                            v-model="usuario.contra"
                            type="password"
                            required
                            placeholder="Escribe tu contraseña"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-form-group
                        id="Rol"
                        label="Rol"
                        label-for="rol"
                    >
                        <b-form-select 
                            id="rol"
                            v-model="usuario.rol" 
                            :options="roles"
                            required
                        ></b-form-select> 
                    </b-form-group> 
                    <b-button type="submit" block variant="primary">Agregar</b-button>
                    <b-button type="submit" block variant="warning" @click="crear = false" class="mt-2">Regresar</b-button>
                </b-form>
            </b-col>
            <b-col sm="8" v-if="editar">
                <h4>Editar Usuario</h4>
                <b-form @submit.prevent="editarUsuario(usuario_e)">
                    <b-form-group
                        id="Nombre"
                        label="Nombre"
                        label-for="nom"
                    >
                        <b-form-input
                            id="nom"
                            v-model="usuario_e.nom"
                            type="text"
                            required
                            placeholder="Escribe tu nombre"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-form-group
                        id="Apellido P."
                        label="Apellido Paterno"
                        label-for="a_pat"
                    >
                        <b-form-input
                            id="a_pat"
                            v-model="usuario_e.a_pat"
                            type="text"
                            required
                            placeholder="Escribe tu apellido paterno"
                        ></b-form-input>    
                    </b-form-group>
                    <b-form-group
                        id="Apellido M."
                        label="Apellido Materno"
                        label-for="a_mat"
                    >
                        <b-form-input
                            id="a_mat"
                            v-model="usuario_e.a_mat"
                            type="text"
                            required
                            placeholder="Escribe tu apellido materno"
                        ></b-form-input>  
                    </b-form-group>  
                    <b-form-group
                        id="Fecha_n"
                        label="Fecha de nacimiento"
                        label-for="f_nac"
                    >
                        <b-form-datepicker 
                            id="f_nac" 
                            v-model="usuario_e.f_nac" 
                            required
                            placeholder="Selecciona tu fecha de nacimiento" 
                            local="es"
                        ></b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                        id="Alcaldía"
                        label="Alcaldía"
                        label-for="alca"
                    >
                        <b-form-select 
                            id="alca"
                            v-model="usuario_e.alca" 
                            :options="alcaldias"
                            required
                        ></b-form-select> 
                    </b-form-group> 
                    <b-form-group
                        id="Teléfono"
                        label="Teléfono"
                        label-for="tel"
                    >
                        <b-form-input
                            id="tel"
                            v-model="usuario_e.tel"
                            type="number"
                            required
                            placeholder="Ingrese su número"
                        ></b-form-input>  
                    </b-form-group> 
                    <b-form-group
                        id="Correo"
                        label="Correo Electrónico"
                        label-for="correo"
                    >
                        <b-form-input
                            id="correo"
                            v-model="usuario_e.correo"
                            type="email"
                            required
                            placeholder="Eje. correo@dominio.com"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-form-group
                        id="Contraseña"
                        label="Contraseña"
                        label-for="contra"
                    >
                        <b-form-input
                            id="contra"
                            v-model="usuario_e.contra"
                            type="password"
                            placeholder="Si la contrasena no se modifica dejar en blanco"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-form-group
                        id="Rol"
                        label="Rol"
                        label-for="rol"
                    >
                        <b-form-select 
                            id="rol"
                            v-model="usuario_e.rol" 
                            :options="roles"
                            required
                        ></b-form-select> 
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
        name: 'Table_u',
        data() {
            return {
                mensaje: {color: '', texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                usuarios: [],
                crear: false,
                editar: false,
                usuario: {
                    nom: '',
                    a_pat: '',
                    a_mat: '',
                    f_nac: '',
                    alca: '',
                    tel: '',
                    correo: '',
                    contra: '',
                    rol: ''
                },
                alcaldias: [
                    { value: null, text: 'Selecciona una alcaldía', disabled: true },
                    { value: 'Álvaro Obregón', text: 'Álvaro Obregón' },
                    { value: 'Azcapotzalco', text: 'Azcapotzalco' },
                    { value: 'Benito Juárez', text: 'Benito Juárez' },
                    { value: 'Coyoacán', text: 'Coyoacán' },
                    { value: 'Cuajimalpa de Morelos', text: 'Cuajimalpa de Morelos' },
                    { value: 'Cuauhtémoc', text: 'Cuauhtémoc' },
                    { value: 'Gustavo A. Madero', text: 'Gustavo A. Madero' },
                    { value: 'Iztacalco', text: 'Iztacalco' },
                    { value: 'Iztapalapa', text: 'Iztapalapa' },
                    { value: 'Magdalena Contreras', text: 'Magdalena Contreras' },
                    { value: 'Miguel Hidalgo', text: 'Miguel Hidalgo' },
                    { value: 'Milpa Alta', text: 'Milpa Alta' },
                    { value: 'Tláhuac', text: 'Tláhuac' },
                    { value: 'Tlalpan', text: 'Tlalpan' },
                    { value: 'Venustiano Carranza', text: 'Venustiano Carranza' },
                    { value: 'Xochimilco', text: 'Xochimilco' }
                ],
                roles: [
                    { value: null, text: 'Selecciona el rol', disabled: true },
                    { value: 'Usuario', text: 'Usuario' },
                    { value: 'Exponente', text: 'Exponente' },
                    { value: 'Administrador', text: 'Administrador' }
                ],
                usuario_e: {}
            }
        },
        computed: {
            ...mapState(['token'])
        },
        created(){
            this.listarUsuarios();
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            listarUsuarios(){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.get('/usuarios', config).then(res => {
                    this.usuarios = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            cambiarCrear(){
                this.crear = true;
            },
            agregarUsuario(){
                this.axios.post('/nuevo_usuario', this.usuario).then(res => {
                    this.usuario.push(res.data);
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue exitoso';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response.data.error.errors.correo.properties.message;
                    this.showAlert();
                })
            },
            cambiarEditar(id){
                this.editar = true;
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.get(`/usuario/${id}`, config).then(res => {
                    this.usuario_e = res.data;
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            editarUsuario(item){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                this.axios.put(`/usuario/${item._id}`, item, config).then(res => {
                    const index = this.usuarios.findIndex(u => u._id === res.data._id);
                    this.usuarios[index].nom = res.data.nom;
                    this.usuarios[index].a_pat = res.data.a_pat;
                    this.usuarios[index].a_mat = res.data.a_mat;
                    this.usuarios[index].f_nac = res.data.f_nac;
                    this.usuarios[index].alca = res.data.alca;
                    this.usuarios[index].tel = res.data.tel;
                    this.usuarios[index].correo = res.data.correo;
                    this.usuarios[index].contra = res.data.contra;
                    this.usuarios[index].rol = res.data.rol;
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'Se actualizo con exito';
                    this.showAlert();
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response;
                    this.showAlert();
                })
            },
            eliminarUsuario(id){
                let config = {
                    headers: {
                        token: this.token
                    }
                }
                console.log(id);
                this.axios.delete(`/usuario/${id}`, config).then(res => {
                    const index = this.usuarios.findIndex(item => item._id === res.data._id);
                    this.usuarios.splice(index, 1);
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