import Vuee from 'vue';//ES6
//
//导入3个路由组件
// import Home from '../components/home.vue'
// 404组件
import notfound from '../components/notfound.vue'

// 在这里导入router组件（插件）
import vueRouter from 'vue-router';
// 路由是一个插件，需要启用才会生效
Vuee.use(vueRouter);

//激活后就可以使用了
let router=new vueRouter({
    // 默认是hash模式，特点是在url中会有#，可以将其改为正常的url地址
    mode:"history",
    // 全局修改默认的高亮样式
    linkActiveClass:"cur",
    // 配置路由，需要配置很多个url地址，所以用数组
    routes:[
        // {
        //     // path表示url的访问路径
        //     // component表示url对应的那个组件
        //     // http://localhost:8080/
        //     path:'/',
        //     name:'home',
        //     component:Home,
        //     //alias:'/index' //不会有高亮了
        // },
        // {
        //     path:'/search',
        //     name:'search',
        //     component:search
        // },
        {
           path:'*',
           component:notfound, //404页面
        }
    ]
});
// 将router.js导出去给main.js使用
export default router;