<template>
  <div class="personalIndex" id="personal" style="margin-bottom:90px">
  	<!--左侧组件部分-->
  	<PersonalLeft leftIndex="space"/>
	<!--首页右侧部分-->
	<div class="personalRightIndex">
		<div class="right_top">
			<div class="personalUser" >
				<div class="imgDiv">
					<img :src=userInfo.imgUrl  alt="">
				</div>
				<div class="textDiv">
					<p>{{userInfo.userName}}</p>
					<p>{{userInfo.abstract}}</p>
				</div>
			</div>
			<div class="videoTab"  >
				<ul>
					<li  class="active" @click="rightTabChange($event)">视频</li>
					<li @click="rightTabChange($event)">文档</li>
				</ul>
				
				<div @click="upVideo">
					<i class="fa fa-plus-square"></i>
					<span>上传{{upTitle}}</span>
				</div>
			</div>
		</div>
		<!--右侧内容区-->
		<div class="right_content">
			<!-- <router-view></router-view> -->
			<MyVideo v-if="upTitle=='视频'"/>
			<MyDoc v-else/>
		</div>
	</div>
  </div>
</template>


<script>
	import PersonalLeft from './personalLeft.vue' //个人空间左侧
	import MyVideo from './myVideo.vue' //我的视频
	import MyDoc from './myDoc.vue' //我的文档

	export default {
		 components:{
		    PersonalLeft,
		    MyVideo,
		    MyDoc
		  },
		 data(){
			return {
				userInfo:{//登录用户数据
					imgUrl:"https://github.com/pluslicy/assets/blob/master/resource/%E4%B8%AA%E4%BA%BA%E7%A9%BA%E9%97%B4/u1861.png?raw=true",
					userName:"朱莉",
					abstract:"千山万水 无数黑夜 等一轮明月"
				},
				upTitle:"视频"

			}
		},
		
		//映射数据
		computed:{

		},
		created(){
			//设置视口高度

			//默认加载我的视频
			this.$router.push({path: '/myVideo'})
			
		},
		methods:{
			//点击视频上传按钮
			upVideo(){
				//跳转到视频上传页面
				if(this.upTitle=="视频"){
					this.$router.push({path: '/personal/uploadVideo',query:{msg:'upVideo'}})
				}else{
					this.$router.push({path: '/personal/upVideo',query:{msg:'upDoc'}})
				}

			},
			//个人空间-首页-右侧视频/文档切换
			rightTabChange(e){
				//给当前元素的兄弟元素取消class
				for(var i=0;i<e.target.parentNode.children.length;i++){
					$(e.target.parentNode.children[i]).removeClass('active')
				}
				if(e.target.innerHTML=="视频"){
					//this.$router.push({path: '/myVideo'});
					$(e.target).addClass('active');
					this.upTitle="视频";
				}else{
					//this.$router.push({path: '/myDoc'});
					//给当前点击元素添加样式

					$(e.target).addClass('active');
					this.upTitle="文档";
					

				}
			}

			
			
		}
	}

</script>

<style scoped>
	div.personalIndex ul{
		list-style:none;
	}
	div.personalIndex{
		background-color: #fff;
		border: 1px solid #E4E4E4;
		display: flex;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	
	div.personalIndex .personalRightIndex{
		flex: 8;
		padding:15px;
	}
	
	div.personalIndex .personalUser{
		display: flex;
		height: 100px;

	}
	div.personalIndex .personalUser .imgDiv{
		margin:5px;
		margin-right: 25px;
	}
	div.personalIndex .personalUser .imgDiv img{
		width: 78px;
		height: 78px
	}
	div.personalIndex .personalUser .textDiv{
		padding-top: 15px;
		margin-left: -10px;	
	}
	div.personalIndex .personalUser .textDiv p:first-child{
		font-size: 18px;
		font-weight: 700;
		color: #333333;
	}
	div.personalIndex .personalUser .textDiv p:last-child{
		font-size: 12px;
		color: #666666
	}

	div.personalIndex .videoTab{
		border-bottom:2px solid #E4E4E4;
		display: flex;
		height: 40px;
		line-height: 40px;
	}

	div.personalIndex .videoTab ul{
		flex: 10;
		display: flex;
		font-size: 16px;

	}
	div.personalIndex .videoTab ul li{
		height: 40px;
		margin-right: 40px;
		cursor: pointer;
	}
	div.personalIndex .videoTab ul li.active{
		border-bottom:2px solid #3399FF;
		color: #3399FF
	}
	
	div.personalIndex .videoTab div{
		flex: 1;
		color: #3399FF;
		font-size: 14px;
		cursor: pointer;


	}
</style>
