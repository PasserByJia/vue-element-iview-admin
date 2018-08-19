<template>
  <div class="hello">
    <h1>test1</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  name: 'HelloWorld',
  created(){
    axios.get("/per1").then(data =>{
      this.$message(data.data);
    }).catch(err =>{
      this.$message.error("error");
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
