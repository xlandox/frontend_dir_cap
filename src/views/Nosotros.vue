<template>
    <div class="nosotros">
        <Title msg="Nosotros"/>
        <b-row>
            <b-col cols="12" md="6" class="pb-5">
                <b-img src="https://i.imgur.com/skL54cu.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="12" md="6" class="text-justify">
                <p>El programa Altepetl es una estrategia de gobierno que busca conservar, proteger, restaurar y mantener 
                    los ecosistemas y agroecosistemas del Suelo de Conservación, mediante el fomento de acciones comunitarias 
                    y la retribución por servicios socioambientales.</p>
                <p>Además, busca fomentar las actividades productivas agropecuarias sustentables y el rescate del patrimonio 
                    biocultural de los habitantes del Suelo de Conservación para contribuir al bienestar, igualdad social y de género.</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'

    export default {
        name: 'Nosotros',
        components: {
            Title
        }
    }
</script>