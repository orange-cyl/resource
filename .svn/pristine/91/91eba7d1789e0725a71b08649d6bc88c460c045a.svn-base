import axios from '@/http/axios';
// import getTreeData from '@/http/getTree';
export default {
  state:{
   doc:[],
   catalogue:[],
   docId:'',
   catalogueTow:[],
   docDetails:[],
   newArr:[],
   nameArr:[],
   allZj:[],
   allVZj:[],
   name:'',
   options:[]
  },
  getters:{
   doc:state=>state.doc,
   options:state=>state.options,
   catalogue:state=>state.catalogue,
   catalogueTow:state=>state.catalogueTow,
   newArr:state=>state.newArr,
   nameArr:state=>state.nameArr,
   docId:state=>state.docId,
   name:state=>state.name,
   docDetails:state=>state.docDetails,
   allZj:state=>state.allZj,
   allVZj:state=>state.allVZj,
  },
  mutations:{
      changeAllVZj(state,data){
      state.allVZj=data
    },
    changeAllZj(state,data){
      state.allZj=data
    },
    changeTheNew(state,data){
      state.newArr=data
    },
    changeTheName(state,data){
      state.nameArr=data
    },
    changeDoc(state,data){
      state.doc=data.data.results
    },
     changeDocId(state,data){
     
      state.docId = data.docid
      state.name = data.name
    },
    changeTwoCatalogue(state,data){

      state.options=data
    },
     changeCatalogue(state,data){
      // console.log(data.data.results)
      state.catalogue=data.data.results
    },
     changeCatalogueTow(state,data){
      // console.log(data.data.results)
      state.catalogueTow=data.data.results
    },
    changeDocDetails(state,data){
        // console.log('1111111111',data.data.results)

      state.docDetails=data.data.results
      // console.log(state.docDetails)

    },
  },    
  actions:{
    toSave(context,param){
      return new Promise((resolve,reject)=>{
          axios.post('/up_man_perres/up_docsupload/',param).then((res)=>{
            // console.log(res.data.results)
          // context.commit("changeAllZj",res.data.results)
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
        })
    },
    // 加载所有视频专辑
     loadVZj(context,params){
      return new Promise((resolve,reject)=>{
          axios.get('/up_man_perres/up_valbum/').then((res)=>{
            // console.log(res.data.results)
          context.commit("changeAllVZj",res.data.results)
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
        })
    },
    // 加载所有文档专辑
    loadZj(context,params){
      return new Promise((resolve,reject)=>{
          axios.get('/up_man_perres/up_dalbum/').then((res)=>{
            // console.log(res.data.results)
          context.commit("changeAllZj",res.data.results)
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
        })
    },
    changeNewArr(context,params){
         return new Promise((resolve,reject)=>{
         context.commit("changeTheNew",params)
        })
      },
    changeNameArr(context,params){
         return new Promise((resolve,reject)=>{
         context.commit("changeTheName",params)
        })
      },
     toCollections(context,params){
         return new Promise((resolve,reject)=>{
          axios.post('/up_site_res/docsCollectCreated/',params).then((res)=>{
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
        })
      },
      toFavorr(context,params){
         return new Promise((resolve,reject)=>{
          axios.post('/up_site_res/ObjectFavorCreated/',params).then((res)=>{
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
        })
      },
     findDocDetails(context,params){
        return new Promise((resolve,reject)=>{
          axios.get('/up_site_res/docsListDetail/',params).then((res)=>{
          // console.log('======',res.data.results)
          context.commit("changeDocDetails",res)
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
        })
      },
      // 点击文档标题，获取id
      setDocId(context,obj){
           return new Promise((resolve,reject)=>{
             context.commit("changeDocId",obj)
              resolve()
            })
      },
      // 获取编目
      findCatalogue(context,params){
        return new Promise((resolve,reject)=>{
          if(params.params.cata_level_num == 1){
             axios.get('/up_site_res/catalogue/',params).then((res)=>{
              // console.log('======',res.data.data)
              context.commit("changeCatalogue",res)
              resolve(res)
            }).catch((error)=>{
              reject(error)
            })
          }else{
            axios.get('/up_site_res/catalogue/',params).then((res)=>{
              // console.log('======',res.data.data)
              context.commit("changeCatalogueTow",res)
              resolve(res)
            }).catch((error)=>{
              reject(error)
            })
          }
         
        })
      },

      //  findTowCatalogue(context,params){
      //   return new Promise((resolve,reject)=>{
      //        axios.get('/up_man_catalog/catanestlist/',params).then((res)=>{
      //         // console.log('======',res.data.data)
      //         let datas = res.data.data

      //         context.commit("changeTwoCatalogue",datas)
      //         resolve(res)
      //       }).catch((error)=>{
      //         reject(error)
      //       })
          
      //   })
      // },
     
      // 获取文档列表
      findDocList(context,params){
        return new Promise((resolve,reject)=>{
          axios.get('/up_site_res/docs/',params).then((res)=>{
          // console.log('======',res.data.data)
          context.commit("changeDoc",res)
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
        })
      }
  }
}