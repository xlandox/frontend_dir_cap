<template>
    <div class="admin">
        <Title msg="Admin"/>
        <Sidebar></Sidebar>
        
    </div>
</template>

<script>
    import Title from '@/components/Title.vue'
    import Sidebar from '@/components/Sidebar.vue'

    export default {
        name: 'Admin',
        components: {
            Title,
            Sidebar
        }
    }
</script>