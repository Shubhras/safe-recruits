<template>
  <div class="contact">
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
    <div class="img-gap">
      <img src="../assets/images/about.png" class="img-fluid set-img" />
    </div>
    <div class="text-start">Reliable Innovative Staffing</div>

    <div class="text-center">
      Safe Recruits is widely recognized as one of the industry’s fastest growing staffing
      agencies. With 1 team members, we have the capacity to build meaningful,
      long-lasting relationships with all our clients. Our success is a result of our
      commitment to the best people, the best solutions and the best results.
    </div>

    <div class="text-center">
      We invite you to contact one of our team members today. They are committed to
      providing you, our clients, with an experience focused on what you value most.
    </div>

    <div class="set-button-div">
      <button class="set-button">
        <a data-toggle="modal" data-target="#myModal" class="set-color-a"
          >Find The Right Employee</a
        >
      </button>
      <button class="set-button">Build or Upload Your CV</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      title: "About",
    };
  },
};
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
  top: 30%;
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
.set-img {
  border-radius: 100%;
}
.set-color-a {
  color: #025955;
}
.set-color-a:hover {
  color: white;
}
.img-gap {
  padding: 70px 0px 40px 0px;
}
.text-start {
  font-size: 40px;
  font-weight: 300;
  padding: 20px 0px;
}
.text-center {
  width: 50%;
  margin: auto;
  margin-bottom: 25px;
  line-height: 2;
}
@media only screen and (max-width: 1024px) {
  .text-center {
    width: 100%;
  }
}
@media only screen and (max-width: 1500px) and (min-width: 1025px) {
  .text-center {
    width: 70%;
  }
}
.set-button-div {
  margin: 37px 0px;
}
.set-button {
  letter-spacing: 0.05em;
  font-size: 16px;
  color: #025955;
  font-family: helvetica-w01-bold, helvetica-w02-bold, helvetica-lt-w10-bold, sans-serif;
  font-weight: 700;
  border: none;
  padding: 15px 25px;
  border-radius: 22px;
  margin: 10px 30px;
  background: #e6e8fa;
}
.set-button:hover {
  background: #689ade;
  border: 0px solid rgb(29, 103, 205);
  color: white;
}
</style>
