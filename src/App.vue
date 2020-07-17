<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
html{
  line-height: auto;
}
#app{
  margin-top: 60px;
}
</style>
