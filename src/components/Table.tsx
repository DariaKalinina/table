import * as React from 'react';
import TableRow from './TableRow';
import {ISort, ISortFunction, sortList} from "../AC";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

type IStoreState = {
    list: IItemStoreState[],
    sortList: ISortFunction,
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
        console.log('пришли', props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (e: React.MouseEvent<HTMLDivElement>): void | undefined => {
        e.preventDefault();
        let targetElement = e.currentTarget.dataset['sort'];
        const { sortList } = this.props;

        console.log('click', targetElement);

        switch (targetElement) {
            case 'title':
                console.log('click по title');
                sortList('title');
                break;

            case 'importer':
                console.log('click по importer');
                sortList('importer');
                break;

            case 'amount':
                console.log('click по amount');
                sortList('amount');
                break;

            case 'id':
                console.log('click по id');
                sortList('id');
                break;

            case 'weight':
                console.log('click по weight');
                sortList('weight');
                break;

            case 'exist':
                console.log('click по exist');
                sortList('exist');
                break;
        }

    };


    public render(){
        const { list } = this.props;
        console.log('list ----- ', list);
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
                            list.map( (item: IItemStoreState, index: number) => {
                                console.log('item ушел', item);
                                return <TableRow key={index} item={item}/>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = (state: IStoreState) => ({
    list: state.list
});

const mapDispatchToProps = (dispatch: Dispatch<ISort>) => bindActionCreators({
    sortList: sortList,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Table);