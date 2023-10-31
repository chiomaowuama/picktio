<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

  
      <RouterView v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </RouterView>
  <!-- <RouterView />  -->
</template>

<style >
/* route transitions */
.route-enter-from{
  opacity:0;
  transform:translateX(100px);
}
.route-enter-active{
  transition: all 0.9s ease-out;
}
.route-leave-to{
  opacity:0;
  transform:translateX(-100px);
}
.route-leave-active{
  transition: all 0.9s ease-in;
}
</style>
