<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h3 class="mb-3">Registrar nuevo usuario:</h3>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col sm="8">
                <form>
                    <label for="nom">Nombre</label>
                    <input type="text" id="nom" class="form-control mb-2" placeholder="Nombre" v-model="usuario.nom">
                    <label for="a_pat">Apellido Paterno</label>
                    <input type="text" id="a_pat" class="form-control mb-2" placeholder="Apellido paterno" v-model="usuario.a_pat">
                    <label for="a_mat">Apellido Materno</label>
                    <input type="text" id="a_mat" class="form-control mb-2" placeholder="Apellido materno" v-model="usuario.a_mat">
                    <label for="genero">Género</label>
                    <select class="form-control mb-2" id="genero" v-model="usuario.genero">
                        <option>Masculino</option>
                        <option>Femenino</option>
                    </select>
                    <label for="f_nac">Fecha de nacimiento</label>
                    <input type="date" id="f_nac" max="3000-12-31" min="1000-01-01" class="form-control mb-2" v-model="usuario.f_nac">
                    <label for="alca">Alcaldía</label>
                    <select class="form-control mb-2" id="alca" v-model="usuario.alca">
                        <option>Álvaro Obregón</option>
                        <option>Azcapotzalco</option>
                        <option>Benito Juárez</option>
                        <option>Coyoacán</option>
                        <option>Cuajimalpa</option>
                        <option>Cuauhtémoc</option>
                        <option>Gustavo A. Madero</option>
                        <option>Iztacalco</option>
                        <option>Iztapalapa</option>
                        <option>Magdalena Contreras</option>
                        <option>Miguel Hidalgo</option>
                        <option>Milpa Alta</option>
                        <option>Tláhuac</option>
                        <option>Tlalpan</option>
                        <option>Venustiano Carranza</option>
                        <option>Xochimilco</option>
                    </select>
                    <label for="col">Colonia</label>
                    <input type="text" class="form-control mb-2" id="col" placeholder="Colonia" v-model="usuario.col">
                    <label for="calle">Calle</label>
                    <input type="text" class="form-control mb-2" id="calle" placeholder="Calle" v-model="usuario.calle">
                    <label for="tel">Teléfono</label>
                    <input type="number" class="form-control mb-2" id="tel" placeholder="Teléfono" v-model="usuario.tel">
                    <label for="esc">Escolaridad</label>
                    <select class="form-control mb-2" id="esc" v-model="usuario.esc">
                        <option>Primaria</option>
                        <option>Secundaria</option>
                        <option>Preparatoria</option>
                        <option>Universidad</option>
                    </select>
                    <label for="ocup">Ocupación</label>
                    <input type="text" class="form-control mb-2" id="ocup" placeholder="Ocupación" v-model="usuario.ocup">
                    <label for="correo">Correo</label>
                    <input type="text" class="form-control mb-2" id="correo" placeholder="correo@dominio.com" v-model="usuario.correo">
                    <label for="contra">Contraseña</label>
                    <input type="password" class="form-control mb-2" id="contra" placeholder="Contraseña" v-model="usuario.contra">
                    <label for="rol">Rol</label>
                    <select class="form-control mb-3" id="rol" v-model="usuario.rol">
                        <option>Usuario</option>
                        <option>Exponente</option>
                        <option>Administrador</option>
                        <option>SuperUsuario</option>
                    </select>
                    <b-button variant="primary" block class="my-2" @click="alerta()">Agregar</b-button>
                </form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Formulario',
        data() {
            return {
                usuario: {
                    nom: '',
                    a_pat: '',
                    a_mat: '',
                    genero: '',
                    f_nac:  '',
                    alca: '',
                    col: '',
                    calle: '',
                    tel: '',
                    esc: '',
                    ocup: '',
                    correo: '',
                    contra: '',
                    rol: ''
                }
            }
        },
    }
</script>