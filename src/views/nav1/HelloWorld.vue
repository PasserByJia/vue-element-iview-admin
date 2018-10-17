<template>
  <div class="hello">
    <Table border :columns="columns1" :data="data1"></Table>
    <Page :total="pageTotal" :current="pageNum" :page-size="pageSize"  show-elevator show-sizer
                show-total
                @on-change="handlePage" @on-page-size-change="handlePageSize"></Page>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    this.init();
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      columns1: [
        {
            type: 'index',
            width: 60,
            align: 'center'
        },
        {
            title: '学号',
            key: 'no'
        },
        {
            title: '姓名',
            key: 'name'
        },
        {
            title: '年龄',
            key: 'age'
        },
        {
            title: '班级',
            key: 'classes'
        }
        ,
        {
            title: '地址',
            key: 'address'
        }
    ],
    data1: [],
    pageNum: 1, //当前的页数， 不能是0
    pageSize: 10, //当前显示的数据条数
    pageTotal: 0,
    }
  },
   methods: { 
     init(){
       this.axios.get("/pages?pageNum="+this.pageNum+"&pageSize="+this.pageSize).then(data =>{
          console.log(data);
          this.data1=data.rows;
          this.pageTotal = data.total;
          //this.$message(data);
        }).catch(err =>{
          this.$message.error(err);
        })
     },
     handlePage(value) {
        this.pageNum = value;
        this.init();
      },
      //处理当前页有几条
      handlePageSize(value) {
        this.pageSize = value;
        this.init();
      },
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
