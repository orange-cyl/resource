<!-- 
  @author:zhengrong
  @data:2018年12月17日20:24:13
-->
<template>
  <div class="doc_list">
    <!-- 导航栏选择 -->
    <div class="doc_nav">
      <div class="navbar">
        <div class="firstitem">
          方向：
        </div>
        <div class="lastitem">
          <a href="#"  class="item active"  @click="hanlderChoose({catalogue_name:'全部'},0)">全部</a>
          <a class="item" v-for="item in catalogue" :key="item.id" @click="hanlderChoose(item,0)" >{{item.catalogue_name}}</a>
        </div>
      </div>
      <div class="navbar">
        <div class="firstitem">
          技术：
        </div>
        <div class="lastitem">
          <a href="#" class="item active" @click="hanlderChoose({catalogue_name:'全部'},1)">全部</a>  
          <a class="item" v-for="item in catalogueTow"  @click="hanlderChoose(item,1)" :key="item.id">{{item.catalogue_name}}</a>
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
          <a href="#" class="item active" @click="hanlderChoose({name:'全部'},3)">全部</a>  
          <a class="item" v-for="item in permissions" @click="hanlderChoose(item,3)" :key="item.id">{{item.name}}</a>
        </div>
      </div>
       <!-- <div class="navbar">
        <div class="firstitem">
          格式：
        </div>
        <div class="lastitem">
          <a href="#" class="item active" @click="hanlderChoose({name:'全部'},4)">全部</a>  
          <a class="item" v-for="item in format" @click="hanlderChoose(item,4)" :key="item.id">{{item.name}}</a>
        </div>
      </div> -->
      <div class="navbar">
        <div class="firstitem like">
          您可能喜欢：
        </div>
        <div class="lastitem last-item">
          <span class="item" v-for="item in teachers" :key="item.id">{{item.name}}</span>
        </div>
      </div>
      <div class="navbar">
        <div class="firstitem like">
          已选条件：
        </div>
        <div class="lastitem">
          <div class="condition"  v-if="select.catalogue.catalogue_name ==''"  v-show="select.direction.catalogue_name!=='全部'&&select.direction.catalogue_name!==''">
            {{select.direction.catalogue_name}}
            <img class="closeicon" src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/u681.png" alt="u681.png">
          </div>
          <div class="condition" v-else v-show="select.catalogue.catalogue_name!=='全部'&&select.catalogue.catalogue_name!=''">
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
    <div class="doclist_check">
      <span class="order">排序:</span>
      <label for="time">
        <input id="time" type="checkbox" name='time' v-model="time">
        更新时间
      </label>
      <label for="time">
        <input id="time" type="checkbox" name="hot" v-model="hot">
        热度
      </label>
    </div>
    <!-- 文章 -->
    <div class="list">
      <div class="list-item" v-for="item in doc" :key="item.id">
        <div class="list-content">
          <div class="list-item-title">
            <span class="icon"><i class="fa fa-file-pdf-o"></i></span>
            <a href="javascript:;" @click="toContent(item)">
            {{item.dr_name}}
              <!-- <router-link target="" to="/doc/content">{{item.dr_name}}</router-link> -->
            </a>
            <span class="list-item-title-good">
              <span style="font-size:10px;"><i id="zan" class="fa fa-thumbs-up" style="font-size:12px;" @click="toFavor(item)"></i>{{item.dr_favor}}</span>
            </span>
          </div>
          <div class="list-item-art">
            <p>{{item.dr_desc}}</p>
          </div>
          <div class="list-item-info">
            <span class="times">{{item.dr_created_time | dateParse}}</span>|
            <span>共{{item.dr_page}}页</span>|
            <span>{{item.dr_collection}}人收藏</span>|
            <span>作者：{{item.dr_user}}</span>
          </div>
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
         /* 当前页 */
        page:1,
        pagesize:6,
        total:10,
        // 模拟数据
        
        type:[{
            id:0,
            name:'杰普教程'
          },{
            id:1,
            name:'网络资源'
          }],
        permissions:[{
            id:0,
            name:'vip'
          },{
            id:1,
            name:'免费'
          }],
        teachers:[{
            id:1,
            name:'任青松'
          },{
            id:2,
            name:'李春雨'
          },{
            id:3,
            name:'丁长明'
          }],
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
            name:''},
          format:{
            id:'',
            name:''
          },
         
        },
         time:false,
          hot:false
      }
    },
    created(){
      this.findAllDoc()
      this.findCatalogueOne()
      this.findCatalogueTwo()
    },
    mounted(){
      
      $(function(){
        $(".doc_list a.item").click(function(e){
          $(this).addClass('active').siblings().removeClass('active');
        })
      })
    },
    computed: {
     ...mapGetters(['doc','catalogue','docId','catalogueTow'])
    },
    watch:{
      page:function(now,old) {
        this.findAllDoc();
      },
      hot:function(now,old) {
        this.time = !this.hot
        this.findAllDoc();
      },
      time:function(now,old) {
         this.hot = !this.time
        this.findAllDoc();
      },
      select: {
      handler(newName, oldName) {
         this.findAllDoc();
      },
      deep: true
    },
    'select.direction':function(now,old) {
        this.resetTwo()
        this.findCatalogueTwo()
         this.findAllDoc();

      }, 
    },
    methods:{
       ...mapActions(['findDocList','findCatalogue','setDocId','toFavorr']),
        toFavor(item){
            let obj = {
              object_id:item.id,
              user: 24,
              object_type: "docs"
            }
            this.toFavorr(obj).then(r=>{
              this.findAllDoc()
              this.findCatalogueOne()
              this.findCatalogueTwo()
              this.$notify({
              title: '点赞成功',
              message: '您已点赞成功',
              type: 'success'
            })
            }).catch((error)=>{
             this.$notify({
              title: '已赞',
              message: '不好意思，您已点赞此文档',
              type: 'success'
            })
            })
        },
       // 重置二级编目的编目catalogue_path
       resetTwo(){
          this.select.catalogue.id = null
       },
       // 跳转到文章详情，拿到id
       toContent(item){
        // console.log(item,'----------------------')
        // dr_favor
        let obj = {
          docid:item.id,
          name:item.dr_name
        }
       this.$router.push({path:'/doc/content',query:{id:item.id,name:item.dr_name}})
        
          this.setDocId(obj).then(r=>{
             // this.$router.push({path:'/doc/content'})
          })
        
       },
       // 加载所有的一级编目
       findCatalogueOne(){
        let obj = {
          cata_level_num:'1'
        }
        this.findCatalogue({params:obj}).then(r=>{
        }).catch((error)=>{
         
        })
       },
        // 加载所有的二级编目
       findCatalogueTwo(){
        let obj = {
          cata_level_num:'2'

        }
        if(this.select.direction.id!== null){
           obj.cat_catalogue = this.select.direction.id
        }
        this.findCatalogue({params:obj}).then(r=>{
        }).catch((error)=>{
         
        })
       },
       /* 分页页数更改之后 */
      handleCurrentChange(val) {
        // alert(val)
        this.page = val
      },
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
      },
      // 加载文档列表
      findAllDoc(){
        let form = {
          page:this.page,
          page_size:this.pagesize,
          dr_status:1
        }
        // if(this.hot == true){
        //     this.time = false
        // }else if(this.time == true){
        //     this.hot = false
        // }
        if(this.hot == true){
          form.hot = '1'
          // this.time = false
        }
         if(this.time == true){
          form.Created_time = '1'
          // this.hot = false
        }
        if(this.select.type.id !==null){
          form.dr_owner =this.select.type.id
        }
         if(this.select.power.id !==null){
           form.dr_permission=this.select.power.id
        }
        if(this.select.catalogue.id == null){
          // alert(1)
           form.catalogue_path = this.select.direction.cata_path
        }else{
          form.catalogue_path = this.select.catalogue.cata_path
        }
        this.findDocList({params:form}).then(r=>{
          // console.log(r.data.count)
          this.total = r.data.count
         
        }).catch((error)=>{
         
        })
      },
    }
  }
