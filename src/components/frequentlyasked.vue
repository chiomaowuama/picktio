<script setup>
  import { onMounted, ref } from 'vue';
  

</script>
<template>

    <div class=" flex w-5/6 flex-col md:flex-row  mx-auto">
            <div class=" w-full mb-10 h-fitcontent md:mb-none md:h-screen md:w-1/2  " >
                <p class="font-extrabold font-textstyle text-3xl md:text-5xl  ">Frequently asked Questions</p>
            </div>
            <div class="w-80  h-screen scrollbar-thin  overflow-y-scroll scrollbar-track-white md:w-1/2  md:pr-2">
                <ul id="accodion" class="space-y-8 w-full">
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="first">What is Pickt?<span class="border-2 border-green-900"> hello</span></label>
                        <input type="radio" name="accordion" id="first">
                        <div class="content">
                            <p>Pickt is a social platform that allows people from all walks of life to connect, share information and get paid for their time.</p>
                        </div>
                    </li>
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="second">What does Pickt mean?<span>&#x3e;</span></label>
                        <input type="radio" name="accordion" id="second" >
                        <div class="content">
                            <p>Pickt is an old-fashioned spelling for 'picked' which we use to refer to the act of brain-picking. So, if you wish to pick someone's brain on a subject, we would typically refer to you as a Picker and if you wish to share your knowledge, we would call you a PRO.</p>
                        </div>
                    </li>
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="third">Which kind of experts do i have access to?<span>&#x3e;</span></label>
                        <input type="radio" name="accordion" id="third">
                        <div class="content">
                            <p>You can find experts from all walks of life from TikTok stars to Lawyers and everyone in between. Find anyone that suits the field or industry that you would like to know more about.</p>
                        </div>
                    </li>
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="four">Can i be a Picker and a Pro at the same time?<span>&#x3e;</span></label>
                        <input type="radio" name="accordion" id="four">
                        <div class="content">
                            <p>Technically, yes you can. When everyone signs up on Pickt, they have basic Picker accounts until they decide to upgrade to a PRO account if they wish to share their expertise and get paid for doing so.</p>
                        </div>
                    </li>
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="five">Can i withdraw unused money from my Pickt wallet?<span>&#x3e;</span></label>
                        <input type="radio" name="accordion" id="five">
                        <div class="content">
                            <p>Of course, you can. We understand that you might have an unexpected need for some money. So, if it's in your wallet and isn't locked down in escrow as payment for a service, then, you're free to withdraw it. It's yours anyway.</p>
                        </div>
                    </li>
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="six">Can i reach out to Experts in another location?<span>&#x3e;</span></label>
                        <input type="radio" name="accordion" id="six">
                        <div class="content">
                            <p>Oh yes! Pickt is boundless and borderless, so you can search for people in a different country as you. If they have a Pickt account, they are reachable by anyone from anywhere.</p>
                        </div>
                    </li>
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="seven">why should i ask someone a question?<span>&#x3e;</span></label>
                        <input type="radio" name="accordion" id="seven">
                        <div class="content">
                            <p>Paying someone to learn something from them shows that you are aware that their time is valuable, thus, spending time to answer your questions or teach you something needs to be rewarded. It's only right that you show your appreciation for their time and knowledge.</p>
                        </div>
                    </li>
                    <li class="bg-lightpinkbg text-base md:text-xl">
                        <label for="third">Do i get a refund if the expert doesnt shoe up for the meeting?<span>&#x3e;</span></label>
                        <input type="radio" name="accordion" id="third">
                        <div class="content">
                            <p>If the PRO doesn't show up for a meeting 100% refund. If the PRO shows up and the picker doesn't, the Picker will only be refunded 45% of their amount.</p>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
    <div class=" text-center p-8 space-y-5  text-2xl font-semibold md:font-bold md:text-5xl md:p-10 md:space-y-7 ">
        <p class=" ">Didn't find an answer?</p>
        <p class="text-yellowbg">Get in touch with us</p>
        <div class="flex justify-center items-center"> 
            <button class="bg-navbg px-5 py-3 font-bold w-40 text-white text-xl m rounded-xl " >Contact Us</button>
        </div>
    </div>

</template>
