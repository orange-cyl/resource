<template>
  <div class="video_play">
    <!-- 时间处理 -->
    <div style="position:absolute;left:-50%;" ref="timeFormat">{{timeNow | dateFormat}}</div>
    <!-- 回到顶部按钮 -->
    <button id="to-top-btn" @click="toTop" ref="moreTextInfo">回到顶部</button>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:24px 0;">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/video'}">视频列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{videoDetials.vr_name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 视频播放 -->
    <div class="video_player">
      <!-- 视频播放 -->
      <div class="left" >
        <video id="xpf" class="video-js" :src="videoSrc[0]" controls preload="auto" width="860px" height="470px" poster="MY_VIDEO_POSTER.jpg" type='video/mp4'></video>
      </div>
      <!-- 右侧专辑列表 -->
      <div class="right">
        <!-- 视频标题 -->
        <div class="right_title">
          <span class="title" :title="videoDetials.vr_name">{{videoDetials.vr_name}}</span>
          <div class="store">
            <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1214.png" alt="">
            <span @click="collectionHandler">{{collection}}</span>
          </div>
        </div>
        <!-- 视频描述 -->
        <div class="sulpture">
          <img :src="videoList.img" alt="">
          <span class="speaker">{{videoDetials.vr_owner}}</span>
          <i class="fa fa-vimeo"></i>
        </div>
        <div class="commont">{{videoDetials.vr_desc}}</div>
        <!-- 专辑列表 -->
        <div class="docs">
          <ul>
            <li class="doc" v-for="item in videoDetials.cat_same_video" :key="item.id" @click="toContent(item)">
              <span class="section">{{item.vr_name}}</span>
              <i class="fa fa-video-camera"></i>
            </li>
          </ul>
          <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1222.png" alt="">
        </div>
        <!-- 点赞 -->
        <div class="right-bottom">
          <i class="fa fa-thumbs-up" @click="like"></i>
          <span class="favorSpan" v-if="favor">+1</span>
          <div class="lickNum">
            <span class="favorNum">{{videoDetials.vr_favor}}</span>
          </div>
          <i class="qzone fenxiang"></i>
          <i class="weixin fenxiang"></i>
          <i class="weibo fenxiang"></i>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="comment">
      <span class="text">评论</span>
      <span class="num">({{commentList.count}})</span>
    </div>
    <div class="content">
      <!-- 评论 -->
      <div class="left">
        <textarea name="" id="" cols="30" rows="10" class="textarea" placeholder="我想对你说..." v-model="commentMsg"></textarea>
        <!-- 评论的textarea -->
        <div class="expression">
          <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1244.png" alt="">
          <span>表情</span>
          <span class="button" @click="commentHandler">评论</span>
        </div>
        <!-- 个人回复 -->
        <div class="person_comment" >
          <div class="single" v-for="(item,key) in commentList.results" :key="item.id" v-show="key<num">
            <div class="person">
              <img :src="item.img" alt="">
              <span class="name">{{item.user}}</span>
              <span class="date">{{item.comment_time | dateFormat}}</span>
            </div>
            <div class="text">{{item.comment_text}}</div>
            <div class="iconimg">
              <span>
                <i class="fa fa-commenting-o"></i>
                <span class="comtext" @click="replay(item)">评论({{item.as_root_comment_num}})</span>
                <i class="fa fa-thumbs-o-up"></i>
                <span class="comtext" @click="commentFavor(item)">赞({{item.comment_favor}})</span>
              </span>
            </div>
            <!-- 回复输入框 -->
            <div class="inputtext" v-show="item.comment_flag == 'true'">
              <input type="text" name="comment" v-model="replayText" placeholder="唠一下...">
              <div class="replaySpan">
                <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1244.png" alt="">
                <span class="button" @click='replayComment(item)'>评论</span>
                <div class="replylists">
                  <div class="replylist" v-for="i in commentContext" :key="i.id">
                    <div class="personcomment">
                      <span class="name">{{i.replay_username}}</span>
                      <span class="name" v-show="!i.replyB">:</span>
                      <span class="name reply" v-show="!i.replyB">回复</span>
                      <span class="name">{{i.username}}</span>
                      <span class="name" v-show="!i.replyB">:</span>
                      <span>{{i.comment_text}}</span>
                    </div>
                    <div class="zan">
                      <span>{{i.date}}</span>
                      <span class="zan_contaniner">
                      <span class="commTime">{{i.comment_time | dateFormat}}</span>
                        <span style="width:65%;display:inline-block"></span>
                        <i class="fa fa-commenting-o"></i>
                        <span class="comtext" style="margin-right:10px" @click="replayAnthor(i,item)">回复</span>
                        <i class="fa fa-thumbs-o-up"></i>
                        <span class="comtext">赞({{i.comment_favor}})</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div @click='showMore' id="moreComment" v-if="moreText>3">{{text}}</div>
        </div>
      </div>
      <!-- 视频附件 -->
      <div class="right">
        <div class="img">
          <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1344.jpg" alt="" width="100%" height="200">
        </div>
        <div class="list">
          <ul>
            <li>资源推荐</li>
            <li v-for="item in video_docs" :key="item.id">
              <a href="#">{{item.name}}</a>
              <span><i class="fa fa-eye"> 9</i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/javascript">
import axios from '@/http/axios'
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex';
  export default{
    data(){
      return {
        video_docs:{},
        timeNow:0,
        moreText:2,
        commentMsg:'',
        replayText:'',
        videoSrc:[],
        HotVideo:[],
        favor:false,
        comment:'',
        num:4,
        flag:1,
        isShow:true,
        text:'加载全部',
        collection:'收藏',
        title:window.sessionStorage.getItem('title'),
        videoList:{
          id:'',
          title:'JavaEE入门-环境搭建',
          speaker:'崔略',
          img:'https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1217.png',
          intro:'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强....',
          videos:[
            {section:'第一节-',title:'环境搭建'},
            {section:'第二节-',title:'环境搭建'},
            {section:'第三节-',title:'环境搭建'}
          ]
        },
        timeFunction:null
      }
    },
    // 监听页面与页面之间的路由变化
    // 离开视频播放页面,将该视频播放的信息存入观看记录
    beforeRouteLeave (to, from, next) {
      // 视频播放超过三分之一再做记录
      var duration = localStorage.getItem('percentage');
      if(duration>30){
        // 记录视频观看次数
        let playRecord = {
          object_type:'video',
          user:24,
          object_id:this.$route.query.videoId
        }
        this.playTimes(playRecord)
      }
      
      // 获取当前时间,并处理格式
      this.timeNow = (new Date()).getTime();
      var createTime = this.$refs.timeFormat.innerText;
      // 获取离开页面时的视频id
      let leaveId = {
        id:from.query.videoId
      }
      // 通过视频id查询视频详情,从中获取视频名称
      this.findVideoDetials({params:leaveId}).then((res) => {
          // 获取离开视频播放页面时,视频播放的百分比
          var duration = localStorage.getItem('percentage');
          // 获取播放时长
          var playTime = localStorage.getItem('currentTime');
          let obj = {
            user:24,
            object_type:'video',
            object_id:from.query.videoId,
            object_duration:duration,
            create_time:createTime,
            object_play_time:playTime,
            object_name:res.data.results[0].vr_name
          }
          this.createRecord(obj)
      })
      next()
    },
    // 监听同一页面内的路由发生变化，将该视频加入到观看历史记录
    watch: {
      $route: {
        handler: function(val, oldVal){
          this.timeNow = (new Date()).getTime();
          var createTime = this.$refs.timeFormat.innerText;
          let watchId = {
            id:this.$route.query.videoId
          }
          this.findVideoDetials({params:watchId}).then((res) => {
              var duration = localStorage.getItem('percentage');
              var playTime = localStorage.getItem('currentTime');
              this.timeNow = (new Date()).getTime();
              let obj = {
                user:24,
                object_type:'video',
                object_id:oldVal.query.videoId,
                object_duration:duration,
                create_time:createTime,
                object_play_time:playTime,
                object_name:res.data.results[0].vr_name
              }
              this.createRecord(obj)
          })
        },
        deep: true
      }
    },
    computed: {
     ...mapGetters(['videoDetials','video','commentList','commentContext']),
    },
    created(){
      // 视频详情，接受路由跳转时携带的视频id
      this.VideoDetials(this.$route.query.videoId)
      // 查找所有评论
      this.findAllComment()
      // 初始化当前时间,获取当前时间戳
      this.timeNow = (new Date()).getTime();
      // 视频播放页面加载的时候自动回到顶部
      this.toTop();
    },
    mounted(){
      // 监听页面滚动
      window.addEventListener('scroll', this.scrollToTop)
      // 页面挂载的时候，将  回到顶部  隐藏
      this.$refs.moreTextInfo.style.display = 'none';

      // 视频缓存相关
      var video = document.getElementById('xpf');
      // 获取缓存的观看过的视频时长
      var local = localStorage.getItem('currentTime');
      video.addEventListener('loadedmetadata',function(){
          this.currentTime = local;
      })
      // 观看过的视频时长载入缓存
      video.addEventListener("timeupdate", function() {
          var proceed = Math.floor(video.currentTime);
          localStorage.setItem("currentTime", proceed);
      });
      // 设置定时器,每一秒获取一次相关信息, ----------->  在离开页面的时候一定要清除定时器(destroyed),否则计算的百分比会出错
      this.timeFunction = setInterval(()=>{
          // 获取存储的播放时长
          var local = localStorage.getItem('currentTime');
          // 获取视频时长
          var allTime = video.duration;
          // 计算百分比
          var percentage = parseInt((local/allTime)*100);
          // 将百分比存入浏览器
          localStorage.setItem("percentage", percentage);
      },1000)
    },
    methods:{
      ...mapActions(['findVideoDetials','isFavor','isCollection','findCommentList','createComment','findCommentContext','createRecord','deleteFavor','deleteCollection','playTimes']),

      // 二级评论下的所有回复
      replayAnthor(i,item){
        // i是当前回复的评论对象，i.id作为parent_id
        // item是一级评论，item.id作为root.id
        let obj = {
          user:67,
          replay_user:24,
          object_type:'video',
          comment_type:'2',
          parent_id:i.id,
          root_id:item.id,
          comment_text:'回复测试文本',
          object_id:this.$route.query.videoId
        }
        this.createComment(obj).then((res)=>{
          this.$notify({
            title: res.statusText,
            message: '评论成功',
            type: 'success'
          })
          this.findAllComment()
        })
      },
      // 回到顶部事件(动画效果)
      toTop(){
        var doc= document.documentElement;
        $(doc).animate({
          scrollTop:0
        },500)
      },
      // 监听回到顶部按钮的显示与隐藏
      scrollToTop() { 
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let browserHeight = window.outerHeight;
        if (scrollTop > browserHeight) {
          this.$refs.moreTextInfo.style.display = 'block';
        } else {
          this.$refs.moreTextInfo.style.display = 'none';
        }
      },
      // 其他用户回复当前用户(二级评论)
      replayComment(item){
        let obj = {
          user:24,
          replay_user:67,
          object_type:'video',
          comment_type:'2',
          parent_id:item.id,
          root_id:item.id,
          comment_text:this.replayText,
          object_id:this.$route.query.videoId
        }
        if(obj.comment_text == ''){
          this.$notify({
            title: '评论失败',
            message: '请输入内容',
            type: 'warning'
          })
        }else{
          this.createComment(obj).then((res)=>{
            this.$notify({
              title: res.statusText,
              message: '评论成功',
              type: 'success'
            })
            this.findAllComment()
          })
          this.replayText = '';
          this.flag = 1;
        }
      },
      // 回复输入框，查找评论上下文
      replay(item){
        // 后台返回的comment_flag是字符串
        if(this.flag%2 != 0){
          item.comment_flag = 'true';
          this.flag++;
        }else{
          item.comment_flag = 'false';
          this.flag++;
        }
        var id = {
          id:item.id
        }
        this.findCommentContext(id)
      },
      // 添加所有用户添加一级评论
      commentHandler(){
        let obj = {
          object_type:'video',
          comment_type:'1',
          user:24,
          comment_text:this.commentMsg,
          object_id:this.$route.query.videoId
        }
        if(obj.comment_text == ''){
          this.$notify({
            title: '评论失败',
            message: '请输入内容',
            type: 'warning'
          })
        }else{
          this.createComment(obj).then((res)=>{
            this.$notify({
              title: res.statusText,
              message: '评论成功',
              type: 'success'
            })
            this.findAllComment();
          })
          this.commentMsg = '';
        }
      },
      // 加载更多评论
      showMore(){
          this.isShow = false;
          this.num = this.isShow?4:this.commentList.results.length;
          this.text = this.isShow?'加载全部':' '
      },
      // 查找所有评论(非回复)
      findAllComment(){
        let obj = {
          object_id:this.$route.query.videoId,
          object_type:'video',
          comment_type:'1'
        }
        this.findCommentList({params:obj}).then(res=>{
          // 根据查询所得的评论数量来确定是否显示  加载全部
          this.moreText = res.data.count
        })
      },
      // 收藏
      collectionHandler(){
        let obj = {
          user:24,
          object_id:this.$route.query.videoId,
          object_type:"video"
        }
        this.isCollection(obj).then(res => {
          this.collection = '已收藏'
          this.$notify({
            title: '成功',
            message: res.data.detail,
            type: 'success'
          })
        }).catch((err)=>{
            let obj = {
              user:24,
              object_id:this.$route.query.videoId,
              object_type:'video'
            }
            this.deleteCollection(obj).then((res)=>{
              this.collection = '收藏'
            })
            this.$notify({
              title: '取消',
              message: '取消收藏成功',
              type: 'success'
            })
        })
      },
      // 点赞评论
      commentFavor(item){
        let obj = {
          user:67,
          object_id:item.id,
          object_type:"comment"
        }
        this.isFavor(obj).then(res => {
          this.findAllComment()
        }).catch(err => {
          this.$notify({
            title: '已点过赞',
            message: '不可重复点赞',
            type: 'warning'
          })
        })
      }, 
      // 点赞视频
      like(){
        let obj = {
          user:24,
          object_id:this.$route.query.videoId,
          object_type:"video"
        }
        this.isFavor(obj).then(res => {
          let obj = {
            id:this.$route.query.videoId
          }
          this.findVideoDetials({params:obj})
          this.favor = true
          setTimeout(() => {
            this.favor = false
          }, 3000);
        }).catch(err => {
          // 取消点赞
          let obj = {
            user:24,
            object_id:this.$route.query.videoId,
            object_type:'video'
          }
          this.deleteFavor(obj).then((res)=>{
            let obj = {
              id:this.$route.query.videoId
            }
            this.findVideoDetials({params:obj})
          })
          this.$notify({
            title: '取消',
            message: '已取消点赞',
            type: 'success'
          })
        })
      }, 
      // 视频详情
      VideoDetials(id){
        let obj = {
          id:id
        }
        this.findVideoDetials({params:obj}).then((res) => {
          this.video_docs = res.data.results[0].vr_attachment
          // 为什么不能直接使用this.videoSrc = res.data.results[0].vr_url ????? 不会报错，但是视频无法刷新
          this.videoSrc.push(res.data.results[0].vr_url)
          if(res.data.results[0].vr_collection == 1){
            this.collection = '已收藏'
          }
        })
      },
      // 跳转到每个视频的详情
      toContent(item){
        // 跳转至新的页面(改变路由携带的视频id)
        this.$router.push({
          path:'/video/content',
          query:{videoId:item.id}
        })
        // 点击右侧视频播放时，将url放入video标签
        let obj = {
          id:item.id
        }
        this.videoSrc = [];
        this.findVideoDetials({params:obj}).then(res => {
          this.videoSrc.push(res.data.results[0].vr_url);
        })
        // 根据当前视频id，查询此视频的所有评论
        let msg = {
          object_id:item.id,
          object_type:'video',
          comment_type:'1'
        }
        this.findCommentList({params:msg})
      },
    },
    destroyed(){
      // 移除页面滚动的监听
      window.removeEventListener('scroll', this.scrollToTop); 
      // 清除定时器
      clearInterval(this.timeFunction);
    }
  }
</script>
<style>
  .replaySpan>span{
    cursor: pointer;
  }
  /* 回到顶部按钮 */
  #to-top-btn{
    position: fixed;
    bottom:10%;
    right: 5%;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
  }
  #to-top-btn:hover{
    background-color: rgba(0,0,0,0.4);
    color: white;
  }
  /* 更多评论 */
  #moreComment{
    position: absolute;
    left: 45%;
    font-size: 18px;
    line-height: 60px;
    cursor: pointer;
  }
  /*页面*/
  .video_play{
    font-family: '微软雅黑';
  }
  /*视频左侧*/
  .video_play .tab_play{
    margin-top:24px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  .video_play > .video_player > .left{
    width: 860px;
    height: 470px;
    float: left;
    position: relative;
  }
  .video_play > .video_player > .right{
    width: 320px;
    height: 430px;
    margin-left: 880px;
    padding:20px;
    border:1px solid rgb(242, 242, 242);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
    background-color: 
  }
  .video_play > .video_player > .right::after{
    content: '';
    display:block;
    clear:both;
  }
  .video_play > .commont{
    margin-top: 20px;
  }
  /*视频右侧*/
  .video_play > .video_player > .right > .right_title > .title{
    font-size: 16px;
    font-weight:bold;
    font-style: normal;
    font-family:'Arial Normal','微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    width: 320px;
    display: block;
    overflow: hidden;
  }
  .video_play > .video_player > .right > .right_title>.store{
    width: 64px;
    border:1px solid #0F69FF;
    color:#0F69FF;
    float:right;
    text-align: center;
    border-radius: 12px;
    height: 22px;
    line-height: 22px;
  }
  .video_play > .video_player > .right > .right_title>.store:hover{
    cursor:pointer;
  }
  .video_play > .video_player > .right > .sulpture{
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    border-bottom:1px solid #D7D7D7;
    padding-bottom: 13px;
  }
  .video_play > .video_player > .right > .sulpture i{
    color:#0099FF;
    font-size:13px;
  }
  .video_play > .video_player > .right > .sulpture img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .video_play > .video_player > .right > .sulpture > span.speaker{
    margin:0 0 0 5px;
  }
  .video_play > .video_player > .right > .commont{
    font-family: '微软雅黑 Regular', '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    border-bottom:1px solid #D7D7D7;
    padding:6px 0;
  }
  .video_play > .video_player > .right > .docs{
    margin-top: 20px;
    font-size: 12px;
    width: 100%;
    height: 230px;
    overflow: hidden;
  } 
  .video_play > .video_player > .right > .docs img{
    float:right;
  }
  .video_play > .video_player > .right > .docs >ul{
    list-style: none;
    float: left;
    width: 335px;
    max-height: 206px;
    overflow: auto;
  }
  .video_play > .video_player > .right > .docs .doc i{
    font-size:14px;
    float:right;
  }
  .video_play > .video_player > .right > .docs .doc i:hover{
    cursor: pointer;
  }
  .video_play > .video_player > .right > .docs >ul>li{
    width: 100%;
    height:30px;
  }
  .video_play > .video_player > .right > .docs .section{
    font-weight: 700;
  }
  .video_play > .video_player > .right > .right-bottom{
    height: 30px;
    padding: 18px 18px 18px 0;
    margin-top: 30px;
    position: relative;
  }
  .favorSpan{
    position: absolute;
    top: 0;
    left: 10%;
  }
  .video_play > .video_player > .right > .right-bottom .lickNum{
    margin-left: 10px;
  }
  .video_play > .video_player > .right > .right-bottom .lickNum span{
    margin-left:-3px;
    color:#0099FF;
    display: block;
    line-height: 30px;
  }
  .video_play > .video_player > .right > .right-bottom i:first-child{
    float: left;
    font-size:30px;
    color:#0099FF;
  }
  .video_play > .video_player > .right > .right-bottom i:hover{
    cursor: pointer;
  }
  .video_play > .video_player > .right > .right-bottom div{
    float: left;
  }
  


  .video_play > .comment{
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    margin-top: 20px;
  }
  .video_play > .comment >.text{
    font-size: 24px;
    color: #868686;
    margin-right: 6px;
  }
  .video_play > .comment >.num{
    font-size: 20px;
    color: #A1A1A1;
  }
  .video_play > .content{
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }
  .video_play > .content > .left{
    width: 860px;
    float: left;
    position: relative;
  }
  .video_play > .content > .left .textarea{
    width: 820px;
    height: 170px;
    font-size: 18px;
    color:#868686;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
    resize:none;
    padding: 20px;
  }
  .video_play > .content > .left .textarea:focus{
    border-radius: 10px;
    outline: none;
  }
  .video_play > .content > .left >.expression{
    width: 800px;
    position: absolute;
    top:160px;
    left: 20px;
    font-weight: 400;
    color: #434343;
    font-size: 18px;
  }
  .video_play > .content > .left >.expression >span{
    position: relative;
    cursor: pointer;
    top:2px;
  }
  .video_play > .content > .left >.expression >img{
    vertical-align: middle;
    width: 26px;
    height: 26px;
  }
  .video_play > .content > .left >.expression >img:hover{
    cursor: pointer;
  }
  .video_play > .content > .left >.expression>.button{
    float: right;
    width: 113px;
    height: 32px;
    line-height: 32px;
    background-color: #169BD5;
    border-radius: 4px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
  .video_play > .content > .left > .person_comment{
    margin: 40px 0px 200px 0px;
    width: 840px;
  }
  .video_play > .content > .left > .person_comment > .single{
    padding:20px 0 40px 0;
    width: 860px;
    border-bottom: 1px dotted #AEAEAE;
  }
  .video_play > .content > .left > .person_comment .person{
    height: 44px;
  }
  .video_play > .content > .left > .person_comment .person > img{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .video_play > .content > .left > .person_comment .person > span{
    margin-left: 8px;
  }
  .video_play > .content > .left > .person_comment .person > .name{
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
    font-weight: 700;
    font-size: 14px;
  }
  .video_play > .content > .left > .person_comment .person > .date{
    font-size: 12px;
    font-weight: 400;
  }
  .video_play > .content > .left > .person_comment .text{
    width: 780px;
    margin-left: 44px;
    margin-top: 16px;
    font-family: 微软雅黑;
    font-weight: 400;
    font-size: 16px;
  }
  .video_play > .content > .left > .person_comment .iconimg{
    position: relative;
    height: 60px;
  }
  .video_play > .content > .left > .person_comment .iconimg .comtext{
    margin-right:8px;
  }
  .video_play > .content > .left > .person_comment .iconimg>span{
    position: absolute;
    top:30px;
    right:40px;
    font-size: 14px;
  }
  .video_play > .content > .left > .person_comment .iconimg>span:hover{
    cursor:pointer;
  }
  .video_play > .content > .left > .person_comment .iconimg i{
    font-size: 16px;
  }
  .video_play > .content > .left > .person_comment .inputtext{
    width: 780px;
    margin:0 auto;
  }
  .video_play > .content > .left > .person_comment input{
    width: 100%;
    height: 40px;
    border:1px solid rgb(53, 133, 254);
    border-radius: 10px;
    text-indent: 15px;
  }
  .video_play > .content > .left > .person_comment .inputtext > div{
    margin-top: 10px;
  }
  .video_play > .content > .left > .person_comment .inputtext div .button{
    float: right;
    width: 76px;
    height: 28px;
    line-height: 28px;
    background-color: #169BD5;
    border-radius: 6px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists{
    background-color:rgb(242, 242, 242);
    margin-top: 10px;
    overflow: hidden;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist{
    border-bottom: 1px solid #ccc;
    margin:0 20px;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist:last-child{
    border:none;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist .name{
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist .reply{
    color:#AEAEAE
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist div.personcomment{
    height: 40px;
    line-height: 40px;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist div.zan{
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
  }
  .zan .commTime{
    width:15%;
    display: inline-block;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist div.zan .comtext:first-of-type{
    margin-right:8px;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist div.zan span:first-child{
    font-size: 12px;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist .zan_contaniner{
    float: right;
    width: 100%;
  }
  .video_play > .content > .left > .person_comment .inputtext .replylists .replylist .zan_contaniner:hover{
    cursor:pointer;
  }

  .video_play > .content > .right{
    margin-left: 20px;
    width: 360px;
    height: 700px;
    float: left;
    margin-bottom: 100px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
  }
  .video_play > .content > .right::after{
    content: '';
    display:block;
    clear:both;
  }
  .video_play > .content > .right > .list ul{
    list-style: none;
  } 
  .video_play > .content > .right > .list ul li{
    margin:0 10px;
    border-bottom: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
  }
  .video_play > .content > .right > .list ul:first-child li:first-child{
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑;
    font-weight: 700;
    font-size: 20px;
    font-style: normal;
    margin-top: 10px;
  }
  .video_play > .content > .right > .list ul li span{
    float: right;
  }
  .video_play > .content > .right > .list ul li span i{
    margin-right: 20px;
  }
  .video_play > .content > .right > .list ul li span i:hover{
    cursor: pointer;
  }
  .video_play > .content > .right > .list ul:last-child li span{
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑;
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    margin-right: 10px;
  }

  .video_play .weibo{
    width: 25px;
    height: 25px;
    background:url("https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1220.jpg");
    background-size:100% 100%;
  }
  .video_play .weixin{
    width: 25px;
    height: 25px;
    background:url("https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1219.jpg");
    background-size:100% 100%;
  }
  .video_play .qzone{
    width: 25px;
    height: 25px;
    background: url("https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1221.jpg");
    background-size:100% 100%;
  }
  .video_play .fenxiang{
    font-size:25px;float:right;margin:2.5px 0 0 2px;
  }
</style>
