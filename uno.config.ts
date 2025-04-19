import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetWind3,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		},
	},
	presets: [
		presetWind3(),
		presetAnimations(),
		presetShadcn({
			color: "zinc",
			darkSelector: '[data-kb-theme="dark"]',
			radius: 0.3,
		}),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
