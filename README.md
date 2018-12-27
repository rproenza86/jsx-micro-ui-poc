# @rproenza/jsx-micro-ui-poc

> [Online demo](https://micro-ui-system.firebaseapp.com/)

## Description

Web app to show how to use Micro UI/Micro Frontends architecture an use an event distribution system to communicate apps events.

The idea behind [Micro Frontends](https://micro-frontends.org/) is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specializes in. A team is cross functional and develops its features end-to-end, from database to user interface.

## Web app concepts

### Micro UI

[@rproenza/appointment-date-picker](https://github.com/rproenza86/appointment-date-picker) is a Micro UI created to showcase this architectural solution. It was developed as an npm module flexible enough to adapt its style and behavior.

#### Ex. of it use

```javascript
import AppointmentDatePicker from '@rproenza/appointment-date-picker';
import { EventsDistributor } from './../../index';

const { createStore, initApp, appName } = AppointmentDatePicker;
const AppointmentDatePickerInitialState = {
    appointmentData: {
        day: '2018-12-19T16:39:14.953Z',
        email: 'raul@gmail.com',
        firstName: 'Raul',
        lastName: 'Proenza',
        time: 'Morning'
    }
};
const appointmentStore = createStore(AppointmentDatePickerInitialState);
EventsDistributor.registerStore(appName, appointmentStore);
initApp(appointmentStore, 'MicroUICmp', EventsDistributor);
```

#### Screenshot
[MicroUI_app.png](docs/MicroUI_app.png)

### Event communication system

[@rproenza/events-distributor](https://github.com/rproenza86/events-distributor) is a npm module create to support the communication between Micro UI apps. Its architecture is inspired by the "Pub/Sub" architecture pattern allowing to the apps subscribe its stores to the `events-distributor` an dispatch events at convenience broadcasting/publishing actions to all subscribed apps or targeting specific ones.

Ex.:

```javascript
const resetState = {
    type: 'INIT_SUCCESS',
    payload: {
        testDrive: {
            day: '2018-12-10T16:39:14.953Z',
            hasError: false,
            time: 'Morning'
        }
    },
    meta: { appSource: 'ParentApp', eventType: 'BROAD_CAST_ACTION' }
};

EventsDistributor.dispatch(resetState);
```

#### Screenshot

> Action dispatched on the onClick event of the reset button

[MicroUI_app.png](docs/Reset_button.png)

## Installation

```sh
git clone git@github.com:rproenza86/jsx-micro-ui-poc.git

cd jsx-micro-ui-poc

npm ci
```

## Usage

```sh
npm start
```

## Test

```sh
npm run test
```
