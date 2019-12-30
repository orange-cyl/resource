<template>
	<div class="myVideo">
		<div class="myVideoText">
			<span class="background"></span>
			<span>我的视频</span>
			<!-- {{video}} -->
		</div>
		
		<!-- 视频列表 -->
		<div class="videos">
			<div v-for="item in video" :key="item.id">
				<div style="height:100px;width:166px;position:absolute;top:-7%;z-index:20" class="xpf"></div>
				<img :src="item.vr_img" style="postion:relative">
				<p @click="turnVideoPlay(item)">{{item.vr_name}}</p>
				<p>{{item.vr_created_time | dateParse}}</p>
				<span v-if="item.va !=null ">专辑</span>
				<!-- <span v-else>专辑</span> -->
				<!-- 修改按钮 -->
				<el-upload
					ref='upload'
					class="avatar-uploader"
					action="http://10.0.6.5:53001/FileStorageApp/create_resource/"
					:data='token'
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon" @click="upHandler(item)"></i>
					<div class="uploadText">修改封面</div>
				</el-upload>
			</div>
		</div>


		<div class="pageDiv">
			 <el-pagination background :pager-count='5' @current-change="handleCurrentChange" :page-size="pagesize" layout="total, prev, pager, next" :total="total"></el-pagination>
		</div>
	</div>
</template>
<script>
import axios from '@/http/axios';
import {mapActions,mapGetters,mapMutations} from 'vuex';

	export default {
		inject:['reload'],
		data(){
			return {
				id:'',
				token:{token:"sss"},
				imageUrl: '',
				page:1,
		        pagesize:10,
		        total:10,
			}
		},
		//映射数据
		computed:{
     		...mapGetters(['video'])
		},
		created(){
			this.findAllVideo()
			this.loadVideo()
		},
		watch:{
		page:function(now,old) {
	        this.loadVideo();
	      },
		},
		methods:{
			  ...mapActions(['findAllVideo']),
			  ...mapActions('home',['editVideoImg']),
				handleAvatarSuccess(res, file) {
					this.imageUrl = URL.createObjectURL(file.raw);
					// 参数封装
					let obj = {
						id:this.id,
						object_type:"video",
						user:24,
						vr_img:res.resource_url
					}
					this.editVideoImg(obj).then((res)=>{
						this.reload()
					})
				},
				// 获取当前视频id
				upHandler(item){
					this.id = item.id;
				},
				beforeAvatarUpload(file) {
					const isJPG = file.type === 'image/jpeg';
					const isLt2M = file.size / 1024 / 1024 < 2;

					if (!isJPG) {
						this.$message.error('上传头像图片只能是 JPG 格式!');
					}
					if (!isLt2M) {
						this.$message.error('上传头像图片大小不能超过 2MB!');
					}
					return isJPG && isLt2M;
				},
				




			/* 分页页数更改之后 */
			handleCurrentChange(val) {
				this.page = val
			},
      		loadVideo(){
				let form = {
	          page:this.page,
	          page_size:this.pagesize,
	          user_id:24
	        }
			axios.get('/up_man_perres/up_videos/',{params:form}).then(r=>{
				this.videos = r.data.results
			}).catch(e=>{

			})

			},
			turnVideoPlay(item){
				//点击我的视频跳转到视频播放页面
				this.$router.push({
					path:"/video/content",
					query:{videoId:item.id}
				})
			}
			
		}
	}

</script>
<style scoped>
	/* 修改视频封面 */
	.avatar-uploader{
		position: absolute !important;
		top: -6%;
		width: 166px !important;
		height: 92px !important;
	}
	.videos >>> .el-upload,
	.videos >>> .el-icon-plus{
		width: 166px !important;
		height: 92px !important;
	}
	.videos >>> .el-icon-plus::before{
		margin-top: -40px;
		margin-left: -15px;
		position: absolute;
		z-index: 30;
		color: white;
	}
	.uploadText{
		position: absolute !important;
		top:0;
		font-size: 16px;
		color: white;
	}
	.avatar-uploader{
		display: none;
	}
	.videos .xpf:hover ~ .avatar-uploader{
		display: block;
		background-color: rgba(0,0,0,0.5);
	}
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




	.videoname{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.myVideo{
		margin:12px 0 0 10px;
	}

	.myVideo .background{
		width:4px;
		height: 30px;
		background-color: #3399FF
	}
	.myVideo .myVideoText{
		display: flex;
	}
	.myVideo .myVideoText span:last-child{
		font-size: 16px;
		margin-left: 10px;
		line-height: 33px;
	}

	.myVideo .videos{
		display: flex;
		flex-wrap: wrap;

		/* justify-content: space-around; */
	}
	.myVideo .videos div{
		width: 166px;
		margin:10px 10px 0 0;
		cursor: pointer;
		position: relative;

	}
	.myVideo .videos p{
		margin:0px;
		padding: 0px;
		font-size: 12px;
	}

	.myVideo .videos span{
		font-weight: 400;
		font-size: 12px;
		text-align: center;	
		color: #fff;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 5px;
		display: inline-block;
		width: 38px;
		height: 19px;
		position: absolute;
		right: 0px;
		top: 0px
	}

	.myVideo .videos p:last-child{
		color: #BCBCBC;
	}
	.myVideo .videos div img{
		width: 166px;
		height: 92px;
		margin:0px;
	}

	/*分页样式*/
	.myVideo div.pageDiv{
		width: 500px;
		position: absolute;
		bottom: 30px;
		left: 830px;
	}
</style>