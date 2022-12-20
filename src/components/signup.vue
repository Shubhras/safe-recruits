<template>
		  <div class="container1">
        	<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
  			<h2>Modal Example</h2>
  			<div class="modal fade" id="myModal" role="dialog">
  			  <div class="modal-dialog ">
     			 <div class="modal-content ">
     			   <div class="modal-header">
     			     <button type="button" class="close" data-dismiss="modal">&times;</button>
     			   </div>
     			   <div class="modal-body">
     			       <div class=sing-up>
  							  <h2 class="top-test">Sing Up </h2>
  							      <div>
  							          <input type="Email" placeholder="Email" class="email">
  							      </div>
  							      <br>
  							      <div class="password">
  							          <input type="Password" placeholder="password" class="email">
  							      </div>
  							      <br>
  							      <div class="last-test">
  							          <a type="Sing up" value="Submit" >Sing up</a>
  							      </div>
  							</div>
  						  </div>
  						<div class="modal-footer">
     			     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
     			   </div>
     			 </div>
      
    		</div>
 		 </div>
</div>
</template>
<script>
 export default {
        data() {
            return {
                dialogRef: 'signup'
            }
        },
        methods: {
            open() {
              console.log();
                // this.$refs[this.dialogRef].open();
            },
            close() {
                // this.$refs[this.dialogRef].close();
            }
        }
    }
</script>

<style scoped>
.modal-header .close{
	margin: 0rem -1rem -1rem auto;
    font-size: 40px;
    padding: 18px 8px 0px 0px;
}
.top-test{
  color:#005951;
  padding: 20px 0px;
}
.sing-up{
  background-color:white;
}
.email{
    background-color: #025955fa;
    color: white;
    border: #f3f2f0;
    height: 37px;
    border-radius: 3px;
    min-width: 249px;
    padding: 0px 10px;
}
.last-test{
  padding-bottom: 20px;
  font-size: 18px;
  color:#005951;
}
.modal{
    position: relative;
    font-size: 16px;
    color: black;
}
.fade:not(.show) {
    opacity: 1 !important;
}
.modal-footer>* {
    margin: 0.25rem;
    font-size: 16px;
    border: 1px solid;
    border-radius: 10px;
}
</style>
