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
        <b-row class="mb-5">
            <b-col cols="12">
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
                                <b-button class="mr-1" variant="danger">Editar</b-button>
                                <b-button variant="warning" @click="eliminarExponente(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                exponentes: []
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
            }
        }
    }
</script>