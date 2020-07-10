import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({

	state: {
		// 储存token
		Authorization: sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : ''
	},

	mutations: {
		// 修改token,并将token存入localStorage
		changeLogin(state, user) {
			state.Authorization = user.Authorization;
			sessionStorage.setItem('Authorization', user.Authorization);
		}
	}
})