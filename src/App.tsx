import * as React from 'react';
import {connect} from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';

import './App.css';

interface IStoreState {
    list: IItemStoreState[]
}

interface IItemStoreState {
    amount: number,
    exist: boolean,
    id: number,
    importer: string,
    title: string,
    weight: number,
}

class App extends React.Component<IStoreState> {
    constructor(props: IStoreState){
        super(props);
    }

    public render() {

        console.log('ушли', this.props);
        return (
            <div className="app">
                <Header/>
                <Table list={this.props.list} />
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state: IStoreState) => ({
    list: state.list
});

export default connect(mapStateToProps, {})(App);
