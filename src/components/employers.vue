<template>
	<div class="employers">		
		<div class="our-services">Our Recruitment Services</div>
		<div class="text-center">At Safe Recruits, we’ll keep you connected to top talent, whenever and wherever you need it. Contact us today so we can help you find the perfect people best suited for your needs and requirements. We make sure to create the perfect fit between companies and employees so that both sides are happy in the end. Let us help you today.</div>

		<div class="container1">
       		<div class="col-md-6 col-lg6 img-text">
        	  <img src="../assets/images/employer1.png" class="img-fluid img-fluid1">
			     <div class="text-block">
            	  <h4>Position Recruitment</h4>
            	  <p>You dont have a shortlist of applicants yet?
                     No problem, simply search our database for screened and tested candidates that meet your requirements and simply get in touch with the candidate to schedule an interview.
                     A truly seamless experience </p>
                </div>
     	    </div>
			 	<div class="col-md-6 col-lg6 img-text">
        	  <img src="../assets/images/employer2.png" class="img-fluid img-fluid1">
			     <div class="text-block">
            	  <h4>Candidate Testing</h4>
            	  <p>Do you want to engage the most competent of the applicants in your recruitment campaign? 
					Simply se our candidate testing service.
					Your applicants simply upload their CV's and take a test at one of our test locations.
					We will handle the screening and testing of all your applicants before they show up for an interview with you </p>
                </div>
     	    </div>
		</div>
		<div class="set-button-div">
    	  <button class="set-button">Find The Right Employee</button>
    	  <button class="set-button">Build or Upload Your CV</button>
    	</div>
	</div>
</template>
<script>
	export default{
		// name:'employers',
		// data (){
		// 	return{
		// 		title:'Employers'
		// 	}
		// }
	}
</script>

<style scoped>
.img-fluid1{
  filter: brightness(65%);
}
.container1 {
  position: relative;
  display: flex;
}
.our-services{
	font-size:40px;
	font-weight:100;
	padding: 40px 0px;
}
.text-block {
    position: absolute;
    top: 40%;
    left: 34px;
    width: 57%;
    text-align: justify;
    color: white;
}
.text-center{
  width: 56%;
  margin: auto;
  margin-bottom: 25px;
  line-height: 2;
}
.set-button-div{
  position: relative;
  top: 40px;
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