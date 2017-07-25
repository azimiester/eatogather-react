import React from 'react';
import Header from './Header';

const FourOhFour = () => (
	<div className="404">
		<Header />
		<h1>404, Page Not Found</h1>
		<p>{`Ah! Snap. You've hit the Four oh Four.`}</p>
	</div>
);

export default FourOhFour;
