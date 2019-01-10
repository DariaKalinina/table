import * as React from 'react';
import { PersonListState } from "../store/storeTypes";

import './../style/table.css';

interface StoreRow {
    item: PersonListState
}

class PersonRow extends React.Component<StoreRow> {
    render() {
        const { item } = this.props;
        return (
            <tr className="table__row">
                <td className="table__item">{ item.name }</td>
                <td className="table__item">{ item.email }</td>
                <td className="table__item">{ item.address.city }</td>
                <td className="table__item">{ item.phone }</td>
                <td className="table__item">{ item.company.name }</td>
            </tr>
        );
    }
}

export default PersonRow;