import * as React from 'react';
import './App.css';

import CommunicationSystem from '../CodeSnippets/CommunicationSystem';
import MicroFrontend from '../CodeSnippets/MicroFrontend';
import Header from '../Header/Header';
import MicroUICmp1 from '../MicroUICmp1/MicroUICmp1';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>

                <main>
                    <h1>What it is Micros for Macros?</h1>
                    <p className="App-intro">
                        <strong>Micros for Macros</strong> is a <strong> Prove of Concept</strong>{' '}
                        which showcase a solution for{' '}
                        <strong>
                            <code>Micro UI/Frontend</code>
                        </strong>{' '}
                        development based on
                        <code>ReactJS</code> and <code>Redux</code>.
                    </p>

                    <h2>What problems this solution try to solve?</h2>
                    <p>Divide and conquer is the strategy to follow on Macro UI projects.</p>
                    <p>
                        Creating Micro UI components which can be managed by independent teams is
                        the most scalable tactic to accomplish this strategy.
                    </p>
                    <section style={{ justifyContent: 'center' }}>
                        <ul>
                            <h4>Micros for Macros is focused on solve the next problems:</h4>
                            <li>Micro UI scalable architecture development framework.</li>
                            <li>
                                Communication system between MicroUI apps and its parent/host app.
                            </li>
                        </ul>
                    </section>

                    <h2>How to solve the Micro UI scalable architecture problem?</h2>
                    <p>
                        The solution used was to create NPM modules which allow CI/CD experience,
                        versioning, a high cohesion and low coupling SDLC among development teams
                        among others benefits.
                    </p>
                    <p>
                        The next card host{' '}
                        <a href="https://github.com/rproenza86/appointment-date-picker">
                            <code>@rproenza/appointment-date-picker</code>
                        </a>
                        , a complex <strong>Date Picker</strong> MicroUI component developed as an{' '}
                        <code>NPM</code> module and imported in this web application.
                    </p>
                    <section>
                        <MicroUICmp1 />
                    </section>

                    <h2>
                        How the{' '}
                        <a href="https://github.com/rproenza86/appointment-date-picker">
                            <code>@rproenza/appointment-date-picker</code>
                        </a>{' '}
                        Micro UI is been used?
                    </h2>
                    <section style={{ justifyContent: 'center' }}>
                        <p>
                            The module require the next parts to work properly:
                            <ul>
                                <li>A Redux's store to work: To handle the app state.</li>
                                <li>
                                    It needs to be initialized: The store object and the id of the
                                    root element which will host the MicroUI.
                                </li>
                                <li>
                                    A channel to pipe inbound/outbound events: Using{' '}
                                    <a href="https://github.com/rproenza86/events-distributor">
                                        <code>@rproenza/events-distributor</code>
                                    </a>{' '}
                                    an NPM module to distribute events.
                                </li>
                            </ul>
                        </p>
                    </section>

                    <h3>Snippet code to show how to use the MicroUI:</h3>
                    <section>
                        <MicroFrontend />
                    </section>

                    <h2>How to solve the Communication system problem?</h2>
                    <p>
                        {' '}
                        Use for this challenge the{' '}
                        <a href="https://github.com/rproenza86/events-distributor">
                            <code>@rproenza/events-distributor</code>
                        </a>{' '}
                        NPM module to distribute events.
                    </p>
                    <p>
                        This module allows to broadcast/publish events from one app to others apps
                        registered/subscribed to the{' '}
                        <a href="https://github.com/rproenza86/events-distributor">
                            <code>@rproenza/events-distributor</code>
                        </a>{' '}
                        instance.
                    </p>
                    <h3>Snippet code to show how to use the Communication system:</h3>
                    <p>This code is being use by the reset button to reset the <code>Date Picker</code> MicroUI component.</p>
                    <section>
                        <CommunicationSystem />
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
