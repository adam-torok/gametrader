<template>
  <div v-if="show" class="spinner-container">
   <i class="fas animated infinite bounce loader fa-gamepad fa-lg"></i>
   <p>Betöltés...</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:true,
        }
    },
    mounted(){
        this.showToggle();
    },
    methods:{
        showToggle(){
            setTimeout(() =>{
                this.show = false;
            },2000)
        },
    }
}
</script>

<style>
    .spinner-container{
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background: rgba(0, 58, 128, 0.762);
    align-content: center;
    width: 100%;
    z-index:999999;
    align-items: center;
    height: 100%;
}
.spinner-container>p{
    color: white;
}
.loader{
  display: flex;
  z-index: 999;
  font-size: 5rem;
  justify-content: center;
  align-content: center;
  overflow: show;
  color: white;
}
</style>
