<!-- 
  @author: xupf
-->
<template>
  <div class="video_list">
    <!-- 导航栏选择 -->
    <div class="video_nav">
      <div class="navbar">
        <div class="firstitem">
          方向：
        </div>
        <div class="lastitem">
          <a href="#"  class="item active" @click="hanlderChoose({catalogue_name:'全部'},0)">全部</a>
          <a class="item" @click="hanlderChoose(item,0)" v-for="item in Videocatalogue" :key="item.id">{{item.catalogue_name}}</a>
        </div>
      </div>
      <div class="navbar">
        <div class="firstitem">
          技术：
        </div>
        <div class="lastitem">
          <a href="#" class="item active" @click="hanlderChoose({catalogue_name:'全部'},1)">全部</a>  
          <a class="item" @click="hanlderChoose(item,1)" v-for="item in catalogueSecond" :key="item.id">{{item.catalogue_name}}</a>
        </div>
      </div>
      <div class="navbar">
        <div class="firstitem">
          类型：
        </div>
        <div class="lastitem">
          <a href="#" class="item active" @click="hanlderChoose({name:'全部'},2)">全部</a>  
          <a class="item" v-for="item in type" @click="hanlderChoose(item,2)" :key="item.id">{{item.name}}</a>
        </div>
      </div>
      <div class="navbar">
        <div class="firstitem">
          权限：
        </div>
        <div class="lastitem">
          <a href="#" class="item active" @click="hanlderChoose({name:'全部'})">全部</a>  
          <a class="item" v-for="item in permission" @click="hanlderChoose(item,3)" :key="item.id">{{item.name}}</a>
        </div>
      </div>
      <div class="navbar">
        <div class="firstitem like">
          您可能喜欢：
        </div>
        <div class="lastitem likename">
          <span class="item" v-for="item in teachers" :key="item.id">{{item.name}}</span>
        </div>
      </div>
      <div class="navbar">
        <div class="firstitem like">
          已选条件：
        </div>
        <div class="lastitem">
          <div class="condition" v-if="select.catalogue.catalogue_name==''" v-show="select.direction.catalogue_name!=='全部'&&select.direction.catalogue_name!==''">
            {{select.direction.catalogue_name}}
            <img class="closeicon" src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/u681.png" alt="u681.png">
          </div>
          <div class="condition" v-else v-show="select.catalogue.catalogue_name!=='全部'&&select.catalogue.catalogue_name!==''">
           {{select.direction.catalogue_name}}-{{select.catalogue.catalogue_name}}
           <img class="closeicon" src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/u681.png" alt="u681.png">
         </div>
         <div class="condition" v-show="select.type.name!=='全部'&&select.type.name!==''">
           {{select.type.name}}
           <img class="closeicon" src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/u681.png" alt="u681.png">
         </div>
         <div class="condition" v-show="select.power.name!=='全部'&&select.power.name!==''">
           {{select.power.name}}
           <img class="closeicon" src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/u681.png" alt="u681.png">
         </div>
        </div>
      </div>
    </div>
 
    <!-- 排序 -->
    <div class="videolist_check">
      <span class="order">排序:</span>
      <label for="time">
        <input id="time" type="checkbox" name='time' v-model="time">
        更新时间
      </label>
      <label for="hot">
        <input id="hot" type="checkbox" name="time" v-model="hot">
        热度
      </label>
    </div>
    <!-- 视频列表 -->
    <div class="list">
      <div class="list_item" v-for="item in video" :key="item.id" @click.prevent="openDetail(item)">
        <div>
          <img class="list_img" :src="item.vr_img" alt="">
        </div>
        <div class="vip" v-show="list.vip">VIP</div>
        <div class="list_title">
          <span class="title" :title="item.vr_name">
            {{item.vr_name}}
          </span>
          <i class="fa fa-vimeo"></i>
          <span class="speaker">{{item.vr_user}}</span>
        </div>
        <div class="list_icon">
          <i class="fa fa-thumbs-up"></i><span>{{item.vr_favor}}</span>
          <i class="fa fa-commenting"></i><span>{{item.vr_comment}}</span>
          <i class="fa fa-bookmark"></i><span>{{item.vr_collection}}</span>
          <span class="through">{{item.vr_play_times}}人浏览</span>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="page">
      <el-pagination background @current-change="handleCurrentChange" :page-size="pagesize" layout="total, prev, pager, next" :total="total"></el-pagination>
    </div>
  </div>
