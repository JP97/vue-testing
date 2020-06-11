<template>
  <div class="container">
    <h1>{{msg}}</h1>
     <p>the counter is: {{counter}}</p>
     <button @click="counter++">increase counter</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data (){
    return{
      counter: 0
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
