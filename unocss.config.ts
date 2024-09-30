import {
	defineConfig, presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	presetWind,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';


export default defineConfig({
	theme: {
	},
	shortcuts: [
		[/((max|min)-)?size-\W+/, ([a]) => {
			return `${a.replace('size', 'w')} ${a.replace('size', 'h')}`;
		}],
	],
	presets: [
		presetWind(),
		presetUno(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'Roboto',
			},
		}),
		presetIcons({

		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass(),
	],
});
