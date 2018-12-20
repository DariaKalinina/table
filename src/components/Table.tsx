import * as React from 'react';
import TableRow from './TableRow';
import { SortListAction, sortProductList } from "../AC";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { ProductListState } from "../store/storeTypes";

interface StoreTable {
    productList: ProductListState[],
}

interface TableAction {
    sortProductList: (sortValue: string) => SortListAction;
}

type OwnProps = StoreTable & TableAction;


class Table extends React.Component<OwnProps> {
    constructor(props: OwnProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e: React.MouseEvent<HTMLDivElement>): void | undefined => {
        const targetElement = e.currentTarget.dataset['sort'];
        const { sortProductList } = this.props;

        if (targetElement) {
            sortProductList(targetElement);
        }
    };


    render(){
        const { productList } = this.props;
        return (
            <div className="table">
                <div data-sort='title' onClick={this.handleClick}>Сортировка по title</div>
                <div data-sort='amount' onClick={this.handleClick}>Сортировка по amount</div>
                <div data-sort='importer' onClick={this.handleClick}>Сортировка по importer</div>
                <div data-sort='weight' onClick={this.handleClick}>Сортировка по weight</div>
                <div data-sort='exist' onClick={this.handleClick}>Сортировка по exist</div>
                <table>
                    <tbody>
                        <tr>
                            <th key={'title'}>Название</th>
                            <th key={'amount'}>Количество</th>
                            <th key={'importer'}>Имортер</th>
                            <th key={'weight'}>Вес</th>
                            <th key={'exist'}>Наличие на складе</th>
                        </tr>
                        {
                            productList.map( (item: ProductListState, index: number) => {
                                return <TableRow key={index} item={item}/>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreTable) => ({
    productList: state.productList
});

const mapDispatchToProps = (dispatch: Dispatch<SortListAction>) => {
    return {
        sortProductList: bindActionCreators(sortProductList, dispatch)
    }
};

export default connect<StoreTable, TableAction, {}>(mapStateToProps, mapDispatchToProps)(Table);

