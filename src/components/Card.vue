<template>
    <div>
        <b-row> 
            <b-col cols="12" md="6" lg="4" class="d-flex justify-content-center">
                <b-card
                    title="Curso #1"
                    img-src="https://picsum.photos/600/300?random=1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-3"
                >
                    <b-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores quisquam, 
                    cumque velit laboriosam at aliquam soluta, explicabo tempore quidem corporis, 
                    quis quae magnam ut architecto saepe! Vero, accusamus dicta.
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>    
</template>

<script>
    export default {
        name: 'Card'
    }
</script>