import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import reducers from '../reducers';
import middlewareUtil from './middlewareUtil';

export default function configureStore(preloadedState: {}): Store {
    return createStore(
        combineReducers({ ...reducers}),
        preloadedState,
        compose(
            applyMiddleware(...middlewareUtil)
        )
    ) as Store;
}
