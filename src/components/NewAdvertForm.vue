<template>  
<div class="form-container">
  <Alert v-if="showAlert"></Alert>
  <form enctype="multipart/form-data" @submit.prevent="onAddAdvert" class="advert-form center max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Hirdetés feladása</p>
    <div class="">
      <label class="block text-sm text-gray-600">Hirdetés címe</label>
      <input v-model="advert.advert_name" class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" required placeholder="Hirdetés címe">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600">Hirdetés leírása</label>
      <input v-model="advert.advert_desc" class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" required placeholder="Hirdetés leírása">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600">Hirdetés képe</label>
      <input name="file" id="file" type="file" @change="addImage" >
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Hirdetés típusa</label>
        <select v-model="advert.advert_type" class="block appearance-none w-full border bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded">
          <option disabled value="">Válasszon</option>
          <option>Keres</option>
          <option>Kínál</option>
          <option>Cerél</option>
        </select>
    </div>
    <div class="mt-2">
      <input v-model="advert.advert_price" class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" number required placeholder="Ár" aria-label="Ár">
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Konzol típusa</label>
        <select  @change="changeButtonColor" v-model="advert.console_type" class="block appearance-none w-full border bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded">
          <option disabled value="">Válasszon</option>
          <option>XBox</option>
          <option>Nintendo</option>
          <option>Playstation</option>
        </select>
    </div>
   <button v-bind:class="{'bg-red-700': nintendo , 'bg-blue-700': ps, 'bg-green-700' : xbox}" class="bg-gray-600 mt-2 mx-auto center text-white font-bold py-2 px-4 rounded">
  Hirdetés feladás
</button>
  </form>
</div>
</template>

<script>
function emptyNewAdvertForm() {
    return{
        user_id : 1,
        advert_name : '',
        advert_desc : '',
        advert_type : '',
        advert_price : '',
        advert_picture : '',
        advert_time : '',
        console_type : ''
        };
}
import Alert from '@/components/Alert'
export default {
    name: 'NewAdvert',
    props : ['addNewAdvert','uploadAdvertImage'],
    components:{
      Alert
    },
    data(){
        return{
          nintendo : false,
          ps: false,
          xbox: false,
          showAlert : false,
          advert : emptyNewAdvertForm(),
          selectedFile : null,
        }
    },
    methods:{
        addImage(event){
            this.selectedFile = event.target.files[0];
            this.advert.advert_picture = event.target.files[0].name;
        },
        onAddAdvert(){
            this.addNewAdvert(this.advert);
            this.uploadAdvertImage(this.selectedFile);
            this.advert = emptyNewAdvertForm();
        },
        changeButtonColor(){
          if(this.advert.console_type == "XBox"){
            this.xbox = true;
            this.ps = false;
            this.nintendo = false;
          }
          if(this.advert.console_type == "Playstation"){
          this.xbox = false;
          this.ps = true;
          this.nintendo = false;
          }
          if(this.advert.console_type == "Nintendo"){
          this.xbox = false;
          this.ps = false;
          this.nintendo = true;
          }
        }
    }
}
</script>

<style scoped>
.form-container{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>