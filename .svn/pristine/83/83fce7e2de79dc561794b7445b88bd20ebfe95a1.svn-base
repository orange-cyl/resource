<template>
	<div class="upVideoDoc">
		<div class="centerDiv">
			<div class="upDiv">
				<div class="picUrl">
					<!-- <img src="https://github.com/pluslicy/assets/blob/master/resource/%E8%A7%86%E9%A2%91%E4%B8%8A%E4%BC%A0/u1957.png?raw=true" alt=""> -->
					<!-- <form action="" >
						<input type="file" id="file" :accept=acceptType  @change="changeFile($event)" multiple  style="display:none">
						<input type="submit" id="submit" name="" style="display:none;">
					</form> -->
					 <!-- multiple -->
					<el-upload	
					  
					  :accept="acceptType"
					 
					  class="upload-demo"
					  ref="upload"
					  action="http://10.0.6.5:53001/FileStorageApp/create_resource/"
					  :on-change="handleChange"
					  :on-error="handleError"
					  :data="token"
					  :before-upload="handleUpload"
					  :on-progress="handleProgress"
					  :show-file-list="false"
					  :on-success="handleSuccess"
					  :auto-upload="true"
					  >
					  <img  id='filess'  slot="trigger" src="https://github.com/pluslicy/assets/blob/master/resource/%E8%A7%86%E9%A2%91%E4%B8%8A%E4%BC%A0/u1957.png?raw=true" alt="">
					 <!--  <el-button slot="trigger" size="small" type="primary">选取文件</el-button> -->
					 <!--  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
					 <!--  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
					</el-upload>
					
				</div>
				<div class="selectTitle">
					请选择您的{{selectContent}}
				</div>
			</div>
			<div class="serverDoc">
				上传{{selectContent}},即表示您已同意杰普<a class="serveA" @click="showDialog">服务条款</a> , 请勿上传色情及反动等违法{{selectContent}}
			</div>
			<div class="numSize">
				<span>上传数量&nbsp;&nbsp;|&nbsp;&nbsp;</span>
				<span>{{selectContent}}大小&nbsp;&nbsp;|&nbsp;&nbsp;</span>
				<span>{{selectContent}}规格&nbsp;&nbsp;|&nbsp;&nbsp;</span>
				<span v-if="selectContent=='视频'">视频时长&nbsp;&nbsp;|&nbsp;&nbsp;</span>
				<span>其他问题</span>				
				
			</div>
		</div>

		<!--服务条款模态框-->
		<el-dialog
		  title="杰普上传视频/文档服务条款"
		  :visible.sync="centerDialogVisible"
		  width="30%"
		  center>
		  <span>服务条款内容</span>
		  <span slot="footer" class="dialog-footer">
		  	<button @click="centerDialogVisible = false">取消</button>
		  	<button @click="centerDialogVisible = false">确定</button>
		  </span>
		</el-dialog>

		<el-dialog
		  :show-close="false"
		  title=""
		  :visible.sync="dialogVisible"
		  width="100%"
		  fullscreen>
		  <div class="upVideoTop">
			<div class="title">
				<p>
					<span>上传文档：</span>
					<span>{{title}}</span>
					<span v-if="docs.length !=1&&docs.length !=0">等</span>
					<!-- <span v-if="titles.length !=1">等</span> -->
				</p>
				<span style="cursor:pointer" @click="cancle">
					<i class="fa fa-close"></i>
				</span>
			</div>
			<div class="progress">
	             <span class="progressContainer">
	             <br>
	             <el-progress  :stroke-width="16" :percentage="uploadPercent"></el-progress>
	            </span>
				<div class="uped">
					已上传：{{succrssDoc}}/{{docLength}}个
				</div>
			</div>
		</div>
		<!-- {{selectedOptions}} -->
		<div class="upVideoContent">
			<div class="upVideoContent_left">
				<span>您上传的文档：</span>
				<div class="upVideoContent_left_bottom">
					<ul>
						<li class="oli" v-for="item in docs">
							<span>{{item.name}}</span>
							<span class="edit"><i class="fa fa-pencil-square-o" style="cursor:pointer;"  aria-hidden="true" @click='updataDocName(item)'></i>
							<i class="fa fa-trash-o" style="cursor:pointer;" @click='deleteDocName(item)' aria-hidden="true"></i>
							</span>
							<!-- <span>修改</span> -->
						</li>
					</ul>
					<button style="margin-left:5px;width:50px;height:25px;line-height:25px;" @click="upVideo">上传</button>
				</div>
			</div>
			
			<el-form label-position="right" label-width="100px" :model="formLabelAlign">
			<el-form-item label="" prop="resource">
			    <!-- <el-radio-group style="margin-left:-50px;"> -->
			    <el-radio-group v-model="formLabelAlign.resource">
			      <el-radio label="文档" :disabled='dis'></el-radio>
			      <el-radio label="专辑"></el-radio>
			    </el-radio-group>
			     <!--  <el-radio  v-model="formLabelAlign.resource" :checked="check"  :disabled='dis'>文档</el-radio>
			      <el-radio  v-model="formLabelAlign.resource" :checked="chec">专辑</el-radio> -->
			    <!-- </el-radio-group> -->
			  </el-form-item>
			   <el-form-item v-if="formLabelAlign.resource=='专辑'" style="width:600px;" label="所属专辑: ">
					  <el-select style="width:400px;"  v-model="formLabelAlign.zhuanji">
					      <el-option v-for='item in allZj' :label="item.da_name" :value="item.id"></el-option>
					      <!-- <el-option label="区域二" value="beijing"></el-option> -->
					    </el-select>
					    <span id="create" @click='createZj()'>创建专辑</span>
				  </el-form-item>
				  <!--  <el-form-item v-if="formLabelAlign.resource=='创建专辑'" style="width:600px;" label="创建专辑: ">
				   <el-input v-model="zj"  style="width:400px;"></el-input>
				   <span id="create2">
				   			<i class="el-icon-circle-check
