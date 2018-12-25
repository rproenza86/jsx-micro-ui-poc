import * as React from 'react';
import './App.css';

import Header from '../Header/Header';
import MicroUICmp1 from '../MicroUICmp1/MicroUICmp1';

class App extends React.Component {
  public render() {
    return <div className="App">
            <header className="App-header">
                <Header />
            </header>
            <p className="App-intro">
                This Prove of Concept showcase a solution for <code> Micro UI</code> development based on ReactJS and Redux.
            </p>
            <section><MicroUICmp1/></section>
        </div>;
  }
}

export default App;
