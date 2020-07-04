<template>
    <div>
        <b-row>
            <b-col>
                <h3>Colección de usuarios:</h3>
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
                            <th scope="col">Fecha de N.</th>
                            <th scope="col">Alcaldía</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Acciones</th>
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
                            <td><b-button variant="primary">Info</b-button></td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Table_u',
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