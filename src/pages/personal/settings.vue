<template>
  <div class="personalSettings">
  	<!--左侧组件部分-->
  	<PersonalLeft leftIndex="sittings"/>
	<!--首页右侧部分-->
	<div class="personalSettingRight">
		<div class="personalSetTitle">
			<div>个人设置</div>
		</div>
		<div class="personalSetContent">
			<div class="changeMessage">
				<div>
					<img :src=userInfo.imgUrl alt="">
				</div>
				<div>
					<p>昵称 : {{userInfo.userName}} <span class="nameChange" @click="showHideDiv('name')">修改</span><span class="icon"><i class="fa fa-venus"></i></span>
						<div class="hideUserNameDiv" id="hideUserNameDiv">
							<input type="text" :value=userInfo.userName class="one" maxlength="8" @input="limitNum($event)">
							<button @click="saveChange('name')">保存</button>
						</div>
					<!-- </p> -->
					<p>会员类型 : <span class="hyType"><i class="fa fa-vimeo"></i></span><span>杰普认证会员</span></p>
					<p>签名 : <span class="abstract">{{userInfo.abstract}}</span> <span class="nameChange" @click="showHideDiv('abs')">修改</span>
						<div class="hideUserNameDiv hideAbstractDiv" id="hideAbstractDiv">
							<input type="text" :value=userInfo.abstract class="two" maxlength="30"  @input="limitNum($event)">
							<button  @click="saveChange('abs')">保存</button>
						</div>
					<!-- </p> -->
				</div>
			</div>
			<div class="changePass">
				<div @click="showChangePassDialog">
					<span><i class="fa fa-unlock-alt"></i></span>
					<p>修改密码</p>
				</div>
				<div>
					<span><i class="fa fa-unlock-alt"></i></span>
					<p>申请认证</p>
				</div>
			</div>
		</div>
	</div>

	<!--修改密码模态框-->
	<el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
	 <el-form :model="form">
	   <el-form-item label="原密码：" :label-width="formLabelWidth">
	     <el-input v-model="form.oldPass" autocomplete="off" placeholder="请输入现在的密码"></el-input>
	   </el-form-item>
	   <el-form-item label="新密码：" :label-width="formLabelWidth">
	     <el-input v-model="form.newPass" autocomplete="off" placeholder="请输入新的密码"></el-input>
	   </el-form-item>
	   <el-form-item label="确认新密码：" :label-width="formLabelWidth">
	     <el-input v-model="form.realNewPass" autocomplete="off" placeholder="再次输入新密码"></el-input>
	   </el-form-item>
	   
	 </el-form>
	  <div slot="footer" class="dialog-footer">
	    <button @click="dialogFormVisible = false">取 消</button>
	    <button type="primary" @click="dialogFormVisible = false">确 定</button>
	  </div>
	</el-dialog>

	<!--修改密码模态框结束-->
  </div>
</template>


<script>
	import PersonalLeft from './personalLeft.vue' //个人空间左侧
	export default {
		 components:{
		    PersonalLeft
		  },
		 data(){
			return {
				dialogFormVisible:false,
				form:{
					oldPass:'',
					newPass:'',
					realNewPass:''
				},
				formLabelWidth:"100px",
				userInfo:{//登录用户数据
					imgUrl:"https://github.com/pluslicy/assets/blob/master/resource/%E4%B8%AA%E4%BA%BA%E7%A9%BA%E9%97%B4/u1861.png?raw=true",
					userName:"朱莉",
					abstract:"千山万水 无数黑夜 等一轮明月",
					userType:"vip"
				}
			}
		},
		
		//映射数据
		computed:{

		},
		created(){
			//设置视口高度


			//默认加载我的视频
			
			
		},
		methods:{
			//限制用户对用户名/签名的输入字符个数
			limitNum(e){
				let val=e.target.value;
				if(e.target.className=="one"){
					//此时用户正在对用户名操作
					if(val.length>=8){
						this.$message('用户名须小于8个字符');
					}

				}else if(e.target.className=="two"){
					if(val.length>=30){
						this.$message('用户名须小于30个字符');
					}
				}	
				
				},
			
			//点击修改密码box，显示模态框
			showChangePassDialog(){
				this.dialogFormVisible=true;
			},
			//点击修改按钮显示隐藏输入框
			showHideDiv(flag){
				if(flag=="name"){
					$("#hideUserNameDiv").show();
				}else{
					//当前显示的input框宽度应该与用户的签名span宽度一致或更大
					var spanWidth=$(".abstract").width();
					var inputWidth=$("input.two").width();
					//当前为如果用户签名宽度小于默认input宽度，此时显示默认input宽度，否则修改input宽度
					if(spanWidth>inputWidth){
						$("input.two").width(spanWidth);
					}else{
						$("input.two").width(300);
					}
					$("#hideAbstractDiv").show();
				}

			},
			//点击隐藏div的保存按钮
			saveChange(flag){
				if(flag=="name"){
					//向后台发送保存请求，修改用户名
					this.userInfo.userName=$(".one").val();
					$("#hideUserNameDiv").hide();
				}else{
					this.userInfo.abstract=$(".two").val();
					$("#hideAbstractDiv").hide();


				}
			}
			
			
		}
	}

