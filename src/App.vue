<template>
  <div id="app">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-color">
      <div class="container" style="position: relative;">
        <router-link to="/" class="navbar-brand first-set">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="true"
          aria-label="Toggle navigation"
        style="margin:15px 0px 0px 0px;">
          <span class="navbar-toggler-icon" ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link
                class="nav-link header-menu"
                style="border-left: 1px solid"
                to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link header-menu" to="/employers"
                >Employers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link header-menu" to="/jobseekers"
                >Job Seekers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link header-menu" to="/bookatest"
                >Book a Test</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link header-menu last-menu" to="/plan"
                >Plan & Pricing</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <transition name="moveInUp">
        <router-view />
      </transition>
    </div>
    <div id="footer">
      <div class="footer-first footer-set-first">Safe Recruits</div>
      <div class="footer-first">
        <a href="mailto:contact@saferecruits.com" class="set-color-a">
          contact@saferecruits.com
        </a>
      </div>
      <div class="footer-first">©2022 by Safe Recruits Limited</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@media (max-width: 768px) {
  .collapse.in {
    display: block !important;  }
  .navbar .container {
    display: block;
  }
}
@media (min-width: 768px) {
  /* .collapse:not(.show) {
    display: none !important;
  } */
}
.first-set {
  padding: 0px;
  font-size: 16px;
  margin: 6px 1px 0px 6px;
}
body {
  min-height: 500px;
  background-color: #025955fa;
  font-size: 15px;
}
.container {
  max-width: 90%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 70px;
  color: white;
}
.set-color-a {
  color: white;
}
.set-color-a:hover {
  color: white;
}
.header-menu {
  font-size: 15px;
  border-right: 1px solid;
  margin-right: 0px;
  padding: 0px 20px !important;
}
#footer {
  background-color: #005951;
  position: absolute;
  width: 100%;
  margin: 60px 0px 0px 0px;
}
.last-menu {
  border-right: none;
}
.footer-first {
  color: white;
  line-height: 3;
}
.footer-set-first {
  font-size: 22px;
}
.moveInUp-enter-active {
  animation: fadeIn 2s ease-in;
}
.bg-color {
  background-color: #005951;
  line-height: 2.5;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
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
  top: 25%;
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
</style>
