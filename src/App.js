import React, { Component } from 'react';
import CatComponent from './CatComponent.js'; // for default exports with "default" keyword; only one default export per file
import { GraceHopperQuoteComponent } from './GraceHopperQuoteComponent.js'; // for "named exports" without "default" keyword
import MouseComponent from './MouseComponent.js'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
