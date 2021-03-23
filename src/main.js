import Vuee from 'vue';//ES6
// 需要将组件导入进来，填充到#app那个口子上
import App from './App.vue'
// 导入rouer.js文件
import router from './router' //index.js

// 导入axios，需要启用
import axios from 'axios';
// 需要挂载到vue的实例中，变成Vue的全局方法
Vuee.prototype.$axios=axios;
// 导入echarts并启用
import echarts from 'echarts'
// 挂载到vue的实例中，可以到处使用了
Vuee.prototype.echarts=echarts;
// 关闭生产环境的错误代码提示
Vuee.config.productionTip = false;
// CSS文件
require('./assets/css/reset.css')
// 生成一个vue的实例
new Vuee({
    router,
    el:"#app",
    // 要在#app中显示内容,需要将app.vue显示到index.html中的div#app处
    render:function(ce){
        return ce(App);
    }
});