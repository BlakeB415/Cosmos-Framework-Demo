import { Component, onMount, onRender, variable } from 'cosmos';
export default class App extends Component {
	//Register variable to instance

	instance () {
		let test = variable(0);

		let second_counter = 100;
		test.set(second_counter++)

		setInterval(() => {
			test.set(second_counter++)
		}, 1000)

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
				</div>
			)
		})
	}
}

