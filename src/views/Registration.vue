<template>
  <RegistrationForm :registrateUser="registrateUser"></RegistrationForm>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm.vue'
import API from '@/api/api.js'
export default {
  components:{
    RegistrationForm
  },
  methods:{
    registrateUser(user){
      return API.registrateUser(user);
    }
  }
}
</script>

<style>

</style>