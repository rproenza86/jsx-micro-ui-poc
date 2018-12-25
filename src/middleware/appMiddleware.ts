import { Store } from 'redux';

export const appMiddleware = (store: Store<any>) => (next: any) => (action: any) => {
    next(action);

    // tslint:disable-next-line:no-console
    console.log(action);

    switch (action.type) {
        // TODO: Implement some logic
        default: {
            break;
        }
    }
};
