<script setup>
</script>
<template>
    <!-- white vlog part -->
    <div class="w-full  pt-10 pb-10 md:pb-5">
        <div class=" w-full py-8  md:w-4/6 mx-auto  md:py-14 pb- relative">
            <p class=" text-3xl md:text-5xl lg:text-6xl mx-auto  leading-snug text-center font-textstyle font-bold">Share the <span class="text-navbg"> voice</span> and grit behind your greatest<span class="text-pinktext"> works</span>, <span class="text-yellowbg">knowledge</span> and <span class="text-yellowbg">ideas.</span></p>
            <img src="@/assets/mic.svg" alt="" class="w-14 -top-4  left-36 md:w-24 absolute md:-top-4 md:left-96  ">
            <img src="@/assets/passion.svg" alt="" class=" w-10 top-40 left-20  md:w-16 absolute md:top-24 md:right-10 ">
        </div> 
        <div class="mt-12 flex flex-col lg:flex-row">
            <div class="relative lg:hidden">
                    <img src="@/assets/idea.svg" alt="" class="w-16  absolute -top-12 left-56 md:-top-32 md:left-2">
                    <p class="w-72 mx-auto  font-textstyle text-base mt-4 font-medium md:text-lg md:w-96">Pick enpowers creatives and professionls width a variety of tools to produce and market products like ebooks, courrses, coaching programs in their digital portfolio</p>
                    <div class="  py-8 mx-10 ">
                        <button class=" w-36  px-1 py-3 rounded-md  text-white bg-navbg font-semibold font-textstyle text-base">Discover Experts</button>
                    </div>
                </div>
            <div class=" lg:w-3/6 relative ">
                <img src="@/assets/about.png" alt="" class="">
                <img src="@/assets/balance.svg" alt="" class="absolute w-36 left-48 top-36 lg:w-48 md:top-56 md:left-80">
            </div>
            <div class=" lg:w-3/6 relative ">
                <!-- top -->
                <div class="relative hidden lg:block">
                    <img src="https://pickt.io/idea.svg" alt="" class="w-36  absolute -top-32 left-2">
                    <p class="w-96  font-textstyle text-xl mt-16 font-medium  ">Pick enpowers creatives and professionls width a variety of tools to produce and market products like ebooks, courrses, coaching programs in their digital portfolio</p>
                    <div class="  py-8 mx-28 ">
                        <button class=" w-36 px-3 py-3 rounded-xl  text-white bg-navbg font-semibold font-textstyle text-sm">Discover Experts</button>
                    </div>
                </div>
                <transition name="pushdown" appear>
                    <div class=" flex md:absolute md:bottom-32 justify-center">
                        <p class="text-2xl md:text-5xl font-bold text-textstyle w-4/6  text-end ">The perfect tools to monetize your time</p>
                    </div>
                </transition>
                <!-- bottom -->
            </div>
        </div>
    </div>
    <div class="space-y-8 mb-10">
        <div class="pb-10 w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class=" bg-pinkish rounded-2xl px-5 py-5 space-y-3">
                <img src="@/assets/link.svg" alt="" class="w-14 md:w-24">
                <h3 class="font-bold text-md md:text-xl">Get personal URL</h3>
                <p class="w-full text-sm md:text-md  md:w-5/6">Get and share your persol profile URL to give prople direct access to your page.</p>
            </div>
            <div class=" bg-pinkish rounded-2xl px-5 py-5 space-y-3">
                <img src="@/assets/rates.svg" alt="" class="w-14 md:w-24">
                <h3 class="font-bold text-md  md:text-xl">Specify Rates </h3>
                <p class=" w-full text-sm md:text-md md:w-5/6">Specify your rates for video calls,audio calls and chat sessions.</p>
            </div>
            <div class=" bg-pinkish rounded-2xl px-5 py-5 space-y-3">
                <img src="@/assets/availability.svg" alt="" class="w-14 md:w-24">
                <h3  class="font-bold text-md  md:text-xl">Manage Availability</h3>
                <p class=" w-full text-sm md:text-md  md:w-5/6">Set your personal Pickt calendar to rflect your availability to take Video, audio, or chat session meeting.</p>
            </div>
            <div class=" bg-pinkish rounded-2xl px-5 py-5 space-y-3">
                <img src="@/assets/withdrawals.svg" alt="" class="w-14 md:w-24 ">
                <h3 class="font-bold text-md  md:text-xl">Fast withdrawals</h3>
                <p class="w-full text-sm md:text-md  md:w-5/6">Withdraw earnings from your Pickt wallet to your personal bank account.</p>
            </div>
            <div class="border-green-900 bg-pinkish rounded-2xl px-5 py-5 space-y-3">
                <img src="@/assets/broadcast.svg" alt="" class="w-14 md:w-24">
                <h3 class="font-bold text-md md:text-xl">Create Broadcasts</h3>
                <p class=" w-full text-sm md:text-md md:w-5/6">Create live broadcast sessions and sell access to everyone</p>
            </div>
            <div class=" bg-pinkish rounded-2xl px-5 py-5 space-y-3">
                <img src="@/assets/products.svg" alt="" class="w-14 md:w-24">
                <h3 class="font-bold text-md md:text-xl">Sell Your Products</h3>
                <p class="w-full text-sm md:text-md md:w-5/6">Market and sell your ebooks, courses and digital products.</p>
            </div>
        </div>
       <div class="bg-navbg mx-auto  w-32 py-8 md:py-10  flex justify-center items-center rounded-full">
         <p class="w-24 rounded-full text-center text-xl text-white">Get Started</p>
        </div>
    </div>
</template>