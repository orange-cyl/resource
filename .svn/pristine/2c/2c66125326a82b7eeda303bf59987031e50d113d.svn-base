<template>
  <div class="personalSpace">
  	<!--左侧组件部分-->
  	<PersonalLeft leftIndex="collection"/>
	<!--首页右侧部分-->
	<div class="personalSpaceRight">
		<div class="myStarTitle">
			<div>我的收藏</div>
		</div>
		<!--右侧内容区-->
		<div class="myStarContent">
			<div class="videoOrDoc">
				<div class="background"></div>
				<div>
					<span class="active" @click="myStartVideoOrDoc($event)">视频</span>
					<span  @click="myStartVideoOrDoc($event)">文档</span>
				</div>
			</div>
			<div class="rightContent">
				<MyStarVideo v-if="currentClick=='视频'"/>
				<MyStarDoc v-else/>
			</div>
		</div>
	</div>
  </div>
</template>


<script>
	import PersonalLeft from './personalLeft.vue' //个人空间左侧
	import MyStarVideo from './myStarVideo.vue' //我收藏的视频
	import MyStarDoc from './myStarDoc.vue' //我收藏的文档
	export default {
		 components:{
		    PersonalLeft,
		    MyStarVideo,
		    MyStarDoc
		  },
		 data(){
			return {
				currentClick:"视频"

			}
		},
		
		//映射数据
		computed:{

		},
		created(){
			//设置视口高度
		},
		methods:{
			//点击切换我收藏的视频/文档
			myStartVideoOrDoc(e){
				this.currentClick=e.target.innerHTML;

				for(var i=0;i<e.target.parentNode.children.length;i++){
					$(e.target.parentNode.children[i]).removeClass('active')
				}

				$(e.target).addClass('active')
				

			}

			
			
		}
	}

</script>

<style scoped>
	.personalSpace{
		background-color: #fff;
		border: 1px solid #E4E4E4;
		display: flex;
		margin-top: 40px;
		margin-bottom: 40px;
		
	}

	.personalSpace .personalSpaceRight{
		flex: 8;
		padding: 15px;
	}

	.personalSpace .personalSpaceRight .myStarTitle{
		border-bottom:2px solid #E4E4E4;
	}
	.personalSpace .personalSpaceRight .myStarTitle div{
		width: 64px;
		height: 34px;
		border-bottom: 2px solid #3399FF;
		cursor: pointer;
		font-family: '微软雅黑';
	    font-weight: 400;
	    font-style: normal;
	    font-size: 16px;
	    color: rgb(51, 153, 255);
	    position: relative;
	    top: 2px
	}
	.personalSpace .videoOrDoc{
		display: flex;
	}
	.personalSpace .background{
		width: 4px;
		height: 28px;
		background-color: rgba(51, 153, 255, 1);
		margin-top: 10px;
		margin-right: 10px
	}

	
	
	.personalSpace .videoOrDoc span{
		display: inline-block;
		width: 70px;
		height: 21px;
		font-family: '微软雅黑';
	    font-weight: 400;
	    font-style: normal;
	    font-size: 16px;
	    line-height: 51px;
	    cursor: pointer;
	}
	.personalSpace .videoOrDoc span.active{
		 color: #0F69FF;
	}


</style>
