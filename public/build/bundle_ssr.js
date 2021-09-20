'use strict';

var cosmos = require('cosmos');

class App$1 extends cosmos.Component {
  //Register variable to instance
  instance() {
    let test = cosmos.variable(0);
    let second_counter = 100;
    test.set(second_counter++);
    setInterval(() => {
      test.set(second_counter++);
    }, 1000);
    cosmos.onMount(() => {
      console.log('Mounted');
    });
    cosmos.onRender(() => {
      return this.createElement("div", null, this.createElement("div", null, "This is inside a nested component."), test, " ", this.createElement("br", null), test, " ", this.createElement("br", null));
    });
  }

}

class App extends cosmos.Component {
  //Register variable to instance
  async instance() {
    let test = cosmos.variable(1);
    let color = cosmos.variable('color: blue;');
    cosmos.variable(this.createElement("p", null, "Test2"));
    setInterval(() => {
      test.set(test.get() + 1);
    }, 1000);
    /*
    setTimeout(() => {
    	color.set('color: green;')
    }, 5000)
    */

    test.subscribe((new_val, old_val) => {
      if (new_val > 10 && color.get() !== color.get_last()) {
        color.set('color: green');
      }
    });
    cosmos.onMount(() => {
      console.log('Mounted');
    });
    cosmos.onRender(() => {
      let styles = cosmos.variable(`
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

      function testFn() {
        alert('Test');
      }

      return this.createElement("div", {
        id: "app",
        style: "text-align:center;"
      }, this.createElement("style", null, styles), this.createElement("div", {
        style: "width:100%;text-align:center;height:50px;text-align:center;box-shadow: 0px 0px 18px 3px rgba(0,0,0,0.55);margin-bottom:20px;"
      }, this.createElement("p", {
        style: "height:100%;"
      }, "Header")), this.createElement("h1", {
        onClick: testFn
      }, "Click me!"), this.createElement("h2", {
        class: "test"
      }, "Test ", test, "... ", this.createElement("span", null, test)), test, " ", this.createElement("br", null), this.condition([test], vars => {
        //This method would be added automatically during compile process.
        if (vars[0] >= 0 && vars[0] <= 20000) {
          return this.createElement("h1", null, "Reactivity Test ", test, this.condition([test], vars => {
            if (vars[0] >= 100 && vars[0] <= 200 || vars[0] >= 400 && vars[0] <= 600) {
              return this.createElement(App$1, null);
            }
          }), this.createElement("br", null));
        }
      }), test, " ", this.createElement("br", null), test, " ", this.createElement("br", null), test, " ", this.createElement("br", null), test, " ", this.createElement("br", null), test, " ", this.createElement("br", null));
    });
  }

}

module.exports = App;
//# sourceMappingURL=bundle_ssr.js.map
