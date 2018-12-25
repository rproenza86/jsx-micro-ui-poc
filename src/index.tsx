import GlobalEventDistributor from '@rproenza/events-distributor';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import './css/icon.css';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore from './store/configureStore';

const initialState = {};
const appStore = configureStore(initialState) as Store;

export const EventsDistributor: GlobalEventDistributor = new GlobalEventDistributor();
EventsDistributor.registerStore('ParentApp', appStore);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
