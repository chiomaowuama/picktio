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
                        <img :class="{'hidden ': menubar =='close-outline', 'block' : menubar =='menu-outline'}" class="h-6 md:h-12 lg:h-10 md:block bg-white" src="https://pickt.io/logotext.svg" alt="">
                        <img :class="{'block ': menubar =='close-outline', 'hidden' : menubar =='menu-outline'}" class="h-6 md:h-10 md:hidden" src="https://pickt.io/logowhite.svg" alt="">
                        </RouterLink>
                </span>
                <span class="hidden  w-48 lg:block md:justify-center md:self-center md:mt-5 ">
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
            <!-- bg-navbg -->
            <ul :class="{'top-400px text-3xl  text-white  bg-navbg min-h-screen opacity-100 block': menubar =='close-outline', 'top-[-400px] opacity-0  hidden transition-all ease-out   duration-800' : menubar =='menu-outline'}" class="  md:flex  md:text-base lg:text-xl md:mx-2 md:items-center z-10 md:z-10 md:static absolute font-bold w-full  left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-2 md:opacity-100  md:bg-white md:gap-x-2 transition-all ease-in delay-200 duration-800 font-textstyle" >
                <li class="mx-4 my-6  md:my-0 md:mx-3">
                    <RouterLink to="/AboutView" class=" hover:text-cyan-500 duration-500">About pickt</RouterLink>
                </li>
                <li class="mx-4 my-6 md:my-0 md:mx-3">
                    <RouterLink to="#" class=" hover:text-cyan-500 duration-500">FAQs</RouterLink> 
                </li>
                <li class="mx-4 my-6 md:my-0 md:mx-3">
                    <a href="#" class=" hover:text-cyan-500 duration-500">Contact us</a>
                </li>
                <!-- md:border-b-0 md:border-t-0 md:border-r-0 md:border-gray-500 -->
                <div class="flex gap-4 my-16 md:my-0 md:gap-2 ">
                    <li class="border border-white mx-1 rounded-2xl text-center flex items-center justify-center md:rounded-none md:border-2 md:my-0 md:mx-1 md:px-0 md:border-b-0 md:border-t-0 md:border-r-0 md:border-gray-500 ">
                    <a href="#" class="text-base md:text-xl py-4 px-12 md:px-4  text-white  md:text-textcolor  duration-500">Log in</a>
                    </li>
                    <button class="text-base md:text-xl py-4 px-12 border-2 border-navbg bg-white rounded-2xl text-navbg md:bg-navbg md:text-white font-inter duration-500 lg:px-6 lg:py-1  lg:mx-0 hover:bg-cyan-800 ">
                        Sign Up
                    </button>
                </div>
                <div class="block md:hidden">
                    <div class="flex mt-5  w-2/4 mx-auto justify-center gap-3 items-center">
            <p class="bg-connects rounded-full p-1 ">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.375 5.00368V20.9963C22.375 21.362 22.2297 21.7126 21.9712 21.9712C21.7126 22.2297 21.362 22.375 20.9963 22.375H5.00368C4.63803 22.375 4.28736 22.2297 4.0288 21.9712C3.77025 21.7126 3.625 21.362 3.625 20.9963V5.00368C3.625 4.63803 3.77025 4.28736 4.0288 4.0288C4.28736 3.77025 4.63803 3.625 5.00368 3.625H20.9963C21.362 3.625 21.7126 3.77025 21.9712 4.0288C22.2297 4.28736 22.375 4.63803 22.375 5.00368ZM9.13971 10.7941H6.38235V19.6176H9.13971V10.7941ZM9.38787 7.76103C9.38932 7.55246 9.34968 7.34564 9.2712 7.15239C9.19273 6.95914 9.07695 6.78324 8.93049 6.63474C8.78404 6.48623 8.60976 6.36803 8.41762 6.28687C8.22548 6.20572 8.01923 6.16321 7.81066 6.16176H7.76103C7.33688 6.16176 6.9301 6.33026 6.63018 6.63018C6.33026 6.9301 6.16176 7.33688 6.16176 7.76103C6.16176 8.18518 6.33026 8.59196 6.63018 8.89188C6.9301 9.1918 7.33688 9.36029 7.76103 9.36029C7.96961 9.36543 8.17717 9.32941 8.37183 9.2543C8.56649 9.17919 8.74444 9.06646 8.89552 8.92255C9.0466 8.77864 9.16784 8.60637 9.25232 8.41559C9.3368 8.22481 9.38286 8.01925 9.38787 7.81066V7.76103ZM19.6176 14.2574C19.6176 11.6048 17.9301 10.5735 16.2537 10.5735C15.7048 10.546 15.1582 10.663 14.6686 10.9126C14.179 11.1623 13.7634 11.5359 13.4632 11.9963H13.386V10.7941H10.7941V19.6176H13.5515V14.9246C13.5116 14.444 13.663 13.967 13.9728 13.5974C14.2826 13.2277 14.7257 12.9952 15.2059 12.9504H15.3107C16.1875 12.9504 16.8382 13.5018 16.8382 14.8915V19.6176H19.5956L19.6176 14.2574Z" fill="white"></path></svg>
            </p>
            <p class="bg-connects rounded-full  p-1">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.284 4.75042C19.2967 4.93408 19.2967 5.11774 19.2967 5.3031C19.2967 10.9509 14.9971 17.4645 7.13523 17.4645V17.4612C4.81279 17.4645 2.5386 16.7993 0.583496 15.545C0.921197 15.5856 1.26059 15.6059 1.60083 15.6068C3.52547 15.6085 5.39509 14.9627 6.90925 13.7735C5.08025 13.7388 3.47638 12.5463 2.91608 10.8053C3.55679 10.9289 4.21695 10.9035 4.8458 10.7317C2.85176 10.3288 1.41717 8.57684 1.41717 6.54218C1.41717 6.52356 1.41717 6.50578 1.41717 6.48801C2.01132 6.81894 2.67656 7.0026 3.35704 7.02291C1.47895 5.76775 0.900037 3.26927 2.03417 1.31586C4.20426 3.98615 7.40606 5.60948 10.8432 5.78129C10.4987 4.29676 10.9693 2.74114 12.0797 1.69757C13.8012 0.0793166 16.5087 0.162261 18.127 1.88293C19.0842 1.69419 20.0017 1.34294 20.8413 0.845279C20.5222 1.83468 19.8544 2.67513 18.9624 3.20918C19.8096 3.10931 20.6373 2.88248 21.4168 2.53632C20.843 3.39623 20.1202 4.14527 19.284 4.75042Z" fill="white"></path></svg>
            </p>
            <p class="bg-connects rounded-full  p-1">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.625C10.4538 3.625 10.135 3.63563 9.135 3.68125C8.13687 3.72687 7.455 3.88562 6.85875 4.1175C6.23375 4.3525 5.66687 4.72125 5.19812 5.19875C4.72139 5.66696 4.35241 6.23343 4.11687 6.85875C3.88625 7.455 3.72687 8.1375 3.68125 9.13562C3.63625 10.135 3.625 10.4531 3.625 13C3.625 15.5469 3.63563 15.865 3.68125 16.865C3.72687 17.8631 3.88562 18.545 4.1175 19.1412C4.3525 19.7662 4.72125 20.3331 5.19875 20.8019C5.66697 21.2786 6.23344 21.6476 6.85875 21.8831C7.455 22.1144 8.13687 22.2731 9.135 22.3187C10.135 22.3644 10.4538 22.375 13 22.375C15.5462 22.375 15.865 22.3644 16.865 22.3187C17.8631 22.2731 18.545 22.1144 19.1412 21.8825C19.7662 21.6475 20.3331 21.2787 20.8019 20.8012C21.2786 20.333 21.6476 19.7666 21.8831 19.1412C22.1144 18.545 22.2731 17.8631 22.3187 16.865C22.3644 15.865 22.375 15.5462 22.375 13C22.375 10.4538 22.3644 10.135 22.3187 9.135C22.2731 8.13687 22.1144 7.455 21.8825 6.85875C21.6471 6.23316 21.2781 5.66645 20.8012 5.19812C20.333 4.72139 19.7666 4.35241 19.1412 4.11687C18.545 3.88625 17.8625 3.72687 16.8644 3.68125C15.865 3.63625 15.5469 3.625 13 3.625ZM13 5.31437C15.5031 5.31437 15.8 5.32375 16.7887 5.36875C17.7025 5.41062 18.1987 5.5625 18.5294 5.69187C18.9669 5.86125 19.2794 6.065 19.6075 6.3925C19.9356 6.72062 20.1388 7.03312 20.3081 7.47062C20.4369 7.80125 20.5894 8.2975 20.6312 9.21125C20.6762 10.2 20.6856 10.4969 20.6856 13C20.6856 15.5031 20.6762 15.8 20.6312 16.7887C20.5894 17.7025 20.4375 18.1987 20.3081 18.5294C20.1581 18.9366 19.9187 19.305 19.6075 19.6075C19.305 19.9187 18.9366 20.1582 18.5294 20.3081C18.1987 20.4369 17.7025 20.5894 16.7887 20.6312C15.8 20.6762 15.5037 20.6856 13 20.6856C10.4962 20.6856 10.2 20.6762 9.21125 20.6312C8.2975 20.5894 7.80125 20.4375 7.47062 20.3081C7.06341 20.1581 6.695 19.9187 6.3925 19.6075C6.08136 19.305 5.84195 18.9366 5.69187 18.5294C5.56312 18.1987 5.41062 17.7025 5.36875 16.7887C5.32375 15.8 5.31437 15.5031 5.31437 13C5.31437 10.4969 5.32375 10.2 5.36875 9.21125C5.41062 8.2975 5.5625 7.80125 5.69187 7.47062C5.86125 7.03312 6.065 6.72062 6.3925 6.3925C6.69496 6.08128 7.06338 5.84186 7.47062 5.69187C7.80125 5.56312 8.2975 5.41062 9.21125 5.36875C10.2 5.32375 10.4969 5.31437 13 5.31437Z" fill="white"></path><path d="M13 5.31437C15.5031 5.31437 15.8 5.32375 16.7887 5.36875C17.7025 5.41062 18.1987 5.5625 18.5294 5.69187C18.9669 5.86125 19.2794 6.065 19.6075 6.3925C19.9356 6.72062 20.1388 7.03312 20.3081 7.47062C20.4369 7.80125 20.5894 8.2975 20.6312 9.21125C20.6762 10.2 20.6856 10.4969 20.6856 13C20.6856 15.5031 20.6762 15.8 20.6312 16.7887C20.5894 17.7025 20.4375 18.1987 20.3081 18.5294C20.1581 18.9366 19.9187 19.305 19.6075 19.6075C19.305 19.9187 18.9366 20.1582 18.5294 20.3081C18.1987 20.4369 17.7025 20.5894 16.7887 20.6312C15.8 20.6762 15.5037 20.6856 13 20.6856C10.4962 20.6856 10.2 20.6762 9.21125 20.6312C8.2975 20.5894 7.80125 20.4375 7.47062 20.3081C7.06341 20.1581 6.695 19.9187 6.3925 19.6075C6.08136 19.305 5.84195 18.9366 5.69187 18.5294C5.56312 18.1987 5.41062 17.7025 5.36875 16.7887C5.32375 15.8 5.31437 15.5031 5.31437 13C5.31437 10.4969 5.32375 10.2 5.36875 9.21125C5.41062 8.2975 5.5625 7.80125 5.69187 7.47062C5.86125 7.03312 6.065 6.72062 6.3925 6.3925C6.69496 6.08128 7.06338 5.84186 7.47062 5.69187C7.80125 5.56312 8.2975 5.41062 9.21125 5.36875C10.2 5.32375 10.4969 5.31437 13 5.31437Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8028 15.8904C12.1823 16.0476 12.5891 16.1285 12.9999 16.1285C13.8295 16.1285 14.6252 15.7989 15.2118 15.2123C15.7985 14.6257 16.128 13.83 16.128 13.0004C16.128 12.1708 15.7985 11.3751 15.2118 10.7885C14.6252 10.2018 13.8295 9.87227 12.9999 9.87227C12.5891 9.87227 12.1823 9.95318 11.8028 10.1104C11.4233 10.2676 11.0785 10.498 10.788 10.7885C10.4975 11.0789 10.2671 11.4238 10.1099 11.8033C9.95269 12.1828 9.87178 12.5896 9.87178 13.0004C9.87178 13.4112 9.95269 13.818 10.1099 14.1975C10.2671 14.577 10.4975 14.9218 10.788 15.2123C11.0785 15.5028 11.4233 15.7332 11.8028 15.8904ZM9.59253 9.59302C10.4962 8.68933 11.7219 8.18164 12.9999 8.18164C14.2779 8.18164 15.5036 8.68933 16.4073 9.59302C17.311 10.4967 17.8186 11.7224 17.8186 13.0004C17.8186 14.2784 17.311 15.5041 16.4073 16.4078C15.5036 17.3115 14.2779 17.8191 12.9999 17.8191C11.7219 17.8191 10.4962 17.3115 9.59253 16.4078C8.68884 15.5041 8.18115 14.2784 8.18115 13.0004C8.18115 11.7224 8.68884 10.4967 9.59253 9.59302Z" fill="#5E48DB"></path><path d="M12.9999 16.1285C12.5891 16.1285 12.1823 16.0476 11.8028 15.8904C11.4233 15.7332 11.0785 15.5028 10.788 15.2123C10.4975 14.9218 10.2671 14.577 10.1099 14.1975C9.95269 13.818 9.87178 13.4112 9.87178 13.0004C9.87178 12.5896 9.95269 12.1828 10.1099 11.8033C10.2671 11.4238 10.4975 11.0789 10.788 10.7885C11.0785 10.498 11.4233 10.2676 11.8028 10.1104C12.1823 9.95318 12.5891 9.87227 12.9999 9.87227C13.8295 9.87227 14.6252 10.2018 15.2118 10.7885C15.7985 11.3751 16.128 12.1708 16.128 13.0004C16.128 13.83 15.7985 14.6257 15.2118 15.2123C14.6252 15.7989 13.8295 16.1285 12.9999 16.1285Z" fill="#5E48DB"></path><path d="M19.2205 8.09414C19.2205 8.39624 19.1005 8.68596 18.8869 8.89958C18.6733 9.1132 18.3836 9.2332 18.0815 9.2332C17.7794 9.2332 17.4896 9.1132 17.276 8.89958C17.0624 8.68596 16.9424 8.39624 16.9424 8.09414C16.9424 7.79204 17.0624 7.50232 17.276 7.2887C17.4896 7.07509 17.7794 6.95508 18.0815 6.95508C18.3836 6.95508 18.6733 7.07509 18.8869 7.2887C19.1005 7.50232 19.2205 7.79204 19.2205 8.09414Z" fill="#5E48DB"></path></svg>
            </p>
            <p class="bg-connects rounded-full  p-2">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2085 0.666992H5.79183C2.66683 0.666992 0.583496 2.75033 0.583496 5.87533V12.1253C0.583496 15.2503 2.66683 17.3337 5.79183 17.3337H16.2085C19.3335 17.3337 21.4168 15.2503 21.4168 12.1253V5.87533C21.4168 2.75033 19.3335 0.666992 16.2085 0.666992ZM12.9689 10.0732L10.396 11.6149C9.35431 12.2399 8.50014 11.7608 8.50014 10.542V7.44825C8.50014 6.2295 9.35431 5.75034 10.396 6.37534L12.9689 7.91698C13.9585 8.52115 13.9585 9.47949 12.9689 10.0732Z" fill="white"></path></svg>
            </p>
        </div>
        <div class="mb-24 relative">
            <div class="text-sm text-light md:absolute md:left-1 md:w-3/6  flex gap-4 mt-6 justify-center items-center">
                <p>Terms of Service </p>
                <p>Privacy policy</p>
            </div>
        </div>
                </div>
              
             
            </ul>  
        </nav>
        <!-- <div>
            <img src="https://pickt.io/logotext.svg" alt="">
        </div> -->
    </div>
    </transition>

</template>