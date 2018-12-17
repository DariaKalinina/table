import * as React from 'react';
import {connect} from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import IStoreState, {IListStoreState} from './store/IStoreState';
import {testAction} from './AC/index';

import './App.css';

class App extends React.Component<{}, IListStoreState> {
    handleClick = () => {
        console.log('handleClick');

    };

    public render() {
        const {list} = this.state;

        return (
            <div className="app">
                <Header/>
                <Table list={list} onClick={this.handleClick}/>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state: IStoreState) => ({
    list: state.tableList.list
});

export default connect(mapStateToProps, {testAction})(App);
