<template>
  <div id="app">
      <!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-color">
        <div class="container">
        <router-link to="/" class="navbar-brand header-menu">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
      
            <li class="nav-item">
              <router-link class="nav-link header-menu" to="/about">About</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link header-menu" to="/employers">Employers</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link header-menu" to="/jobseekers">Job Seekers</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link header-menu" to="/bookatest">Book a Test</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link header-menu last-menu" to="/plan">Plan & Pricing</router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
     <div id="footer">
        <div class="footer-first footer-set-first">   Safe Recruits </div>
        <div class="footer-first">  contact@saferecruits.com </div>
        <div class="footer-first">  ©2022 by Safe Recruits Limited  </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
//  data() {
//     return {
//       windowHeight: window.innerHeight
//     }
//   },

//   mounted() {
//     this.$nextTick(() => {
//       window.addEventListener('resize', this.onResize);
//     })
//   },

//   beforeDestroy() { 
//     window.removeEventListener('resize', this.onResize); 
//   },

//   methods: {  
//     onResize() {
//       this.windowHeight = window.innerHeight
//     }
//   }

}
</script>

<style>
body{
  min-height: 500px;
  background-color: #025955fa;
}
.container{
  max-width: 75%;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 70px;
  color: white;
}
.header-menu{
    color: #fff !important;
    font-size: 15px;
    border-right: 1px solid;
    margin-right: 0px;
    padding: 0px 20px !important;
}
#footer{
  background-color:#005951;
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  /* z-index: 1000; */
  margin: 60px 0px 0px 0px;
}
.last-menu{
  border-right:none;
}
.footer-first{
    color: white;
    line-height: 3;
}
.footer-set-first{
   font-size: 16px;
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
.bg-color{
 background-color:#005951;
 line-height: 2.5;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
