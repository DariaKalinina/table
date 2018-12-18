import * as React from 'react';
import TableRow from './TableRow';

interface IStoreState {
    list: IItemStoreState[]
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
    }

    private sortByAmount = (a, b) => a.amount - b.amount;

    private sortById = (a, b) => a.id - b.id;

    private sortByWeight = (a, b) =>  a.weight - b.weight;

    private sortByTitle = (a, b) => {
        const objectA = a.title.toUpperCase();
        const objectB = b.title.toUpperCase();

        if (objectA < objectB) {
            return -1;
        }
        if (objectA > objectB) {
            return 1;
        }

        return 0;
    };

    private sortByImporter = (a, b) => {
        const objectA = a.importer.toUpperCase();
        const objectB = b.importer.toUpperCase();

        if (objectA < objectB) {
            return -1;
        }
        if (objectA > objectB) {
            return 1;
        }

        return 0;
    };

    private sortByExist = (a, b) => {
        const objectA = a.exist ? 1 : 0;
        const objectB = b.exist ? 1 : 0;

        return objectA - objectB;
    };

    handleClick = (parameter: string) => {
        let sortedList = this.props.list;

        switch (parameter) {
            case 'title':
                sortedList = this.props.list.sort(this.sortByTitle);
                break;

            case 'importer':
                sortedList = this.props.list.sort(this.sortByImporter);
                break;

            case 'amount':
                sortedList = this.props.list.sort(this.sortByAmount);
                break;

            case 'id':
                sortedList = this.props.list.sort(this.sortById);
                break;

            case 'weight':
                sortedList = this.props.list.sort(this.sortByWeight);
                break;

            case 'exist':
                sortedList = this.props.list.sort(this.sortByExist);
                break;
        }

        this.setState({list: sortedList});
    };


    public render(){
        const list = this.state.list;
        return (
            <div className="table">
                <table>
                    <tbody>
                        <tr key={'id'}>
                            <th key={'title'} onClick={this.handleClick('title')}>Название</th>
                            <th key={'amount'} onClick={this.handleClick('amount')}>Количество</th>
                            <th key={'importer'} onClick={this.handleClick('importer')}>Имортер</th>
                            <th key={'weight'} onClick={this.handleClick('weight')}>Вес</th>
                            <th key={'exist'} onClick={this.handleClick('exist')}>Наличие на складе</th>
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

export default Table;