<template>
  <div class="home">
    <div class="row">
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

      <div class="col-md-6 col-lg6 img-text">
        <img src="../assets/images/home.png" class="img-fluid" width="460" height="345" />
        <!-- <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3> -->
      </div>
      <div class="col-md-6 col-lg6 img-text plan-text">
        <div class="set-text">
          <span> Welcome to</span><span> Safe Recruits</span>
          <div class="set-last-text">Talent Matching and Talent Testing Solutions</div>
        </div>
        <div class="set-button-div">
          <button class="set-button">
            <a class="set-color-a" data-toggle="modal" data-target="#myModal"
              >Find The Right Employee</a
            >
          </button>
          <button class="set-button">Build or Upload Your CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appMyDialog from "./signup.vue";
export default {
  components: {
    appMyDialog: appMyDialog,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
img {
  width: 100%;
  height: auto;
}
@media (min-width: 768px) and (max-width:800px) {
  img {
    height: 316px;

  }
}
.set-color-a {
  color: #025955;
}
.set-color-a:hover {
  color: white;
}
/* .row img{
  width: 100%;
  height: 47em;
} */
.row .img-text {
  padding: 0 !important ;
}
.row h3 {
  cursor: pointer;
}
.plan-text {
  background: white;
}
.set-text {
  z-index: 1;
  color: #377f77;
  font-size: 72px;
  font-weight: 100;
  display: grid;
  position: relative;
  padding: 130px 0px 18px 0px;
}
@media only screen and (max-width: 1320px) {
  .set-text {
    padding: 0;
  }
}
@media only screen and (max-width: 767px) {
  .set-text {
    font-size: 50px;
  }
}
@media (min-width: 768px) and (max-width:991px) {
  .set-text {
   font-size: 40px;
  }
}

.set-last-text {
  font-size: 20px;
}
/* .set-button-div{
  position: relative;
  top: 40px;
} */
.set-button {
  /* letter-spacing: 0.05em;s */
  font-size: 16px;
  color: #025955;
  font-family: helvetica-w01-bold, helvetica-w02-bold, helvetica-lt-w10-bold, sans-serif;
  font-weight: 700;
  border: none;
  padding: 10px 15px;
  border-radius: 22px;
  margin: 12px 3px;
  background: #e6e8fa;
}
.set-button:hover {
  background: #689ade;
  border: 0px solid rgb(29, 103, 205);
  color: white;
}
</style>
