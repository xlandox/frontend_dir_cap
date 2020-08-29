<template>
    <div>
        <b-row> 
            <b-col cols="12" md="6" lg="4" class="d-flex justify-content-center">
                <b-card
                    :title="curso1.nom"
                    :img-src="curso1.foto"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-3"
                >
                    <b-card-text>
                    {{curso1.des}}
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" lg="4" class="d-flex justify-content-center">
                <b-card
                    :title="curso2.nom"
                    :img-src="curso2.foto"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-3"
                >
                    <b-card-text>
                    {{curso2.des}}
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" lg="4" class="d-flex justify-content-center">
                <b-card
                    :title="curso3.nom"
                    :img-src="curso3.foto"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-3"
                >
                    <b-card-text>
                    {{curso3.des}}
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" lg="4" class="d-flex justify-content-center">
                <b-card
                    :title="curso4.nom"
                    :img-src="curso4.foto"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-3"
                >
                    <b-card-text>
                    {{curso4.des}}
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" lg="4" class="d-flex justify-content-center">
                <b-card
                    :title="curso5.nom"
                    :img-src="curso5.foto"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-3"
                >
                    <b-card-text>
                    {{curso5.des}}
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" lg="4" class="d-flex justify-content-center">
                <b-card
                    :title="curso6.nom"
                    :img-src="curso6.foto"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-3"
                >
                    <b-card-text>
                    {{curso6.des}}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>    
</template>

<script>
    export default {
        name: 'Card',
        data() {
            return {
                cursos: [],
                totalCursos: 0,
                curso1: {nom: '', des: '', foto: ''},
                curso2: {nom: '', des: '', foto: ''},
                curso3: {nom: '', des: '', foto: ''},
                curso4: {nom: '', des: '', foto: ''},
                curso5: {nom: '', des: '', foto: ''},
                curso6: {nom: '', des: '', foto: ''}
            }
        },
        created() {
            this.listarCursos();
        },
        methods: {
            listarCursos() {
                this.axios.get('/cursoss').then(res => {
                    this.cursos = res.data.cursoDB;
                    this.totalCursos = res.data.totalCursos;
                    this.curso1.nom = this.cursos[this.totalCursos - 1].nom;
                    this.curso1.des = this.cursos[this.totalCursos - 1].des;
                    this.curso1.foto = this.cursos[this.totalCursos - 1].foto;
                    this.curso2.nom = this.cursos[this.totalCursos - 2].nom;
                    this.curso2.des = this.cursos[this.totalCursos - 2].des;
                    this.curso2.foto = this.cursos[this.totalCursos - 2].foto;
                    this.curso3.nom = this.cursos[this.totalCursos - 3].nom;
                    this.curso3.des = this.cursos[this.totalCursos - 3].des;
                    this.curso3.foto = this.cursos[this.totalCursos - 3].foto;
                    this.curso4.nom = this.cursos[this.totalCursos - 4].nom;
                    this.curso4.des = this.cursos[this.totalCursos - 4].des;
                    this.curso4.foto = this.cursos[this.totalCursos - 4].foto;
                    this.curso5.nom = this.cursos[this.totalCursos - 5].nom;
                    this.curso5.des = this.cursos[this.totalCursos - 5].des;
                    this.curso5.foto = this.cursos[this.totalCursos - 5].foto;
                    this.curso6.nom = this.cursos[this.totalCursos - 6].nom;
                    this.curso6.des = this.cursos[this.totalCursos - 6].des;
                    this.curso6.foto = this.cursos[this.totalCursos - 6].foto;
                }).catch(e => {
                    console.log(e.response);
                })
            }
        }
    }
</script>