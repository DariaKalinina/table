import * as React from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import { connect } from "react-redux";
import { PersonListState } from "../store/storeTypes";

import './../style/table.css';
import {asyncLoadPerson, PersonListActions} from "../AC";

interface PersonTableStore {
    personList: PersonListState[],
}

interface PersonTableAction {
    asyncLoadPerson: () => (dispatch: Dispatch<PersonListActions>) => Promise<void>;
}

type OwnProps = PersonTableStore & PersonTableAction;


class Table extends React.Component<OwnProps> {
    constructor(props: OwnProps) {
        super(props);

        console.log('props 1', props);

        this.props.asyncLoadPerson();

        console.log('props 2', props);
    }

    handleClick = (e: React.MouseEvent<HTMLDivElement>): void  => {
        console.log(e);
        // const targetElement = e.currentTarget.dataset['sort'];
    };


    render() {
        // const { personList } = this.props;
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
                    {/*<tbody className="table__body">*/}
                        {/*{*/}
                            {/*personList.map((item: PersonListState, index: number) => {*/}
                                {/*return <TableRow key={index} item={item}/>;*/}
                            {/*})*/}
                        {/*}*/}
                    {/*</tbody>*/}
                </table>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch: Dispatch<PersonListActions>) => ({
    asyncLoadPerson: bindActionCreators(asyncLoadPerson, dispatch)
});

const mapStateToProps = (state: PersonTableStore) => ({
    personList: state.personList,
});

export default connect<PersonTableStore, PersonTableAction, {}>(mapStateToProps, mapDispatchToProps)(Table);

