<template>
  <div id="app">
    <!-- 头部 -->
    <Header/>
    <!-- 内容部分 -->
    <div class="container">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
    <!-- 底部 -->
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
      return {
          reload: this.reload                                              
      }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }

}
</script>

<style>
body {
    color: #424242;
    font-size: 14px;
    line-height: 1.75;
}

* {
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #424242;
}
#app .container {
  width: 1240px;
  margin: 0 auto;
  position: relative;
  top: 74px;
}
</style>
