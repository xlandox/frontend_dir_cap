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
                                    <b-nav-item @click="hide">Usuarios</b-nav-item>
                                    <b-nav-item @click="hide">Exponentes</b-nav-item>
                                    <b-nav-item @click="hide">Cursos</b-nav-item>
                                    <b-nav-item @click="hide">Blogs</b-nav-item>
                                    <b-nav-item @click="hide">Noticias</b-nav-item>
                                </b-nav>
                            </nav>
                            <b-button pill variant="warning" block @click="hide">Cerrar Menú</b-button>
                        </div>
                    </template>
                </b-sidebar>
            </b-col>
        </b-row>
        <Table_u></Table_u>
        <Formulario></Formulario>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import Table_u from '@/components/Table_u.vue'
    import Formulario from '@/components/Formulario.vue'

    export default {
        name: 'Admin',
        components: {
            Title,
            Table_u,
            Formulario
        }
    }
</script>