"></i>
				   </span>
				  </el-form-item> -->
				  <el-form-item v-if="formLabelAlign.resource=='文档'" style="width:600px;" label="方向：">
					  <el-select style="width:400px;"  v-model="formLabelAlign.fangxiang">
					      <el-option v-for='item in catalogue' :label="item.catalogue_name" :value="item.id"></el-option>
					     
					    </el-select>
				  </el-form-item>

				  <el-form-item v-if="formLabelAlign.resource=='文档'" style="width:600px;" label="技术: ">
					  <div class="block">
						  <el-cascader :props="props" style="width:400px;"
						    :options="defaultoptions"
						    v-model="selectedOptions"
						    @change="handleChange2"
						    
						     :value='value'>
						  </el-cascader>
				</div>
				  </el-form-item>
				  
				 
				  <el-form-item label="">
				   <el-checkbox label="设置为vip" name="type" v-model="formLabelAlign.dr_permission"></el-checkbox>
				  </el-form-item>
				  <el-form-item label="文档描述：" v-if="formLabelAlign.resource=='文档'">
				    <el-input style="width:400px;" type="textarea" v-model="formLabelAlign.desc"></el-input>
				  </el-form-item>
				</el-form>
		</div>
		  <!-- <el-progress :percentage="70"></el-progress> -->
		  <!-- <span>这是一段信息</span> -->
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="cancle">取 消</el-button>
		    <el-button type="primary" @click="save">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 创建专辑模态框 -->
		<el-dialog
		  title="创建专辑"
		  :visible.sync="dialogVisible2"
		  width="40%"
		  >
		  	<el-form label-position="right" label-width="100px" :model="formLabelAlign">
				  <el-form-item style="width:600px;" label="专辑名称: ">
				    <el-input v-model="formLabelAlign.daName" style="width:400px;" ></el-input>
				  </el-form-item>
				  <el-form-item style="width:600px;" label="方向：">
					  <el-select style="width:400px;"  v-model="formLabelAlign.fangxiang">
					      <el-option v-for='item in catalogue' :label="item.catalogue_name" :value="item.id"></el-option>
					     
					    </el-select>
				  </el-form-item>

				  <el-form-item style="width:600px;" label="技术: ">
					  <div class="block">
						  <el-cascader :props="props" style="width:400px;"
						    :options="defaultoptions"
						    v-model="selectedOptions"
						    @change="handleChange2"
						    
						     :value='value'>
						  </el-cascader>
				</div>
				  </el-form-item>
				  <el-form-item label="专辑描述：">
				    <el-input style="width:400px;" type="textarea" v-model="formLabelAlign.desc"></el-input>
				  </el-form-item>
				 
				</el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="createDa">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 修改文档名模态框 -->
