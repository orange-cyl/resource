// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 按需导入组件
import { 
  Progress,
   Upload ,
   Button ,
  // 模态框
  Dialog, 
  // 分页
  Pagination,
  // 步骤条
  Steps,
  Step,
  // 级联选择器
  Cascader,
  // 走马灯
  Carousel,CarouselItem,
  // 面包屑
  Breadcrumb,BreadcrumbItem,
  // 表单
  Form,FormItem,Input,InputNumber,Radio,RadioGroup,RadioButton,Checkbox,CheckboxButton,CheckboxGroup,Select,Option,OptionGroup,
  // 提示
  Alert,Loading,MessageBox,Message,Notification
} from 'element-ui';

import store from './store';

Vue.use(Progress)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Cascader)
Vue.use(Upload)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);

Vue.use(Alert)
Vue.use(Loading) 
// 按需引入提示框的时候不能使用use ， 否则会直接执行
// Vue.use(MessageBox)
// Vue.use(Message)
// Vue.use(Notification)
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// Vue.use(ElementUI);
Vue.use(Loading.directive);

Vue.config.productionTip = false

// 全局过滤器，处理时间格式
Vue.filter('dateFormat',function(dateStr){
  var dt = new Date(dateStr)
  // yyyy-mm-dd
  var y = dt.getFullYear()
  var m = (dt.getMonth() + 1).toString().padStart(2,'0')
  var d = dt.getDate().toString().padStart(2,'0')
  var hh = dt.getHours().toString().padStart(2,'0')
  var mm = dt.getMinutes().toString().padStart(2,'0')
  var ss = dt.getSeconds().toString().padStart(2,'0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
