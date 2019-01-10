import * as React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import PersonTable from "./components/PersonTable";

import './style/app.css';


class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header />
                <Table />
                <PersonTable />
            </div>
        );
    }
}

export default App;



