<script setup>
    import { onMounted, ref } from 'vue';
    const showp = ref(false);

    // let texts = ref('text');
    // console.log(texts.value)
    // function splits(){
    //     let
    // }
    onMounted(() => {
        
        
    })
</script>
<template>
    <div class="border-2 border-white md:h-5/6 md:py-10 ">
        <div class=" mt-5 md:mt-20 md:px-8    ">
            <div class=" flex py-10 md:py-10  lg:py-8  font-textstyle">
                <transition name="pushdown" appear>
                    <div  class="hidden lg:-space-y-10 md:space-y-24 md:hidden lg:block lg:w-1/5   md:w-2/6 ">
                        <div class="md:relative md:mt-8 ">
                            <img quality="100" class="Hero_hero-decor-avatar___0YPT" loading="eager" src="https://pickt.io/chat.png" alt="" width="224" height="224">
                            <img quality="100" class=" md:absolute md:top-1/2 md:-left-4" loading="eager" src="https://pickt.io/chat_card.svg" alt="" width="224" height="224">
                        </div>
                        <div class="md:relative ">
                            <img quality="100" class="Hero_hero-decor-avatar___0YPT" loading="eager" src="https://pickt.io/broadcast.png" alt="" width="224" height="224">
                            <img quality="100" class="md:absolute md:top-1/2 md:mt-2 md:-left-4" loading="eager" src="https://pickt.io/broadcast_card.svg" alt="" width="224" height="224">
                        </div>
                    </div>
                </transition>
                <transition name="pushdown" appear>
                    <div class="my-16 md:my-0 md:h-3/5 space-y-12 md:space-y-16">
                        <div class=" px-3 ">
                            <h1 class="bg-bgconnect p-5 text-3xl text-center  w-40 mx-auto rounded-3xl text-textcolor font-extrabold md:w-44 lg:w-72 lg:text-6xl md:text-4xl  md:p-8 ">Connect</h1>
                            <h1 class="bg-bgexpress p-5 text-3xl  text-center  mx-auto rounded-3xl text-express font-extrabold md:p-6 md:px-4 lg:text-6xl md:text-4xl md:mx-10">express your creativity</h1>
                            <h1  class="bg-bgshare p-5 text-3xl  text-center  mx-auto rounded-3xl text-share font-bold  md:p-6 md:px-4 lg:text-6xl md:text-4xl md:mx-10 md:rounded-3x ">share your knowlegde</h1>
                            
                        </div>
                        <div class="space-y-12 md:space-y-6 ">
                            <p class=" text-center font-normal text-xl  px-6 leading-7 text-ptext md:w-5/6 lg:w-3/6 md:px-3 md:font-bold md:text-lg lg:text-base md:mx-auto" >Pickt is a social platform that allows people from allwalks of life to connect, share  informations and get for their time.</p>
                            <div class="flex justify-center items-center"> 
                                <button class="bg-navbg px-5 py-3 md:my-5 font-bold w-40 text-white text-xl rounded-xl " >Get Started </button>
                            </div>
                
                        </div>
                    </div>
                </transition>
                <transition name="pushdown" appear>
                    <div class="hidden md:hidden lg:space-y-2 lg:block lg:w-1/5  md:w-2/6">
                    <div class=" md:mt-8  md:relative ">
                        <img quality="100" class="" loading="eager" src="https://pickt.io/video.png" alt="" width="224" height="224">
                        <img quality="100" class=" md:absolute md:top-1/2 md:-left-4" loading="eager" src="https://pickt.io/video_card.svg" alt="" >
                    </div>
                    <div class=" md:relative">
                        <img quality="100" class="Hero_hero-decor-avatar___0YPT" loading="eager" src="https://pickt.io/audio.png" alt="" width="224" height="224">
                        <img quality="100" class=" md:absolute md:top-1/2 md:-left-4" loading="eager" src="https://pickt.io/audio_card.svg" alt="" width="224" height="224">
                    </div>
                    </div>
                </transition>
            </div>

        </div>
        <!-- <transition name="fade" appear>
            <div >
                <p>hello ninjas</p>
            </div>
        </transition> -->
        <!-- <button @click="showp = !showp">toggle</button> -->
       

    </div>
</template>

