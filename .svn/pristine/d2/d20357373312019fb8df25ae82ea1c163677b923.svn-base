import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Index from '@/pages/index.vue'
// 关于杰普
import About from '@/pages/about'
// 文档
import Doc from '@/pages/doc'
import DocContent from '@/pages/doc/content'
// 个人
import Personal from '@/pages/personal'
import PersonalSpace from '@/pages/personal/space'
//我的视频
import MyVideo from '@/pages/personal/myVideo'
//我的文档
import MyDoc from '@/pages/personal/myDoc'
import PersonalCollection from '@/pages/personal/collection'
import PersonalSettings from '@/pages/personal/settings'
import UpVideo from '@/pages/personal/upVideo'
import RealUpVideo from '@/pages/personal/realUpVideo'
import RealUpDoc from '@/pages/personal/realUpDoc'
// 视频
import Video from '@/pages/video'
import VideoContent from '@/pages/video/content'
import UploadVideo from '@/pages/personal/uploadVideo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },{
      path: '/about',
      component: About
    },{
      path: '/doc',
      component: Doc,
    },{
      path: '/doc/content',
      component: DocContent
    },{
      path: '/personal',
      component: Personal,
    },{
      path: '/personal/space',
      component: PersonalSpace,
      children:[{
        //我的视频
        path: '/myVideo',
        name: 'MyVideo',
        component: MyVideo
      },{
        //我的文档
        path: '/myDoc',
        name: 'MyDoc',
        component: MyDoc
      }]
    },{
      path: '/personal/collection',
      component: PersonalCollection
    },{
      path: '/personal/settings',
      component: PersonalSettings
    },{
      //视频和文档上传首页
      path: '/personal/upVideo',
      component: UpVideo
    },
    {
      //视频上传首页
      path: '/personal/uploadVideo',
      component: UploadVideo
    },{
      //视频和文档上传内容页-信息填写
      path: '/personal/realUpVideo',
      component: RealUpVideo
    },
    {
      //视频和文档上传内容页-信息填写
      path: '/personal/realUpDoc',
      component: RealUpDoc
    },{
      path: '/video',
      component: Video
    },{
      path:'/video/content',
      component:VideoContent
    }
  ]
})
