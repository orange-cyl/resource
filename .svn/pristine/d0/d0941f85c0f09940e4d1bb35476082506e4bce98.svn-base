<template>
	<div class="myStarVideo">
		<div v-for="item in videos" @click="turnVideoPlay(item)">
				<img :src=list.picUrl alt="">
				<p>{{item.object_name}}</p>
				<p>{{item.collect_time | dateParse}}</p>
				<span v-if="item.va !=null ">专辑</span>
				<!-- <span v-else>专辑</span> -->
			</div>
		<div class="pageDiv">
			 <el-pagination background @current-change="handleCurrentChange" :page-size="pagesize" layout="total, prev, pager, next" :total="total"></el-pagination>
		</div>
	</div>
</template>
<script>
import {mapActions,mapGetters,mapMutations} from 'vuex';
import axios from 'axios'
	export default {
		
		data(){
			return {
				page:1,
		        pagesize:6,
		        total:10,
		        list:{
		        	picUrl:'https://github.com/pluslicy/assets/blob/master/resource/%E4%B8%AA%E4%BA%BA%E7%A9%BA%E9%97%B4/u1871.jpg?raw=true'
		        },
				videos:[]

			}
		},
		//映射数据
		computed:{
			...mapGetters(['video'])
		},
		created(){
			
			this.loadVideo()
		},
		methods:{
			...mapActions(['findAllVideo','GetVideoId']),
			 /* 分页页数更改之后 */
		      handleCurrentChange(val) {
		        // alert(val)
		        this.page = val
		      },

		      loadVideo(){
				let form = {
	          page:this.page,
	          page_size:this.pagesize,
	          user_id:24
	        }
				axios.get('/up_man_perres/videoCollectionList/',{params:form}).then(r=>{
				
				this.videos = r.data.results
				// console.log(this.videos)
			}).catch(e=>{

			})
			},
			turnVideoPlay(item){
				let obj ={
		          videoid:item.id
		        }

		        // console.log(obj);
		        this.GetVideoId(obj).then((r)=>{
		        	// alert(1)
		        	
		        })
		        //点击我的视频跳转到视频播放页面
					this.$router.push("/video/content")
			}
			
		}
	}

</script>

<style scoped>
	
	.myStarVideo{
		display: flex;
		flex-wrap: wrap;

		/* justify-content: space-around; */
	}
	.myStarVideo div{
		width: 166px;
		margin:10px 10px 0 0;
		cursor: pointer;
		position: relative;
	}
	.myStarVideo p{
		margin:0px;
		padding: 0px;
		font-size: 12px;
	}

	.myStarVideo span{
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

	.myStarVideo p:last-child{
		color: #BCBCBC;
	}
	.myStarVideo div img{
		width: 166px;
		height: 92px;
		margin:0px;
	}

	/*分页样式*/
	.myStarVideo div.pageDiv{
		width: 500px;
		position: absolute;
		bottom: 30px;
		left: 830px;
	}
</style>