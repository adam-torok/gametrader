<template>
  <div id="app">
  <Loader :console_type="console_type"></Loader>
  <ul class="grid-container">
    <div class="single-item-container" v-for="advert in adverts.data" :key="advert.id">
    <SingleItem  :console_type="console_type" :advert="advert"></SingleItem>
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
    console_type : 'Xbox',
    adverts : [],
  }
  },
  async mounted(){
  console.log(this.console_type);
  this.adverts = await API.fetchAdverts(this.console_type);
  },
  methods:{
  changeConsoleType(console_type){
    this.console_type = console_type;
  }
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.1/animate.min.css';
.grid-container{
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  align-content: center;
  margin-bottom: 45px!important;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
}
.single-item-container{
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .grid-container{
  grid-template-columns: 1fr;
  }
}
</style>