<el-dialog
  title="修改视频名"
  :visible.sync="dialogVisible5"
  width="30%"
  >
 	<el-input placeholder="请输入视频名" v-model="docname"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible5 = false">取 消</el-button>
    <el-button type="primary" @click="saveDocName">确 定</el-button>
  </span>
</el-dialog>
	</div>
</template>
<script>
import {mapActions,mapGetters,mapMutations} from 'vuex';
import axios from '@/http/axios';
import axio from 'axios';
import qs from 'qs'
	export default {
		
		data(){
			return {
				docs2:[],
				docname:'',
				dialogVisible5:false,
				dialogVisible2: false,
				zj:{},
				dis:false,
				succrssDoc:0,
				docLength:0,
				token:{token:"sss"},
				docs:[],
				arr4:[],
				uploadPercent:0,
				 formLabelAlign: {
				 			resource:'文档',
				 			zhuanji:''
		        },
				title:"基础知识",
				dialogVisible: false,
				selectContent:'',//用户选择跳转当前页面的信息 视频/文档
				centerDialogVisible:false,//模态框默认不显示
				acceptType:"video/*",//默认用户点击上传打开input时，只能选择视频文件
				arr5:[],
				props: {
				  label:'catalogue_name',
		          value: 'id',
		          children: 'childs'
		        },
		        value:[],
				defaultoptions: [],
        selectedOptions: [],

			}
		},
		//映射数据
		computed:{
     	...mapGetters(['newArr','nameArr','allZj','catalogue','catalogueTow'])
		},
		created(){
				// this.defaultoptions = this.getTreeData(this.options)
			if(this.$route.query.msg=='upVideo'){
				this.selectContent="视频";
				this.acceptType="video/*";//当用户点击上传视频时，控制打开文件夹只能识别视频
			}else{
				this.selectContent="文档";
				this.acceptType=".doc,.docx,.xls,.xlsx,.pdf,.ppt,.txt,.md";//当用户点击上传文档时，控制打开文件夹只能识别文档
			}
		},
		watch:{
			
			'formLabelAlign.fangxiang':function(now,old) {
		        // this.resetTwo()
		        this.defaultoptions = []
		        this.selectedOptions = []
		        this.value = []
		         let obj = {
		          // cata_level_num:'2'

		        }
		        // console.log(',,,,,',this.formLabelAlign.fangxiang)
		        if(this.formLabelAlign.fangxiang!== null){
		           // obj.cat_catalogue = this.formLabelAlign.fangxiang
		           obj.id = this.formLabelAlign.fangxiang
		        }
		        // console.log(obj,'======')
		        this.findTowCatalogue({params:obj})

      }, 

     	
		},
		mounted(){
			
			
		},
		methods:{
     			...mapActions(['changeNewArr','changeNameArr','loadZj','findCatalogue','toSave']),
     				deleteDocName(item){
						var deleteId = item.response.resource_id
					
							var that = this
							console.log(deleteId)
						this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {

							
						 		var deleteD = []
								 deleteD.push(item.response.resource_url)
			       			 axio({
								    url: 'http://10.0.6.5:53001/FileStorageApp/delete_resource/',
								    headers:{
							            'Content-Type': 'application/json'
							        },
								    method: 'post',
								  	
								    data: JSON.stringify({resource_urls:deleteD})
								  })

						that.arr5.forEach((item,index)=>{
								if(item.resource_id == deleteId){
									that.arr5.splice(index,1)

								}
						})
						this.docs.forEach((item,index)=>{
								if(item.response.resource_id == deleteId){
									this.docs.splice(index,1)
								}
						})
							// this.$refs.upload.clearFiles()
				          this.$message({
				            type: 'success',
				            message: '删除成功!'
				          });
				  //         console.log(this.docs.length)
				           if(this.docs.length ==0 || this.docs.length ==1){
				        	this.dis = false
							this.formLabelAlign.resource = '文档'
				        }

				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消删除'
				          });          
				        });
					
     				},
     				saveDocName(){
						this.dialogVisible5 = false
						// console.log(this.videoNameId)
						this.arr5.forEach((item,index)=>{
										if(item.resource_id == this.docNameId){
											// console.log(item)
											item.resource_name = this.docname
										}
								})
								this.docs.forEach((item,index)=>{
										if(item.response.resource_id == this.docNameId){
											item.name = this.docname
										}
								})
     				},

     				updataDocName(item){
     					this.dialogVisible5 = true
						this.docNameId = item.response.resource_id
						console.log(item)
     				},

					createDa(){
						this.dialogVisible2 = false
						var oid = this.selectedOptions[this.selectedOptions.length-1]
						let obj={
							  // catalogue: 0,
							  da_desc: this.formLabelAlign.desc,
							  user: 24,
							  da_name: this.formLabelAlign.daName
						}
						if(oid != null){	
							obj.catalogue = oid				
						}else{
							obj.catalogue = this.formLabelAlign.fangxiang
						}
						axios.post('/up_man_perres/up_cre_dalbum/',obj).then(r=>{
							this.loadZj()
						}).catch(e=>{
							
						})


					},






     			findTowCatalogue(params){
			  		axios.get('/up_man_catalog/catanestlist/',params).then((res)=>{
			              let datas = res.data.data

			            this.defaultoptions =this.getTreeData(res.data.data) 
			             
			            }).catch((error)=>{
			            
			            })
     			},

				 getTreeData(data){
                // 循环遍历json数据
                for(var i=0;i<data.length;i++){
                    
                    if(data[i].childs.length<1){
                        // childs若为空数组，则将childs设为undefined
                        data[i].childs=undefined;
                    }else {
                        // childs若不为空数组，则继续 递归调用 本方法
                        this.getTreeData(data[i].childs);
                    }
                }
                return data;
				},

				 handleChange2(value) {
			        // console.log(value,'====');
			      },
			      handleChange(){},
     			 // 重置二级编目的编目catalogue_path
		       resetTwo(){
		          this.defaultoptions = []
		       },
		     	// loadAllZj(){
							
		     	// },
     			createZj(){
						this.dialogVisible2 = true
						 this.formLabelAlign= {
				 			resource:'文档',
					        },
					         this.defaultoptions = []
					        this.selectedOptions = []

     					// this.formLabelAlign.resource = '创建专辑'
     			},
     			save(){
     				this.dialogVisible = false
     				this.dis = false
     				// console.log(this.formLabelAlign)
     				var oid = this.selectedOptions[this.selectedOptions.length-1]
     				// alert(oid)
     				var vip = 0
     				if(this.formLabelAlign.dr_permission == true){
		     					vip = 0
		     				}else{
		     					vip = 1
		     				}
		     				var arr6=[]
     				this.arr5.forEach((item)=>{
     					
     						var obj  = {
		     					user:24,
		     					dr_owner:0,
		     					dr_name:item.resource_name,
		     					dr_url:item.resource_url,
		     					dr_desc:this.formLabelAlign.desc,
		     					dr_permission:vip,
		     					dr_format:item.resource_type,
		     					dr_size:item.resource_size,
		     					dr_page:0,
		     					da:this.formLabelAlign.zhuanji
		     				}
		     				if(this.formLabelAlign.resource == '文档'){
		     						
											if(oid != null){
												
														obj.catalogue = oid
											}else{
														obj.catalogue = this.formLabelAlign.fangxiang
											}
		     				}else{
		     						if(oid != null){
												
														obj.catalogue = oid
														obj.da = this.formLabelAlign.zhuanji
											}else{
														obj.da = this.formLabelAlign.zhuanji
												
														obj.catalogue = this.formLabelAlign.fangxiang
											}
										// alert(this.formLabelAlign.fangxiang)
		     				}
		     				arr6.push(obj)
     				}
							
     				)
     				this.docs = []
     				console.log(arr6)
						this.toSave(arr6)
					this.$refs.upload.clearFiles()
					this.arr5=[]
					this.uploadPercent = 0
					this.succrssDoc=0
     			},
     			cancle(){
     				this.dialogVisible = false
     				this.$refs.upload.clearFiles()
     			},
     			handleSuccess(response, file, fileList){
					this.docs = fileList
     				// console.log('fileList',fileList)
     				this.uploadPercent = +file.percentage.toFixed(0);
     				this.succrssDoc = fileList.length
     	// 			if(fileList.length != 1){
						// this.dis = true
						// this.formLabelAlign.resource = '专辑'
     	// 			}
     				this.arr5.push(response)
     				// console.log(this.arr5)
						
     			},


				handleError(err, file, fileList){
					console.log(err)
				},

     			handleProgress(event, file, fileList){
     				// console.log('000000',file)
					// this.uploadPercent = 0
					this.uploadPercent = +file.percentage.toFixed(0);
					// console.log(fileList)
     			// 	var a=[]
     			// 	fileList.forEach((item,index)=>{
								// a.push(item)
     			// 	})
     				this.docs2 = fileList
     				// console.log(this.docs2,'==========')
     				if(this.docs2.length != 1){
						this.dis = true
						this.formLabelAlign.resource = '专辑'

     				}else if(this.docs2.length ==0){
     					this.dis = false
						this.formLabelAlign.resource = '文档'
     				}

     				this.title = this.docs2[0].name
     				// console.log(this.docs2)
     				this.docLength = fileList.length
     			},


     			// 限制上传内容大小
				handleUpload(file){
     				this.token.resource_name = file.name

					 const isLt10M = file.size/1024/1024 < 10;
				    if (!isLt10M) {
				        this.$message.error('上传文件大小不能超过10MB哦!');
				        return false;
				    }
				    this.dialogVisible = true
				    this.loadZj().then((res)=>{
				    
				    		// this.allZj.forEach((item)=>{
										// this.arr4.push(item.da_name)
				    		// })
				    })
				     let obj = {
			          cata_level_num:'1'
			        }
			        this.findCatalogue({params:obj}).then(r=>{
			        }).catch((error)=>{
			        })

			        this.findCatalogue({params:{cata_level_num:'2'}}).then(r=>{

			        }).catch((error)=>{
			        })
			         this.formLabelAlign= {
				 			resource:'文档',
		        },
		         this.defaultoptions = []
		        this.selectedOptions = []
		        // this.$refs.upload.clearFiles()
				},
				
				upVideo(){
					this.dialogVisible = false
					this.triger()
				},
			//点击上传图片跳转到上传页面，暂时文档和视频跳转到一个路由
			triger(){
				$("#filess").trigger('click');
				
			},
			//点击服务条款，显示模态框
			showDialog(){
				this.centerDialogVisible=true;
			},
			
		}
	}
