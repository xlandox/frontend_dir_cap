<template>
    <div>
        <b-form @submit="agregarBlog()">
            <b-form-group
                id="Titulo"
                label="Titulo"
                label-for="titulo"
            >
                <b-form-input
                    id="titulo"
                    v-model="blog.titulo"
                    type="text"
                    required
                    placeholder="Escribe el titulo del blog"
                ></b-form-input> 
            </b-form-group>  
            <b-form-group
                id="Autor"
                label="Autor"
                label-for="autor"
            >
                <b-form-input
                    id="autor"
                    v-model="blog.autor"
                    type="text"
                    required
                    placeholder="Escribe nombre del autor del blog"
                ></b-form-input>    
            </b-form-group>
            <b-form-group
                id="Artículo"
                label="Artículo"
                label-for="articulo"
            >
                <b-form-textarea
                    id="articulo"
                    v-model="blog.articulo"
                    placeholder="Redacta el artículo ..."
                    rows="6"
                ></b-form-textarea>
            </b-form-group>   
            <b-form-group
                id="Foto"
                label="Foto"
                label-for="foto"
            >
                <b-form-input
                    id="foto"
                    v-model="blog.foto"
                    type="text"
                    required
                    placeholder="Introduce la URL"
                ></b-form-input> 
            </b-form-group>  
            <b-button type="submit" block variant="primary">Agregar</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Formulario_b',
        data() {
            return {
                blog: {
                    titulo: '',
                    autor: '',
                    articulo: '',
                    foto: ''
                }
            }
        },
        methods: {
            agregarBlog(){
                this.axios.post('/nuevo_blog', this.blog).then(res => {
                    this.blog.push(res.data);
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>