import * as React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';

import './style/app.css';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header/>
                <Table/>
                <Footer/>
            </div>
        );
    }
}

export default App;



