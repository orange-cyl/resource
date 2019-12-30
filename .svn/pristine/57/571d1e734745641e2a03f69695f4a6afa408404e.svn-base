import axios from '@/http/axios';
export default {
    state:{
        // 编目数据
        Videocatalogue:[],
        catalogueSecond:[],
        // 视频数据
        video:[],
        // 视频详情
        videoDetials:[],
        // 评论列表
        commentList:[],
        // 评论上下文
        commentContext:[],
        // 播放记录
        recordList:[],
    },
    getters:{
        Videocatalogue:state => state.Videocatalogue,
        catalogueSecond:state => state.catalogueSecond,
        video:state => state.video,
        videoDetials:state => state.videoDetials,
        commentList:state => state.commentList,
        commentContext:state => state.commentContext,
        recordList:state => state.recordList
    },
    mutations:{
        // 一级编目事件
        changeCatalogue(state,data){
            state.Videocatalogue = data.data.results;
        },
        // 二级编目事件
        changeCatalogueSecond(state,data){
            state.catalogueSecond = data.data.results;
        },
        // 视频事件
        changeVideo(state,data){
            state.video = data.data.results;
        },
        // 视频详情
        changeVideoDetials(state,data){
            state.videoDetials = data.data.results[0];
        },
        // 一级评论
        refreshComment(state,data){
            state.commentList = data.data;
        },
        // 评论上下文
        refreshContext(state,data){
            state.commentContext = data;
        },
        // 视频观看记录
        refreshRecordList(state,recordList){
            state.recordList = recordList;
        },
    },
    actions:{
        // 视频观看次数
        playTimes(context,params){
            return new Promise((resolve,reject)=>{
                axios.post('/up_site_res/VrPlayTimesCreate/',params).then((res)=>{
                    resolve(res)
                })
            })
        },
        // 取消收藏
        deleteCollection(context,params){
            return new Promise((resolve,reject)=>{
                axios.post('/up_site_res/VideoCollectDelete/',params).then((res)=>{
                    resolve(res)
                })
            })
        },
        // 取消点赞
        deleteFavor(context,params){
            return new Promise((resolve,reject)=>{
                axios.post('/up_site_res/ObjectFavorDeleteView/',params).then((res)=>{
                    resolve(res)
                })
            })
        },
        // 新增观看记录
        createRecord(context,params){
            return new Promise((resolve,reject)=>{
                axios.post('/up_man_perres/playrecordcreate/',params).then((res)=>{
                    resolve(res)
                })
            })
        },
        // 获取视频观看记录
        playRecordList(context,params){
            return new Promise((resolve,reject)=>{
                axios.get('/up_man_perres/playrecordlist/',{params}).then((res)=>{
                    context.commit('refreshRecordList',res.data.results)
                    resolve(res)
                })
            })
        },
        // 添加评论
        createComment(context,params){
            return new Promise((resolve,reject)=>{
                axios.post('/up_man_comment/createcomment/',params).then((res)=>{
                    // context.dispatch('findCommentList');
                    resolve(res)
                })
            })
        },
        // 获取评论上下文
        findCommentContext(context,params){
            return new Promise((resolve,reject)=>{
                axios.get('/up_man_comment/commentcontext/',{params}).then((res)=>{
                    context.commit('refreshContext',res.data.data.replay_list)
                    resolve(res)
                })
            })
        },
        // 获取评论
        findCommentList(context,params){
            return new Promise((resolve,reject)=>{
                axios.get('/up_man_comment/commentlist/',params).then((res)=>{
                    context.commit('refreshComment',res)
                    resolve(res)
                }).catch((error)=>{
                    reject(error)
                })
            })
        },
        toVideoSave(context,param){
            return new Promise((resolve,reject)=>{
                axios.post('/up_man_perres/up_videoupload/',param).then((res)=>{
                    resolve(res)
                }).catch((error)=>{
                    reject(error)
                })
            })
        },
        // 视频收藏
        isCollection(context,params){
            // 在使用reject的时候，需要写new promise
            return new Promise((resolve,reject)=>{
                axios.post('/up_site_res/videoCollectCreated/',params)
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        // 视频点赞
        isFavor(context,params){
            // 在使用reject的时候，需要写new promise
            return new Promise((resolve,reject)=>{
                axios.post('/up_site_res/ObjectFavorCreated/',params)
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        // 视频详情
        findVideoDetials(context,params){
            return new Promise((resolve,reject)=>{
                axios.get('/up_site_res/videoListDetail/',params)
                .then(res => {
                    context.commit("changeVideoDetials",res)
                    resolve(res)
                })
                .catch(err => {
                    reject(err);
                })
            })
            
        },
        // 获取所有视频
        findAllVideo(context,params){
            return new Promise((resolve,reject)=>{
                axios.get('/up_site_res/videos/',params)
                .then(res => {
                    context.commit("changeVideo",res)
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            })
            
        },
        // 检索所有编目
        findAllCatalogue(context,params){
            // 根据后台的cata_level_num来判断，如果是1，进入第一个查询
            if(params.params.cata_level_num == 1){
                // axios中的params是vue页面的params，值是obj，意思是只查询cata_level_num为1的
                axios.get('/up_site_res/catalogue/',params)
                .then(res => {
                    context.commit("changeCatalogue",res)
                })
                .catch(err => {
                    reject(err)
                })
            }else{
                axios.get('/up_site_res/catalogue/',params)
                .then(res => {
                    context.commit("changeCatalogueSecond",res)
                })
                .catch(err => {
                    reject(err)
                })
            }
        },
    }
}