<template>
    <div>
        <b-form @submit="agregarUsuario()">
            <b-form-group
                id="Nombre"
                label="Nombre"
                label-for="nom"
            >
                <b-form-input
                    id="nom"
                    v-model="usuario.nom"
                    type="text"
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
                    placeholder="Escribe tu contraseña"
                ></b-form-input> 
            </b-form-group>  
            <b-button type="submit" block variant="primary">Agregar</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Formulario',
        data() {
            return {
                usuario: {
                    nom: '',
                    a_pat: '',
                    a_mat: '',
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
            agregarUsuario(){
                this.axios.post('/nuevo_usuario', this.usuario).then(res => {
                    this.usuario.push(res.data);
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>