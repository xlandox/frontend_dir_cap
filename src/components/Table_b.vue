<template>
    <div>
        <b-row class="mb-3">
            <b-col>
                <h3>Colección de blogs:</h3>
            </b-col>
            <b-col class="d-flex justify-content-end">
                <b-button id="show-btn" variant="primary" @click="$bvModal.show('modal')">Nuevo blog</b-button>
                <b-modal id="modal" hide-footer>
                    <template v-slot:modal-title>
                        Inserte los datos:
                    </template>
                    <div>
                    <Formulario_b></Formulario_b>
                    </div>
                    <b-button class="mt-3" block @click="$bvModal.hide('modal')">Cerrar</b-button>
                </b-modal>
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col cols="12" v-if="!editar">
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
                        <tr v-for="(item, index) in blogs" :key="index">
                            <td>{{item.titulo}}</td>
                            <td>{{item.autor}}</td>
                            <td>{{item.foto}}</td>
                            <td>{{item.f_crea}}</td>
                            <td class="d-flex justify-content-center">
                                <b-button class="mr-1" variant="danger">Editar</b-button>
                                <b-button variant="warning" @click="eliminarBlog(item._id)">Eliminar</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Formulario_b from '@/components/Formulario_b.vue'

    export default {
        name: 'Table_b',
        components: {
            Formulario_b
        },
        data() {
            return {
                blogs: []
            }
        },
        created(){
            this.listarBlogs();
        },
        methods: {
            listarBlogs(){
                this.axios.get('/blogs').then(res => {
                    console.log(res.data);
                    this.blogs = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            eliminarBlog(id){
                this.axios.delete(`/blog/${id}`).then(res => {
                    const index = this.blogs.findIndex(item => item._id === res.data._id);
                    this.blogs.splice(index, 1);
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>