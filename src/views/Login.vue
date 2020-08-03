<template>
    <div class="login">
        <Title msg="Iniciar Sesión"/>
        <b-row class="justify-content-center">
            <b-col sm="6" >
                <form @submit.prevent="login()">
                    <b-form-group
                        label="Correo electrónico:"
                    >
                        <b-form-input
                            type="email"
                            required
                            placeholder="Introduzca su correo"
                            v-model="usuario.correo"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Contraseña:" 
                    >
                        <b-form-input
                            type="password"
                            required
                            placeholder="Introduzca su contraseña"
                            v-model="usuario.contra"
                        ></b-form-input>
                    </b-form-group>
                    <div class="d-flex justify-content-center">
                        <b-button type="submit" variant="primary" class="my-5 mx-2">Iniciar</b-button>
                        <b-button variant="success" class="my-5 mx-2" :to="{name:'Registro'}">Registrarse</b-button>
                    </div>
                </form>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col sm="6">
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
        name: 'Login',
        data() {
            return{
                mensaje: {color: '', texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                usuario: {
                    correo: '',
                    contra: ''
                }
            }
        },
        components: {
            Title
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            login() {
                this.axios.post('/login', this.usuario).then(res => {
                    this.mensaje.color = 'primary'; 
                    this.mensaje.texto = 'El inicio de sesion fue exitoso'
                    this.showAlert();
                    console.log(res.data);
                }).catch(e => {
                    this.mensaje.color = 'info'; 
                    this.mensaje.texto = e.response.data.mensaje;
                    this.showAlert();
                })
            }
        }
    }
</script>