<template>
  <HeaderApp :links="links"/>
  <!-- <HomeView/> -->
  <router-view 
    :rooms="rooms"
    @loadMainImage="showPage"
  ></router-view>
  <FooterApp :links="links"/>
  <!-- <router-view>
  </router-view> -->
  <LoadingApp v-if="!isLoaded"/>
</template>
<script>
import HeaderApp from '@/components/HeaderApp.vue'
import HomeView from '@/views/HomeView.vue'
import FooterApp from '@/components/FooterApp.vue'
import LoadingApp from '@/components/LoadingApp.vue'
import {getPrices, postInfo, postScrollStats} from '@/api/useApi.js'

export default {
  components: {
    HeaderApp,
    HomeView,
    FooterApp,
    LoadingApp,
  },

  data(){
    return{
      complexes: null,
      key: 0,
      triggerRequestModal: 0,
      blackStyle: null,
      theme: {color:"#BC07AE", grad: "linear-gradient(60.68deg, rgba(232, 1, 130, 0.758999) -28.22%, rgba(146, 0, 238, 0.961637) 28.1%, #7917E0 67.59%, rgba(132, 2, 127, 0.74) 126.05%)"},
      isOpenAuth: false,
      isLoaded: false,
      keyAuth: 0,
      links: [
          {name: 'Главная', link: ''},
          {name: 'О продукте', link: ''},
          {name: 'Функционал', link: ''},
          {name: 'Контакты', link: ''},
      ],
      rooms:[
                {
                    idx: 0,
                    img: require('@/assets/aparts/1.png'),
                    name:`Коттедж под ключ "Лесик"`,
                    places: `4 места`,
                    price_from: 1000,
                    comforts: [1, 2, 3, 4, 5],
                    description: "",
                    images: [
                      require('@/assets/aparts/les/2.webp'),
                      require('@/assets/aparts/les/3.webp'),
                      require('@/assets/aparts/les/4.webp'),
                      require('@/assets/aparts/les/5.webp'),
                      require('@/assets/aparts/les/6.webp'),
                      require('@/assets/aparts/les/7.webp'),
                      require('@/assets/aparts/les/8.webp'),
                    ],
                    prices: [
                        ['1 - 31 мая', 1000],
                        ['1 - 20 июня', 1800],
                        ['21 - 30 июня', 2200],
                        ['1 - 31 июля', 2800],
                        ['1 - 31 августа', 2800],
                        ['1 - 30 сентября', 1800],
                    ],
                    adds: [
                      'Кухня: в коттедже',
                      'Санузел: в коттедже',
                    ],
                },
                {
                    idx: 2,
                    img: require('@/assets/aparts/3.png'),
                    name:`Коттедж под ключ "Фламинго"`,
                    places: `2-4 места`,
                    price_from: 1000,
                    comforts: [1, 2, 3, 4, 5],
                    description: "",
                    images: [
                      require('@/assets/aparts/flam/1.webp'),
                      require('@/assets/aparts/flam/2.webp'),
                      require('@/assets/aparts/flam/3.webp'),
                      require('@/assets/aparts/flam/4.webp'),
                      require('@/assets/aparts/flam/5.webp'),
                      require('@/assets/aparts/flam/6.webp'),
                      require('@/assets/aparts/flam/7.webp'),
                    ],
                    prices: [
                        ['1 - 31 мая', 1000],
                        ['1 - 20 июня', 1800],
                        ['21 - 30 июня', 2400],
                        ['1 - 31 июля', 2800],
                        ['1 - 31 августа', 2800],
                        ['1 - 30 сентября', 1800],
                    ],
                    adds: [
                      'Кухня: в коттедже',
                      'Санузел: в коттедже',
                    ],
                },
                {
                    idx: 1,
                    img: require('@/assets/aparts/2.png'),
                    name:`Домик под ключ "Эконом"`,
                    places: `3 места`,
                    price_from: 1000,
                    comforts: [1, 2,  5],
                    description: "",
                    images: [
                      require('@/assets/aparts/dom/1.webp'),
                      require('@/assets/aparts/dom/2.webp'),
                      require('@/assets/aparts/dom/3.webp'),
                      require('@/assets/aparts/dom/4.webp'),
                      require('@/assets/aparts/dom/5.webp'),
                      require('@/assets/aparts/dom/6.webp'),
                    ],
                    prices: [
                        ['1 - 31 мая', 1000],
                        ['1 - 30 июня', 1500],
                        ['1 - 31 июля', 1700],
                        ['1 - 31 августа', 1700],
                        ['1 - 30 сентября', 1300],
                    ],
                    adds: [
                      'Кухня: летняя, рядом с коттеджем',
                      'Санузел: на территории',
                    ],

                },

                {
                    idx: 3,
                    img: require('@/assets/aparts/mac/1.jpg'),
                    name:`Двухкомнатный семейный номер "Маки"`,
                    places: `6 мест`,
                    price_from: 1500,
                    comforts: [1, 2, 3, 4, 5],
                    description: "",
                    images: [
                      require('@/assets/aparts/mac/1.jpg'),
                      require('@/assets/aparts/mac/2.jpg'),
                      require('@/assets/aparts/mac/3.jpg'),
                      require('@/assets/aparts/mac/4.jpg'),
                      require('@/assets/aparts/mac/5.jpg'),
                      require('@/assets/aparts/mac/6.jpg'),
                      require('@/assets/aparts/mac/7.jpg'),
                      require('@/assets/aparts/mac/8.jpg'),
                      require('@/assets/aparts/mac/9.jpg'),
                      require('@/assets/aparts/mac/10.jpg'),
                      require('@/assets/aparts/mac/11.jpg'),
                    ],
                    prices: [
                        ['1 - 31 мая', 1500],
                        ['1 - 20 июня', 2400],
                        ['21 - 30 июня', 2800],
                        ['1 - 31 июля', 3900],
                        ['1 - 31 августа', 4100],
                        ['1 - 30 сентября', 2400],
                    ],
                    adds: [
                      'Кухня: отдельная летняя кухня',
                      'Санузел: в номере',
                    ],
                },
                
                {
                    idx: 4,
                    img: require('@/assets/aparts/5.png'),
                    name:`Двухкомнатный коттедж "Комфорт"`,
                    places: `7+1 доп. мест`,
                    price_from: 2500,
                    comforts: [1, 2, 3, 4, 5],
                    description: "",
                    images: [
                      require('@/assets/aparts/luxe/1.webp'),
                      require('@/assets/aparts/luxe/2.webp'),
                      require('@/assets/aparts/luxe/3.webp'),
                      require('@/assets/aparts/luxe/4.webp'),
                      require('@/assets/aparts/luxe/5.webp'),
                      require('@/assets/aparts/luxe/6.webp'),
                      require('@/assets/aparts/luxe/7.webp'),
                      require('@/assets/aparts/luxe/8.webp'),
                      require('@/assets/aparts/luxe/9.webp'),
                      require('@/assets/aparts/luxe/10.webp'),
                      require('@/assets/aparts/luxe/11.webp'),
                    ],
                    prices: [
                        ['1 - 31 мая', 2500],
                        ['1 - 20 июня', 2700],
                        ['21 - 30 июня', 3000],
                        ['1 - 31 июля', 4000],
                        ['1 - 31 августа', 4300],
                        ['1 - 30 сентября', 3000],
                    ],
                    adds: [
                      'Кухня: в коттедже',
                      'Санузел: в коттедже',
                    ],
                },
                {
                    idx: 5,
                    img: require('@/assets/aparts/terrace1/1.jpg'),
                    name:`Трёхместный номер с террасой"`,
                    places: `2-3 места`,
                    price_from: 1200,
                    comforts: [3, 4],
                    description: "",
                    images: [
                      require('@/assets/aparts/terrace1/1.jpg'),
                      require('@/assets/aparts/terrace1/2.jpg'),
                      require('@/assets/aparts/terrace1/3.jpg'),
                      require('@/assets/aparts/terrace1/4.jpg'),
                      require('@/assets/aparts/terrace1/5.jpg'),
                      require('@/assets/aparts/terrace1/6.jpg'),
                      require('@/assets/aparts/terrace1/7.jpg'),
                    ],
                    prices: [
                        ['1 - 31 мая', 1200],
                        ['1 - 30 июня', 1800],
                        ['1 - 31 июля', 2200],
                        ['1 - 31 августа', 2200],
                        ['1 - 30 сентября', 1800],
                    ],
                    adds: [
                      'Кухня: общая',
                      'Санузел: рядом с номером',
                    ],
                },
                {
                    idx: 6,
                    img: require('@/assets/aparts/terrace1/1.jpg'),
                    name:`Двухместный номер с террасой"`,
                    places: `2-3 места`,
                    price_from: 1200,
                    comforts: [3, 4],
                    description: "",
                    images: [
                      require('@/assets/aparts/terrace2/1.jpg'),
                      require('@/assets/aparts/terrace2/2.jpg'),
                      require('@/assets/aparts/terrace2/3.jpg'),
                      require('@/assets/aparts/terrace2/4.jpg'),
                      require('@/assets/aparts/terrace2/5.jpg'),
                    ],
                    prices: [
                        ['1 - 31 мая', 1200],
                        ['1 - 30 июня', 1800],
                        ['1 - 31 июля', 2200],
                        ['1 - 31 августа', 2200],
                        ['1 - 30 сентября', 1800],
                    ],
                    adds: [
                      'Кухня: общая',
                      'Санузел: рядом с номером',
                    ],
                },
      ],

      scrollStats: [],
    }
  },
  provide(){
    return{
      // theme: {color: this.color, grad: this.grad},
      color: this.color,
      grad: this.gradient,
      theme: this.theme
      // color: false,
      // grad: false,
    }
  },
  created(){
    window.addEventListener('load', ()=>{
      console.log('document loaded');
      this.showPage()
    }) 
    try{    
      getPrices()
      .then(response => {
        
        const rawPrices = response.data
        console.log('rawPrices', rawPrices);
        const prices = []
        prices[0] = rawPrices[3] 
        prices[1] = rawPrices[2] 
        prices[2] = rawPrices[1] 
        prices[3] = rawPrices[4] 
        prices[4] = rawPrices[5] 
        prices[5] = rawPrices[0] 
        console.log('prices', prices);
        this.rooms.map((room, idx) => {
          let roomPrice = []
          prices[idx].forEach((price, index) => {
            roomPrice.push([price.time, price.price])
          })
          room.prices = roomPrice
          return room
        })
        this.rooms.sort((a, b) => a.price_from > b.price_from)
        console.log('aaa',this.rooms);
      })
      .catch(() => {
        console.warn('getPrices Error');
      })
    } catch {
      console.warn('Ошибка запроса');
    }
  },
  mounted(){
    const payload = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    postInfo(payload)
    .catch(() => {
      console.warn('postInfo Error');
    })
    // setInterval(() => {
    //   this.scrollStats.push(window.scrollY)
    //   console.log(this.scrollStats)
    // }, 500)
    // setInterval(() => {
    //   postScrollStats({stats: this.scrollStats,})
    // }, 3000)
  },

   methods: {
    showPage(){
      console.log('showPage');
      this.isLoaded = true
    },
   },

   watch:{
    '$route.path'(){
        window.scroll({top: 0})
    },
   },
};
</script>

