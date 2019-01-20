import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from "react-redux";
import Footer from "./Footer";
import { asyncLoadPerson, PersonListActions } from "../AC";
import { PersonListState } from "../store/storeTypes";
import PersonRow from "./PersonRow";

import './../style/table.css';

interface PersonTableStore {
    personList: PersonListState[],
}

interface State {
    readonly sortParameter: string,
}

interface PersonTableAction {
    asyncLoadPerson: (pageNumber: number, sortParameter: string) => (dispatch: Dispatch<PersonListActions>) => Promise<void>;
}

type OwnProps = PersonTableStore & PersonTableAction;

class PersonTable extends React.Component<OwnProps, State> {
    constructor(props: OwnProps) {
        super(props);
        this.props.asyncLoadPerson(1, 'id');

        this.state = {
            sortParameter: 'id'
        }
    }

    handleClick = (e: React.MouseEvent<HTMLDivElement>): void  => {
        e.preventDefault();
        const targetValue = e.currentTarget.dataset['sort'];
        const sortParameter = targetValue ? targetValue : 'id';
        this.props.asyncLoadPerson(1, sortParameter);
        this.setState({sortParameter })
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
                            <th className="table__header" data-sort='address.city' onClick={this.handleClick}>Город</th>
                            <th className="table__header" data-sort='phone' onClick={this.handleClick}>Телефон</th>
                            <th className="table__header" data-sort='company.name' onClick={this.handleClick}>Компания</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {
                            personList.map((item: PersonListState) => {
                                return <PersonRow key={ item.id } item={ item }/>;
                            })
                        }
                    </tbody>
                </table>
                <Footer sortParameter={this.state.sortParameter}/>
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

export default connect<PersonTableStore, PersonTableAction, {}>(mapStateToProps, mapDispatchToProps)(PersonTable);

