<template>
    <div id="app">
        <header>
            <b-container fluid>
                <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">
                    <b-navbar-brand :to="{name: 'Home'}">
                        <b-img src="https://i.imgur.com/NzPGBAU.png" width="50"></b-img>
                    </b-navbar-brand>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item :to="{name: 'Home'}">Inicio</b-nav-item>
                            <b-nav-item :to="{name: 'Cursos'}">Curso</b-nav-item>
                            <b-nav-item :to="{name: 'Noticias'}">Noticias</b-nav-item>
                            <b-nav-item :to="{name: 'Blogs'}">Blog</b-nav-item>
                            <b-nav-item :to="{name: 'Nosotros'}">Nosotros</b-nav-item>
                        </b-navbar-nav>
                        <!-- Items alineados a la derecha en la Navbar -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item :to="{name: 'Login'}" v-if="!sesionIniciada">
                                <b-icon icon="person-fill"></b-icon>
                                    Iniciar sesión
                            </b-nav-item>
                            <b-nav-item @click="cerrarSesion()" v-if="sesionIniciada">
                                <b-icon icon="person-fill"></b-icon>
                                    Cerrar sesión
                            </b-nav-item>
                            
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </b-container>
        </header>
        <body>
            <b-container class="container_body">
                <router-view/>
            </b-container>
        </body>
        <footer>
            <b-container fluid class="footer mt-5"> 
                <b-row  class="text-left text-white p-5">
                    <b-col cols="12" md="6" lg="3">
                        <b-img src="https://i.imgur.com/qtlBhZC.png" width="200"></b-img>
                    </b-col>
                    <b-col cols="12" md="6" lg="3">
                        <h5 class="mb-2">Navegación</h5>
                        <router-link :to="{name: 'Home'}" class="text-white">Inicio</router-link><br>
                        <router-link :to="{name: 'Cursos'}" class="text-white">Cursos</router-link><br>
                        <router-link :to="{name: 'Noticias'}" class="text-white">Noticias</router-link><br>
                        <router-link :to="{name: 'Blogs'}" class="text-white">Blog</router-link><br>
                        <router-link :to="{name: 'Nosotros'}" class="text-white">Nosotros</router-link>
                    </b-col>
                    <b-col cols="12" md="6" lg="3">
                        <h5 class="mb-2">Contacto</h5>
                        <h6>Teléfono:</h6>
                        <p>58438536 ext.</p>
                        <h6>Correo electrónico:</h6>
                        <p>tgomezf.corenadr@gmail.com</p>
                    </b-col>
                    <b-col cols="12" md="6" lg="3">
                        <h5 class="mb-2">Comisión de Recuros Naturales y Desarrollo Rural</h5>
                        <p>Dirección: Av. Año de Juárez 9700 Quirino Mendoza, Pueblo de San Luis Tlaxialtemalco, Xochimilco, 
                            Distrito Federal 16610 México, Belisario Domínguez 9700, San Luis Tlaxialtemalco, Xochimilco, 
                            16610 Ciudad de México, CDMX.</p>
                    </b-col>
                </b-row>
                <b-row class="text-center text-white">
                    <b-col cols="12">
                        <p>Todos los derechos reservados &copy;</p>
                    </b-col>
                </b-row>
            </b-container>
        </footer>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data(){
        return {
            mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
        }
    },
    methods:{
        ...mapActions(['cerrarSesion', 'leerToken'])
    },
    computed:{
        ...mapGetters(['sesionIniciada'])
    },
    created(){
        this.leerToken();
    }
}
</script>

<style lang="scss">
    @import "assets/estilos.scss";
</style>