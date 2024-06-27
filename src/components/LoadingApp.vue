<template>  
    <div class="wrapper">
        <p class="text">Заречье</p>
        <div class="loadWrap">
            <span class="loader"></span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: var(--gray);
        background: var(--lightBlue);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 50px;
    }
    .text{
        font-family: "Montserrat-alt";
        color: var(--mainColor);
        font-size: 30px;
    }
    .loadWrap {
        transform: scale(1.4);
        display: flex;
        align-items: center;
        justify-content: center;
    }
//     .loader {
//       width: 64px;
//       height: 64px;
//       position: relative;
//       background: $secondColor;
//       border-radius: 50%;
//       transform: rotate(45deg);
//       animation: rotate 2s linear infinite;
//     }
//     .loader:before {
//       content: "";
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       width: 15px;
//       height: 30px;
//       background: var(--mainColor);
//       transform: skew(5deg , 60deg) translate(-50%, -5%);
//     }

//     .loader:after {
//       content: "";
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       width: 6px;
//       height: 6px;
//       border-radius: 50%;
//       background: $secondColor;
//       transform:translate(-50% , -50%);
//     }

//     @keyframes rotate {
//       0% { transform: rotate(45deg)}
//       30% , 50% , 70%  { transform: rotate(230deg)}
//       40% , 60% , 80% { transform: rotate(240deg)}
//       100% {  transform: rotate(245deg)}
//    }

