<template>
    <div>
        <b-row>
            <b-col cols="12" class="centrar">
                <h2 class="my-5 lineas">{{msg}}</h2>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Title',
        props: {
            msg: String
        }
    }
</script>