<!-- 
  @author:zhengrong
  @data:2018年12月19日15:01:49
-->
<template>
  <div id="_header">
    <div class="header-wrapper" v-if="path_=='/about'">
      <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E9%A6%96%E9%A1%B5/u39.png" alt="" style="width:140px;height:52px;margin:0 auto;margin-top:11px;cursor:pointer;" @click="tohome">
    </div>
    <div class="header-wrapper" v-else-if="path_!=='/about'">
      <div class="header-nav-left" @click="tohome">
        <img :src=logo_dark alt="" v-if="path_ =='/'">
        <img :src=logo_light alt="" v-else>
      </div>

      <div class="header-nav-position"></div>
      
      <div class="header-nav-right" v-if="path_=='/'">
        <!-- 浏览历史 -->
        <div @click="toHistory" class="history" @mouseenter="enter">
          <i class="fa fa-history" style="font-size:30px;"></i>
        </div>
        <div id="steps">
          <div v-for="(item,key) in recordList" :key="item.id" v-show="key<num" @click="toContent(item)">
            <div class="circle_title">
              <div class="circle"></div>
              <!-- <div class="today">{{item.create_time | dateFormat | judgeTime}}</div> -->
              <div class="today">今天</div>
            </div>
            <div class="line_title">
              <div class="text">{{item.object_name}}</div>
              <el-progress type="circle" :percentage="item.object_duration"></el-progress>
            </div>
          </div>
          <div class="learnPlan">
            <div class="circle_title">
              <div class="circle"></div>
              <div class="today">学习计划</div>
            </div>
            <div class="line_title">
              <div class="text">测试</div>
              <!-- <el-progress type="circle" percentage="20"></el-progress> -->
            </div>
          </div>
        </div>
        <!-- 头像 -->
        <div class="portrait" @click="tohome">
          <img :src=imgUrl alt="">
        </div>
        <!-- 退出弹框 -->
        <div class="exit">
          <div class="exitPortrait">
            <img :src=imgUrl alt="">
          </div>
          <div class="exitName">
            <span>朱莉</span>   
            <i class="fa fa-vimeo" style="color: rgb(2, 153, 255);font-size:16px;"></i></div>
          <div class="exitNotice">退出</div>
        </div>
        <!-- 视频 -->
        <div @click="tovideo" class="videoDiv">
          <i class="fa fa-file-video-o fa-2x fa-fw video-ico" style="font-size:26px;color:#6B6B6B;"></i>
          <!-- <br> -->
          <span>视频</span>
        </div>
        <!-- 文档 -->
        <div @click="todoc" class="docDiv">
          <i class="fa fa-archive fa-2x fa-fw doc-ico" style="font-size:26px;"></i>
          <span>文档</span>
        </div>
        <!-- 上传 -->
        <div @click="toupload" class="uploadDiv">
          <i class="fa fa-cloud-upload fa-2x fa-fw upload-ico" style="font-size:26px;"></i>
          <span>上传</span>
        </div>
        <!-- 关于 -->
        <div @click="toabout" class="aboutDiv">
          <i class="fa fa-info-circle fa-2x fa-fw about-ico"></i>
          <span>关于杰普</span>
        </div>
      </div>

      <div class="header-nav-right" v-else-if="path_!=='/'">
        <div class="portrait" @click="tohome">
          <img :src=imgUrl alt="">
        </div>
        <div @click="tovideo" class="videoDiv_">
          <i class="fa fa-file-video-o fa-2x fa-fw"></i>
          <!-- <br> -->
          <span>视频</span>
        </div>
        <div @click="todoc" class="docDiv_">
          <i class="fa fa-file-text fa-2x fa-fw"></i>
          <span>文档</span>
        </div>
        <div @click="toupload" class="uploadDiv_">
          <i class="fa fa-cloud-upload fa-2x fa-fw"></i>
          <span>上传</span>
        </div>
        <div @click="toabout" class="aboutDiv_">
          <i class="fa fa-info-circle fa-2x fa-fw"></i>
          <span>关于杰普</span>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from '@/http/axios'
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex';
export default {
  data(){
    return {
      logo_light:'https://raw.githubusercontent.com/pluslicy/assets/master/resource/logo/LOGO-Light.png',
      logo_dark:'https://raw.githubusercontent.com/pluslicy/assets/master/resource/logo/LOGO.png',
      imgUrl:'https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E9%A6%96%E9%A1%B5/u43.png',
      path_:'/',
      num:2
    }
  },
  watch:{
    $route(to,from){
      // 路由变化时，将路由赋值给this.path_   ====   解决了非首页刷新页面，头部导航颜色变化的问题
      this.path_ = this.$route.path;
      this.listenPath();
    }
  },
  computed:{
    ...mapGetters(['recordList'])
  },
  created(){
    // 视频观看记录
    this.findPlayList()
  },
  mounted(){
    // 页面挂载完时，将路由赋值给this.path_   ====   解决了非首页刷新页面，头部导航颜色变化的问题
    this.path_ = this.$route.path;
    this.listenPath();
  },
 
  methods:{
    ...mapActions(['playRecordList']),
    listenPath(){
      if(this.path_ == '/'){
        let bgc = {"background-color":"rgba(255, 255, 255, 1)"};
        $('#_header').css(bgc);
        $('.header-wrapper').eq(0).css(bgc);
        this.logoUrl = this.logo_dark;
      }else if(this.path_ == '/about'){
        let bgc = {"background-color":"rgba(255, 255, 255, 1)"};
        $('#_header').css(bgc);
        $('.header-wrapper').eq(0).css(bgc);
      }else {
        let bgc = {"background-color":"rgba(46, 51, 64, 1)"};
        $('#_header').css(bgc);
        $('.header-wrapper').eq(0).css(bgc);
        this.logoUrl = this.logo_light;
      }
    },
    enter(){
      this.findPlayList()
    },
    // 从观看记录跳转到相应视频的播放页面
    toContent(item){
      // 设置百分比
      localStorage.setItem('percentage',item.object_duration)
      // 设置播放时长
      localStorage.setItem('currentTime',item.object_play_time)
      this.$router.push({
        path:'/video/content',
        query:{videoId:item.object_id}
      })
    },
    // 获取所有视频观看记录
    findPlayList(){
      let obj = {
        user:24,
        // page:
      }
      this.playRecordList(obj)
    },
    toHistory(){},
    // 视频按钮
    tovideo(){
      this.$router.push('/video')
    },
    // 文档按钮
    todoc(){
      this.$router.push('/doc')
    },
    // 上传按钮
    toupload(){
      this.$router.push('/personal/space')
    },
    // 关于按钮
    toabout(){
      this.$router.push('/about')
    },
    tohome(){
      this.$router.push('/')
    },
    
  },

  // 判断今天、昨天
  filters:{
    dateFormat:function(dateStr){
      var dt = new Date(dateStr)
      var y = dt.getFullYear()
      var m = (dt.getMonth() + 1).toString().padStart(2,'0')
      var d = dt.getDate().toString().padStart(2,'0')
      var hh = dt.getHours().toString().padStart(2,'0')
      var mm = dt.getMinutes().toString().padStart(2,'0')
      var ss = dt.getSeconds().toString().padStart(2,'0')
      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    },
    judgeTime(date){
      var today = new Date()
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      var otime = today.getTime()
      //给出时间 - 今天0点
      var now = new Date(date).getTime()
      var offset= now-otime;
      var isToday = offset/1000/60/60
      if(isToday > 0 && isToday<= 24){
          return "今天"
      }else if(isToday < 0 && isToday <= -24){
          return "昨天"
      }else{
          return "昨天"
      }
    }
  }
}
</script>

