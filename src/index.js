import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-less/semantic.less'
import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import store from './store';

ReactDOM.render(<Provider store={store()}>
	<Router>
		<App />
	</Router>
	<ReduxToastr
		timeOut={5000}
		newestOnTop={false}
		preventDuplicates
		position="top-right"
		getState={(state) => state.toastr}
		transitionIn="fadeIn"
		transitionOut="fadeOut"
		progressBar
		closeOnToastrClick
	/>
</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
