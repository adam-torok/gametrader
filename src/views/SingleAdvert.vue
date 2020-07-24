<template>
    <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-center">
            <div class="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div class="bg-white rounded-lg overflow-hidden">
                    <div class="bg-cover bg-center h-56 p-4" v-bind:style="{ 'background-image': 'url(' + 'http://192.168.1.10:80/restapi/storage/' + advert.data[0].advert_picture + ')' }">
                        <div class="flex justify-end">
                            <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{{advert.data[0].advert_name}} </p>
                        <p class="text-3xl text-gray-900">{{advert.data[0].advert_price}} Ft</p>
                        <p class="text-gray-700">{{advert.data[0].advert_desc}}</p>
                        <p class="text-gray-700">Hirdetés típusa: {{advert.data[0].advert_type}}</p>
                    </div>
                   
                    <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                        <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Hirdető</div>
                        <div class="flex items-center pt-2">
                            <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(https://scontent.fbud8-1.fna.fbcdn.net/v/t1.0-9/27655444_1553266691394108_1864222071249340573_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=PsXapIXggXMAX9d2uLs&_nc_ht=scontent.fbud8-1.fna&oh=76f455e8b642cb4b52d3a04e50c3612d&oe=5F207D99)">
                            </div>
                            <div>
                                <p class="font-bold text-gray-900">Török Ádám</p>
                                <p class="text-sm text-gray-700">+36 30 345 8531</p>
                            </div>
                        </div>
                        <div class="button_holder"> 
                        <div class="mt-3">
                            <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                <span class="mr-2">Üzenet</span>
                            </button>
                        </div>
                        <div class="mt-3">
                            <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                <span class="mr-2">Profil</span>
                                    
                            </button>
                        </div>
                        <div class="mt-3">
                            <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                <span class="mr-2">Jelentés</span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/api/api'
export default {
    name: 'SingleAdvert',
    data(){
        return{
            advert : {}
        }
    },
    async mounted(){
    this.advert = await API.getAdvert(this.$route.params);
  }
}
</script>

<style>
.button_holder{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
}
</style>