<style scoped>
  /* 浏览历史样式 */
  /* 
    深度作用选择器 .a >>> .b
    使用scoped后，父组件的样式将不会渗透到子组件中，如果希望选择器作用的更深，例如影响子组件，可以使用 >>>
   */
  #steps >>> .el-progress-circle{
    height: 30px !important;
    width: 30px !important;
  }
  #steps >>> .el-progress__text{
    margin-left: 265px !important;
    margin-top: -30px !important;
    font-size: 12px !important;
  }
  #steps >>> svg{
    height: 20px;
    position: absolute;
    top: -80%;
    left: 800%;
  }
  #steps{
    box-shadow: 5px 5px 5px #333;
    position: absolute;
    top: 74px;
    background-color: #F0EEFF;
    height: 180px;
    width: 340px;
    display: none;
    overflow:hidden;
    left: -40%;
    padding: 0 !important;
  }
  #steps div{
    padding: 0 !important;
  }
  #steps>div:hover{
    background-color: #ccc;
  }
  .learnPlan{
    height: 60px;
  }
  .circle{
    border-radius: 100%;
    height: 8px;
    width: 8px;
    background-color:#7a5aee;
    display: inline-block;
    margin-right: 4px;
  }
  .today{
    font-size: 12px;
    color: #949494;
    display: inline-block;
    width: 280px;
    text-align: left !important;
  }
  .line_title{
    width: 280px;
    height: 30px;
    text-align: left !important;
    border-left: 2px solid #949494;
    margin-left: 25px;
    position: relative;
  }
  .text{
    text-align: left !important;
    font-size: 13px;
    width: 200px;
    margin-left: 10px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
  }
  .text:hover{
    color: #7a5aee;
  }
  .history{
    position: relative;
  }
  .history:hover + #steps{
    display: block;
  }
  #steps:hover{
    display: block;
  }
  .history i{
    position: absolute;
    height: 40px;
    width: 40px;
    top: 40%;
    left: 20%;
  }
  /* 退出界面样式 */
  .exitName{
    margin-top: 5px;
    margin-left: 5px;
  }
  .exitName .fa{
    width: 16px;
    height: 16px;
  }
  .exitName span{
    position: absolute;
    left: 35%;
    top: 30%;
  }
  .exitPortrait{
    height: 45px;
    width: 45px;
    position: absolute;
    top: 20%;
    left: 10%;
  }
  .exitNotice{
    position: absolute;
    right: 5%;
    top: -5%;
  }
  .exit{
    height: 100px;
    width: 220px;
    box-shadow: 5px 5px 5px #333;
    background-color:beige;
    position: absolute;
    top: 74px;
    display: none;
    left: -50px;
    border-radius: 5px;
    z-index: 999;
  }
  .portrait:hover + .exit{
    display: block;
  }
  .exit:hover{
    display: block;
  }
  #_header{
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: Microsoft Yahei;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-color: rgba(46, 51, 64, 1);
    position: fixed;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.349019607843137);
    width: 100%;
    margin-bottom: 74px;
    top: 0;
    z-index: 100;
  }
  #_header .header-wrapper{
    width: 1240px;
    height: 74px;
    margin: 0 auto;
    background-color: rgba(46, 51, 64, 1);
    display: flex;
  }
  #_header .header-nav-left{
    flex: 293px;
    padding: 11px 0;
    cursor: pointer;
  }
  #_header .header-nav-position{
    flex: 790px;
  }
  #_header .header-nav-right{
    flex: 424px;
    display: flex;
    position: relative;
  }
  #_header .header-nav-right i{
    display: block;
    margin: 0 auto;
    font-size: 22px;
    line-height: 22px;
    color: #6B6B6B;
  }
  #_header .header-nav-right div{
    padding: 18px 0;
    cursor: pointer;
  }
  #_header .header-nav-right>div:first-child{
    padding: 14px 0;
  }
  #_header .header-nav-right .portrait img{
    width: 45px;
    height: 45px;
  }
  #_header .header-nav-right div{
    flex: 1;
    text-align: center;
  }
  #_header .header-nav-right span{
    font-weight: 700;
    font-size: 12px;
  }
  #_header .header-nav-right .videoDiv,
  #_header .header-nav-right .docDiv,
  #_header .header-nav-right .uploadDiv,
  #_header .header-nav-right .aboutDiv{
    color: #6B6B6B;
  }
  #_header .header-nav-right .videoDiv:hover,
  #_header .header-nav-right .docDiv:hover,
  #_header .header-nav-right .uploadDiv:hover,
  #_header .header-nav-right .aboutDiv:hover{
    color: #0099FF;
  }
  #_header .header-nav-right .videoDiv_,
  #_header .header-nav-right .docDiv_,
  #_header .header-nav-right .uploadDiv_,
  #_header .header-nav-right .aboutDiv_{
    color: #fff;
  }
  #_header .header-nav-right .videoDiv_ i,
  #_header .header-nav-right .docDiv_ i,
  #_header .header-nav-right .uploadDiv_ i,
  #_header .header-nav-right .aboutDiv_ i{
    color: white;
  }
  #_header .header-nav-right .videoDiv_ *:hover,
  #_header .header-nav-right .docDiv_ *:hover,
  #_header .header-nav-right .uploadDiv_ *:hover,
  #_header .header-nav-right .aboutDiv_ *:hover{
    color: #ccc;
  }
</style>
