<template>
  <div class="personalLeft" v-bind:style="{height:personalLeftHeight}">
    <ul class="personLeftList">
    	<li @click="leftTabChange($event)" flag='0'>
    		<i class="fa fa-user fa-fw"></i>
    		<span>个人空间</span>
    	</li>
    	<li @click="leftTabChange($event)" flag='1'>
    		<i class="fa fa-star-o fa-fw"></i>
    		<span>我的收藏</span>
    	</li>
    	<li @click="leftTabChange($event)" flag='2'>
    		<i class="fa fa-cog fa-fw"></i>
    		<span>个人设置</span>
    	</li>
    </ul>
  </div>
</template>
<script>
	export default {
		
		data(){
			return {
				personalLeftHeight:"200px"

			}
		},
		props:['leftIndex'],
		//映射数据
		computed:{

		},
		created(){
			//设置视口高度
			this.personalLeftHeight=$(window).height()-120+"px";

		},
		mounted(){
			//获取当前左侧点击li，给当前点击li添加样式
				if(this.leftIndex=='space'){
					//左侧点击为个人空间
					$("li:first").addClass('active');

				}else if(this.leftIndex=='collection'){
					$("li:nth-child(2)").addClass('active');

				}else{
					$("li:last").addClass('active');

				}

			
		},
		methods:{
			leftTabChange(e){
				
				//左侧列表切换路由
				if(e.target.nodeName=="LI"){
					var currents=e.target.parentNode.children;//获取左侧所有li
					var targetLi=e.target;//获取当前点击li
				
				}else{
					//此时点击为span或者i标签
					var currents=e.target.parentNode.parentNode.children;
					var targetLi=e.target.parentNode;
				}


				//1.取消所有左侧li样式
				for(var i=0;i<currents.length;i++){
						$(currents[i]).removeClass('active');
					}


					
				//2.给当前点击li添加样式
				$(targetLi).addClass('active');

				//3.匹配当前点击li的路由进行跳转

				var index=targetLi.getAttribute('flag');
				if(index=='0'){
					this.$router.push({path: '/personal/space'});
				}else if(index == '1'){
					this.$router.push({path: '/personal/collection'});
				}else{
					this.$router.push({path: '/personal/settings'});
				}

				



				
			}
			
		}
	}
</script>

<style>
	
	div.personalLeft{
		/* width: 18%; */
		flex: 2;
		border-right: 1px solid #E4E4E4;
		background-color: #F6F6F6
	}

	.personalLeft .personLeftList{
		color: #6B6B6B;
		text-align: center;
		padding-top: 15px;
	}
	
	.personalLeft .personLeftList li{
		height: 40px;
		list-style: none;
		line-height: 40px;
		margin-bottom: 10px;
		font-size: 13px;
		cursor: pointer;
		font-weight: 400;
	}

	.personalLeft .personLeftList li i{
		font-size: 17px;
		line-height: 10px;
	}
	.personalLeft .personLeftList li.active{
		background-color: #3399FF;
		color: #fff
	}

	
</style>
