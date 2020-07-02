<template>
    <div>
        <b-row>
            <b-col cols="12">
                <b-button v-b-toggle.sidebar-no-header>Menu</b-button>
                <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
                    <template v-slot:default="{ hide }">
                        <div class="p-3">
                            <h3 id="sidebar-no-header-title" class="my-5">Hola Administrador</h3>
                            <p>Seleccione la coleccion perteneciente a la base de datos que desea modificar:</p>
                            <nav class="mb-5">
                                <b-nav vertical class="mt-5">
                                    <b-nav-item @click="hide">Usuarios</b-nav-item>
                                    <b-nav-item @click="hide">Exponentes</b-nav-item>
                                    <b-nav-item @click="hide">Cursos</b-nav-item>
                                    <b-nav-item @click="hide">Blogs</b-nav-item>
                                    <b-nav-item @click="hide">Noticias</b-nav-item>
                                </b-nav>
                            </nav>
                            <b-button variant="primary" block @click="hide">Cerrar Menu</b-button>
                        </div>
                    </template>
                </b-sidebar>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>