const parse5 = require('parse5');

const document = parse5.parseFragment(`
	<div>
		<Test><h1></h1></Test>
		<div>
			test
		</div>
	</div>
`, { voidElements: ['test'] });

console.log(document.childNodes[1])