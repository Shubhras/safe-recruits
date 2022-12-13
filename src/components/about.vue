<template>
<div class="contact">
	<div class="img-gap">
		<img src="../assets/images/about.png" class="img-fluid set-img">
	</div>
	<div class="text-start">Reliable Innovative Staffing</div>

	<div class="text-center">Safe Recruits is widely recognized as one of the industry’s fastest growing staffing agencies. With 1 team members, we have the capacity to build meaningful, long-lasting relationships with all our clients. Our success is a result of our commitment to the best people, the best solutions and the best results.</div>

	<div class="text-center">We invite you to contact one of our team members today. They are committed to providing you, our clients, with an experience focused on what you value most.</div>

	<div class="set-button-div">
      <button class="set-button">Find The Right Employee</button>
      <button class="set-button">Build or Upload Your CV</button>
  </div>
	
</div>

</template>
<script>
	export default{
		name:'about',
		data (){
			return{
				title:'About'
			}
		}
	}
</script>

<style scoped>
.set-img{
	border-radius:100%;
}
.img-gap{
  padding: 70px 0px 40px 0px;
}
.text-start{
  font-size: 40px;
  font-weight: 300;
  padding: 20px 0px;
}
.text-center{
  width: 60%;
  margin: auto;
  margin-bottom: 25px;
  line-height: 2;
}
   @media only screen and (max-width: 1024px){
     .text-center{
       width:100%;
     }
   }
    @media only screen and (max-width: 1600px){
      .text-center{
         width:72%;
     }
   }
.set-button-div{
    margin: 37px 0px;
}
.set-button{
  letter-spacing: 0.05em;
  font-size: 16px;
  color: #025955;
  font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
  font-weight: 700;
  border: none;
  padding: 15px 25px;
  border-radius: 22px;
  margin: 0px 30px;
  background: #e6e8fa;
}
.set-button:hover{
  background: #689ADE;
  border: 0px solid rgb(29, 103, 205);
  color:white;
}
</style>