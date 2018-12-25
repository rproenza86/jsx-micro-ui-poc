import AppointmentDatePicker from '@rproenza/appointment-date-picker';
import * as React from 'react';
import { Component } from 'react';
import { Card } from 'react-material-design';
import { EventsDistributor } from './../../index';

class MicroUICmp1 extends Component {
    public componentDidMount() {
        const { createStore, initApp, appName } = AppointmentDatePicker;
        const TestDriveInitState = {
            testDrive: {
                day: '2018-12-19T16:39:14.953Z',
                email: 'dfffdf@gmail.com',
                firstName: 'Raul',
                hasError: false,
                isCalculating: false,
                lastName: 'Rodriguez Proenza',
                phone: '786-624-8576',
                time: 'Morning'
            }
        };
        const testDriveStore = createStore(TestDriveInitState);
        EventsDistributor.registerStore(appName, testDriveStore);
        initApp(testDriveStore, 'MicroUICmp1', EventsDistributor);
    }
    public render() {
        return (
            <Card style={{ maxWidth: '500px'}}>
                <div id="MicroUICmp1" />
            </Card>
        );
    }
}

export default MicroUICmp1;
