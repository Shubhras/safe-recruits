<template>
  <div class="home">
    <!-- <h1>{{title}}</h1> -->
    <div class="row">
      <div class="col-md-7 col-lg7 img-text">
        <img src="../assets/images/home.png" class="img-fluid">
         <!-- <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3> -->
      </div>
      <div class="col-md-5 col-lg5 img-text plan-text">
        <div class="set-text">
         <span> Welcome to</span><span> Safe Recruits</span>
         <div class="set-last-text">
          Talent Matching and Talent Testing Solutions
        </div>
        </div>
        <div class="set-button-div">
          <button class="set-button">Find The Right Employee</button>
          <button class="set-button">Build or Upload Your CV</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // name: 'home',
  // data () {
  //   return {
  //     title: 'Home',
  //     products:[
  //     {
  //       // productTitle:"ABCN",
  //       image       : require('../assets/images/home.png'),
  //       productId:1
  //     },
  //     ]
  //   }
  // },
  // methods:{
  // goTodetail(prodId) {
  //   let proId=prodId
  //   this.$router.push({name:'details',params:{Pid:proId}})
  // }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  /* max-height: 40em; */
  width: 100%;
  height: 47em;
}
.row .img-text{
  padding:0 !important ;
}
.row h3{
  cursor:pointer;
}
.plan-text {
  background: white;
}
.set-text{
  z-index: 1;
  color: #377f77;
  font-size: 72px;
  font-weight: 100;
  display: grid;
  position: relative;
  margin: 130px 0px 18px calc((100% - 490px) * 0.5);
}
.set-last-text{
  font-size:20px;
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
  padding: 10px 15px;
  border-radius: 22px;
  margin: 0px 3px;
  background: #e6e8fa;
}
.set-button:hover{
  background: #689ADE;
  border: 0px solid rgb(29, 103, 205);
  color:white;
}
</style>
