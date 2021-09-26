import { Component, onMount, onRender, onDestroy, usable as _usable, variable } from 'cosmos';
import Test from './test.js';
//const io = require("socket.io-client");
//console.log(io.value.io);

export default class App extends Component {
	//Register variable to instance

	async instance () {
		//console.log(module);
		let test = 1;

		let color = 'color: blue;';
		let test2 = <p>Test2</p>
		let array = ["arraytest", "test2"];
		let object = {
			test: {
				test: {
					bruh: "bruh"
				}
			}
		}

		//Test.test();

		if (color == 'color: blue;') {
			console.log('color is blue!')
		}

		let interval = setInterval(() => {
			test.value = test.get()+1;
			test.update();

			//_usable(object).get().test.get().test.get().bruh.value = "test";
			//_usable(object).get().test.get().test.get().bruh.update();
		}, 500)

		//console.log(_usable(object).get().test.get().test.get().bruh.get());

		console.log(object.value);


		
		/*
		setTimeout(() => {
			color.set('color: green;')
		}, 5000)
		*/
		test.subscribe((new_val, old_val) => {
			if (new_val > 10 && color !== color.get_last()) {
				color.set('color: green');
			}
		})

		onDestroy(() => {
			clearInterval(interval);
		});


		onMount(() => {
			console.log('Mounted');
		})

		onRender(() => {
			let styles = `
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
			`;

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

					<br/><br/><br/>

					<h1>{_usable(color)}</h1>

					<br /><br /><br />

					<h2 class="test" style={color}>Test {test}... <span>{test}</span></h2>

					{test} <br/>

					{test >= 10 &&
						<h2>
							bruhxdddd
						</h2>
					}

					{(test >= 10 && test <= 100) && 
						<h1>Reactivity Test {test} 
							{(test >= 30 && test <= 50) || (test >= 70 && test <= 100) && <h1>Conditional 2</h1>}
							{this.foreach(array, (item) => { return <h1>{item}</h1>; })}
							<br/>
						</h1>
					}


					<Test test={test} />
					{test} <br/>
					{test} <br/>
					{test} <br/>
					{test} <br/>
					{test} <br/>
				</div>
			)
		})
		
		this.test43();
	}

	async test43 () {
		console.log(await this.render());
	}
}

