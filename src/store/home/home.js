import axios from '@/http/axios';
export default {
    namespaced:true,
    state:{
        // 轮播图
        wheels:[],
        // 院校
        schoolList:[],
        // 视频榜单
        videoList:[],
        // 文档榜单
        docList:[],
        // 一级编目
        catalogues:[],
        // 二级编目
        catalogueTwo:[],
        // 免费视频
        freeVideos:[],
        // 最新动态
        lastResourceList:[],
        // 推荐教师
        teacher:[]
    },
    getters:{
        
    },
    mutations:{
        refreshDocList(state,docList){
            state.docList = docList;
        },
        refreshVideoList(state,videoList){
            state.videoList = videoList;
        },
        refreshSchoolList(state,schoolList){
            state.schoolList = schoolList;
        },
        refreshWheels(state,wheels){
            state.wheels = wheels;
        },
        refreshCataLogue(state,catalogues){
            state.catalogues = catalogues;
        },
        refreshCataLogueTwo(state,catalogueTwo){
            state.catalogueTwo = catalogueTwo;
        },
        refreshFreeVideo(state,freeVideos){
            state.freeVideos = freeVideos;
        },
        refershLastResource(state,lastResourceList){
            state.lastResourceList = lastResourceList;
        },
        refreshTeacher(state,teacher){
            state.teacher = teacher;
        }
    },
    actions:{
        // 修改视频封面
        async editVideoImg(conctext,params){
            let res = await axios.post('http://10.0.6.5:16012/up_man_perres/video_cover_update/',params)
        },
        // 推荐教师
        async findTeacher(context,params){
            // 通过编目查询推荐教师
            let res = await axios.get('/up_site_res/teacherranklist/',{params});
            res.data.data.forEach((item)=>{
                var teacherArr = [];
                let params = {
                    id:item.id
                }
                // 通过教师查询该教师的资源
                axios.get('/up_site_res/teacherworkslist/',{params}).then((res)=>{
                    teacherArr = res.data.results
                    item.childs = teacherArr;
                })
            })
            setTimeout(function(){
                context.commit('refreshTeacher',res.data.data)
            },300)
        },
        // 最新动态
        async findLastResource(context){
            let res = await axios.get('/up_site_res/LatestResourcesList');
            // 遍历最新动态中的每一个结果得到item，将item.catalogue_path作为参数传递给视频查询接口
            res.data.data.forEach((item)=>{
                var videoArr = [];
                var docArr = [];
                let params = {
                    catalogue_path:item.catalogue_path
                }
                axios.get('/up_site_res/videos/',{params}).then((res)=>{
                    // 每查询一次就将查询到的结果放到obj数组中
                    videoArr = res.data.results;
                    // 对最新动态查询到的每一项，新增一个属性名,存放改编目下的最新视频
                    item.videoSource = videoArr
                })
                axios.get('/up_site_res/docs/',{params}).then((res)=>{
                    docArr = res.data.results;
                    // 对最新动态查询到的每一项，新增一个属性名,存放该编目下的最新文档
                    item.docSource = docArr
                })
            })
            // 使用延时器，否则数据没处理完，页面就会显示未处理完的数据，即没有  docSource 和  videoSource
            setTimeout(function(){
                context.commit('refershLastResource',res.data.data);
            },800)
        },
        // 免费视频
        async findFreeVideo(context,params){
            let res = await axios.get('/up_site_res/videos/',{params});
            context.commit('refreshFreeVideo',res.data.results);
        },
        // 二级编目
        async findCataLogue_two(context,params){
            let res = await axios.get('/up_site_res/catalogue/',{params});
            context.commit('refreshCataLogueTwo',res.data.results)
        },
        // 一级编目
        async findCataLogue(context,params){
            let res = await axios.get('/up_site_res/catalogue/',{params});
            context.commit('refreshCataLogue',res.data.results)
        },
        // 文档榜单
        async findDocList(context){
            let res = await axios.get('/up_site_res/rank_docs_res/');
            context.commit('refreshDocList',res.data.data)
        },
        // 视频榜单
        async findVideoList(context){
            let res = await axios.get('/up_site_res/rank_video_res/');
            context.commit('refreshVideoList',res.data.data)
        },
        // 查找院校
        async findSchool(context){
            let res = await axios.get('/up_man_school/schoollist/');
            context.commit('refreshSchoolList',res.data.results)
        },
        // 查找轮播图
        async findWheels(context){
            let res = await axios.get('/up_site_res/carousellist/');
            context.commit('refreshWheels',res.data)
        }
    }
}

