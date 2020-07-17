<template>
  <LoginForm :loginUser="loginUser"></LoginForm>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import API from '@/api/api'
export default {
    components:{
        LoginForm
    },
    data(){
        return{
            user : [],
        }
    },
    methods:{
        loginUser(user){
           API.loginUser(user);
           console.log(user);
        },
    }
}
</script>

<style>

</style>