</script>
<style scope>
  #zan:hover{
    color:#ccc; 
  }
  .doc_list{
    width:1240px;
    margin:0 auto;
  }
  /*导航样式*/
  .doc_list .doc_nav{
    padding:0px 20px 0px;
    width:1198px;
    margin:40px 0;
    border:1px solid rgb(215,215,215);
  }
  .doc_list .doc_nav .navbar{
    border-bottom: 1px dashed rgb(215,215,215);
  }
  .doc_list .doc_nav .navbar:last-child{
    border-bottom: none;
    height: 40px;
  }
  .doc_list .doc_nav .navbar .firstitem{
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    color: #949494;
    width: 46px;
    height: 24px;
    float: left;
    margin:8px 0px;
  }
  .doc_list .doc_nav .navbar .lastitem{
    margin:0px 0px 0px 46px;
    width: 1150px;
  }
  .doc_list .doc_nav .navbar .last-item{
    margin:0px 0px 0px 46px;
    width: 1096px;
  }
  .doc_list .doc_nav .navbar:nth-child(6) .lastitem,.doc_list .doc_nav .navbar:nth-child(6) .lastitem{
    margin-left: 100px;
  }
  .doc_list .doc_nav .navbar .lastitem .item{
    padding:0 15px;
    font-weight: 700;
    color:#666666;
    display: inline-block;
    margin:8px 0px;
  }
  .doc_list .doc_nav .navbar .lastitem .active{
    background-color: rgb(80, 167, 254);
    font-weight: 700;
    color: #ffffff;
  }
  .doc_list .doc_nav .navbar .lastitem a.item:hover{
    cursor:pointer;
  }
  .doc_list .doc_nav .navbar .like{
    width: 100px;
    float: left;
  }
  .doc_list .doc_nav .navbar .condition{
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
  .doc_list .doc_nav .navbar img{
    margin-left: 3px;
    width: 6px;
    height: 6px;
  }
  .doc_list .doc_nav .navbar .condition .closeicon{
    transform:translateY(-9px);
  }
  /*排序*/
  .doc_list .doclist_check{
    border-bottom:1px solid rgb(215,215,215);
    width:100%;
    height:40px;
    line-height: 40px;
  }
  .doc_list .doclist_check .order{
    font-weight: 700;
    color:#949494;
  }
  .doc_list .doclist_check label{
    margin:0 0 0 15px;
  }

  /*文章列表*/
  .doc_list .list-item{
    width: 615px;
    height: 138px;
    border-right: 1.5px dashed #ccc;
    float: left;
    /* background: yellow; */
    margin-top: 15px;
    box-sizing: border-box;
    padding: 15px;
  }
  .doc_list .list-item:nth-child(even){
    margin-left: 10px;
    border-right: none;
  }
  .doc_list .list-item .list-content{
    width: 585px;
  }

  .doc_list .list-item .list-item-title{
    height: 30px;
    font-family: '微软雅黑';
    font-weight: 400;
    vertical-align: middle;
  }
  .doc_list .list-item .list-item-title>a{
    line-height: 22px; 
    font-size: 16px;
  }
  .doc_list .list-item .list-item-title>.icon{
    padding: 0px 5px;
		display: inline-block;
		background-color: #F72612;
		border-radius: 5px;
		text-align: center;
		color: #fff;
		margin-right: 5px
  }
  .doc_list .list-item .list-item-title .list-item-title-good{
    width: 45px;
    float: right;
  }
  .doc_list .list-item .list-item-title .list-item-title-good>img{
    width: 13px;
    height: 13px;
    vertical-align: middle;
  }

  .doc_list .list-item .list-item-art{
    padding: 10px 0;
  }
  .doc_list .list-item .list-item-art>p{
    font-size: 14px;
    text-align: left;
    font-family: '微软雅黑';
    font-weight: 400;
    color: #515151;
  }

  .doc_list .list-item .list-item-info>span{
    display: inline-block;
    width: 70px;
    text-align: center;
    font-size: 12px;
    color: #949494;
  }
  .doc_list .list-item .list-item-info>span:last-child{
      width: 80px;
  }
  .doc_list .list-item .list-item-info .times{
    width: 120px;
  }
  .doc_list .list-item .list-item-art>p{
    height: 48px;
  }
  /* 清除浮动 */
  .doc_list .list::after{
    content: '';
    display: block;
    clear: both;
  }
  /*分页*/
  .doc_list .page{
    text-align: center;
    margin:80px 0;
  }
  /* 文章列表 */
</style>