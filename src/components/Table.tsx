import * as React from 'react';
import TableRow from './TableRow';
import { IListStoreState } from '../store/IStoreState';

class Table extends React.Component<IListStoreState, {}> {
    constructor(props: IListStoreState) {
        super(props);
        console.log('пропсы -----', this.props);
    }

    public render() {
        return (
            <div className="table">
                <TableRow />
            </div>
        );
    }
}

export default Table;