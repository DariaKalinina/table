import * as React from 'react';
//import TableRow from './TableRow';

interface IStoreState {
    list: IItemStoreState[];
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
    //
    private sortByAmount = (a: IItemStoreState, b: IItemStoreState) => a.amount - b.amount;
    //
    // private sortById = (a: IItemStoreState, b: IItemStoreState) => a.id - b.id;
    //
    // private sortByWeight = (a: IItemStoreState, b: IItemStoreState) =>  a.weight - b.weight;
    //
    // private sortByTitle = (a: IItemStoreState, b: IItemStoreState) => {
    //     const objectA = a.title.toUpperCase();
    //     const objectB = b.title.toUpperCase();
    //
    //     if (objectA < objectB) {
    //         return -1;
    //     }
    //     if (objectA > objectB) {
    //         return 1;
    //     }
    //
    //     return 0;
    // };

    // private sortByImporter = (a: IItemStoreState, b: IItemStoreState) => {
    //     const objectA = a.importer.toUpperCase();
    //     const objectB = b.importer.toUpperCase();
    //
    //     if (objectA < objectB) {
    //         return -1;
    //     }
    //     if (objectA > objectB) {
    //         return 1;
    //     }
    //
    //     return 0;
    // };
    //
    // private sortByExist = (a: IItemStoreState, b: IItemStoreState) => {
    //     const objectA = a.exist ? 1 : 0;
    //     const objectB = b.exist ? 1 : 0;
    //
    //     return objectA - objectB;
    // };

    handleClick = (e: React.MouseEvent<HTMLDivElement>): void | undefined => {
        e.preventDefault();
        let sortedList = this.props.list;

        switch ('amount') {
            // case 'title':
            //     sortedList = this.props.list.sort(this.sortByTitle);
            //     break;

            // case 'importer':
            //     sortedList = this.props.list.sort(this.sortByImporter);
            //     break;
            //
            case 'amount':
                sortedList = this.props.list.sort(this.sortByAmount);
                break;
            //
            // case 'id':
            //     sortedList = this.props.list.sort(this.sortById);
            //     break;
            //
            // case 'weight':
            //     sortedList = this.props.list.sort(this.sortByWeight);
            //     break;
            //
            // case 'exist':
            //     sortedList = this.props.list.sort(this.sortByExist);
            //     break;
        }

        this.setState({list: sortedList});
    };


    public render(){
        // const { list } = this.state;
        console.log('проверка state',  this.state, typeof this.state);
        return (
            <div className="table">
                <div onClick={this.handleClick}>Сортировка по title</div>
                <div onClick={this.handleClick}>Сортировка по amount</div>
                <div onClick={this.handleClick}>Сортировка по importer</div>
                <div onClick={this.handleClick}>Сортировка по weight</div>
                <div onClick={this.handleClick}>Сортировка по exist</div>
                <table>
                    <tbody>
                        <tr key={'id'}>
                            <th key={'title'}>Название</th>
                            <th key={'amount'}>Количество</th>
                            <th key={'importer'}>Имортер</th>
                            <th key={'weight'}>Вес</th>
                            <th key={'exist'}>Наличие на складе</th>
                        </tr>
                        {/*{*/}
                            {/*list.map( (item: IItemStoreState) => {*/}
                                {/*console.log('item ушел', item);*/}
                                {/*return <TableRow item={item}/>;*/}
                            {/*})*/}
                        {/*}*/}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;