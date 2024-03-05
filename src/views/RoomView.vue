<template>
    <div :class="{'appear': isAnimation}">
        <RoomDescr :rooms="rooms" :key="triggerUpdate"/>
        <RoomsApp :rooms="rooms" :key="triggerUpdate"/>
    </div>
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
            isAnimation: false,
        }
    },
    created(){
    },
    watch:{
        '$route.path'(){
            this.triggerUpdate++

            this.isAnimation = true
            setTimeout(() => {
                this.isAnimation = false
            }, 1000)
        },
    }
}
</script>
<style lang="scss">
    .appear {
        animation: appear .4s forwards;
    }
    @keyframes appear {
        from {
            transform: translateY(10px);
            opacity: 0;
        }
        to {
            transform: none;
            opacity: 1;
        }
    }
</style>