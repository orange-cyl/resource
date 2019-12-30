<!-- 
  @author:zhengrong
  @data:2018年12月17日20:24:13
-->
<template>
  <div class="doc_play">
    <div class="tab_play">
      <router-link target="" to="/">首页</router-link>&nbsp;>&nbsp;<router-link target="" to="/doc">文档列表</router-link>&nbsp;>&nbsp;<span>{{name}}</span>
    </div>
    <div class="doc_player">

      <div class="left" v-if='Number(pdfUrl) !=0'>
        <iframe :src="pdfUrl" frameborder="0" style="width:860px;height:1320px;border-bottom:1px solid black"></iframe>
      </div>

      <div class="right" v-if='Number(docDetails) != 0'>
        <div class="right-one">
          <div class="right_title">
            <span class="title">{{docDetails[0].dr_name}}</span>
            <div class="store">
              <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1214.png" alt="">
              <span @click="toCollection()">{{collections}}</span>
            </div>
          </div>
          <div class="sulpture">
            <img :src="docList.img" alt="">
            <span class="speaker">{{docDetails[0].dr_user}}</span>
            <i v-if="docDetails[0].dr_permission == 0" class="fa fa-vimeo" style="color:#0099FF;font-size:13px;"></i>
          </div>
          <div class="commont">{{docDetails[0].dr_desc}}</div>
          <div class="docs" v-if="docDetails[0].da">
            <ul>
              <li class="doc" v-for="item in docDetails[0].album_same_docs" :key="item.id" @click="toContent(item)">
                <!-- <span class="section">{{item.name}}</span> -->
                <span class="title">{{item.name}}</span>
                <!-- <i class="fa fa-eye" style="font-size:14px;float:right;"></i> -->
              </li>
            </ul>
            <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1222.png" alt="" style="float:right;">
          </div>
          <div class="right-bottom">
            <i class="fa fa-thumbs-up" style="font-size:30px;color:#0099FF;" @click="toFavor()"></i>
            <div class="lickNum">
              <span v-if="favor" style="margin-left:-3px;color:#0099FF;">+1</span>
              <span>{{docDetails[0].dr_favor}}</span>
            </div>
           <!--  <i class="qzone" style="font-size:25px;float:right;margin:2.5px 0 0 2px;"></i>
            <i class="weixin" style="font-size:25px;float:right;margin:2.5px 0 0 2px;"></i>
            <i class="weibo" style="font-size:25px;float:right;margin:2.5px 0 0 2px;"></i> -->
             <i class="qzone"></i>
            <i class="weixin"></i>
            <i class="weibo"></i>
          </div>
        </div>
        <div class="right-two">
          <img src="https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1344.jpg" alt="">
          <div class="right-two-art">
            <span>资源推荐</span>
            <div class="right-two-list" v-for="item in filterTop" :key="item.id" @click="toContent2(item)">
              <span>{{item.dr_name}}</span>
              <span>{{item.dr_read_times}}人浏览</span>
            </div>
          </div>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>
