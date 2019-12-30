<!-- 视频 -->
<template>
	<div class="upVideoDoc">
		<div class="centerDiv">
			<div class="upDiv">
				<div class="picUrl" @click="turnUpdatePage">
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
					  <img id='filess' slot="trigger" src="https://github.com/pluslicy/assets/blob/master/resource/%E8%A7%86%E9%A2%91%E4%B8%8A%E4%BC%A0/u1957.png?raw=true" alt="">
					 
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
					<span>上传视频：</span>
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
	             <el-progress :stroke-width="16" :percentage="uploadPercent"></el-progress>
	            </span>
				<div class="uped">
					已上传：{{succrssDoc}}/{{docLength}}个
				</div>
			</div>
		</div>
			<div class="upVideoContent">
			<div class="upVideoContent_left">
				<span>您上传的视频：</span>
				<div class="upVideoContent_left_bottom">
					<ul>
						<li class="oli" v-for="item in docs">
							<span>{{item.name}}</span>
							<span class="edit"><i style="cursor:pointer;margin-right:10px;"  @click='updataVideoName(item)' class="fa fa-pencil-square-o" aria-hidden="true"></i>
							<i class="fa fa-trash-o" @click='deleteVideo(item)' style="cursor:pointer;" aria-hidden="true"></i>
							</span>
							<span>
								<i class="fa fa-paperclip" v-if='item.ready' title="已上传附件" style="cursor:pointer" aria-hidden="true" @click='addDoc(item)'></i>
								<i class="fa fa-times"  v-if='item.ready'  style="cursor:pointer;margin-left:5px;" aria-hidden="true" title="清空附件" @click='resetDoc(item)'></i>
							</span>
							<span v-if='!item.ready' @click='addDoc(item)'>+附件</span>

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
			      <el-radio label="视频" :disabled='dis'></el-radio>
			      <el-radio label="专辑"></el-radio>
			    </el-radio-group>
			     <!--  <el-radio  v-model="formLabelAlign.resource" :checked="check"  :disabled='dis'>文档</el-radio>
			      <el-radio  v-model="formLabelAlign.resource" :checked="chec">专辑</el-radio> -->
			    <!-- </el-radio-group> -->
			  </el-form-item>
			   <el-form-item v-if="formLabelAlign.resource=='专辑'" style="width:600px;" label="所属专辑: ">
					  <el-select style="width:400px;"  v-model="formLabelAlign.zhuanji">
					      <el-option v-for='item in allVZj' :label="item.va_name" :value="item.id"></el-option>
					      <!-- <el-option label="区域二" value="beijing"></el-option> -->
					    </el-select>
					    <span id="create" @click='createZj()'>创建专辑</span>
				  </el-form-item>
				  <!--  <el-form-item v-if="formLabelAlign.resource=='创建专辑'" style="width:600px;" label="创建专辑: ">
				   <el-input v-model="zj"  style="width:400px;"></el-input>
				   <span id="create2">
				   			<i class="el-icon-circle-check
	}
	}
"></i>
				   </span>
				  </el-form-item> -->
				  <el-form-item v-if="formLabelAlign.resource=='视频'" style="width:600px;" label="方向：">
					  <el-select style="width:400px;"  v-model="formLabelAlign.fangxiang">
					      <el-option v-for='item in catalogue' :label="item.catalogue_name" :value="item.id"></el-option>
					     
					    </el-select>
				  </el-form-item>
				
				   <el-form-item v-if="formLabelAlign.resource=='视频'" style="width:600px;" label="技术: ">
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
				  <el-form-item label="文档描述：" v-if="formLabelAlign.resource=='视频'">
				    <el-input style="width:400px;" type="textarea" v-model="formLabelAlign.desc"></el-input>
				  </el-form-item>
				</el-form>
		</div>
		 
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="cancle">取 消</el-button>
		    <el-button type="primary" @click="save">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 创建专辑模态框 -->
		<el-dialog
		  title="创建专辑"
		  :visible.sync="dialogVisible2"
		  :show-close="false"
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
		<!-- 附件模态框 -->
		<el-dialog
		  title="上传文档"
		  :visible.sync="dialogVisible3"
		  width="50%"
		  :show-close="false"
		  >
		 <el-upload
		  class="upload-demo"
		   ref="uploadd"
		  action="http://10.0.6.5:53001/FileStorageApp/create_resource/"
		  
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :before-remove="beforeRemove"
		  :auto-upload="false"
		  :before-upload='beforeUpload'
		  :on-success="handleSuccess2"
		  :data="token2"
		  :on-change='changeTxt'

		  :file-list="fileList">
		  <el-button size="small" type="primary">点击上传</el-button>
		  <div slot="tip" class="el-upload__tip"></div>
		</el-upload>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="close">取 消</el-button>
		    <el-button type="primary" @click="saveD">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 修改上传附件名的模态框 -->
