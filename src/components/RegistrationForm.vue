<template>
<form @submit.prevent="onRegistrateUser" action="">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Vezetékneved
      </label>
      <input v-model="user.user_first_name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Vezetéknév">
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Keresztneved
      </label>
      <input v-model="user.user_last_name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Keresztnév">
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Jelszó
      </label>
      <input v-model="user.user_password" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************">
      <p class="text-grey-dark text-xs italic">Legyen olyan hosszú, amilyet csak szeretnél</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        Város
      </label>
      <input v-model="user.user_city" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Város">
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        Megye
      </label>
      <input v-model="user.user_county" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="Megye">
    </div>
  <button class="bg-gray-600 mt-2 mx-auto center text-white font-bold py-2 px-4 rounded">
  Regisztráció
</button>
  </div>
</div>
</form>
</template>

<script>
export default {
  props:['registrateUser'],
  data(){
    return{
      user:{
        user_first_name : '',
        user_last_name : '',
        user_password : '',
        user_city : '',
        user_county: ''
      }
    }
  },
  methods:{
    onRegistrateUser(){
      this.registrateUser(this.user);
    }
  }
}
</script>

<style scoped>
button{
  display: flex;
}
</style>