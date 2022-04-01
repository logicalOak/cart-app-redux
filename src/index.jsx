import React from 'react';
import { render } from 'react-dom';
// Styles
import './index.scss';
// Root
import Root from './Root';
// Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);
