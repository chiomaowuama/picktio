<script setup>
    import { onMounted, ref } from 'vue';


    const menubar = ref('menu-outline');
    let list = ref('list')
    let typeValue = ref('');
    let typeStatus = ref(false);
    let typedArray = ref(['writter','artists', 'spirituals', 'entertainer', ' enterpreneur']);
    let typingSpeed = ref(200);
    let erasingSpeed = ref(100);
    let newTextDelay = ref(2000);
    let typeArrayIndex = ref(0);
    let charIndex = ref(0);
   

    function slidemenu() {
        menubar.value = menubar.value === 'menu-outline' ? 'close-outline' : 'menu-outline';
        // if(menubar.value == 'close-outline'){
        //     menubar.classList.add('top-[80px]');
        //     console.log(menubar.value)
            
        // }
        // else{
           
        // }
    }
    function typeText(){
        if(charIndex.value < typedArray.value[typeArrayIndex.value].length){
            if(!typeStatus.value) {
                typeStatus.value = true;
            }
            
            typeValue.value += typedArray.value[typeArrayIndex.value].charAt(charIndex.value);
            // console.log(typeValue.value);
            charIndex.value += 1;
            setTimeout(typeText, typingSpeed.value)
        }
        else{
            typeStatus.value = false;
            setTimeout(eraseText, newTextDelay.value)
        }
    }
    function eraseText(){
        if(charIndex.value > 0){
            if(!typeStatus.value) {
                typeStatus.value = true;
            }
            typeValue.value = typedArray.value[typeArrayIndex.value].substring(0, charIndex - 1);
            charIndex.value -= 1;
            setTimeout(eraseText, erasingSpeed.value);
        }
        else{
          typeStatus.value = false;  
          typeArrayIndex.value += 1;
          if(typeArrayIndex.value >= typedArray.value.length){
            typeArrayIndex.value = 0
          }
          setTimeout(typeText, typingSpeed.value + 1000);
        }
    }
    onMounted(() => {
        setTimeout(typeText, newTextDelay.value + 200)
        
    })
</script>
<template>
    <transition name="updown" appear>
    <div class="relative ">

        <!-- the nav -->
        <nav class=" shadow-md fixed z-10 bg-white  md:bg-white w-full md:flex md:items-center md:justify-between ">
            <div class="flex justify-between items-center  ">
                <span :class="{'bg-navbg ': menubar =='close-outline', 'bg-white' : menubar =='menu-outline'}" class=" text-2xl  cursor-pointer w-10/12 p-5 md:bg-white  md:w-7/12  ">
                        <RouterLink to="/" class=" ">
                        <img :class="{'hidden ': menubar =='close-outline', 'block' : menubar =='menu-outline'}" class="h-6 md:h-10 md:block bg-white" src="https://pickt.io/logotext.svg" alt="">
                        <img :class="{'block ': menubar =='close-outline', 'hidden' : menubar =='menu-outline'}" class="h-6 md:h-10 md:hidden" src="https://pickt.io/logowhite.svg" alt="">
                        </RouterLink>
                </span>
                <span class="hidden  w-48 md:block md:justify-center md:self-center md:mt-5 ">
                    <div class=" w-full h-full flex justify-left items-center">
                       <h2 class="text-base font-normal text-gray-500 font-textstyle">search for 
                        <span class="typed-text  text-textcolor font-textstyle"> {{ typeValue }}</span>
                        <span class="cursor inline-block ml-1  bg-black animate-cursorblink" :class="{'typing':typeStatus}"> &nbsp;</span>
                       </h2>
                    </div>
                </span>
                <span class=" text-3xl   cursor-pointer mx-2 w-2/12  md:hidden">
                    <ion-icon :name="menubar" @click="slidemenu()"></ion-icon>
                </span>

            </div>
            <ul :class="{'top-400px h-full    opacity-100 block': menubar =='close-outline', 'top-[-400px] opacity-0 hidden transition-all ease-out  duration-800' : menubar =='menu-outline'}" class="bg-navbg md:flex md:text-xl md:mx-2 md:items-center z-10 md:z-10 md:static absolute  w-full  left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  md:bg-white md:gap-x-3 transition-all ease-in duration-500 font-textstyle" >
                <li class="mx-4 my-6 md:my-0 md:mx-3">
                    <a href="#" class=" hover:text-cyan-500 duration-500">About pickt</a>
                </li>
                <li class="mx-4 my-6 md:my-0 md:mx-3">
                    <RouterLink to="/AboutView" class=" hover:text-cyan-500 duration-500">FAQs</RouterLink> 
                </li>
                <li class="mx-4 my-6 md:my-0 md:mx-3">
                    <a href="#" class=" hover:text-cyan-500 duration-500">Contact us</a>
                </li>
                <li class="mx-4 my-6 md:my-0 md:mx-3 md:border-2 md:border-b-0 md:border-t-0 md:border-r-0 md:border-gray-500 md:px-5">
                    <a href="#" class="text-xl text-textcolor  duration-500">Log in</a>
                </li>
                <button class="bg-cyan-500 text-white font-inter duration-500 px-6 py-2 mx-4 hover:bg-cyan-800 rounded">
                    get started
                </button>
            </ul>  
        </nav>
        <!-- <div>
            <img src="https://pickt.io/logotext.svg" alt="">
        </div> -->
    </div>
    </transition>

</template>