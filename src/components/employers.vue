<template>
	<div>	
        <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <div class="sing-up">
                <h2 class="top-test">Sing Up</h2>
                <div>
                  <input type="Email" placeholder="Email" class="email" />
                </div>
                <br />
                <div class="password">
                  <input type="Password" placeholder="password" class="email" />
                </div>
                <br />
                <div class="last-test">
                  <a type="Sing up" value="Submit">Sing up</a>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  	
		<div class="our-services">Our Recruitment Services</div>
		<div class="text-center">At Safe Recruits, we’ll keep you connected to top talent, whenever and wherever you need it. Contact us today so we can help you find the perfect people best suited for your needs and requirements. We make sure to create the perfect fit between companies and employees so that both sides are happy in the end. Let us help you today.</div>

		<div class="container1">
       		<div class="col-md-6 col-lg6 img-text ">
        	  <img src="../assets/images/employer1.png" class="img-fluid img-fluid1 set-img-media">
			     <div class="text-block">
            	  <h4>Position Recruitment</h4>
            	  <p>You dont have a shortlist of applicants yet?
                     No problem, simply search our database for screened and tested candidates that meet your requirements and simply get in touch with the candidate to schedule an interview.
                     A truly seamless experience </p>
                </div>
     	    </div>
			 	<div class="col-md-6 col-lg6 img-text ">
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
    	  <button class="set-button"><a data-toggle="modal" data-target="#myModal" class="set-color-a">Find The Right Employee</a></button>
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
.modal-header .close {
  margin: 0rem -1rem -1rem auto;
  font-size: 40px;
  padding: 18px 8px 0px 0px;
}
.top-test {
  color: #005951;
  padding: 20px 0px;
}
.sing-up {
  background-color: white;
}
.email {
  background-color: #025955fa;
  color: white;
  border: #f3f2f0;
  height: 37px;
  border-radius: 3px;
  min-width: 249px;
  padding: 0px 10px;
}
.last-test {
  padding-bottom: 20px;
  font-size: 18px;
  color: #005951;
  cursor: pointer;
}
.modal {
  /* position: relative; */
  position: absolute;
  top: 50%;
  font-size: 16px;
  color: black;
}
.fade:not(.show) {
  opacity: 1 !important;
}
.modal-footer > * {
  margin: 0.25rem;
  font-size: 16px;
  border: 1px solid;
  border-radius: 10px;
}
.set-color-a{
 color: #025955;
}
.set-color-a:hover{
  color: white;
}
.img-fluid1{
  filter: brightness(65%);
}
 @media only screen and (max-width: 1120px) and (min-width: 901px)  {
     .img-fluid{
       height: 500px;
     }
   }
   @media only screen and (max-width: 600px){
	 .img-fluid{
       height: 500px;
     }
}
.container1 {
  position: relative;
  display: flex;
}
    
 @media only screen and (max-width: 900px){
     .container1{
       display: block !important;
     }
}
@media only screen and (max-width: 900px){
	.col-md-6 {
      max-width: 100%;
    }
}
@media only screen and (max-width: 900px){
	.set-img-media{
    	margin-bottom: 20px;
	}
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
    
 @media only screen and (max-width: 600px){
     .text-block{
      width: 80%;
     }
}
.text-center{
  width: 60%;
  margin: auto;
  margin-bottom: 25px;
  line-height: 2;
}
 @media only screen and (max-width: 1124px){
     .text-center{
       width:100%;
     }
   }
     @media only screen and (max-width: 1500px) and (min-width: 1125px)  {
     .text-center{
       width:70%;
     }
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
  margin: 15px 30px;
  background: #e6e8fa;
}
.set-button:hover{
  background: #689ADE;
  border: 0px solid rgb(29, 103, 205);
  color:white;
}
</style>