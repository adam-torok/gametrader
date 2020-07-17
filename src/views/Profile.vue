<template>
  <NewAdvertForm :addNewAdvert="addNewAdvert"
                 :uploadAdvertImage="uploadAdvertImage">
  </NewAdvertForm>
</template>

<script>
import NewAdvertForm from '@/components/NewAdvertForm'
import API from '@/api/api'

export default {
    components:{
        NewAdvertForm
    },
    methods:{
    addNewAdvert(advert){
      API.insertAdvert(advert);
    },
    uploadAdvertImage(image){
      API.uploadAdvertImage(image);
    }
  },
}
</script>

<style>

</style>