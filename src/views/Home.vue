<template>
  <div id="app">
    <Loader></Loader>
    <ul class="grid-container">
      <div class="single-item-container" v-for="advert in adverts.data" :key="advert.id">
        <SingleItem :advert="advert"></SingleItem>
      </div>
    </ul>
  </div>
</template>

<script>
import SingleItem from '@/components/SingleItem'
import Loader from '@/components/Loader'
import API from '@/api/api'
export default {
  name: 'App',
  components:{
    SingleItem,
    Loader
  },
  data(){
    return{
      adverts : [],
    }
  },
  async mounted(){
    this.adverts = await API.fetchAdverts();
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.1/animate.min.css';

.grid-container{
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  align-content: center;
  margin-bottom: 45px!important;
}
.single-item-container{
  width: 100%;
}
</style>
