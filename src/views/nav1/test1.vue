<template>
  <div class="hello">
    <h1>test1</h1>
  </div>
</template>

<script>

export default {
  
  name: 'HelloWorld',
  created(){
    this.axios.get("/per1").then(data =>{
      this.$message(data);
    }).catch(err =>{
      this.$message.error(err);
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
