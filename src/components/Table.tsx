import * as React from 'react';
import { bindActionCreators, Dispatch } from "redux";
import {connect} from 'react-redux';
import TableRow from './TableRow';
import {Key, sortList} from "../AC";

interface IStoreState {
    list: IItemStoreState[],
    sortList: ISort,
}

interface ISort {
    readonly type: Key.SORT;
    readonly payload: string;
}

interface IItemStoreState {
    amount: number,
    exist: boolean,
    id: number,
    importer: string,
    title: string,
    weight: number,
}

class Table extends React.Component<IStoreState> {
    constructor(props: IStoreState) {
        super(props);
        this.state = {
            list: this.props.list
        };
        console.log('пришли', props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (e: React.MouseEvent<HTMLDivElement>): void | undefined => {
        e.preventDefault();
        let targetElement = e.currentTarget.dataset['sort'];

        switch (targetElement) {
            case 'title':

                break;

            case 'importer':

                break;

            case 'amount':

                break;

            case 'id':

                break;

            case 'weight':

                break;

            case 'exist':

                break;
        }

    };


    public render(){
        const { list } = this.props;
        return (
            <div className="table">
                <div data-sort='title' onClick={this.handleClick}>Сортировка по title</div>
                <div data-sort='amount' onClick={this.handleClick}>Сортировка по amount</div>
                <div data-sort='importer' onClick={this.handleClick}>Сортировка по importer</div>
                <div data-sort='weight' onClick={this.handleClick}>Сортировка по weight</div>
                <div data-sort='exist' onClick={this.handleClick}>Сортировка по exist</div>
                <table>
                    <tbody>
                        <tr key={'id'}>
                            <th key={'title'}>Название</th>
                            <th key={'amount'}>Количество</th>
                            <th key={'importer'}>Имортер</th>
                            <th key={'weight'}>Вес</th>
                            <th key={'exist'}>Наличие на складе</th>
                        </tr>
                        {
                            list.map( (item: IItemStoreState) => {
                                console.log('item ушел', item);
                                return <TableRow item={item}/>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ISort>) => ({
    sortList: dispatch(sortList),
});

export default connect({}, mapDispatchToProps)(Table);