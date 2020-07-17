<template>
<div class="flex justify-center my-2 mx-4 md:mx-0">
   <form @submit.prevent="onUserLogin" class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
      <div class="flex flex-wrap -mx-3 mb-6">
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email cím</label>
            <input v-model="user.user_email" class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email'  required>
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Jelszó</label>
            <input v-model="user.user_password" class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required>
         </div>
         <div class="w-full flex items-center justify-between px-3 mb-3 ">
            <label for="remember" class="flex items-center w-1/2">
               <input type="checkbox" name="" id="" class="mr-1 bg-white shadow">
               <span class="text-sm text-gray-700 pt-1">Emlékezz rám</span>
            </label>
            <div class="w-1/2 text-right">
               <a href="#" class="text-blue-500 text-sm tracking-tight">Elfelejtett jelszó?</a>
            </div>
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Sign in</button>
         </div>
      </div>
      {{user}}
   </form>
</div>
</template>

<script>
export default {
    props : ['loginUser'],
    data(){
        return{
            user: {
                user_email : '',
                user_password : ''
            }
        }
    },
    methods:{
        onUserLogin(){
            this.loginUser(this.user);
        }
    }
}
</script>

<style>

</style>