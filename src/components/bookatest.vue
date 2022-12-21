<template>
	<div class="contact bookatest">
		<!-- <h1>{{title}}</h1> -->	
	 <div>
		<div class="top-test">Test Scheduler</div>
		<div class="top-test bottom-set">Pick a date below to book a test</div>
		<button class="set-button">Submit</button>
	 </div>
	 	
	</div>
</template>
<script>
	export default{
		name:'bookatest',
		// data (){
		// 	return{
		// 		title:'bookatest'
		// 	}
		// }
	}
</script>

<style scoped>

.bookatest{
    min-height: 500px;
	position:relative;
}
.top-test{
	font-size: 56px;
    font-weight: 100;
    padding: 40px 0px;
	color:white;
}
.bottom-set{
	font-size: 18px;
	padding: 0;
}
.set-button{
	color: #015450;
    background-color: #D7F7FC;
    border-width: 0px;
    margin-top: 15px;
    padding: 7px 40px;
    position: absolute;
    bottom: 0;
    margin-left: -50px;
}
.set-button:hover{
	background:#82a0a5;
}
</style>