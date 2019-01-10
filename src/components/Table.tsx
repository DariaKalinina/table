import * as React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {SortListAction, sortProductList} from "../AC";
import {ProductListState} from "../store/storeTypes";
import TableRow from './TableRow';

import './../style/table.css';

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


    render() {
        const { productList } = this.props;
        return (
            <div className="table">
                <table className="table">
                    <thead className="table__head">
                        <tr className="table__row">
                            <th className="table__header" data-sort='title' onClick={this.handleClick}>Название</th>
                            <th className="table__header" data-sort='amount' onClick={this.handleClick}>Количество</th>
                            <th className="table__header" data-sort='importer' onClick={this.handleClick}>Имортер</th>
                            <th className="table__header" data-sort='weight' onClick={this.handleClick}>Вес</th>
                            <th className="table__header" data-sort='exist' onClick={this.handleClick}>Наличие</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {
                            productList.map((item: ProductListState, index: number) => {
                                return <TableRow key={ index } item={ item }/>;
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

