<template>
	<div class="plan-and-pricing">
		<!-- <h1>{{title}}</h1> -->
		<!-- <div class="row">
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h3>Vus.js</h3>
					</div>
					<div class="card-body">
						
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h3>Angular</h3>
					</div>
					<div class="card-body">
						
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h3>React</h3>
					</div>
					<div class="card-body">
						
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</div>
			</div> -->
		<div class="set-no-plan">
			No plans available
		</div>
		<div class="set-no-plan no-plan-text">
			Once there are plans available for purchase, you’ll see them here.
		</div>
		<a href="">
			<button class="set-button" >Back to Home Page</button>
		</a>
	</div>
</template>
<script>
	export default{
		name:'blog',
		// data (){
		// 	return{
		// 		title:'plan-and-pricing'
		// 	}
		// }
	}
</script>

<style scoped>
.plan-and-pricing{
	padding: 160px 30px;
    text-align: center;
}
.set-no-plan{
	font-size: 24px;
	font-weight: 100;
	margin-bottom: 15px;
}
.no-plan-text{
	font-size: 16px;
	margin-bottom: 20px;
}
.set-button{
	color: #015450;
    background-color: #D7F7FC;
    border-width: 0px;
    margin-top: 15px;
    padding: 10px 20px;
}
.set-button:hover{
	background:#82a0a5;
}
</style>