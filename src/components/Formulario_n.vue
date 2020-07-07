<template>
    <div>
        <b-form @submit="agregarNoticia()">
            <b-form-group
                id="Titulo"
                label="Titulo"
                label-for="titulo"
            >
                <b-form-input
                    id="titulo"
                    v-model="noticia.titulo"
                    type="text"
                    required
                    placeholder="Escribe el titulo de la noticia"
                ></b-form-input> 
            </b-form-group>  
            <b-form-group
                id="Autor"
                label="Autor"
                label-for="autor"
            >
                <b-form-input
                    id="autor"
                    v-model="noticia.autor"
                    type="text"
                    required
                    placeholder="Escribe nombre del autor de la noticia"
                ></b-form-input>    
            </b-form-group>
            <b-form-group
                id="Artículo"
                label="Artículo"
                label-for="articulo"
            >
                <b-form-textarea
                    id="articulo"
                    v-model="noticia.articulo"
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
                    v-model="noticia.foto"
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
        name: 'Formulario_n',
        data() {
            return {
                noticia: {
                    titulo: '',
                    autor: '',
                    articulo: '',
                    foto: ''
                }
            }
        },
        methods: {
            agregarNoticia(){
                this.axios.post('/nueva_noticia', this.noticia).then(res => {
                    this.noticia.push(res.data);
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>