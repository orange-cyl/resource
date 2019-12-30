<template>
	<div class="realUpVideo">
		<div class="upVideoTop">
			<div class="title">
				<p>
					<span>上传文档：</span>
					<span>{{title}}</span>
					<span v-if="titles.length !=1">等</span>
				</p>
				<span @click="turnUpVideo">
					<i class="fa fa-close"></i>
				</span>
			</div>
			<div class="progress">
	             <span class="progressContainer">
	                <span id="progressBar" class="h-100P bar"></span>
	            </span>
				<div class="percent">{{percentage}}</div>
				
				<div class="uped">
					已上传：2.70M/{{fileSize}}
				</div>
			</div>
		</div>
		<div class="upVideoContent">
			<div class="upVideoContent_left">
				<span>您上传的文档：</span>
				<div class="upVideoContent_left_bottom">
					<ul>
						<li v-for="item in titles">
							<span>{{item}}</span>
							<span>修改</span>
						</li>
					</ul>
					<button style="margin-left:5px;width:50px;height:25px;line-height:25px;" @click="upVideo">上传</button>
				</div>
			</div>
			<form action="">
				<label>
					<input type="radio" id="one"  name="videoOrMany"  value="video" :checked="check" :disabled='dis'>文档
				</label>
				<label>
					<input type="radio" id="two" name="videoOrMany" :checked="chec" value="many">专辑
				</label>
				<div class="upFormDiv">
					<div>
						<span>方向：</span>
						<input type="text">
					</div>
					<div>
						<span>技术：</span>
						<input type="text"  class="videoType" @focus="loadVideoTypes">
						<span class="icon" @click="loadVideoTypes">
							<i class="fa fa-angle-down"></i>
						</span>
						<p class="videoTypes">
							<span @click="selectType(type.id,type.name)" v-for="type in videoTypes">{{type.name}}</span>
							
						</p>
					</div>
					<div>
						<el-checkbox class="vip" v-model="checked">设置为vip</el-checkbox>
					</div>
					<div>
						<span class="desSpan">视频描述：</span>
						<textarea name="" id="" cols="56" rows="10" class="des" style="padding-left:10px"></textarea>
					</div>
					<div>
						<button>保存</button>
					</div>
				</div>

			</form>
		</div>

		<!--添加文档模态框-->
		<!-- <el-dialog title="自定义添加文档" :visible.sync="dialogFormVisible" width="28%">
		 <el-form :model="form">
			  <template>
			  	 <div v-for="item in items">
			  	 	<el-form-item label="文档标题：" :label-width="formLabelWidth" >
					     <el-input v-model="item.form.title" autocomplete="off" placeholder="请描述该文档"></el-input>
					   </el-form-item>
					   <el-form-item label="选择文档：" :label-width="formLabelWidth" >
					     <input type="file" name="">
					     <span class="plus" @click="addformItem" :style=item.form.display><i class="fa fa-plus"></i></span>
					   </el-form-item>
				  	 </div>
			  </template>
		  
		 </el-form>
		  <div slot="footer" class="dialog-footer">
		    <button @click="dialogFormVisible = false">取 消</button>
		    <button type="primary" @click="dialogFormVisible = false">确 定</button>
		  </div>
		</el-dialog> -->

		<!--模态框结束-->
	</div>
