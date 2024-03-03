<template>
    <RoomDescr :rooms="rooms" :key="triggerUpdate"/>
    <RoomsApp :rooms="rooms" :key="triggerUpdate"/>
</template>
<script>
import RoomsApp from '@/components/RoomsApp.vue'
import RoomDescr from '@/components/RoomDescr.vue'
export default {
    components:{
        RoomDescr,
        RoomsApp,
    },
    props:{
        rooms: Array,
    },
    data(){
        return{
            triggerUpdate: 0,
        }
    },
    created(){
    },
    watch:{
        '$route.path'(){
            this.triggerUpdate++
        },
    }
}
</script>
<style lang="scss">
    
</style>