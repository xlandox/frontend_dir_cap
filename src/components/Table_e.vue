<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de exponentes:</h3>
            </b-col>
            <b-col class="d-flex justify-content-end">
                <b-button id="show-btn" variant="primary" @click="$bvModal.show('modal')">Nuevo exponente</b-button>
                <b-modal id="modal" hide-footer>
                    <template v-slot:modal-title>
                        Inserte los datos:
                    </template>
                    <div>
                    <Formulario_e></Formulario_e>
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
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Alcaldía</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Contraseña</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in exponentes" :key="index">
                            <td>{{item.nom}}</td>
                            <td>{{item.a_pat}}</td>
                            <td>{{item.a_mat}}</td>
                            <td>{{item.f_nac}}</td>
                            <td>{{item.alca}}</td>
                            <td>{{item.tel}}</td>
                            <td>{{item.correo}}</td>
                            <td>{{item.contra}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button variant="danger" @click="cambiarEditar(item._id)" class="mr-1">Editar</b-button>
                                <b-button variant="warning" @click="eliminarExponente(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
            <b-col sm="8" v-if="editar">
                <h4>Editar Exponente</h4>
                <b-form @submit="editarExponente(exponente_e)">
                    <b-form-group
                        id="Nombre"
                        label="Nombre"
                        label-for="nom"
                    >
                        <b-form-input
                            id="nom"
                            v-model="exponente_e.nom"
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
                            v-model="exponente_e.a_pat"
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
                            v-model="exponente_e.a_mat"
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
                            v-model="exponente_e.f_nac" 
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
                            v-model="exponente_e.alca" 
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
                            v-model="exponente_e.tel"
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
                            v-model="exponente_e.correo"
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
                            v-model="exponente_e.contra"
                            type="password"
                            required
                            placeholder="Escribe tu contraseña"
                        ></b-form-input> 
                    </b-form-group>  
                    <b-button type="submit" variant="primary" class="mr-2">Editar</b-button>
                    <b-button type="submit" variant="warning" @click="editar = false">Cancelar</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Formulario_e from '@/components/Formulario_e.vue'

    export default {
        name: 'Table_e',
        components: {
            Formulario_e
        },
        data() {
            return {
                exponentes: [],
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
                editar: false,
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
                ],
                exponente_e: {}
            }
        },
        created(){
            this.listarExponentes();
        },
        methods: {
            listarExponentes(){
                this.axios.get('/exponentes').then(res => {
                    console.log(res.data);
                    this.exponentes = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            eliminarExponente(id){
                this.axios.delete(`/exponente/${id}`).then(res => {
                    const index = this.exponentes.findIndex(item => item._id === res.data._id);
                    this.exponentes.splice(index, 1);
                }).catch(e => {
                    console.log(e.response);
                })
            },
            cambiarEditar(id){
                this.editar = true;
                console.log(id);
                this.axios.get(`/exponente/${id}`).then(res => {
                    this.exponente_e = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            editarExponente(item){
                this.axios.put(`/exponente/${item._id}`, item).then(res => {
                    const index = this.exponentes.findIndex(e => e._id === res.data._id);
                    this.exponentes[index].nom = res.data.nom;
                    this.exponentes[index].a_pat = res.data.a_pat;
                    this.exponentes[index].a_mat = res.data.a_mat;
                    this.exponentes[index].f_nac = res.data.f_nac;
                    this.exponentes[index].alca = res.data.alca;
                    this.exponentes[index].tel = res.data.tel;
                    this.exponentes[index].correo = res.data.correo;
                    this.exponentes[index].contra = res.data.contra;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>