<script setup>

</script>
<template>
    <div class="bg-navbg ">
        <!-- first bluepart -->
        <div  class="flex flex-col md:flex-row py-10">
            <!-- firstdiv -->
            <div class=" flex relative   py-10  md:w-2/5 ">                
                <h1 class="ml-10 text-4xl  font-textstyle font-extrabold w-34 space-y-1 md:ml-14 md:space-y-3 md:text-6xl text-white e"> meet
                    <span class="block text-white">talk</span>
                    <span class="block text-white">Know</span>
                    <span class="block text-yellowtext">thrive</span>
                    
                </h1>
                <img quality="100"  src="https://pickt.io/exclaim.svg" alt="" class="w-20 absolute -top-24 left-32   md:top-5 md:left-52  md:w-32 " >
            </div>
            <!-- seconddiv -->
            <div class="  md:w-3/5 md:relative ">
               
                <div class="hidden md:flex   gap-5 md:mt-10 " >
                    <transition name="movingleft" appear>
                        <div class="bg-circle w-2/6 h-56   rounded-full animate-pulse" > </div>
                    </transition>
                    <transition name="movinglefttwo" appear>

                        <div class="bg-circle w-2/6 rounded-full animate-pulse" > </div>
                    </transition>
                    <transition name="movingleftthird" appear>

                        <div class="bg-circle w-2/6 rounded-full animate-pulse" > </div>
                    </transition>
                   
                </div>
                <p class="w-5/6  md:top-28 md:left-16 md:absolute  rounded-3xl p-5 text-xl border-2 border-black text-center font-semibold mx-auto bg-yellowbg text-white md:w-3/6 md:py-10 md:mx-0 ">Curate a community of your favorite people. Meet with beautiful minds. Get value for your time</p>
            </div>
        </div>
        <!-- second blue part -->
        <div class="relative bg-navbg">
            <div class="hidden md:flex md:w-3/5  gap-5 md:mt-10 " >
                    <transition name="movingright" appear>
                        <div class="bg-circle w-2/6 h-56   rounded-full animate-pulse" > </div>
                    </transition>
                    <transition name="movingrighttwo" appear>

                        <div class="bg-circle w-2/6 rounded-full animate-pulse" > </div>
                    </transition>
                    <transition name="movingrightthird" appear>

                        <div class="bg-circle w-2/6 rounded-full animate-pulse" > </div>
                    </transition>
                   
            </div>
            <div class="slider md:absolute md:top-4" >
                <div class="slide-track animate-scroll   " >
                    <div class="slide rounded-full  bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6  md:w-10  " loading="eager" src="https://pickt.io/lawyer.svg" alt="Lawyers" >
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Lawyers</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10 " loading="eager" src="https://pickt.io/camera.svg" alt="Content Creators">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Content Creators</p>
                        </div>
                    </div>
                    
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10  " loading="eager" src="https://pickt.io/startup.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Startup Founders</p>
                        </div>
                    </div>
                        <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10  " loading="eager" src="https://pickt.io/fintech.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Fintech Experts</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/arts.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Actors</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/healthcare.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Healthcare Professionals</p>
                        </div>
                    </div>
        
                    
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6  md:w-10" loading="eager" src="https://pickt.io/lawyer.svg" alt="Lawyers" >
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Lawyers</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/camera.svg" alt="Content Creators">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Content Creators</p>
                        </div>
                    </div>
                    
                    <div class="slide rounded-full bg-white px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/startup.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Startup Founders</p>
                        </div>
                    </div>
                    
                    
                </div>   
            </div>
            <div class="slider absolute -top-12 md:-top-24">
            <div class="slide-track animate-scrolltwo   " >
                    <div class="slide rounded-full  bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6  md:w-10 border-4 border-blue-900 " loading="eager" src="https://pickt.io/lawyer.svg" alt="Lawyers" >
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Lawyers</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10 " loading="eager" src="https://pickt.io/camera.svg" alt="Content Creators">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Content Creators</p>
                        </div>
                    </div>
                    
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10  " loading="eager" src="https://pickt.io/startup.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Startup Founders</p>
                        </div>
                    </div>
                        <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10  " loading="eager" src="https://pickt.io/fintech.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Fintech Experts</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/arts.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Actors</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/healthcare.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Healthcare Professionals</p>
                        </div>
                    </div>
        
                    
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6  md:w-10" loading="eager" src="https://pickt.io/lawyer.svg" alt="Lawyers" >
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Lawyers</p>
                        </div>
                    </div>
                    <div class="slide rounded-full bg-white  px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/camera.svg" alt="Content Creators">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Content Creators</p>
                        </div>
                    </div>
                    
                    <div class="slide rounded-full bg-white px-4 py-4 gap-1 text-greentext">
                        <div class="imaging py-4">
                            <img class="w-6 md:w-10" loading="eager" src="https://pickt.io/startup.svg" alt="Startup Founders">
                            <p class=" self-center font-semibold text-2xl md:text-4xl">Startup Founders</p>
                        </div>
                    </div>
                    
                    
                </div>     
            </div>
            
        </div>
      
       
        
    </div>
</template>