import * as React from 'react';

interface IItemStoreState {
    item: {
        amount: number,
        exist: boolean,
        id: number,
        importer: string,
        title: string,
        weight: number,
    }
}


class TableRow extends React.Component<IItemStoreState> {
    public render() {
        console.log('item пришел', this.props);
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