//    .loader {
//   font-size: 10px;
//   width: 1em;
//   height: 1em;
//   border-radius: 50%;
//   position: relative;
//   text-indent: -9999em;
//   animation: mulShdSpin 1.1s infinite ease;
//   transform: translateZ(0);
// }
// @keyframes mulShdSpin {
//   0%,
//   100% {
//     box-shadow: 0em -2.6em 0em 0em #038B00, 1.8em -1.8em 0 0em rgba(3,139,0, 0.2), 2.5em 0em 0 0em rgba(3,139,0, 0.2), 1.75em 1.75em 0 0em rgba(3,139,0, 0.2), 0em 2.5em 0 0em rgba(3,139,0, 0.2), -1.8em 1.8em 0 0em rgba(3,139,0, 0.2), -2.6em 0em 0 0em rgba(3,139,0, 0.5), -1.8em -1.8em 0 0em rgba(3,139,0, 0.7);
//   }
//   12.5% {
//     box-shadow: 0em -2.6em 0em 0em rgba(3,139,0, 0.7), 1.8em -1.8em 0 0em #038B00, 2.5em 0em 0 0em rgba(3,139,0, 0.2), 1.75em 1.75em 0 0em rgba(3,139,0, 0.2), 0em 2.5em 0 0em rgba(3,139,0, 0.2), -1.8em 1.8em 0 0em rgba(3,139,0, 0.2), -2.6em 0em 0 0em rgba(3,139,0, 0.2), -1.8em -1.8em 0 0em rgba(3,139,0, 0.5);
//   }
//   25% {
//     box-shadow: 0em -2.6em 0em 0em rgba(3,139,0, 0.5), 1.8em -1.8em 0 0em rgba(3,139,0, 0.7), 2.5em 0em 0 0em #038B00, 1.75em 1.75em 0 0em rgba(3,139,0, 0.2), 0em 2.5em 0 0em rgba(3,139,0, 0.2), -1.8em 1.8em 0 0em rgba(3,139,0, 0.2), -2.6em 0em 0 0em rgba(3,139,0, 0.2), -1.8em -1.8em 0 0em rgba(3,139,0, 0.2);
//   }
//   37.5% {
//     box-shadow: 0em -2.6em 0em 0em rgba(3,139,0, 0.2), 1.8em -1.8em 0 0em rgba(3,139,0, 0.5), 2.5em 0em 0 0em rgba(3,139,0, 0.7), 1.75em 1.75em 0 0em #038B00, 0em 2.5em 0 0em rgba(3,139,0, 0.2), -1.8em 1.8em 0 0em rgba(3,139,0, 0.2), -2.6em 0em 0 0em rgba(3,139,0, 0.2), -1.8em -1.8em 0 0em rgba(3,139,0, 0.2);
//   }
//   50% {
//     box-shadow: 0em -2.6em 0em 0em rgba(3,139,0, 0.2), 1.8em -1.8em 0 0em rgba(3,139,0, 0.2), 2.5em 0em 0 0em rgba(3,139,0, 0.5), 1.75em 1.75em 0 0em rgba(3,139,0, 0.7), 0em 2.5em 0 0em #038B00, -1.8em 1.8em 0 0em rgba(3,139,0, 0.2), -2.6em 0em 0 0em rgba(3,139,0, 0.2), -1.8em -1.8em 0 0em rgba(3,139,0, 0.2);
//   }
//   62.5% {
//     box-shadow: 0em -2.6em 0em 0em rgba(3,139,0, 0.2), 1.8em -1.8em 0 0em rgba(3,139,0, 0.2), 2.5em 0em 0 0em rgba(3,139,0, 0.2), 1.75em 1.75em 0 0em rgba(3,139,0, 0.5), 0em 2.5em 0 0em rgba(3,139,0, 0.7), -1.8em 1.8em 0 0em #038B00, -2.6em 0em 0 0em rgba(3,139,0, 0.2), -1.8em -1.8em 0 0em rgba(3,139,0, 0.2);
//   }
//   75% {
//     box-shadow: 0em -2.6em 0em 0em rgba(3,139,0, 0.2), 1.8em -1.8em 0 0em rgba(3,139,0, 0.2), 2.5em 0em 0 0em rgba(3,139,0, 0.2), 1.75em 1.75em 0 0em rgba(3,139,0, 0.2), 0em 2.5em 0 0em rgba(3,139,0, 0.5), -1.8em 1.8em 0 0em rgba(3,139,0, 0.7), -2.6em 0em 0 0em #038B00, -1.8em -1.8em 0 0em rgba(3,139,0, 0.2);
//   }
//   87.5% {
//     box-shadow: 0em -2.6em 0em 0em rgba(3,139,0, 0.2), 1.8em -1.8em 0 0em rgba(3,139,0, 0.2), 2.5em 0em 0 0em rgba(3,139,0, 0.2), 1.75em 1.75em 0 0em rgba(3,139,0, 0.2), 0em 2.5em 0 0em rgba(3,139,0, 0.2), -1.8em 1.8em 0 0em rgba(3,139,0, 0.5), -2.6em 0em 0 0em rgba(3,139,0, 0.7), -1.8em -1.8em 0 0em #038B00;
//   }
// }
// 
// 
// .loader {
//   box-sizing: border-box;
//   position: relative;
//   width: 48px;
//   height: 48px;
//   animation: spin 1s linear infinite;
// }
// .loader:after, .loader:before {
//   content: "";
//   width: 24px;
//   height: 24px;
//   position: absolute;
//   border-radius: 50%;
//   background: #038B00;
//   animation: spin 1s linear infinite;
//   transform-origin: 0px 100%;
// }
// .loader:before {
//   transform-origin: 0 50%;
//   background: #848484;
// }
// @keyframes spin {
//   to {
//     transform: rotate(360deg);
//   }
// }
$secondColor: #13891125;

.loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
  }

  .loader:before,
  .loader:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    
  }
  .loader:before {
    animation: ball1 1s infinite;
    background-color: $secondColor;
    box-shadow: 30px 0 0 #038B00;
    margin-bottom: 10px;
  }
  .loader:after {
    animation: ball2 1s infinite;
    background-color: #038B00;
    box-shadow: 30px 0 0 $secondColor;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg) scale(0.8) }
    50% { transform: rotate(360deg) scale(1.2) }
    100% { transform: rotate(720deg) scale(0.8) }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #038B00;
    }
    50% {
      box-shadow: 0 0 0 #038B00;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #038B00;
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 $secondColor;
    }
    50% {
      box-shadow: 0 0 0 $secondColor;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 $secondColor;
      margin-top: 0;
    }
  }
</style>