<el-dialog
  title="修改文件名"
  :visible.sync="dialogVisible4"
  width="30%"
  :show-close="false"
  >
  <div style="margin-top: 15px;" id="sele">
  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="课件" value="课件"></el-option>
      <el-option label="笔记" value="笔记"></el-option>
      <el-option label="代码" value="代码"></el-option>
    </el-select>
   
  </el-input>
</div>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible4 = false">取 消</el-button>
    <el-button type="primary" @click="changeName">确 定</el-button>
  </span>
</el-dialog>

<!-- 修改视频名模态框 -->
<el-dialog
  title="修改视频名"
  :visible.sync="dialogVisible5"
  width="30%"
  >
 	<el-input placeholder="请输入视频名" v-model="videoname"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible5 = false">取 消</el-button>
    <el-button type="primary" @click="saveVideoName">确 定</el-button>
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
				videoname:'',
				dialogVisible5:false,
				input:'',
				select:'',
				dialogVisible4:false,
				 fileList: [],
				dialogVisible3:false,
				dialogVisible2: false,
				zj:{},
				dis:false,
				succrssDoc:0,
				docLength:0,
				token:{token:"sss"},
				token2:{token:"rrr"},
				docs:[],
				docs2:[],
				arr4:[],
				videoD:[],
				uploadPercent:0,
				formLabelAlign: {
				 	resource:'视频',
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
		        a:[],
		        value:[],
				defaultoptions: [],
        		selectedOptions: [],
        		videoDocId:1,
        		arr6:[],
        		vid:false,
        		
			}
		},
		//映射数据
		computed:{
     	...mapGetters(['newArr','nameArr','allVZj','catalogue','catalogueTow'])
		},
		created(){
			
				this.selectContent="视频";
				this.acceptType="video/*";//当用户点击上传视频时，控制打开文件夹只能识别视频
		},
		watch:{
			
			'formLabelAlign.fangxiang':function(now,old) {
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
     			...mapActions(['changeNewArr','changeNameArr','loadVZj','findCatalogue','toVideoSave']),

					// 选择完附件之后
     			changeTxt(file,fileList){
     				// console.log(file,'!!!!!!')
     				if(file.status=="ready"){
     					this.input = ''
						this.select=''
						this.dialogVisible4 = true
     				}
     
     			},

     			// 修改视频名模态框保存
     			saveVideoName(){
     				this.dialogVisible5 = false
				// console.log(this.videoNameId)
				this.arr5.forEach((item,index)=>{
								if(item.resource_id == this.videoNameId){
									// console.log(item)
									item.resource_name = this.videoname
								}
						})
						this.docs.forEach((item,index)=>{
								if(item.response.resource_id == this.videoNameId){
									item.name = this.videoname
								}
						})
     			},

     			// 更改视频名
     			updataVideoName(item){
					this.dialogVisible5 = true
					this.videoNameId = item.response.resource_id
					
     			},

     			// 重置附件
				resetDoc(data){
							this.videoDocId = data.response.resource_id	
							this.videoD.forEach((item,index)=>{
								if(item.id==this.videoDocId){
									var deleteD = []
										deleteD.push(item.at.attach_url)
								axio({
								    url: 'http://10.0.6.5:53001/FileStorageApp/delete_resource/',
								    headers:{
							            'Content-Type': 'application/json'
							        },
								    method: 'post',
								  	
								    data: JSON.stringify({resource_urls:deleteD})
								  })

								this.videoD.splice(index,1)
							}
						})
							this.docs.forEach((i,index)=>{
									
									if(i.response.resource_id==this.videoDocId){
										// 给docs中的对象新增属性,用来改变是否为重传
											// i.docA = '重传'
										// 给docs中的对象新增属性,用来改变是否显示有文件图标
											i.ready = false
							}
						})
							let terget = {}
							let arrTar=[]
							Object.assign(terget,this.docs)
							for(var i in terget){
								arrTar.push(terget[i])
							}
							this.docs =arrTar
							

				},
				// 更改名字
     			changeName(){
     				this.dialogVisible4 = false

     				if(this.input!=''||this.select!=''){
     					this.token2.resource_name = this.select+'-'+this.input
     				}
     				this.$refs.uploadd.submit();
     				this.docs.forEach((i,index)=>{
									if(i.response.resource_id==this.videoDocId){
										// 给docs中的对象新增属性,用来改变是否为重传
											// i.docA = '重传'
										// 给docs中的对象新增属性,用来改变是否显示有文件图标
											i.ready = true
							}
						})

     			},
     			// 删除附件
				 handleRemove(file, fileList) {

			        // console.log(file,fileList);
			       			 var deleteD = []
								 deleteD.push(file.url)
			       			 axio({
								    url: 'http://10.0.6.5:53001/FileStorageApp/delete_resource/',
								    headers:{
							            'Content-Type': 'application/json'
							        },
								    method: 'post',
								  	
								    data: JSON.stringify({resource_urls:deleteD})
								  })
			       			 this.videoD.forEach((item,index)=>{
			       			 	if(item.at.attach_url == file.url){
									this.videoD.splice(index,1)
			       			 	}
			       			 })

			      },
			      handlePreview(file) {
			        console.log(file);
			      },

			      close(){
					this.dialogVisible3 = false
			      	this.fileList = []
			      	// this.$refs.uploadd.clearFiles()

			      },
			     
			      beforeRemove(file, fileList) {
			        return this.$confirm(`确定移除 ${ file.name }？`);
			      },

				saveD(){
					 
					this.dialogVisible3 = false
					
				},

				// 删除视频
				deleteVideo(item){
					
					var deleteId = item.response.resource_id
					
						var that = this
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
			          console.log(this.docs.length)
			           if(this.docs.length ==0 || this.docs.length ==1){
			        	this.dis = false
						this.formLabelAlign.resource = '视频'
			        }

			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消删除'
			          });          
			        });
					
			       
				},
				
				// 添加附件
				addDoc(data){
						
						if(this.vid){
							this.dialogVisible3 = true
							this.fileList=[]
							if(data.status === "success"){
								this.videoDocId = data.response.resource_id	
					}
					
				}else{
					this.$notify({
			          title: '警告',
			          message: '视频还未上传完成哦',
			          type: 'warning'
			        });

				}
				},


     			triger(){
					$("#filess").trigger('click');
				
				},
				// 文件上传之前,判断文件的大小
				beforeUpload(file){
					
					if(this.input==''&&this.select==''){
						
						this.token2.resource_name = file.name
					}
					 const isLt1M = file.size/1024/1024 < 10000;
				    if (!isLt1M) {
				        this.$message.error('上传文件大小不能超过10MB哦!');
				        return false;
				    }
					
				},
				// 创建专辑
			createDa(){
						this.dialogVisible2 = false
						var oid = this.selectedOptions[this.selectedOptions.length-1]
						let obj={
							  // catalogue: 0,
							  va_desc: this.formLabelAlign.desc,
							  user: 24,
							  va_name: this.formLabelAlign.daName
						}
						if(oid != null){	
							obj.catalogue = oid				
						}else{
							obj.catalogue = this.formLabelAlign.fangxiang
						}
						axios.post('/up_man_perres/up_cre_valbum/',obj).then(r=>{
							this.loadVZj()
						}).catch(e=>{
							
						})


					},

			 handleChange2(value) {
			        // console.log(value,'====');
			      },

			     //  
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
				// 查询编目
			findTowCatalogue(params){
			  		axios.get('/up_man_catalog/catanestlist/',params).then((res)=>{
			              let datas = res.data.data

			            this.defaultoptions =this.getTreeData(res.data.data) 
			             
			            }).catch((error)=>{
			            
			            })
     			},

     			 // 重置二级编目的编目catalogue_path
		      resetTwo(){
		          this.defaultoptions = []
		       },
		     	
		     	// 创建专辑
     			createZj(){
						this.dialogVisible2 = true
						this.formLabelAlign= {
				 			resource:'视频',
					        },
					         this.defaultoptions = []
					        this.selectedOptions = []
     					// this.formLabelAlign.resource = '创建专辑'
     			},

     			// 保存视频
     			save(){
     				this.arr6=[]
     				// alert(this.formLabelAlign.zhuanji)
     				this.dialogVisible = false
     				this.dis = false
     				var oid = this.selectedOptions[this.selectedOptions.length-1]
     				// console.log(this.formLabelAlign)
     				var vip = 0
     				if(this.formLabelAlign.dr_permission == true){
		     					vip = 0
		     				}else{
		     					vip = 1
		     				}
		     				
     				this.arr5.forEach((item)=>{
     					// console.log(item.resource_id,'========')
     						var obj  = {
		     					// catalogue:,
		     					user:24,
		     					vr_owner:0,
		     					vr_name:item.resource_name,
		     					vr_url:item.resource_url,
		     					vr_desc:this.formLabelAlign.desc,
		     					vr_permission:vip,
		     					vr_format:item.resource_type,
		     					vr_size:item.resource_size,
		     					vr_time:0,
		     					vr_suffix:'test1',
		     					va:this.formLabelAlign.zhuanji,
		     					attachment:[],
		     					catalogue:null,
		     					// vr_page:0
		     				}
							this.videoD.forEach((im,index)=>{
								if(item.resource_id ==im.id){
									obj.attachment.push(im.at)
								}
							})

		     				if(this.formLabelAlign.resource == '视频'){
		     						
											if(oid != null){
												
														obj.catalogue = oid
											}else{
														obj.catalogue = this.formLabelAlign.fangxiang
											}
		     				}else{
		     					obj.vr_desc = ''
										
		     				}
		     				this.arr6.push(obj)
     				}
							
     				)
     				this.docs = []
     				// console.log(arr6)
						this.toVideoSave(this.arr6)
					this.$refs.upload.clearFiles()
					this.arr5=[]
					this.uploadPercent = 0
					this.succrssDoc=0

     			},
     			cancle(){
     				this.dialogVisible = false
     				this.$refs.upload.clearFiles()
     			},
     			// 上传附件成功后
     			handleSuccess2(response, file, fileList){
					
					var ob = {
						id:this.videoDocId,
						at:
						{
						attach_name:response.resource_name,
						attach_size:response.resource_size,
						attach_permission:1,
						attach_owner:24,
						attach_url:response.resource_url
						}
					}
					this.videoD.push(ob)

					 this.fileList.push({
				        name: response.resource_name,
				        url: response.resource_url
				      });

     			},
     			// 视频上传成功
     			handleSuccess(response, file, fileList){
					this.vid = true
     				this.a = []

					this.docs.push(fileList[fileList.length-1])
					if(this.docs.length !==0){
						fileList = this.docs
					}
     				fileList.forEach((item,index)=>{
     							// item.docA = '上传'
     							if(!item.ready){
     								item.ready = false
     							}
								this.a.push(item)
     				})
     				this.docs = this.a
     				this.uploadPercent = +file.percentage.toFixed(0);
     				this.succrssDoc = fileList.length
     				this.arr5.push(response)
     			},

				handleError(err, file, fileList){
					// console.log(err)
				},
				
				// 视频上传过程中触发的方法
     			handleProgress(event, file, fileList){
						
					// console.log(this.docs)
					this.uploadPercent = +file.percentage.toFixed(0);
					
     				
     				this.docs2 = fileList
     				

     				if(this.docs2.length != 1){
						this.dis = true
						this.formLabelAlign.resource = '专辑'
     				}else if(this.docs2.length ==0){
     					this.dis = false
						this.formLabelAlign.resource = '视频'
     				}
     				this.title = this.docs2[0].name
     				// console.log(this.docs)
     				this.docLength = fileList.length
     			},
     			
     			// 限制上传内容大小
				handleUpload(file){
     				this.token.resource_name = file.name

					 const isLt10M = file.size/1024/1024 < 10000;
				    if (!isLt10M) {
				        this.$message.error('上传文件大小不能超过10MB哦!');
				        return false;
				    }
				    this.dialogVisible = true
				    this.loadVZj().then((res)=>{
				    
				    		// this.allVZj.forEach((item)=>{
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
				 			resource:'视频',
		        },
		         this.defaultoptions = []
		        this.selectedOptions = []
		         
				},
				handleChange(){
					
				},
				upVideo(){
					this.dialogVisible = false
					this.triger()
				},
			//点击上传图片跳转到上传页面，暂时文档和视频跳转到一个路由
			turnUpdatePage(){
				$("#file").click();
				//this.$router.push({path: '/personal/realUpVideo'})
			},
			//点击服务条款，显示模态框
			showDialog(){
				this.centerDialogVisible=true;
			},
			
		}
	}
</script>
<style scoped>
.upVideoDoc >>> #sele .el-select .el-input {
    width: 100px!important;
  }
  .edit{
  	display: none;
  }
.oli:hover > .edit{
	float: left;
	display: block;
}

 .upVideoDoc >>> #sele .input-with-select .el-input-group__prepend {
    background-color: #fff!important;
  }

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
	/* .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul li span:last-child{
		color: blue;
		float: right;
		cursor: pointer;

	}*/
	 .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul li span:first-child{
	 	/*display: inline-block;*/
	 	float: left;
	 	max-width: 100px;
	 	overflow: hidden;
	 	white-space: nowrap;
	    text-overflow: ellipsis;
	 }
	 .upVideoContent .upVideoContent_left .upVideoContent_left_bottom ul li span:last-child{
		color: blue;
		float: right;
		cursor: pointer;
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