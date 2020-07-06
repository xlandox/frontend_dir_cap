<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de usuarios:</h3>
            </b-col>
            <b-col class="d-flex justify-content-end">
                <b-button id="show-btn" variant="primary" @click="$bvModal.show('modal')">Nuevo usuario</b-button>
                <b-modal id="modal" hide-footer>
                    <template v-slot:modal-title>
                        Inserte los datos:
                    </template>
                    <div>
                    <Formulario></Formulario>
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
                            <th scope="col">Apellido P.</th>
                            <th scope="col">Apellido M.</th>
                            <th scope="col">Fecha N.</th>
                            <th scope="col">Alcaldía</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">contrasena</th>
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
                            <td>{{item.contra}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger">Editar</b-button>
                                <b-button variant="warning">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Formulario from '@/components/Formulario.vue'

    export default {
        name: 'Table_u',
        components: {
            Formulario
        },
        data() {
            return {
                usuarios: []
            }
        },
        created(){
            this.listarUsuarios();
        },
        methods: {
            listarUsuarios(){
                this.axios.get('/usuarios').then(res => {
                    console.log(res.data);
                    this.usuarios = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>