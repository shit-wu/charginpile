import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('components/content/home/Home')
const Chart = () => import('views/chart/Chart')
const Management = () => import('views/management/Management')
const Position = () => import('views/position/Position')
const Register = () => import('views/register/Register')
const Token = () => import('views/token/Token')

Vue.use(VueRouter);

const routes = [
	{
		path: '',
		redirect: '/token'
	},


	{
		path: '/Home',
		name: 'Home',
		component: Home,
		meta: {
			requireAuth: true,
			title: "主页",
		},
		children: [
			{
				path: '/Chart',
				name: 'Chart',
				component: Chart,
				meta: {
					requireAuth: true,
					title: "图表"
				}
			},
			{
				path: '/Management',
				name: 'Management',
				component: Management,
				meta: {
					requireAuth: true,
					title: "管理"
				}
			},
			{
				path: '/Position',
				name: 'Position',
				component: Position,
				meta: {
					requireAuth: true,
					title: "位置"
				}
			},
			{
				path: '/Register',
				name: 'Register',
				component: Register,
				meta: {
					requireAuth: true,
					title: "注册"
				}
			},
			{
				path: '/Token',
				name: 'Token',
				component: Token,
				meta: {
					requireAuth: false,
					title: "登录"
				}
			},
		]
	},
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}



router.beforeEach((to, from, next) => {
	if (to.path === '/Token') {
		next();
		document.title = to.meta.title
	} else {
		let token = sessionStorage.getItem('Authorization');

		if (to.meta.title) {
			if ((token === null || token === '') && to.meta.requireAuth) {
				alert('请登录后再试')
				next('/Token')
			} else {
				document.title = to.meta.title
				next();
			}
		}
	}
})

export default router