</template>
<script>
  import axios from '@/http/axios'
  import {mapActions,mapGetters,mapMutations} from 'vuex';
  export default{
    data(){
      return {
        page:1,
        pagesize:10,
        total:4,
        // 模拟数据
        type:[
        {
          id:1,
          name:'杰普教程'
        },{
          id:2,
          name:'网络资源'
        }],
        permission:[{
          id:1,
          name:'免费'
        },{
          id:2,
          name:'VIP'
        }],
        teachers:[
          {
            id:1,
            name:'任青松'
          },
          {
            id:2,
            name:'李春雨'
          },
          {
            id:3,
            name:'丁长明'
          }
        ],
        // 筛选条件
        select:{
          direction:{
            catalogue_name:''
          },
          catalogue:{
            catalogue_name:''
          },
          type:{
            id:'',
            name:''
          },
          power:{
            id:'',
            name:''
          },
        },
        time:false,
        hot:false,
        status:1,
        list:{
          id:'',
          vip:true,
          cover:'https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/u714.png',
          title:'JavaEE入门-环境搭建',
          speaker:'崔略',
          zan:32,
          comment:3,
          collection:10,
          through:80
        },
      }
    },
    created(){
      // 查找一级编目
      this.findCatalogue_first()
      // 查找二级编目
      this.findCatalogue_second()
      // 查找视频
      this.findVideo()
    },
    mounted(){
      // 一级编目查找
      setTimeout(()=>{
        if(this.$route.query.cataOne != null){
          this.select.direction = JSON.parse(this.$route.query.cataOne)
          this.hanlderChoose(this.select)
        }
      },300)
      // 二级编目查找
      setTimeout(()=>{
        if(this.$route.query.cataTwo != null){
          this.select.catalogue =  JSON.parse(this.$route.query.cataTwo)
          this.hanlderChoose(this.select)
        }
      },500)

      // 改变编目样式
      $(function(){
        $(".video_list a.item").click(function(e){
          $(this).addClass('active').siblings().removeClass('active');
        })
      })
    },
    computed:{
      ...mapGetters(['Videocatalogue','video','catalogueSecond','videoId'])
    },
    watch:{
      // 更改页数后查找视频
      page:function(now,old) {
        this.findVideo();
      },
      // 热度搜索
      hot:function(now,old){
        this.time = !this.hot;
        this.findVideo();
      },
      // 时间搜索
      time:function(now,old){
        this.hot = !this.time;
        this.findVideo();
      },
      // select: {
      //   handler(newName, oldName) {
      //       this.findAllVideo();
      //   },
      //   deep: true
      // },
      // 一级编目发生变化时，查找二级编目及视频
      'select.direction':function(now,old) {
        this.findCatalogue_second()
        this.findVideo()
        this.resetCatalogue()
      }, 
      // 二级编目发生变化时，先查找视频，再清空二级编目id
      'select.catalogue':function(now,old) {
        this.findVideo()
        this.resetCatalogue()
      }, 
      'select.power':function(now,old){
        this.findVideo()
      }
    },
    methods:{
      // 点击分页的页数后，将该页数值赋值给this.page
      handleCurrentChange(val) {
        // val为当前页的值
        this.page = val
      },
      ...mapActions(['findAllCatalogue','findAllVideo']),
      // 每次切换一级编目的时候将二级编目的id清空
      resetCatalogue(){
        this.select.catalogue.id = null
      },
      // 查找一级编目
      findCatalogue_first(){
          let obj = {
            cata_level_num:'1'
          }
          this.findAllCatalogue({params:obj}).then(res=>{}).catch((error)=>{})
      },
      // 查找二级编目
      findCatalogue_second(){
          let obj = {
            cata_level_num:'2'
          }
          if(this.select.direction.id!== null){
            // 如果一级编目id不为空，将该id赋值给父级编目
            obj.cat_catalogue = this.select.direction.id
          }
          this.findAllCatalogue({params:obj}).then(res=>{}).catch((error)=>{})
      },
      // 查找视频列表
      findVideo(){
        let form = {
          page:this.page,
          page_size:this.pagesize,
          // vr_status:this.status
        }
        if(this.hot == true){
          form.hot = 1
        }
        if(this.time == true){
          form.Created_time = 1
        }
        // if(this.select.power.name == '免费'){
        //   form.vr_permission = 0;
        // }else{
        //   form.vr_permission = 1;
        // }
        if(this.select.catalogue.id == null){
          form.catalogue_path = this.select.direction.cata_path
        }
        if(this.select.catalogue.id !== null){
          // 如果二级编目的id不为空，即点击了二级编目，此时将二级编目的cata_path传给参数form下面的编目路径
          form.catalogue_path = this.select.catalogue.cata_path
        }
        this.findAllVideo({params:form}).then(res=>{
          this.total = res.data.count;
        })
      },
      // 跳转至视频播放页
      openDetail(item){
        // 路由携带视频id
        this.$router.push({
          path:'/video/content',
          query:{videoId:item.id}
        })
      },
      // 根据编目查找视频
      hanlderChoose(item,n){
        switch(n){
          case 0:
            this.select.direction = item;
            this.select.catalogue.catalogue_name = '';
            break;
          case 1:
            this.select.catalogue = item;
            break;
          case 2:
            this.select.type = item;
            break;
          case 3:
            this.select.power = item;
            break;
        }
      }
    },
    
  }
