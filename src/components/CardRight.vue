<template>
    <div>
        <b-row>
            <b-col cols="12">
                <b-card bg-variant="warning" text-variant="white" :title="noticia1.titulo" class="mb-3">
                    <b-card-text>
                        {{noticia1.resumen}}
                    </b-card-text>
                    <b-button variant="info" :to="{name:'Noticia'}">Ver más</b-button>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card bg-variant="warning" text-variant="white" :title="noticia2.titulo" class="mb-3">
                    <b-card-text>
                        {{noticia2.resumen}}
                    </b-card-text>
                    <b-button variant="info" :to="{name:'Noticia'}">Ver más</b-button>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card bg-variant="warning" text-variant="white" :title="noticia3.titulo" class="mb-3">
                    <b-card-text>
                        {{noticia3.resumen}}
                    </b-card-text>
                    <b-button variant="info" :to="{name:'Noticia'}">Ver más</b-button>
                </b-card>  
            </b-col>
        </b-row>
    </div>  
</template>

<script>
export default {
    name: 'CardRight',
    data() {
        return {
            noticias: [],
            totalNoticias: 0,
            noticia1: {titulo: '', resumen: '', foto: ''},
            noticia2: {titulo: '', resumen: '', foto: ''},
            noticia3: {titulo: '', resumen: '', foto: ''}
        }
    },
    created() {
        this.listarNoticias();
    },
    methods: {
        listarNoticias() {
            this.axios.get('noticiass').then(res => {
                this.noticias = res.data.noticiaDB;
                this.totalNoticias = res.data.totalNoticias;
                this.noticia1.titulo = this.noticias[this.totalNoticias - 1].titulo;
                this.noticia1.resumen = this.noticias[this.totalNoticias - 1].resumen;
                this.noticia2.titulo = this.noticias[this.totalNoticias - 2].titulo;
                this.noticia2.resumen = this.noticias[this.totalNoticias - 2].resumen;
                this.noticia3.titulo = this.noticias[this.totalNoticias - 3].titulo;
                this.noticia3.resumen = this.noticias[this.totalNoticias - 3].resumen;
            }).catch(e => {
                console.log(e.response);
            })
        }
    }
}
</script>