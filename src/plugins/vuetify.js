import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: "mdi",
	},
	theme: {
		themes: {
			light: {
				primary: "#6fb3b8", // cyan
				secondary: "#388087", // medium dark cyan
				accent: "#badfe7", // light cyan
				error: "#FF5252", // medium light red
				info: "#6fb3b8", // cyan
				success: "#4CAF50", // green
				warning: "#FFC107", // yellow
				anchor: "#6fb3b8", // cyan
			},
		},
	},
});
