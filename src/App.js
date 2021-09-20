import { Component, onMount, onRender, variable } from 'cosmos';
import Test from './test.js'

export default class App extends Component {
	//Register variable to instance

	async instance () {
		let test = variable(1);

		let color = variable('color: blue;');
		let test2 = variable(<p>Test2</p>)

		setInterval(() => {
			test.set(test.get()+1)
		}, 1000)

		/*
		setTimeout(() => {
			color.set('color: green;')
		}, 5000)
		*/
		test.subscribe((new_val, old_val) => {
			if (new_val > 10 && color.get() !== color.get_last()) {
				color.set('color: green');
			}
		})


		onMount(() => {
			console.log('Mounted');
		})

		onRender(() => {
			let styles = variable(`
				* {
					box-sizing: border-box;
					letter-spacing: -0.05em !important;
				}
				
				#app {
					min-height: 100vh;
					margin:0;
					width:100%;
				}

				body {
					margin: 0;
				}

				blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
					margin: 0;
				}
				
				body {
					font-family: 'Inter', sans-serif;
					padding: 0;
					overflow: hidden;
					position: fixed;
					margin: 0;
					min-height: 100vh;
				}

				html, body {
					width:100%;
				}

				.test {
					color: green;
				}
			`);

			function testFn () {
				alert('Test')
			}

			return (
				<div id="app" style="text-align:center;">
					<style>{styles}</style>
					<div style="width:100%;text-align:center;height:50px;text-align:center;box-shadow: 0px 0px 18px 3px rgba(0,0,0,0.55);margin-bottom:20px;">
						<p style="height:100%;">Header</p>
					</div>
					<h1 onClick={testFn}>Click me!</h1>

					<h2 class="test">Test {test}... <span>{test}</span></h2>

					{test} <br/>
					{this.condition([test], (vars) => { //This method would be added automatically during compile process.
							if (vars[0] >= 0 && vars[0] <= 20000) {
								return (
									<h1>Reactivity Test {test} 
									{this.condition([test], (vars) => {
											if ((vars[0] >= 100 && vars[0] <= 200) || (vars[0] >= 400 && vars[0] <= 600)) {
												return <Test />
											}
									})}
									<br/>
									</h1>
								); 
							} 
					})}
					{test} <br/>
					{test} <br/>
					{test} <br/>
					{test} <br/>
					{test} <br/>
				</div>
			)
		})
	}
}