</script>
<style scoped>
	div.personalSettings{
		background-color: #fff;
		border: 1px solid #E4E4E4;
		display: flex;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	
	div.personalSettings .personalSettingRight{
		flex: 8;
		padding:15px;
	}


	.personalSettings .personalSettingRight .personalSetTitle{
		border-bottom:2px solid #E4E4E4;
	}
	.personalSettings .personalSettingRight .personalSetTitle div{
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

	.personalSettings .personalSetContent .changeMessage{
		min-height: 100px;
		border-bottom:1px solid #E4E4E4;
		padding:10px;
	}
	.personalSettings .personalSetContent .changeMessage div:first-child{
		width: 78px;
		height: 78px;
		line-height: 100px;
		padding-top: 10px;
		float: left;

	}
	.personalSettings .personalSetContent .changeMessage div:last-child{
		margin-left: 100px;
		min-height: 100px;
		margin-top: 5px;
	}
	.personalSettings .personalSetContent .changeMessage div p{
		height: 20px;
		margin-bottom: 15px;
		font-family: '微软雅黑';
	    font-weight: 400;
	    font-style: normal;
	    font-size: 14px;
	    color: #666666;
	   

	}

	/*个人设置中隐藏修改姓名&签名的inut+button样式*/
	.personalSettings .personalSetContent .changeMessage div{
		position: relative;

	}

	.personalSettings .personalSetContent .changeMessage div div.hideUserNameDiv{
		position: absolute;
		left: 40px;
		top: 0px;
		display: none
	}
	.personalSettings .personalSetContent .changeMessage div div.hideUserNameDiv input{
		height: 23px;
	}
	.personalSettings .personalSetContent .changeMessage div div.hideUserNameDiv button{
			font-weight: 700;
		    font-size: 12px;
		    color: rgb(255, 255, 255);
		    text-align: center;
		    height: 26px;
		    background-color: #3585FE;
		    border:none;
		    width: 50px;
		    cursor: pointer;
	}
	.personalSettings .personalSetContent .changeMessage div div.hideAbstractDiv{
		position: absolute;
		left: -60px;
		top: 62px;
	}
	.personalSettings .personalSetContent .changeMessage div div.hideAbstractDiv input{
		width:300px;
	}


	/*隐藏修改div样式设置结束*/
	.personalSettings .personalSetContent .changeMessage div img{
		width: 78px;
		height: 78px;
	}

	.personalSettings .personalSetContent .changeMessage div p span.nameChange{
		font-family: '微软雅黑';
	    font-weight: 400;
	    font-style: normal;
	    font-size: 12px;
	    color: #D7D7D7;
	    margin-left: 10px;
	    cursor: pointer;
	}
	.personalSettings .personalSetContent .changeMessage div p span.icon{
		color: #FE70E3;
		margin-left: 20px;
		font-weight: bold;
		font-size: 16px;
	}

	.personalSettings .personalSetContent .changeMessage div p span.hyType{
		color: #0099FF;
		margin-right: 10px;
	}

	.personalSettings .personalSetContent .changePass div{
		width: 120px;
		height: 120px;
		float: left;
		margin: 40px;
		font-family: 'Arial Normal', 'Arial';
	    font-weight: 400;
	    font-style: normal;
	    font-size: 13px;
	    text-align: center;
	    cursor: pointer;
	    background-color: rgba(53, 133, 254, 1);
    	border-radius: 30px;
    	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
	    color: #FFFFFF;
	}
	.personalSettings .personalSetContent .changePass div:last-child{
		margin-left: 20px;
	}
	.personalSettings .personalSetContent .changePass div span{
		font-size: 46px;
		line-height: 100px;
	}
	.personalSettings .personalSetContent .changePass div p{
		font-weight: 700;
	    font-style: normal;
	    font-size: 14px;
	    margin-top:-28px;
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
	
	
	
</style>