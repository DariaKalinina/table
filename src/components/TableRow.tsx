import * as React from 'react';
import { ProductListState } from "../store/storeTypes";

import './../style/table.css';

interface StoreRow {
    item: ProductListState
}

const TableRow: React.FunctionComponent<StoreRow> = (props) => {
    const { item } = props;
    return (
        <tr className="table__row">
            <td className="table__item">{ item.title }</td>
            <td className="table__item">{ item.amount }</td>
            <td className="table__item">{ item.importer }</td>
            <td className="table__item">{ item.weight }</td>
            <td className="table__item">{ item.exist ? 'Есть' : 'Нет' }</td>
        </tr>
    );
}

export default TableRow;