<template>
    <div>
        <b-row>
            <b-col cols="12">
                <b-card
                        overlay
                        :img-src="blog1.foto"
                        img-alt="Card Image"
                        text-variant="white"
                        :title="blog1.titulo"
                        sub-title=""
                        class="mb-3"
                    >
                        <b-card-text>
                        {{blog1.resumen}}
                        </b-card-text>
                    </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card
                        overlay
                        :img-src="blog2.foto"
                        img-alt="Card Image"
                        text-variant="white"
                        :title="blog2.titulo"
                        sub-title=""
                        class="mb-3"
                    >
                        <b-card-text>
                        {{blog2.resumen}}
                        </b-card-text>
                    </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card
                        overlay
                        :img-src="blog3.foto"
                        img-alt="Card Image"
                        text-variant="white"
                        :title="blog3.titulo"
                        sub-title=""
                        class="mb-3"
                    >
                        <b-card-text>
                        {{blog3.resumen}}
                        </b-card-text>
                    </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'CardImage',
    data() {
        return {
            blogs: [],
            totalBlogs: 0,
            blog1: {titulo: '', foto: '', resumen: ''},
            blog2: {titulo: '', foto: '', resumen: ''},
            blog3: {titulo: '', foto: '', resumen: ''}
        }
    },
    created() {
        this.listarBlogs();
    },
    methods: {
        listarBlogs() {
            this.axios.get('blogss').then(res => {
                this.blogs = res.data.blogDB;
                this.totalBlogs = res.data.totalBlogs;
                this.blog1.titulo = this.blogs[this.totalBlogs - 1].titulo;
                this.blog1.resumen = this.blogs[this.totalBlogs - 1].resumen;
                this.blog1.foto = this.blogs[this.totalBlogs - 1].foto;
                this.blog2.titulo = this.blogs[this.totalBlogs - 2].titulo;
                this.blog2.resumen = this.blogs[this.totalBlogs - 2].resumen;
                this.blog2.foto = this.blogs[this.totalBlogs - 2].foto;
                this.blog3.titulo = this.blogs[this.totalBlogs - 3].titulo;
                this.blog3.resumen = this.blogs[this.totalBlogs - 3].resumen;
                this.blog3.foto = this.blogs[this.totalBlogs - 3].foto;
            })
        }
    }
}
</script>