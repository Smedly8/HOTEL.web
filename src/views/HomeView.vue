<template>
    <MainSlider @loadMainImage="$emit('loadMainImage')"/>
    <AboutApp/>
    <RoomsApp :rooms="rooms"/>
</template>
<script>
import MainSlider from '@/components/MainSlider.vue'
import AboutApp from '@/components/AboutApp.vue'
import RoomsApp from '@/components/RoomsApp.vue'
export default {
    components:{
        MainSlider,
        AboutApp,
        RoomsApp,
    },
    props:{
        rooms: Array,
    },
    data(){
        return{
            blockHashReset: false,
        }
    },
    methods:{
        checkHash(value){
            let hashes = {
                "#about": "about",
                "#apartments": "apartments",
                "#home": "slider",
            }
            if(value !== ""){
                window.scroll({
                    top: document.getElementById(hashes[value]).offsetTop - document.getElementById('header').getBoundingClientRect().height,
                    behavior: 'smooth',
                })
                this.blockHashReset = true
                setTimeout(() => {
                    this.blockHashReset = false
                }, 1000)
            }
        },
    },
    created(){
        console.log('@@@');
    },
    mounted(){
        window.addEventListener('scroll', () => {
            if(this.blockHashReset){return}
            this.$router.push({hash: ""})
        })
        this.checkHash(this.$route.hash)
    },
    watch:{
        '$route.hash'(value){
            console.log(value);
            this.checkHash(value)
        },
    },
}
</script>
<style lang="scss">
    
</style>