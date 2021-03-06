import * as React from 'react';
import { Component } from 'react';
import { FAB, Toolbar } from 'react-material-design';
import { EventsDistributor } from './../../index';

class Header extends Component {
    public resetAppointmentDatePicker() {
        const resetState = {
            type: 'INIT_SUCCESS', // tslint:disable-next-line:object-literal-sort-keys
            payload: {
                testDrive: {
                    day: '2018-12-10T16:39:14.953Z',
                    email: 'raul@gmail.com',
                    firstName: 'Raul',
                    hasError: false,
                    isCalculating: false,
                    lastName: 'Rodriguez Proenza',
                    phone: '123-624-4321',
                    time: 'Morning'
                }
            },
            meta: { appSource: 'ParentApp', eventType: 'BROAD_CAST_ACTION' }
        };
        EventsDistributor.dispatch(resetState);
    }
    public render() {
        const title = 'Micros for Macros';
        // tslint:disable:jsx-no-lambda no-console
        return (
            <div>
                <div onClick={() => this.resetAppointmentDatePicker()}>
                    <FAB location="floating-bottom-right" icon="restore" />
                </div>
                <Toolbar title={title} />
            </div>
        );
    }
}

export default Header;
