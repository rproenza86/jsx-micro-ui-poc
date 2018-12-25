// externals
import { Reducer } from 'redux';

export const appReducer: Reducer<any> = (state: any = {}, action: any): any => {
    const newState = {...state}
    switch (action.type) {
        case "INIT_SUCCESS": {
            const testDrive = action.payload.testDrive ||
                action.payload.offer.testDrive ||
                {};
            return {... newState, ...testDrive };
        }
        default: {
            return state;
        }
    }
};
