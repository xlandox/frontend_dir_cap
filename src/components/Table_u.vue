<template>
    <div>
        <b-row>
            <b-col cols="12">
                <b-alert
                    :show="dismissCountDown"
                    dismissible
                    variant="success"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                >
                    {{mensaje.texto}}
                </b-alert>
                <h3>Colección usuarios:</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido P.</th>
                            <th scope="col">Apellido M.</th>
                            <th scope="col">Fecha de N.</th>
                            <th scope="col">Alcaldia</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in usuarios" :key="index">
                            <td>{{item.nom}}</td>
                            <td>{{item.a_pat}}</td>
                            <td>{{item.a_mat}}</td>
                            <td>{{item.f_nac}}</td>
                            <td>{{item.alca}}</td>
                            <td>{{item.tel}}</td>
                            <td>{{item.correo}}</td>
                            <td><b-button variant="primary" @click="alerta()">Info</b-button></td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h3 class="mb-3">Registrar nuevo usuario:</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <form>
                    <label for="nom">Nombre</label>
                    <input type="text" id="nom" class="form-control mb-2" placeholder="Nombre">
                    <label for="a_pat">Apellido Paterno</label>
                    <input type="text" id="a_pat" class="form-control mb-2" placeholder="Apellido paterno">
                    <label for="a_mat">Apellido Materno</label>
                    <input type="text" id="a_mat" class="form-control mb-2" placeholder="Apellido materno">
                    <label for="genero">Genero</label>
                    <select class="form-control mb-2" id="genero">
                        <option>Masculino</option>
                        <option>Femenino</option>
                    </select>
                    <label for="f_nac">Fecha de nacimiento</label>
                    <input type="date" id="f_nac" max="3000-12-31" min="1000-01-01" class="form-control mb-2">
                    <label for="alca">Alcaldía</label>
                    <select class="form-control mb-2" id="alca">
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
                    <input type="text" class="form-control mb-2" id="col" placeholder="Colonia">
                    <label for="calle">Calle</label>
                    <input type="text" class="form-control mb-2" id="calle" placeholder="Calle">
                    <label for="tel">Telefono</label>
                    <input type="number" class="form-control mb-2" placeholder="Nombre">
                    <input type="text" class="form-control mb-2" placeholder="Nombre">
                    <input type="text" class="form-control mb-2" placeholder="Nombre">
                    <input type="text" class="form-control mb-2" placeholder="Nombre">
                    <input type="text" class="form-control mb-2" placeholder="Nombre">
                    <input type="text" class="form-control mb-2" placeholder="Nombre">
                    
                </form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Table_u',
        data() {
            return {
                mensaje: {texto: ''},
                dismissSecs: 5,
                dismissCountDown: 0,
                usuarios: []
            }
        },
        created(){
            this.listarUsuarios();
        },
        methods: {
            alerta(){
                this.mensaje.color = 'success';
                this.mensaje.texto = 'Probando alerta';
                this.showAlert();
            },
            listarUsuarios(){
                this.axios.get('/usuarios').then(res => {
                    console.log(res.data);
                    this.usuarios = res.data;
                }).catch(e => {
                    console.log(e.response);
                })
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>