<script type="text/javascript"> 
import {mapActions,mapGetters,mapMutations} from 'vuex';
import axios from '@/http/axios';

  export default{
    data(){
      return {
        favor:false,
        collections:'收藏',
        // docDetails[0]:{},
        filterTop:[],
        fileName:'',
        pdfUrl:'',
        name:'',
        // title:window.sessionStorage.getItem('title'),
        docList:{
          id:'',
          title:'JavaEE入门-环境搭建',
          speaker:'崔略',
          img:'https://raw.githubusercontent.com/pluslicy/assets/master/resource/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E9%A1%B5/u1217.png',
          intro:'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强....',
        },
        
      }
    },
    computed: {
     ...mapGetters(['docDetails','docId'])
    },
    created() {
      this.loadDocDetails()
          // this.filter()

      // this.pdfUrl = 'http://47.106.244.1/zppt4826.pdf';
          // this.filter()
      this.collection()
      this.name=this.$route.query.name

    },
    mounted(){
     //   let t = this
     // setTimeout(function(){
     //   t.pdfUrl = t.fileName;
     //  alert(t.pdfUrl)
     // },1000)
    },

    methods:{
      ...mapActions(['setDocId','findDocDetails','setDocId','toFavorr','toCollections']),
       collection(){
         let obj = {
              // object_id:this.docId,
              object_id:this.$route.query.id,
              user: 24,
              object_type: "docs"
            }
        axios.get('/up_site_res/isFavor/',{params:obj}).then((res)=>{

          if(res.data.is_collection == 1){
            this.collections ="已收藏"
          }
        }).catch((error)=>{
        })
      },
      toCollection(){
         let obj = {
              // object_id:this.docId,
              object_id:this.$route.query.id,
              user: 24,
              object_type: "docs"
            }
          this.toCollections(obj).then(r=>{
            this.collection()
             this.$notify({
              title: '收藏成功',
              message: '收藏成功',
              type: 'success'
            })
          }).catch((error)=>{
             this.$notify({
              title: '已收藏',
              message: '不好意思，您已收藏此文档',
              type: 'success'
            })
            })
      },
        toFavor(){
            let obj = {
              object_id:this.$route.query.id,
              // object_id:this.docId,
              user: 24,
              object_type: "docs"
            }
            this.toFavorr(obj).then(r=>{
              this.loadDocDetails()
                this.favor = true
               setTimeout(()=>{
                  this.favor = false
                },3000)
            }).catch((error)=>{
             this.$notify({
              title: '已赞',
              message: '不好意思，您已点赞此文档',
              type: 'success'
            })
            })
        },
        filter(){
          // console.log(this.docDetails[0].cat_same_docs)
          // this.filterTop=this.docDetails[0].cat_same_docs
          // console.log(this.filterTop)
          // alert(1)
          this.filterTop=[]
          var count = 0;
          this.docDetails[0].cat_same_docs.forEach((item,index)=>{
              if(count<=9){
                 this.filterTop.push(item)
              }else{

              }
              count++
          })

          // for(var i=0;i<=9;i++){
          //   this.filterTop.push(this.docDetails[0].cat_same_docs[i])
          // }
        },
       toContent(item){
        // dr_favor
        let obj = {
          docid:item.id,
        }
        // alert(item.id)
          // this.setDocId(obj)
           this.$router.push({path:'/doc/content',query:{id:item.id,name:item.name}})
        
          this.loadDocDetails()
      // this.pdfUrl = 'http://47.106.244.1/zppt4826.pdf';
       },
        toContent2(item){
        // dr_favor
        let obj = {
          docid:item.id,
        }
        // alert(item.id)
          // this.setDocId(obj)
           this.$router.push({path:'/doc/content',query:{id:item.id,name:item.dr_name}})
        
          this.loadDocDetails()
      // this.pdfUrl = 'http://47.106.244.1/zppt4826.pdf';
       },
      loadDocDetails(){
        let oId = this.$route.query.id
        // let oId = this.docId
        let obj = {
          id:oId
        }
        this.findDocDetails({params:obj}).then(r=>{
          // alert(Number(this.pdfUrl))
          this.fileName = this.docDetails[0].dr_url
          this.pdfUrl = this.fileName;
          setTimeout(()=>{
           this.filter()

         },1000)
        }).catch((error)=>{
        })
      }
    }
  }
