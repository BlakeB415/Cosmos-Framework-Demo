
const App = require('../public/build/bundle_ssr');
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {parentPort, workerData} = require("worker_threads");

//console.log('Created')

const dom = new JSDOM(fs.readFileSync(__dirname + '\\..\\public/index.html'));

const { window } = dom;
global.window = window;
global.document = window.document;
global.console.log = (e) => { console.warn(`[${Date.now()}] ${e}`) }

let app = new App({
	props: {
	}
});

parentPort.on("message", async data => {
	await app.mount(window.document.body);
	parentPort.postMessage(dom.serialize())
	await app.destroy();
	process.exit(1);
})