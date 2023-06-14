import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/lib/components",
			"$components/*": "src/lib/components/*"
		}
	},
	preprocess: vitePreprocess(),
	shadcn: {
		componentPath: "./src/lib/components/ui"
	}
};
export default config;
