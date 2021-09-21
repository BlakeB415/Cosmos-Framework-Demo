import { Component, onMount, onRender, onDestroy, variable } from 'cosmos';
export default class Test extends Component {
	//Register variable to instance

	instance () {
		//console.log('test', this.$parent);
		let test = this.$props.test;

		onMount(() => {
			console.log('Mounted');
		})

		onRender(() => {
			return (
				<div>

					<div>
						This is inside a nested component.
					</div>
					{test} <br/>
					{test} <br/>
					{this.condition([test], (vars) => { //This method would be added automatically during compile process.
								return (vars[0] >= 10 && vars[0] <= 100) ? (
									<h1>Reactivity Test {test} 
									{this.condition([test], (vars) => { return (vars[0] >= 30 && vars[0] <= 50) || (vars[0] >= 70 && vars[0] <= 100) ? <h1>Bruh</h1> : null; })}
									<br/>
									</h1>
								): null; 
					})}
				</div>
			)
		})
	}
}

