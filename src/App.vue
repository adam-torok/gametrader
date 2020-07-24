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
import API from '@/api/api'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  },
  async mounted(){
    localStorage.setItem('isNew','0');
    if (Notification.permission !== 'granted')
    Notification.requestPermission();
    await setInterval(() => {
      API.doPoll();
    }, 5000);
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