</script>
<style scoped>
#create2{
	font-size: 20px;
	color: green;
	cursor: pointer;
}
#create{
	color: #0099D6;
	font-size: 13px;
	cursor: pointer;
}
.el-progress-bar{
	width: 99%!important;
}
.el-form-item__label{
	width: 100px!important;
}
 /*上传表单*/
	  .upVideoContent{
		width: 1200px;
		height: 442px;
		padding:40px;
		overflow: hidden;
	 }
	 .upVideoContent .upVideoContent_left{
		width: 20%;
		height: 442px;
		float: left;
	 	font-size: 14px;
	 	margin-left: 150px;
	 	font-weight: bold;
		margin-top: -5px;
		box-sizing: border-box;
	}
	 .upVideoContent .upVideoContent_left .upVideoContent_left_bottom{
		width: 100%;
		height: 100%;
		margin-top: -5px;
	}
	 .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul{
		width: 100%;
		
		border: 1px solid #fff;
		box-sizing: border-box;
		padding: 5px;
		max-height: 80%;
		overflow: auto;
		margin-top: 0px;
	}
	 .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul li{
		width: 100%;
		height: 40px;
		list-style: none;
		margin-bottom: 5px;
		line-height: 40px;
	}
	 .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul li span:first-child{
		float: left;
		max-width: 120px;
	 	overflow: hidden;
	 	white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.edit{
		  	display: none;
		  }
		  .oli:hover > .edit{
			float: left;
			display: block;
		}
	  .upVideoContent form{
	 	float: left;
	 	margin-left: 100px;
	 	box-sizing: border-box;
	 }

	  .upVideoContent form>p{
	 	display: inline-block;
	 	color: #3585FE;
	 	font-weight: 400px;
	 	cursor: pointer;
	 	margin-left:270px
	 }
	  .upVideoContent form>p span{
	 	font-size: 14px;

	 }

	   .upVideoContent label:first-child{
		margin-right: 40px;
		font-size: 13px;
		font-weight: 400;
	 }

	  .upVideoContent span{
	 	font-size: 16px;
	 	font-weight: 400;
	 	margin-right: 10px;
	 }
	  .upVideoContent div{
	 	margin-top: 10px;
	 	position: relative;
	 }
	  .upVideoContent div div.tags{
	 	max-width: 415px;
	 	display: flex;
	 	flex-wrap: wrap;
	 	position: absolute;
	 	top: 23px;
	 	left: 95px;
	 }
	  .upVideoContent div div.tags p{
	 	background-color: rgba(0, 153, 204, 1);
	 	height:20px;
	 	line-height: 20px;
	 	margin-left:10px;
	 	margin-top: 5px;
	 	padding-left: 5px;

	 }
	  .upVideoContent div div.tags p span{
	 	font-size: 12px;
	 	color: #fff;
	 	padding-left: 5px;
	 	
	 }
	  .upVideoContent div div.tags p span:last-child{
	 	font-size: 8px;
	 	cursor: pointer;
	 	font-weight: lighter;
	 	padding: 0px;
	 	text-align: center;
	 	margin-left: -8px;

	 }
	   .upVideoContent div p.tagTitle{
	  	width: 500px;
	  	margin:20px 0 10px 93px;
	  	color: #999999;
	  	font-size: 12px;
	  }

	  .upVideoContent div input,div.realUpVideo .upVideoContent div select,div.realUpVideo .upVideoContent div textarea{
	 	width: 409px;
	 	height: 30px;
	 	font-size: 14px;
	 	padding-left: 10px
	 }

	 	.upVideoContent div textarea{
		height: 95px;
		width: 380px;
		padding-top: 10px;
		box-shadow: none;
		
	 }

	  .upVideoContent div input.des{
	  	height: 95px;
	  	margin-top: 10px;
	  }

	   .upVideoContent div span.desSpan{
	  	display: inline-block;
	  	position: relative;
	  	top: -80px;

	  }

	 
	   .upVideoContent div span.icon{
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
	 .upVideoContent div .videoTypes{
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

	 .upVideoContent div .videoTypes span{
		margin-left: 5px;
		cursor: pointer;
		height:20px;
		font-size:16px;
		line-height:20px;
		color:#666666

	}
	 .upVideoContent div button{
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







.upVideoTop .title>span{
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 24px;
		color: #0099CC

	}

.upVideoTop .title p span:last-child{
		font-weight: 400;
	}
.upVideoTop .title p span:first-child{
		font-weight: 700;
	}
.upVideoTop .title p{
		margin:0px;
		text-align: center;
     	color: #333333;
     	font-size: 18px;


	}

.upVideoTop{
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
	ul{
		list-style:none;
	}
	.upVideoDoc{
		border:1px solid #E4E4E4;
		height: 738px;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.upVideoDoc .centerDiv{
		width: 700px;
		margin:0 auto;
		margin-top: 190px;
	}

	.upVideoDoc .centerDiv .upDiv{
		
		text-align: center;
		margin-bottom: 40px;

	}
	.upVideoDoc .centerDiv .upDiv .picUrl{
		width: 80px;
		height: 77px;
		margin:0 auto;
		cursor: pointer;

	}

	.upVideoDoc .centerDiv .upDiv .selectTitle{
		font-size: 30px;
		font-weight: 550;
		margin-top: 10px;
		color: #333333
	}
	.upVideoDoc .centerDiv .upDiv .picUrl img{
		width: 80px;
		height: 77px;
	}

	.upVideoDoc .numSize,.upVideoDoc .serverDoc{
		text-align: center;
	}
	.serveA{
		color: #6C99FF;
		text-decoration: underline;
		cursor: pointer;
	}
	.upVideoDoc .serverDoc{
		font-size: 12px;
		font-weight: bold;
	}

	.upVideoDoc .numSize{
		font-size: 12px;
		margin-top: 10px;
	}


	/*模态框样式*/
	span.dialog-footer button{
		width: 74px;
		height: 40px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 500;
		text-align: center;
		cursor: pointer;
		border: 1px solid #dcdfe6;
	}

	span.dialog-footer button:first-child{
		    background: #fff;
		    border-color: #dcdfe6;
		    color: #606266;
	}

	span.dialog-footer button:first-child:hover{
		background-color:#B9D3EE;
		opacity: 0.5;
		color:#104E8B;
		border:1px solid  #409eff;
	}

	span.dialog-footer button:last-child{
		    color: #fff;
		    background-color: #409eff;
		    border-color: #409eff;
		    margin-left: 15px;

	}

	span.dialog-footer button:last-child:hover{
		opacity: 0.8
	}
	

	
</style>