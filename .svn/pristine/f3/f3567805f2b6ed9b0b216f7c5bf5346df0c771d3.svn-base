<template>
	<div class="myStarDoc">
		<div class="docs">
			<table>
				<thead>
					<tr>
						<td>名称</td>
						<td>浏览</td>
						<td>赞</td>
						<td>收藏</td>
						<td>收藏日期</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="doc in docs">
						<td @mouseenter="showDiv($event)" @mouseleave="hideDiv($event)" >
							<span @click="turnPageToShow">
								<FileIcon :fa="fa"/>
								<span class="icon" >
									{{doc.object_name}}
									<!-- <i class="fa fa-file-pdf-o"></i> -->
								</span>
							</span>
							
							<div class="deleteAndChangeDiv">
								<span style="display:none" class="docIdSpan">{{doc.object_id}}</span>
								
								<span @click="deleteDoc($event)"><i class="fa fa-trash-o fa-fw"></i>删除</span>
							</div>
						</td>
						<td>{{doc.read_time}}</td>
						<td>{{doc.favor_num}}</td>
						<td>{{doc.collection_num}}</td>
						<td>{{doc.collect_time | dateParse}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="pageDiv">
			 <el-pagination background @current-change="handleCurrentChange" :page-size="pagesize" layout="total, prev, pager, next" :total="total"></el-pagination>
		</div>
	</div>
</template>
<script>
//引入icon组件
import FileIcon from '../../components/fileicon.vue'
import axios from '@/http/axios';
export default {
	components:{
	    FileIcon
	  },
	data(){
		return {
			page:1,
	        pagesize:6,
	        total:10,
			fa:"fa-file-pdf-o",
			docs:[]
		}
	},
	//映射数据
	computed:{

	},
	created(){
		//设置视口高度
		this.loadDocs()
	},
	watch:{
		page:function(now,old) {
	        this.loadDocs();
	      },
		},
	methods:{
		loadDocs(){
			let form = {
	          page:this.page,
	          page_size:this.pagesize,
	          user:24
	        }
			axios.get('/up_man_perres/docsCollectionList/',{params:form}).then(r=>{
	         	// console.log(r.data)
	         	this.total = r.data.count
	         	this.docs = r.data.results
	        }).catch((error)=>{
	         
	        })
		},

		 /* 分页页数更改之后 */
      handleCurrentChange(val) {
        // alert(val)
        this.page = val
      },
		//鼠标移出隐藏div
		hideDiv(e){
			$(e.target).children('.deleteAndChangeDiv').hide();
		},
		//鼠标移入文档名称一列时显示隐藏的div(包含删除和修改按钮)
		showDiv(e){
			//清除其他td中隐藏Div
			/*var trs=$(e.target).parents('tbody').children();
			trs.each(function(index,item){
				$(item).children(':first').children('.deleteAndChangeDiv').hide();
			});*/
			//给当前鼠标所在td中的div进行显示
			$(e.target).children('.deleteAndChangeDiv').show();
		},
		//点击删除按钮时
		deleteDoc(e){
			//获取需要删除的id
			var id=$(e.target).siblings(".docIdSpan").html();
			// console.log(id);
			let obj = {
			  "object_id": id,
			  "object_type": 'docs'
			}
			if(id){
				  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			        	axios.post('/up_man_perres/collectionDeleted/',obj).then(r=>{
					         this.$message({
							            type: 'success',
							            message: '删除成功!'
							          });
					         this.loadDocs()
					        }).catch((error)=>{
					         
					        })
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消删除'
			          });          
			        });
			}

		},
		//点击当前文档时跳转到文档阅读页面
		turnPageToShow(e){
			//跳转到文档阅读页面
			this.$router.push({path: '/doc/content'})
		}
		
	}
	}

</script>
<style scoped>
	.myStarDoc .docs table{
		border-collapse: collapse;
		width: 100%;

	}
	.myStarDoc .docs thead tr{
		margin-bottom: 10px;
		border-top: 1px solid #E4E4E4;
		margin-top: 5px;
		padding-top: 10px
	}
	.myStarDoc .docs tr td{
		height: 37px;
		font-size: 14px;
		text-align: center;

	}

	.myStarDoc .docs tr{
		display: flex;
	}
	.myStarDoc .docs tr td:first-child{
		flex:4;
		cursor: pointer;
	}

	.myStarDoc .docs tr td:first-child>*{
		float: left;
	}
	.myStarDoc .docs tr td:first-child div{
		margin-left: 20px;
		display: none
	}

	.myStarDoc .docs tr td:first-child div span{
		margin-left: 5px;
	}

	
	.myStarDoc .docs tr td:nth-child(2){
		flex:1;
	}
	.myStarDoc .docs tr td:nth-child(3){
		flex:1;
	}
	.myStarDoc .docs tr td:nth-child(4){
		flex:1;
	}
	.myStarDoc .docs tr td:nth-child(5){
		flex:2;

	}
	.myStarDoc .docs tbody tr td{
		font-size: 12px;
	}
	.myStarDoc .docs tbody tr td:nth-child(5){
		color: #BCBCBC
	}
	.myStarDoc .docs tbody tr td:first-child{
		flex:4;
	}
	.myStarDoc .docs tbody tr td:nth-child(5){
		flex:2;
	}
	/* .myStarDoc .icon{
		width: 20px;
		height: 20px;
		display: inline-block;
		background-color: #F72612;
		border-radius: 5px;
		text-align: center;
		color: #fff;
		margin-right: 5px
	} */
	.myStarDoc .icon{
		margin-left: 5px
	}
	/*分页样式*/
	.myStarDoc div.pageDiv{
		width: 500px;
		position: absolute;
		bottom: 30px;
		left: 830px;
	}
</style>