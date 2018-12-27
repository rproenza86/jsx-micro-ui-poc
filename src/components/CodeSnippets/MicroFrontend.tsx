import * as React from 'react';
import { Card } from 'react-material-design';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xt256 as HighlighterStyle} from 'react-syntax-highlighter/dist/styles/hljs';

class MicroFrontend extends React.Component {
    public render() {
        const codeString = `
// Micro-Frontend module
import AppointmentDatePicker from '@rproenza/appointment-date-picker';
// Events Distributor instance
import { EventsDistributor } from './../../index';

// Micro-Frontend module required initialization functions and data
const { createStore, initApp, appName } = AppointmentDatePicker;
//  Micro-Frontend module initial state
const AppointmentDatePickerInitialState = {
    appointmentData: {
        day: '2018-12-19T16:39:14.953Z',
        email: 'raul@gmail.com',
        firstName: 'Raul',
        lastName: 'Proenza',
        time: 'Morning'
    }
};
// Micro-Frontend module store instantiation
const appointmentStore = createStore(AppointmentDatePickerInitialState);
// Register/Subscribe new store on the Events Distributor instance
EventsDistributor.registerStore(appName, appointmentStore);
    // Micro-Frontend initialization
initApp(appointmentStore, 'MicroUICmp', EventsDistributor);`;
        return <Card style={{ textAlign: 'left', padding: '5px' }}>
                <SyntaxHighlighter language="javascript" style={HighlighterStyle}>
                    {codeString}
                </SyntaxHighlighter>
            </Card>;
    }
}

export default MicroFrontend;
