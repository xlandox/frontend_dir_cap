<template>
    <div class="blog">
        <Title msg="Titulo del Blog"/>
        <b-row class="justify-content-center">
            <b-col md="8">
                <div class="mb-5">
                    <b-img src="https://picsum.photos/900/250?random=1" fluid alt="Responsive image"></b-img>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni ullam culpa a sed,
                        quaerat voluptatibus hic dolorem nihil nam quia saepe placeat voluptatum, delectus ipsa esse adipisci. 
                        Consequuntur, mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni ullam culpa a sed,
                        quaerat voluptatibus hic dolorem nihil nam quia saepe placeat voluptatum, delectus ipsa esse adipisci. 
                        Consequuntur, mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni ullam culpa a sed,
                        quaerat voluptatibus hic dolorem nihil nam quia saepe placeat voluptatum, delectus ipsa esse adipisci. 
                        Consequuntur, mollitia?</p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'

    export default {
        name: 'Blog',
        components: {
            Title
        }
    }
</script>