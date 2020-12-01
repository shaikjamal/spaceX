

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from './store/history';
import App from './App';
import configureStore from './store/Store';

// const theme = createMuiTheme(customTheme);
const initialState = {};
const store = configureStore(initialState, history);

const Root = () => (
    <Provider store={store}>
            <ThemeProvider>
                <CssBaseline />
                <App />
            </ThemeProvider>
    </Provider>
);
// eslint-disable-next-line no-undef
ReactDOM.render(<Root />, document.getElementById('root'));