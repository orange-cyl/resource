<template>
        <div class="flex-center">
             <h3>系统加载中，请稍等...</h3>
             <span class="container">
                <span id="progressBar" class="h-100P bar"></span>
            </span>
        </div>
</template>
<script>
  
export default {
    
    data(){
      return {
        title:"java基础教程-环境搭建"
        

      }
    },
    //映射数据
    computed:{

    },
    created(){
      var percentage = 0;
     var interval = setInterval(function () {
          if (percentage < 10000) {
              percentage++;
              var widthTemp = (percentage / 100).toFixed(1) + '%';
              $('#progressBar').css('width', widthTemp);
              $('#progressBar').text(widthTemp);
          } else {
             clearInterval(interval);
             $('h3').text('加载完成！正在为您跳转...');
             setTimeout(function () {
                 location = 'helloWorld.html';
             }, 1500);
        }
    }, 10);
      
      
    },
    mounted(){

    },
    methods:{
      
    }
  }




</script>

<style scoped>
  
  .flex-center{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
 .container{
          display: inline-block;
         width: 50%;
         height: 20px;
        padding-right: 10px;
        border: 1px solid #999;
         border-radius: 5px; 
}
 .h-100P{
         height: 100%;
 }
 .bar{         display: inline-block;
         background: #90bf46;
         color: white;
         font-weight: bold;
         padding: 0 5px;
         text-align: right;
         border-radius: 5px;
         border-right: 1px solid #999;
 }
</style>