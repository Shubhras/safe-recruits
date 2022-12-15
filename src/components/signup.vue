<template>
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
</template>
<script>
	export default{
		name:'blog',

	}
</script>

<style scoped>
.top-test{
  color:#005951;
  padding: 130px 0px 50px 0px;
}
.sing-up{
  background-color:white;
}
.email{
  background-color: #025955fa;
  color:white;
}
.last-test{
  padding-bottom: 20px;
  font-size: 18px;
  color:#005951;
}
</style>