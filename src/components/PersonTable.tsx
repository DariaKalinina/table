import * as React from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import { connect } from "react-redux";
import { PersonListState } from "../store/storeTypes";

import './../style/table.css';
import {asyncLoadPerson, PersonListActions} from "../AC";
import PersonRow from "./PersonRow";

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

        this.props.asyncLoadPerson();
    }

    handleClick = (e: React.MouseEvent<HTMLDivElement>): void  => {
        console.log(e);
    };


    render() {
        const { personList } = this.props;
        return (
            <div className="table">
                <table className="table">
                    <thead className="table__head">
                        <tr className="table__row">
                            <th className="table__header" data-sort='name' onClick={this.handleClick}>Имя</th>
                            <th className="table__header" data-sort='email' onClick={this.handleClick}>Email</th>
                            <th className="table__header" data-sort='addressCity' onClick={this.handleClick}>Город</th>
                            <th className="table__header" data-sort='phone' onClick={this.handleClick}>Телефон</th>
                            <th className="table__header" data-sort='companyName' onClick={this.handleClick}>Компания</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {
                            personList.map((item: PersonListState) => {
                                return <PersonRow key={item.id} item={item}/>;
                            })
                        }
                    </tbody>
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

