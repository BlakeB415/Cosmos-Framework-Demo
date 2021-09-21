import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import Cosmos from 'cosmos/compiler';
const babel_ = babel.babel;

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
		sourcemap: true,
		format: name == "bundle" ? 'iife' : "cjs",
		name: 'app',
		exports: 'auto',
		file: `public/build/${name}.js`
	},
	plugins: [
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		//Does JSX shit.
		babel_({
			"plugins": [
				["@babel/plugin-transform-react-jsx", {
					"pragma": "this.createElement"
				}]
			],
			include: './src/**',
			babelHelpers: 'inline'
		}),
		Cosmos(),
		name == "bundle" ? resolve({ browser: true }) : resolve(),
		commonjs(),
		

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		name == "bundle" ? !production && serve() : undefined,

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		name == "bundle" ? !production && livereload('public') : undefined,

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		name == "bundle" ? production && terser() : undefined,
	],
	watch: {
		clearScreen: false
	}
}));
