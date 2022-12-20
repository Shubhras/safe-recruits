<template>
	<div class="plan-and-pricing">
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