</script>
<style>
  /*页面*/

  /*视频左侧*/
  .doc_play .tab_play{
    margin-top:24px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  .doc_play > .doc_player > .left{
    width: 860px;
    height: 1000px;
    float: left;
  }
  .doc_play > .doc_player > .right > .right-one{
    width: 320px;
    height: 430px;
    margin-left: 880px;
    padding:20px;
    position: relative;
    border:1px solid rgb(242, 242, 242);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
  }
  .doc_play > .doc_player > .right::after{
    content: '';
    display:block;
    clear:both;
  }
  .doc_play > .commont{
    margin-top: 20px;
  }
  /*视频右侧*/
  .doc_play > .doc_player > .right > .right-one > .right_title > .title{
    font-size: 16px;
    font-weight:700;
    font-style: normal;
    font-family:'Arial Normal','微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  }
  .doc_play > .doc_player > .right > .right-one > .right_title>.store{
    width: 64px;
    border:1px solid #0F69FF;;
    color:#0F69FF;
    float:right;
    text-align: center;
    border-radius: 12px;
    height: 22px;
    line-height: 22px;
    cursor: pointer;
  }
  .doc_play > .doc_player > .right > .right-one > .sulpture{
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    border-bottom:1px solid #D7D7D7;
    padding-bottom: 13px;
  }
  .doc_play > .doc_player > .right > .right-one > .sulpture img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .doc_play > .doc_player > .right > .right-one > .sulpture > span.speaker{
    margin:0 0 0 5px;
  }
  .doc_play > .doc_player > .right > .right-one > .commont{
    font-family: '微软雅黑 Regular', '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    border-bottom:1px solid #D7D7D7;
    padding:6px 0;
    word-wrap:break-word;
  }
  .doc_play > .doc_player > .right > .right-one > .docs{
    margin-top: 20px;
    font-size: 12px;
    width: 100%;
    height: 206px;
    overflow: hidden;
    margin-bottom: 60px;

  }
  .doc_play > .doc_player > .right > .right-one > .docs >ul{
    list-style: none;
    float: left;
    width: 315px;
    max-height: 206px;
    padding-right: 10px;
    overflow: auto;
    margin-left: 8px;
  }
  .doc_play > .doc_player > .right > .right-one > .docs >ul>li{
    width: 100%;
    height:30px;
    cursor: pointer;
  }
   .doc_play > .doc_player > .right > .right-one > .docs >ul>li:hover{
    color: #0099FF;
   }
  .doc_play > .doc_player > .right > .right-one > .docs .section{
    font-weight: 700;
  }
  .doc_play > .doc_player > .right > .right-one > .right-bottom{
    position: absolute;
    bottom: 1px;
    height: 30px;
    padding: 18px 18px 18px 0;
  }
  .right-bottom i{
      margin: 10px;
  }
  .right-bottom .qzone{
    margin-left: 130px;
  }
  .doc_play > .doc_player > .right > .right-one > .right-bottom > *{
    float: left;
  }
  .doc_play > .doc_player > .right > .right-one > .right-bottom > *:hover{
    cursor: pointer;
  }
  .doc_play > .doc_player > .right > .right-one > .right-bottom > .lickNum >span{
    display: block;
    line-height: 15px;
  }
  .doc_play > .doc_player > .right > .right-one > .right-bottom > .lickNum >span:last-child{
      position: absolute;
      bottom: 15px;
      /*background-color: red;*/
  }
  
  /* right-two */
  .doc_play > .doc_player > .right > .right-two{
    width: 360px;
    height: 760px;
    margin-left: 880px;
    margin-top: 90px;
    margin-bottom: 90px;
    /* padding: 20px; */
    border: 1px solid rgb(242, 242, 242);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
  }
  .doc_play > .doc_player > .right > .right-two >img{
    width: 100%;
  }
  .doc_play > .doc_player > .right > .right-two > .right-two-art{
    padding: 10px 20px 20px;
  }
  .doc_play > .doc_player > .right > .right-two > .right-two-art >span:first-child{
    display: block;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .doc_play > .doc_player > .right > .right-two > .right-two-art > .right-two-list{
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  .doc_play > .doc_player > .right > .right-two > .right-two-art > .right-two-list>span:nth-child(2){
    float: right;
    font-size: 12px;
    font-weight: 700;
  }
  /* iconfont */
  .weibo{
    width: 25px;
    height: 25px;
    background: url("data:image/png;base64,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");
    background-size:100% 100%;
  }
  .weixin{
    width: 25px;
    height: 25px;
    background: url("data:image/png;base64,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");
    background-size:100% 100%;
  }
  .qzone{
    /* display: block; */
    width: 25px;
    height: 25px;
    background:url("data:image/png;base64,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");
    background-size:100% 100%;
  }
</style>