</template>
<script>
	export default {
		
		data(){
			return {
				check:true,
				chec:false,
				dis:false,
				checked: true,
				titles:[],
				percentage:0,
				// dialogFormVisible:false,
				form:{},
				items:[{
					form:{
						display:"display:block"
					}
				}],
				// tagInput:"",
				tagId:0,
				// tags:[],
				formLabelWidth:"100px",
				title:"java基础教程-环境搭建",
				videoTypes:[{
					id:1001,
					name:"java"
				},{
					id:1002,
					name:"webUI"
				},{
					id:1003,
					name:"嵌入式"
				},{
					id:1004,
					name:"IOS"
				},{
					id:1001,
					name:"java"
				},{
					id:1002,
					name:"webUI"
				},{
					id:1003,
					name:"嵌入式"
				},{
					id:1004,
					name:"IOS"
				}]
			}
		},
		//映射数据
		computed:{

		},
		created(){
			this.titles  = this.$route.query.fileName;
			//获取上传文件的名称
			this.title=this.titles[0];
			// console.log('/////',this.$route.query.fileName)
			this.fileSize=this.$route.query.fileSize;
			// alert(this.fileSize)
			if(this.titles.length !=1){
				this.check =false
				this.chec=true
				this.dis=true

			}
			// clearInterval(interval);
			//进度条
			var percentage=this.percentage;
			 
		     var interval = setInterval(function () {
		          if (percentage < 10000) {
		              percentage++;
		              var widthTemp = (percentage / 100).toFixed(1) + '%';
		              $('#progressBar').css('width', widthTemp);
		              $('.percent').text(widthTemp);
		          } else {
		             clearInterval(interval);
		             
		        }
		    }, 10);
			
		},
		updated(){
			var self=this;
			// this.currentTagsDivWidth=$(".tags").width();
			//技术标签光标移动解决：获取数据渲染后的tags外层Div的宽度
			// $("input.tagInput").css({
			// 	paddingLeft:self.currentTagsDivWidth+5,
			// 	width:413-(self.currentTagsDivWidth)
			// });

			//如果tags外层DIV宽度和input宽度相同，则input需要换行显示
			// if(this.currentTagsDivWidth>=415){
			// 	$("input.tagInput").css({
			// 		height:$('.tags').height(),
			// 		paddingTop:15,
			// 		width:115,
			// 		paddingLeft:300
			// 	});
			// }

			
		},
		mounted(){
			//默认显示下拉框
			$(".videoTypes").hide();

			

		},
		methods:{
			upVideo(){
				// Utils.$emit('demo');
				// this.$router.push({path: '/personal/upVideo',query:{msg:'upDoc'}})
			},
			//点击长栓视频右上角x，返回到选择上传视频页面
			turnUpVideo(){
				this.$router.push({path: '/personal/upVideo',query:{msg:'upDoc'}})
			},
			//点击加载视频l类型
			loadVideoTypes(){
				//下拉菜单进行隐藏和显示
				$(".videoTypes").toggle();
			},

			//点击下拉菜单中的内容时触发
			selectType(id,name){
				//id-->选中的type id
				$('.videoType').val(name);
				$(".videoTypes").hide();

			},
			//点击为视频添加文档弹出模态框
			// showDialog(){
			// 	this.dialogFormVisible=true;
			// },
			
			//技术标签input中输入空格产生技术标签
			// createTag(e){
			// 	/*console.log(e.target);
			// 	e.target.style.paddingLeft = '100px';*/

			// 	if(e.keyCode===32){
			// 		var val=e.target.value.trim();//获取去除空格后的input值
			// 		this.tagId++;
			// 		if(val){
			// 			if(this.tags.length<=10){
			// 				this.tags.push({//向技术标签数组中添加一个标签对象
			// 					tagName:val,
			// 					tagId:this.tagId
			// 				});
			// 				this.tagInput="";//清空用户输入
			// 			}else{
			// 				 this.$message('不能输入超过十个标签');
			// 				 this.tagInput="";//清空用户输入
			// 			}
						

						
			// 		}
					
			// 	}

			// },
			//点击标签右侧x，删除当前标签
			// cancelTag(e){
			// 	var tagSpanId=e.target.parentNode.previousElementSibling.getAttribute("flag");
				
			// 	this.tags=this.tags.filter(function(item,index) {
			// 		return item.tagId!=tagSpanId;
			// 	});

			// },
			//点击模态框中加号进行增加一个文档信息
			addformItem(){
				this.items.push({
					form:{
						display:"display:none"
					}
				});
			}
		}
	}
</script>