</script>
<style scope>
  .video_list{
    width:1240px;
    margin:0 auto;
  }
  /*导航样式*/
  .video_list .video_nav{
    padding:0px 20px 0px;
    width:1196px;
    margin:40px 0;
    border:1px solid rgb(215,215,215);
  }
  .video_list .video_nav .navbar{
    border-bottom: 1px dashed rgb(215,215,215);
  }
  .video_list .video_nav .navbar:last-child{
    border-bottom: none;
    height: 40px;
  }
  .video_list .video_nav .navbar .firstitem{
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    color: #949494;
    width: 46px;
    height: 24px;
    float: left;
    margin:8px 0px;
  }
  .video_list .video_nav .navbar .lastitem{
    margin:0px 0px 0px 46px;
    width: 1150px;
  }
  .video_list .video_nav .navbar .likename{
    width: 1096px;
  }
  .video_list .video_nav .navbar:nth-child(5) .lastitem,.video_list .video_nav .navbar:nth-child(6) .lastitem{
    margin-left: 100px;
  }
  .video_list .video_nav .navbar .lastitem .item{
    padding:0 15px;
    font-weight: 700;
    color:#666666;
    display: inline-block;
    margin:8px 0px;
  }
  .video_list .video_nav .navbar .lastitem .active{
    background-color: rgb(80, 167, 254);
    font-weight: 700;
    color: #ffffff;
  }
  .video_list .video_nav .navbar .lastitem a.item:hover{
    cursor:pointer;
  }
  .video_list .video_nav .navbar .like{
    width: 100px;
    float: left;
  }
  .video_list .video_nav .navbar .condition{
    padding:0px 4px 0px 6px;
    background-color: rgb(242, 242, 242);
    margin:7px 5px 0 0;
    color:rgb(80,167,254);
    font-family: 'Negreta';
    float: left;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    font-weight: 700;
  }
  .video_list .video_nav .navbar img{
    margin-left: 3px;
    width: 6px;
    height: 6px;
  }
  .video_list .video_nav .navbar .condition .closeicon{
    transform:translateY(-9px);
  }
  
  /*排序*/
  .video_list .videolist_check{
    border-bottom:1px solid rgb(215,215,215);
    width:100%;
    height:40px;
    line-height: 40px;
  }
  .video_list .videolist_check .order{
    font-weight: 700;
    color:#949494;
  }
  .video_list .videolist_check label{
    margin:0 0 0 15px;
  }
  /*视频列表*/
  .video_list .list{
    margin-top:20px;
    display: flex;
    display: -webkit-flex;
    display: -ms-flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .video_list .list .list_item{
    width:220px;
    height:240px;
    position:relative;
  }
  .video_list .list .list_item .list_img{
    border-radius: 12px;
    width:220px;
    height: 150px;
  }
  .video_list .list .list_item:hover{
    cursor:pointer;
  }
  .video_list .list .list_item .vip{
    width:32px;
    height: 16px;
    line-height: 16px;
    background-color: rgb(80, 167, 254);
    position: absolute;
    top:10px;
    right:10px;
    border-radius: 4px;
    text-align: center;
    color:#ffffff;
  }
  .video_list .list .list_item .list_title{
    font-size: 12px;
  }
  .video_list .list .list_item .list_title .title{
    font-family: '微软雅黑';
    font-weight: 600;
    width:150px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .video_list .list .list_item .list_title .speaker{
    float:right;
  }
  .video_list .list .list_item .list_title i.fa-vimeo{
    float:right;
    margin:4px 4px 0 2px;
    font-style: normal;
    color: #0299FF;
  }
  .video_list .list .list_item .list_icon{
    font-size: 10px;
    padding-left: 6px;
  }
  .list_icon i {
    margin-right: 3px;
  }
  .video_list .list .list_item .list_icon span{
    margin-right: 20px;
  }
  .video_list .list .list_item .list_icon .through{
    color:#666;
    float: right;
    font-size: 10px;
  }
  /*分页*/
  .video_list .page{
    text-align: center;
    margin:0 0 80px 0px;
  }
</style>