<style lang="scss">
@import '@/style/template.scss';
@import '@/style/reset.scss';


body{
  background: #F6F7F9;
  overflow-x: hidden;
}
/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    // animation-duration: 0.01ms !important;
    // animation-iteration-count: 1 !important;
    // transition-duration: 0.01ms !important;
    // scroll-behavior: auto !important;
  }
}
// @font-face {
//   font-family: "Montserrat";
//   src: url("@/fonts/Montserrat.ttf") format("truetype");
//   font-style: normal;
//   font-weight: normal;
// }
@font-face {
  font-family: "Montserrat";
  src: url("@/fonts/Montserrat-md.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Montserrat-rg";
  src: url("@/fonts/Montserrat-rg.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "CeraPro";
  src: url("@/fonts/CeraPro.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "CeraProRegular";
  src: url("@/fonts/CeraPro-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "ArialNova";
  src: url("@/fonts/ArialNova.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "ArialBold";
  src: url("@/fonts/ArialNova-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar";
  src: url("@/fonts/Halvar.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar-bd";
  src: url("@/fonts/Halvar_bold.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar-th";
  src: url("@/fonts/Halvar_thin.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Montserrat-alt";
  src: url("@/fonts/Montserrat-alt-md.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Neucha";
  src: url("@/fonts/Neucha-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
</style>
