import * as React from 'react';
import { Card } from 'react-material-design';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xt256 as HighlighterStyle} from 'react-syntax-highlighter/dist/styles/hljs';

class CommunicationSystem extends React.Component {
    public render() {
        const codeString = `
const resetState = {
    type: 'INIT_SUCCESS', // Event type
    payload: {
        appointmentData: {
            day: '2018-12-10T16:39:14.953Z',
            hasError: false,
            time: 'Morning'
        }
    },
    meta: {
        appSource: 'ParentApp', // App name to identify the event emitter
        eventType: 'BROAD_CAST_ACTION' // Meta information used for event segmentation
    }
};

// The dispatch method has an optional second param which can be use to target
// and specific MicroUI as its receptor by using the registered MicroUI's name
EventsDistributor.dispatch(resetState);`;
        return <Card style={{ textAlign: 'left', padding: '5px' }}>
                <SyntaxHighlighter language="javascript" style={HighlighterStyle}>
                    {codeString}
                </SyntaxHighlighter>
            </Card>;
    }
}

export default CommunicationSystem;
