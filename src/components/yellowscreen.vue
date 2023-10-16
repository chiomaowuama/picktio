<script setup>
 import { computed, onMounted, ref } from 'vue';
 let carousel = ref(null);
 let firstCardWidth = 400;
 let isDragging = ref(false);
 let startX = 0
 let scrollLeftstrart = 0;
//  getting the number of cards that can fit the carousel at once 
 let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

 const carouselChildren = computed(() => {
    return [...carousel.value.children]
 })
//  insert copiesof the last few cards to begining of carousel for infinite scrolling
function begginincards(){
    carouselChildren.value.slice(-cardPerView).reverse().forEach(card => {
      carousel.value.insertAdjacentHTML("afterbegin", card.outerHTML)
    });
}

  //  insert copiesof the first few cards to end of carousel for infinite scrolling
  function endcards(){
      carouselChildren.value.slice(0, -cardPerView).forEach(card => {
        carousel.value.insertAdjacentHTML("beforeend", card.outerHTML)
      });

}

 
// the slide effect
const startDrag = (event) =>{
    isDragging.value = true;
    startX = event.pageX;
    scrollLeftstrart = carousel.value.scrollLeft;
    // console.log(scrollLeftstrart);

};
const handleDrag = (event) => {
    if(isDragging.value){
        const deltaX = event.pageX -startX;
        carousel.value.scrollLeft =  scrollLeftstrart - deltaX;
    }
   
};

const endDrag = () => {
  isDragging.value = false;
}

//  the nav slide effect
const arrowBtns = (direction) => {
    if(carousel.value){
        console.log(carousel.value)
        carousel.value.scrollLeft += direction === 'left' ? -firstCardWidth : firstCardWidth;
     
    }
}
function infiniteScroll(){
    // console.log(carousel.value.offsetWidth)
    if(carousel.value.scrollLeft === 0){
        carousel.value.classList.add("no-transition")
        carousel.value.scrollLeft = carousel.value.scrollWidth -(2 * carousel.value.offsetWidth)
        carousel.value.classList.remove("no-transition")
    }
    else if (Math.ceil(carousel.value.scrollLeft) === carousel.value.scrollWidth - carousel.value.offsetWidth){
        carousel.value.classList.add("no-transition")
        carousel.value.scrollLeft =  carousel.value.offsetWidth
        carousel.value.classList.remove("no-transition")
    }
}
// function arrowBtns(directions){
//     directions.forEach(direction => {

        
//     });

// }

//  const dragging = (event) =>{
//     if(event){
//         carousel.value = event.pageX;
//         scrollLeftstrart = carousel.value;
//         carousel = scrollLeftstrart;

//     }
//     else{
//         console.log(1);
//     }
//  }

    // let texts = ref('text');
    // console.log(texts.value)
    // function splits(){
    //     let
    // }
    onMounted(() => {
       
        startDrag;
        handleDrag;
        endDrag;
        begginincards();
        endcards();
        // arrowBtns;
        
    })
