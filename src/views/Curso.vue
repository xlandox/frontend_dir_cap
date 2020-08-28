<template>
    <div class="curso">
        <Title msg="Titulo del Curso"/>
        <b-row>
            <b-col cols="12" md="6" class="pb-5">
                <b-img src="https://picsum.photos/600/300?random=1" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="12" md="6" class="text-justify">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni ullam culpa a sed,
                    quaerat voluptatibus hic dolorem nihil nam quia saepe placeat voluptatum, delectus ipsa esse adipisci. 
                    Consequuntur, mollitia?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni ullam culpa a sed,
                    quaerat voluptatibus hic dolorem nihil nam quia saepe placeat voluptatum, delectus ipsa esse adipisci. 
                    Consequuntur, mollitia?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni ullam culpa a sed,
                    quaerat voluptatibus hic dolorem nihil nam quia saepe placeat voluptatum, delectus ipsa esse adipisci. 
                    Consequuntur, mollitia?</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'

    export default {
        name: 'Curso',
        components: {
            Title
        }
    }
</script>