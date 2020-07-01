<template>
    <div>
        <b-row class="justify-content-center">
            <b-col sm="6" >
                <b-form-group
                    label="Correo electrónico:"
                    description="Nunca compartiremos su correo con nadie más."
                >
                    <b-form-input
                        type="email"
                        required
                        placeholder="Introduzca su correo"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Contraseña:" 
                >
                    <b-form-input
                        type="password"
                        required
                        placeholder="Introduzca su contraseña"
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-button variant="primary" class="mt-5 mr-2">Iniciar</b-button>
            <b-button type="reset" variant="danger" class="mt-5 mr-2">Limpiar</b-button>
            <b-button variant="success" class="mt-5 mr-2">Registrarse</b-button>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Sesion'
    }
</script>