<style scoped>
	.realUpVideo{
		height: 738px;
		border:1px solid #E4E4E4;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.realUpVideo .upVideoTop{
		width: 1117px;
    	height: 107px;
    	font-weight: 400;
	    font-style: normal;
	    font-size: 13px;
	    color: #333333;
	    border-radius: 10px;
	    background-color: rgba(242, 242, 242, 1);
	    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
	    margin:0 auto;
	    margin-top: 25px;
	    position: relative;
	    padding: 20px;
	    padding-bottom: 40px;
	}

	.realUpVideo .upVideoTop .title p{
		margin:0px;
		text-align: center;
     	color: #333333;
     	font-size: 18px;


	}

	.realUpVideo .upVideoTop .title p span:first-child{
		font-weight: 700;
	}
	.realUpVideo .upVideoTop .title p span:last-child{
		font-weight: 400;
	}
	

	.realUpVideo .upVideoTop .title>span{
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 24px;
		color: #0099CC

	}

	/*进度条样式*/
	 div.realUpVideo .upVideoTop  .progress .progressContainer{
	          display: inline-block;
	         height: 20px;
	        padding-right: 0px;
	        border: 1px solid #0099CC;
	         border-radius: 20px; 
	         width: 90%;
	         margin-top: 20px;
	         margin-left: 20px;


	}
	div.realUpVideo .upVideoTop  .progress .uped{
		font-size: 14px;
		font-weight: 400;
		width: 500px;
		margin-left: 20px;
		margin-top: 10px;
	}
	div.realUpVideo .upVideoTop  .progress .percent{
		display: inline-block;
		position: relative;
		top: -5px;
		margin-left: 10px;
		color: #0099CC;
		font-size: 18px;
		font-weight: 700;
	}
	 div.realUpVideo .upVideoTop  .progress .h-100P{
	         height: 100%;
	 }
	div.realUpVideo .upVideoTop  .progress .bar{         
			display: inline-block;
	         background: #0099CC;
	         color: white;
	         font-weight: bold;
	         padding: 0 5px;
	         text-align: right;
	         border-radius:20px;
	         border-right: 1px solid #0099CC;
	 }
	

	 /*上传表单*/
	 div.realUpVideo .upVideoContent{
		width: 1117px;
		height: 442px;
		padding:40px;
		overflow: hidden;
	 }
	div.realUpVideo .upVideoContent .upVideoContent_left{
		width: 20%;
		/*background-color: pink;*/
		height: 442px;
		float: left;
	 	font-size: 14px;
	 	font-weight: bold;
		margin-top: -5px;
		box-sizing: border-box;
		/*margin-right: 10px;*/
	}
	div.realUpVideo .upVideoContent .upVideoContent_left .upVideoContent_left_bottom{
		width: 100%;
		height: 100%;
		margin-top: -5px;
	}
	div.realUpVideo .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul{
		width: 100%;
		/*height: 100%;*/
		/*background-color: yellow;*/
		/*overflow: hidden;*/
		border: 1px solid #fff;
		box-sizing: border-box;
		padding: 5px;
		max-height: 80%;
		overflow: auto;
		margin-top: 0px;
	}
	div.realUpVideo .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul li{
		width: 100%;
		height: 40px;
		list-style: none;
		/*background-color: red;*/
		margin-bottom: 5px;
		line-height: 40px;
	}
	div.realUpVideo .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul li span:last-child{
		color: blue;
		float: right;
	}
	 div.realUpVideo .upVideoContent form{
	 	float: left;
	 	margin-left: 100px;
	 	box-sizing: border-box;
	 	/*width: 528.8px;*/
	 }

	 div.realUpVideo .upVideoContent form>p{
	 	display: inline-block;
	 	color: #3585FE;
	 	font-weight: 400px;
	 	cursor: pointer;
	 	margin-left:270px
	 }
	 div.realUpVideo .upVideoContent form>p span{
	 	font-size: 14px;

	 }

	  div.realUpVideo .upVideoContent label:first-child{
		margin-right: 40px;
		font-size: 13px;
		font-weight: 400;
	 }

	 div.realUpVideo .upVideoContent span{
	 	font-size: 16px;
	 	font-weight: 400;
	 	margin-right: 10px;
	 }
	 div.realUpVideo .upVideoContent div{
	 	margin-top: 10px;
	 	position: relative;
	 }
	 div.realUpVideo .upVideoContent div div.tags{
	 	max-width: 415px;
	 	display: flex;
	 	flex-wrap: wrap;
	 	position: absolute;
	 	top: 23px;
	 	left: 95px;
	 }
	 div.realUpVideo .upVideoContent div div.tags p{
	 	background-color: rgba(0, 153, 204, 1);
	 	height:20px;
	 	line-height: 20px;
	 	margin-left:10px;
	 	margin-top: 5px;
	 	padding-left: 5px;

	 }
	 div.realUpVideo .upVideoContent div div.tags p span{
	 	font-size: 12px;
	 	color: #fff;
	 	padding-left: 5px;
	 	
	 }
	 div.realUpVideo .upVideoContent div div.tags p span:last-child{
	 	font-size: 8px;
	 	cursor: pointer;
	 	font-weight: lighter;
	 	padding: 0px;
	 	text-align: center;
	 	margin-left: -8px;

	 }
	  div.realUpVideo .upVideoContent div p.tagTitle{
	  	width: 500px;
	  	margin:20px 0 10px 93px;
	  	color: #999999;
	  	font-size: 12px;
	  }

	 div.realUpVideo .upVideoContent div input,div.realUpVideo .upVideoContent div select,div.realUpVideo .upVideoContent div textarea{
	 	width: 409px;
	 	height: 30px;
	 	font-size: 14px;
	 	padding-left: 10px
	 }
	 div.realUpVideo .upVideoContent div textarea{
		height: 95px;
		width: 380px;
		padding-top: 10px;
		box-shadow: none;
		
	 }

	  div.realUpVideo .upVideoContent div input.des{
	  	height: 95px;
	  	/*width: 19px;*/
	  	margin-top: 10px;
	  }

	  div.realUpVideo .upVideoContent div span.desSpan{
	  	display: inline-block;
	  	position: relative;
	  	top: -80px;

	  }

	 
	  div.realUpVideo .upVideoContent div span.icon{
	  	display: inline-block;
	  	background-color: #E4E4E4;
	  	width: 30px;
	  	height: 32px;
	  	font-size: 30px;
	  	text-align: center;
	  	line-height: 32px;
	  	position: relative;
	  	top: 5px;
	  	left: -35px;
	  	cursor: pointer;
	  }
	div.realUpVideo .upVideoContent div .videoTypes{
		width: 401px;
		min-height: 59px;
		font-family: 'Arial Normal', 'Arial';
	    font-weight: 400;
	    font-style: normal;
	    font-size: 13px;
	    color: #333333;
	    text-align: center;
	    line-height: normal;
	    border:1px solid rgb(169, 169, 169);;
	    position: absolute;
	    top: 38px;
	    left: 93px;
	    z-index: 1000;
	    background-color: #fff;
	    display: flex;
	    flex-wrap: wrap;
	    padding: 10px;

	}

	div.realUpVideo .upVideoContent div .videoTypes span{
		margin-left: 5px;
		cursor: pointer;
		height:20px;
		font-size:16px;
		line-height:20px;
		color:#666666

	}
	  div.realUpVideo .upVideoContent div button{
	  	    font-weight: 700;
		    font-style: normal;
		    font-size: 14px;
		    text-anchor: center;
		    width: 120px;
		    height: 34px;
		    background-color: rgba(22, 155, 213, 1);
		    border-radius: 5px;
		    border:none;
		    color: #fff;
		    font-family: '宋体','微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
		    letter-spacing: 2px;
		    line-height: 34px;
		    margin-left: 95px;
		    margin-top: 20px;
		    cursor: pointer;
	  }

	/*模态框按钮样式*/
	div.dialog-footer button{
		width: 74px;
		height: 40px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 500;
		text-align: center;
		cursor: pointer;
		border: 1px solid #dcdfe6;
	}

	div.dialog-footer button:first-child{
		    background: #fff;
		    border-color: #dcdfe6;
		    color: #606266;
	}

	div.dialog-footer button:first-child:hover{
		background-color:#B9D3EE;
		opacity: 0.5;
		color:#104E8B;
		border:1px solid  #409eff;
	}

	div.dialog-footer button:last-child{
		    color: #fff;
		    background-color: #409eff;
		    border-color: #409eff;
		    margin-left: 15px;

	}

	div.dialog-footer button:last-child:hover{
		opacity: 0.8
	}


	/*+*/
	.realUpVideo span.plus{
		color: #3585FE;
		font-size: 18px;
		position: absolute;
		top: 0px;
		right: 0px;
		cursor: pointer;
	}
	
	.vip{
		margin-left: 6%;
	}
</style>