(async function () {

	const {StaticPool} = require("node-worker-threads-pool");
	const express = require('express')
	const path = require("path");
	const app = express()
	const port = 5000

	const pool = new StaticPool({
		size: 20,
		task: path.resolve('./ssr/render.js')
	});

	app.get('/', async (req, res) => {

		pool.exec({path: req.baseUrl + req.path}).then(result => {
			res.send(result);
		})
	})

	app.use(express.static('public'))

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})
	
})()


