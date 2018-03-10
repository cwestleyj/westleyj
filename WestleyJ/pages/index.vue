<template>
  <div>


  <jumbotron/>
  <div class="container">


<h1>What are you waiting for? Click around!</h1>
  </div>
  </div>

</template>



<!-- <hr class="my-4">
<p>
  This portfolio site runs off of a couple of tech stacks.
  Check it:



  <b-media  group>
      <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" class="pizza"/>
      <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" class="pizza"/>
      <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" class="pizza" />
      <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" class="pizza" />
  </b-media> -->
<script>
import jumbotron from '~/components/jumbotron.vue'
export default {
  components: {
    jumbotron
  }
}
</script>

<style>
.container {

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
