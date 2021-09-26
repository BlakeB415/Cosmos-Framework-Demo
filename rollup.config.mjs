import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import babel_ from '@rollup/plugin-babel';
const babel = babel_.babel;
import Cosmos from 'cosmos/compiler';

import child_process from 'child_process';
const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = child_process.spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default ['bundle', 'bundle_ssr'].map((name, index) => ({
	input: name == "bundle" ? 'src/main.js' : 'src/App.js',
	output: {
		//sourcemap: true,
		format: name == "bundle" ? 'iife' : "cjs",
    	strict: false,
		name: 'app',
		file: `public/build/${name}.js`,
		exports: 'auto'
	},
	plugins: [
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		//Does JSX shit.
		Cosmos(),
		name == "bundle" ? resolve({ browser: true, dedupe: ['cosmos'] }) : resolve({ browser: true, dedupe: ['cosmos'] }),
		commonjs({
			sourceMap: false,
			transformMixedEsModules:true
		}),
		name == "bundle" && babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-env"]
		}),
		

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		name == "bundle" ? !production && serve() : undefined,

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		name == "bundle" ? !production && livereload('public') : undefined,

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		name == "bundle" ? terser() : undefined,
	],
	watch: {
		clearScreen: false
	}
}));
