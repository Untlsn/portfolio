// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import 'eslint-plugin-only-warn';

export default withNuxt({
	rules: {
		'vue/no-multiple-template-root': 0,
		'vue/html-indent': [1, 'tab'],
		'vue/max-attributes-per-line': ['error', {
			singleline: {
				max: 3,
			},
			multiline: {
				max: 1,
			},
		}],
	},
});
