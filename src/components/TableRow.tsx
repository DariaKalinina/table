import * as React from 'react';
import { ProductListState } from "../store/storeTypes";

interface StoreRow {
    item: ProductListState
}

class TableRow extends React.Component<StoreRow> {
    render() {
        const { item } = this.props;
        return (
            <tr className="table__row" key={item.id}>
                <td className="table__item" key={item.id+item.title}>{item.title}</td>
                <td className="table__item" key={item.id+item.amount}>{item.amount}</td>
                <td className="table__item" key={item.id+item.importer}>{item.importer}</td>
                <td className="table__item" key={item.id+item.weight}>{item.weight}</td>
                <td className="table__item" key={item.id+item.title+item.importer}>{item.exist ? 'Есть' : 'Нет'}</td>
            </tr>
        );
    }
}

export default TableRow;