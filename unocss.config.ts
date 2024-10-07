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
	rules: [
		['c_', { content: '\'\\00a0\'' }],
	],
	shortcuts: [
		// hocus:bg-black -> hover:bg-black focus:bg-black
		[/hocus:(.+)/, ([,content]) => {
			return `hover:${content} focus:${content}`;
		}],
		// max-size-40 -> max-h-40 max-w-40
		[/((min|max)-)?size-(.+)/, function ([, prefix = '', , value]) {
			if (value?.endsWith('v')) {
				return `${prefix}w-${value}w ${prefix}h-${value}h`;
			}
			return `${prefix}w-${value} ${prefix}h-${value}`;
		}],
		/** grid-cols-3_1 is equal to grid-cols-[3fr_1fr] */
		[/^grid-(cols|rows)-([\d_]{3,})$/, ([, type = '', numbers = '']) => {
			return `grid-${type}-[${numbers.replaceAll('_', 'fr_')}fr]`;
		}],
		/** grid-cols-auto-4 is equal to grid-cols-[auto_auto_auto_auto] */
		[/^grid-(cols|rows)-auto-(\d+)$/, ([, type, value = '0']) => {
			return `grid-${type}-[repeat(${value},auto)]`;
		}],
		/** grid-cols-fit-100 -> grid-template-columns: repeat(auto-fit, minmax(400, 1fr)); */
		[/^grid-(cols|rows)-fit-(\S+)$/, ([, type, value]) => {
			const numValue = Number(value);
			if (!Number.isNaN(numValue)) value = `${numValue / 4}rem`;
			return `grid-${type}-[repeat(auto-fit,minmax(${value},1fr))]`;
		}],
	],
	presets: [
		presetWind(),
		presetUno(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'Lato',
				mono: 'Fira Code',
			},
		}),
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'height': 'auto',
				'min-height': '1em',
				'white-space': 'nowrap',
				'color': 'transparent',
			},
			collections: {
				my: {
					chartjs: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" width="192px" height="192px" viewBox="0 0 192 192" xml:space="preserve"><path fill="#36A2EB" d="M161.271,96.556c-22.368,0.439-17.709,14.599-33.473,18.18c-16.014,3.638-18.542-39.111-34.552-39.111  c-16.012,0-19.559,41.526-39.608,70.034l-0.572,0.807l42.985,24.813l65.22-37.651V96.556z" /><path fill="#FFCE56" d="M161.271,95.267c-7.488-9.61-12.567-20.658-23.494-20.658c-19.337,0-14.249,31.545-35.62,31.545  c-21.373,0-23.62-33.931-47.832-2.035c-7.715,10.163-13.925,21.495-18.803,32.218l60.529,34.943l65.22-37.651V95.267z" /><path opacity="0.8" fill="#FE6184" d="M30.829,108.334c7.338-20.321,10.505-36.779,24.514-36.779  c21.371,0,26.458,60.039,44.779,53.931c18.318-6.105,16.282-38.669,44.779-38.669c5.424,0,10.962,3.323,16.371,8.698v38.113  l-65.22,37.651l-65.222-37.651V108.334z" /><path fill="#E7E9ED" d="M96,176l-69.292-39.999V56L96,16l69.292,40v80L96,176z M34.849,131.301L96,166.602l61.151-35.301V60.7  L96,25.399L34.849,60.7V131.301z" /></svg>',
					leaflet: '<svg width="160" height="159" viewBox="0 0 160 159" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2275 114.742C44.5808 132.207 55.8188 142.96 69.4053 137.355C71.2357 136.6 75.1364 135.622 75.1364 135.622C86.7257 135.128 95.1414 119.686 86.6019 101.116C86.0816 99.9844 85.4156 98.9094 84.679 97.9054C67.101 73.9461 54.2378 70.8486 32.5495 62.1941C32.3366 80.1503 28.0012 95.8485 35.2275 114.742Z" fill="url(#paint0_linear_527_12)" /><path d="M32.5423 62.2036L77.5005 133C78.4228 133.072 80.5015 131 80.5015 131L32.5423 62.2036Z" fill="url(#paint1_linear_527_12)" /><path d="M45 149L89 124L94.5 128.5L75.5 135.5L46 154.5L43.5 155L37 158.5H32.5L33 154L41 149.5L42 147H43L43.5 149H45Z" fill="#3B3B3A" /><path d="M81.5208 55.5001C68.1455 84.9367 65.3439 110.177 86.0874 122.273C88.8822 123.903 94.02 128 94.02 128C106.296 142.732 135.194 138.1 150.688 107.688C151.253 106.579 151.713 105.381 152.068 104.188C166.187 56.8246 157.389 37.0313 147.021 0.00012207C123.52 17.5001 98.8594 27.4109 81.5208 55.5001Z" fill="url(#paint2_linear_527_12)" /><path d="M147.001 0.000244141L89.5 124.5C90.3212 125.769 94.0005 128 94.0005 128L147.001 0.000244141Z" fill="url(#paint3_linear_527_12)" /><defs><linearGradient id="paint0_linear_527_12" x1="66.7009" y1="111.839" x2="97.5831" y2="141.542" gradientUnits="userSpaceOnUse"><stop stop-color="#87C342" /><stop offset="1" stop-color="#79BB43" /></linearGradient><linearGradient id="paint1_linear_527_12" x1="61.2387" y1="113.446" x2="78.0481" y2="149.001" gradientUnits="userSpaceOnUse"><stop stop-color="#7DBC42" /><stop offset="1" stop-color="#4B9734" /></linearGradient><linearGradient id="paint2_linear_527_12" x1="116.501" y1="93.5001" x2="108.501" y2="163" gradientUnits="userSpaceOnUse"><stop stop-color="#BFE86E" /><stop offset="1" stop-color="#6B823E" /></linearGradient><linearGradient id="paint3_linear_527_12" x1="109.001" y1="88.0001" x2="79.501" y2="145" gradientUnits="userSpaceOnUse"><stop stop-color="#8CC644" /><stop offset="1" stop-color="#446021" /></linearGradient></defs></svg>',
				},
			},
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass(),
	],
});
