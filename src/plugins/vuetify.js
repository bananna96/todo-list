import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdi', // default - only for display purposes
	},
	theme: {
		themes: {
			light: {
				primary: '#6fb3b8', // pastell türkis
				secondary: '#388087', // pfau
				accent: '#badfe7', // baby blue
				error: '#FF5252',
				info: '#6fb3b8',
				success: '#4CAF50',
				warning: '#FFC107',
				//background: '#388087', // sand f6f6f2
				anchor: '#6fb3b8',
			},
		},
	},
});
