<template>
    <div class="registro">
        <Title msg="Registro"/>
        <b-row class="justify-content-center">
            <b-col sm="6">
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
                    <div class="d-flex justify-content-center">
                        <b-button type="submit" variant="primary" class="my-5 mx-2">Agregar</b-button>
                        <b-button variant="warning" class="my-5 mx-2" :to="{name:'Login'}">Regresar</b-button>
                    </div>
                </b-form>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
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
    import Title from '@/components/Title.vue'

    export default {
        name: 'Registro',
        components: {
            Title
        },
        data() {
            return {
                mensaje: {color: '', texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                usuario: {
                    nom: '',
                    a_pat: '',
                    a_mat: '',
                    f_nac: '',
                    alca: '',
                    tel: '',
                    correo: '',
                    contra: ''
                },
                alcaldias: [
                    { value: null, text: 'Selecciona una alcaldía', disabled: true },
                    { value: 'Álvaro Obregón', text: 'Álvaro Obregón' },
                    { value: 'Azcapotzalco', text: 'Azcapotzalco' },
                    { value: 'Benito Juárez', text: 'Benito Juárez' },
                    { value: 'Coyoacán', text: 'Coyoacán' },
                    { value: 'Cuajimalpa de Morelos', text: 'Cuajimalpa de Morelos'},
                    { value: 'Cuauhtémoc', text: 'Cuauhtémoc'},
                    { value: 'Gustavo A. Madero', text: 'Gustavo A. Madero'},
                    { value: 'Iztacalco', text: 'Iztacalco'},
                    { value: 'Iztapalapa', text: 'Iztapalapa'},
                    { value: 'Magdalena Contreras', text: 'Magdalena Contreras'},
                    { value: 'Miguel Hidalgo', text: 'Miguel Hidalgo'},
                    { value: 'Milpa Alta', text: 'Milpa Alta'},
                    { value: 'Tláhuac	', text: 'Tláhuac	'},
                    { value: 'Tlalpan', text: 'Tlalpan'},
                    { value: 'Venustiano Carranza', text: 'Venustiano Carranza'},
                    { value: 'Xochimilco', text: 'Xochimilco'}
                ]
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            agregarUsuario(){
                this.axios.post('/nuevo_usuario', this.usuario).then(res => {
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El registro fue exitoso'
                    this.showAlert();
                    this.usuario.push(res.data);
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response.data.error.errors.correo.properties.message;
                    this.showAlert();
                    console.log(e.response);
                })
            }
        }
    }
</script>