</script>
<template>
    <div class="bg-yellowbg" >
        <!-- first part -->
        <div class=" flex py-16  px-10">
            <div class="text-white w-5/6 md:w-3/6 flex justify-center items-center md:p-16  ">
                <p class=" text-4xl font-extrabold md:text-7xl  font-textstyle tracking-tighter md:leading-0">Join <span class="text-black">live broadcasts</span>with your favourite people </p>
            </div>
            <div class="hidden w-3/6 md:flex justify-center space-x-4 pb-16  ">
                <button class="firstchild self-end border border-white-900 rounded-full p-5 hover:bg-black " @click="arrowBtns('left')" id="left" ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"></path></svg></button>
                <button class="secondchild self-end border border-white-900 rounded-full p-5 hover:bg-black" @click="arrowBtns('right')" id="right"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"></path></svg></button>
            </div>

        </div>
        <!-- testing -->
       
        <!-- the second part -->
        <transition name="leftmanual" appear>
            <div class=" wrapper pb-10 " >
            <div ref="carousel"  class="border-2 border-green-900 carousel scroll-smooth auto-cols-max  snap-mandatory overflow-auto  h-full  pl-10  gap-5 md:auto-rows-max " @mousedown="startDrag" @mousemove="handleDrag" @mouseup="endDrag" @scroll="infiniteScroll()">
                <div class="card bg-white w-64  md:w-96  rounded-xl p-2">
                    <div class="imgs flex h-44 md:h-54 justify-center rounded-xl items-center p-2 background bcone">
                        <!-- <img class="w-32 md:w-80 md:h-96 rounded-xl " src="https://pickt.io/malaika.png" alt="Malaika Ademola-Majekodunmi" > -->
                    </div>
                    <div class=" relative  bg-white rounded-2xl rounded-tl-none rounded-tr-none">
                        <div class="flex w-max  absolute -top-12 left-4 md:left-28 px-2 py-1 rounded-full bg-white justify-center gap-2 items-center  ">
                            <img class="w-4" src="https://pickt.io/profile.svg">
                            <p class="font-semibold text-xs  flex gap-2">Matthew Davs and 2 Other <img class="w-4" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"></p>
                        </div>
                        <div class="p-2 pl-2 pb-1 md:pb-4 rounded-2xl space-y-1 md:space-y-3">
                            <div class="flex">
                                <p class="flex font-semibold w-full">Live Orchestra </p>
                            </div>
                            <div class="flex gap-2 items-center">   
                                <img class="w-6" loading="eager" src="https://pickt.io/money.svg" alt="Malaika Ademola-Majekodunmi">
                                <p class=" text-lg font-semibold">$30+ <span class="text-neutral-400">/person</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card cardone bg-white w-64  md:w-96  rounded-xl p-2">
                    <div class="imgs flex h-44 md:h-54 justify-center rounded-xl items-center p-2 background bctwo">
                        <!-- <img class="w-32 md:w-80 md:h-96 rounded-xl " src="https://pickt.io/malaika.png" alt="Malaika Ademola-Majekodunmi" > -->
                    </div>
                    <div class=" relative  bg-white rounded-2xl rounded-tl-none rounded-tr-none">
                        <div class="flex w-max  absolute -top-12 left-10 md:left-28 px-2 py-1 rounded-full bg-white justify-center gap-2 items-center  ">
                            <img class="w-4" src="https://pickt.io/profile.svg">
                            <p class="font-semibold text-xs  flex gap-2">Jack wilson +2 more<img class="w-4" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg"></p>
                        </div>
                        <div class="p-2 pl-2 pb-1 md:pb-4 rounded-2xl space-y-1 md:space-y-3">
                            <div class="flex">
                                <p class="flex font-semibold w-full">Building a formidable Sales team </p>
                            </div>
                            <div class="flex gap-2 items-center">   
                                <img class="w-6" loading="eager" src="https://pickt.io/money.svg" alt="Malaika Ademola-Majekodunmi">
                                <p class=" text-lg font-semibold">$10+ <span class="text-neutral-400">/person</span></p>
                            </div>
                        </div>
                    </div>
                </div>     
                <div class=" card cardone bg-white w-64  md:w-96  rounded-xl p-2">
                    <div class=" flex md:h-54 h-44 justify-center rounded-xl items-center p-2 background bcthree ">
                        <!-- <img class="w-32 md:w-80 md:h-96 rounded-xl " src="https://pickt.io/malaika.png" alt="Malaika Ademola-Majekodunmi" > -->
                    </div>
                    <div class=" relative  bg-white rounded-2xl rounded-tl-none rounded-tr-none">
                        <div class="flex w-max  absolute -top-12 left-10 md:left-24 px-2 py-1 rounded-full bg-white justify-center gap-2 items-center  ">
                            <img class="w-4" src="https://pickt.io/profile.svg">
                            <p class="font-semibold text-xs  flex gap-2">Lauryn and Tina<img class="w-4" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg"></p>
                        </div>
                        <div class="p-2 pl-2 pb-1 md:pb-4 rounded-2xl space-y-1 md:space-y-3">
                            <div class="flex">
                                <p class="flex font-semibold">Make Over with Lauryn and Tina</p>
                            </div>
                            <div class="flex gap-2 items-center">   
                                <img class="w-6" loading="eager" src="https://pickt.io/money.svg" alt="Malaika Ademola-Majekodunmi">
                                <p class=" text-lg font-semibold">$10+ <span class="text-neutral-400">/min</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" card cardone bg-white w-64  md:w-96  rounded-xl p-2">
                    <div class=" flex h-44 md:h-54 justify-center rounded-xl items-center p-2 background bcfour">

                    </div>
                    <div class=" relative  bg-white rounded-2xl rounded-tl-none rounded-tr-none">
                        <div class="flex w-max absolute -top-12 left-2  md:left-14 px-2 py-1 rounded-full bg-white justify-center gap-2 items-center  ">
                            <img class="w-4" src="https://pickt.io/profile.svg">
                            <p class="font-semibold text-xs  flex gap-2">Matthew Davs and 2 Other <img class="w-4" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg"></p>
                        </div>
                        <div class="p-2 pl-2 pb-1 md:pb-4 rounded-2xl space-y-1 md:space-y-3">
                            <div class="flex">
                                <p class="flex font-semibold">Come on Live with Me</p>
                            </div>
                            <div class="flex gap-2 items-center">   
                                <img class="w-6" loading="eager" src="https://pickt.io/money.svg" alt="Malaika Ademola-Majekodunmi">
                                <p class=" text-lg font-semibold">$10+ <span class="text-neutral-400">/person</span></p>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
           
        </div>
        </transition>
        <div class="flex justify-center align-middle py-16 ">
            <button class=" w-36 px-3 py-3 rounded-xl  text-white bg-yellowbg font-semibold font-textstyle text-sm">Discover Experts</button>
        </div>
       
    </div>
   
    <!-- <h1>heloo</h1> -->
    
</template>