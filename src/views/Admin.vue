<template>
    <div class="admin">
        <b-row class="mb-5">
            <b-col cols="12">
                <b-button pill v-b-toggle.sidebar-no-header variant="success" class="mt-5">Menú del Administrador</b-button>
                <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
                    <template v-slot:default="{ hide }">
                        <div class="p-3">
                            <h3 id="sidebar-no-header-title" class="my-5">Hola Administrador</h3>
                            <p>Seleccioné la colección perteneciente a la base de datos que desea modificar:</p>
                            <nav class="mb-5">
                                <b-nav vertical class="mt-5">
                                    <b-nav-item @click="mostrar_u()">Usuarios</b-nav-item>
                                    <b-nav-item @click="mostrar_c()">Carrusel</b-nav-item>
                                    <b-nav-item @click="mostrar_b()">Blogs</b-nav-item>
                                    <b-nav-item @click="mostrar_n()">Noticias</b-nav-item>
                                </b-nav>
                            </nav>
                            <b-button pill variant="warning" block @click="hide">Cerrar Menú</b-button>
                        </div>
                    </template>
                </b-sidebar>
            </b-col>
        </b-row>
        <div v-if="type === 'u'">
            <Table_u></Table_u>
        </div>
        <div v-if="type === 'c'">
            <Table_c></Table_c>
        </div>
        <div v-if="type === 'b'">
            <Table_b></Table_b>
        </div>
        <div v-if="type === 'n'">
            <Table_n></Table_n>
        </div>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import Table_u from '@/components/Table_u.vue'
    import Table_c from '@/components/Table_c.vue'
    import Table_b from '@/components/Table_b.vue'
    import Table_n from '@/components/Table_n.vue'

    export default {
        name: 'Admin',
        data() {
            return {
                type: 'u'
            }
        },
        components: {
            Title,
            Table_u,
            Table_c,
            Table_b,
            Table_n
        },
        methods: {
            mostrar_u(){
                this.type = 'u'
            },
            mostrar_c(){
                this.type = 'c'
            },
            mostrar_b(){
                this.type = 'b'
            },
            mostrar_n(){
                this.type = 'n'
            }
        }
    }
</script>