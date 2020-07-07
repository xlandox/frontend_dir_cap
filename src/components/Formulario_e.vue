<template>
    <div>
        <b-form @submit="agregarExponente()">
            <b-form-group
                id="Nombre"
                label="Nombre"
                label-for="nom"
            >
                <b-form-input
                    id="nom"
                    v-model="exponente.nom"
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
                    v-model="exponente.a_pat"
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
                    v-model="exponente.a_mat"
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
                    v-model="exponente.f_nac" 
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
                    v-model="exponente.alca" 
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
                    v-model="exponente.tel"
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
                    v-model="exponente.correo"
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
                    v-model="exponente.contra"
                    type="password"
                    required
                    placeholder="Escribe tu contraseña"
                ></b-form-input> 
            </b-form-group>  
            <b-button type="submit" block variant="primary">Agregar</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Formulario_e',
        data() {
            return {
                exponente: {
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
            agregarExponente(){
                this.axios.post('/nuevo_exponente', this.exponente).then(res => {
                    this.exponente.push(res.data);
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>