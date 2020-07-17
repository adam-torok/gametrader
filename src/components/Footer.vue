<template>
  <nav class="bottom-nav p-2 fixed bottom-0 w-full border bg-white flex overflow-x-auto">
	<router-link to="/xbox" class="p-2 flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-green-200 focus:text-green-500"><i class="fab text-green-500 fa-xbox fa-lg"></i>
		</router-link>
		<router-link to="/ps" class="p-2 flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-blue-200 focus:text-blue-500"><i class="text-blue-500 fab fa-playstation fa-lg"></i></router-link>
			<router-link to="/add" class="p-2 flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-blue-200 focus:text-blue-500"><i class="fas text-red-600 fa-gamepad fa-lg"></i></router-link>

</nav>
</template>

<script>
export default {

}
</script>

<style>
 .bottom-nav{
	z-index:9;
 }
</style>