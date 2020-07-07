<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de noticias:</h3>
            </b-col>
            <b-col class="d-flex justify-content-end">
                <b-button id="show-btn" variant="primary" @click="$bvModal.show('modal')">Nueva noticia</b-button>
                <b-modal id="modal" hide-footer>
                    <template v-slot:modal-title>
                        Inserte los datos:
                    </template>
                    <div>
                    <Formulario_n></Formulario_n>
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
                            <th scope="col">Titulo</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Fecha de Creación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in noticias" :key="index">
                            <td>{{item.titulo}}</td>
                            <td>{{item.autor}}</td>
                            <td>{{item.foto}}</td>
                            <td>{{item.f_crea}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger">Editar</b-button>
                                <b-button variant="warning" @click="eliminarNoticia(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Formulario_n from '@/components/Formulario_n.vue'

    export default {
        name: 'Table_n',
        components: {
            Formulario_n
        },
        data() {
            return {
                noticias: []
            }
        },
        created(){
            this.listarNoticias();
        },
        methods: {
            listarNoticias(){
                this.axios.get('/noticias').then(res => {
                    console.log(res.data);
                    this.noticias = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            eliminarNoticia(id){
                this.axios.delete(`/noticia/${id}`).then(res => {
                    const index = this.noticias.findIndex(item => item._id === res.data._id);
                    this.noticias.splice(index, 1);
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>