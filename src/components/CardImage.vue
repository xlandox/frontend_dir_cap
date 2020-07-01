<template>
    <div>
        <b-row>
            <b-col cols="12">
                <router-link :to="{name: 'Blog'}">
                    <b-card
                        overlay
                        img-src="https://picsum.photos/900/250?random=1"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Crea tu propio huerto en casa"
                        sub-title=""
                        class="mb-3"
                    >
                        <b-card-text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, rerum. 
                        Commodi doloribus ab alias id sed error eum nobis consectetur deserunt saepe, 
                        dolor dolorum temporibus quia iure quo tenetur placeat.
                        </b-card-text>
                    </b-card>
                </router-link>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <router-link :to="{name: 'Blog'}">
                    <b-card
                        overlay
                        img-src="https://picsum.photos/900/250?random=2"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Recolección de agua de lluvias"
                        sub-title=""
                        class="mb-3"
                    >
                        <b-card-text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, rerum. 
                        Commodi doloribus ab alias id sed error eum nobis consectetur deserunt saepe, 
                        dolor dolorum temporibus quia iure quo tenetur placeat.
                        </b-card-text>
                    </b-card>
                </router-link>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <router-link :to="{name: 'Blog'}">
                    <b-card
                        overlay
                        img-src="https://picsum.photos/900/250?random=3"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Ventajas de tener un techo verde"
                        sub-title=""
                        class="mb-3"
                    >
                        <b-card-text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, rerum. 
                        Commodi doloribus ab alias id sed error eum nobis consectetur deserunt saepe, 
                        dolor dolorum temporibus quia iure quo tenetur placeat.
                        </b-card-text>
                    </b-card>
                </router-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'CardImage'
}
</script>