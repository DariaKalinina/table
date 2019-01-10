import * as React from 'react';
import { connect} from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { asyncLoadPerson, PersonListActions } from "../AC";

import './../style/footer.css'

interface PersonTableAction {
    asyncLoadPerson: (pageNumber: number, sortParameter: string) => (dispatch: Dispatch<PersonListActions>) => Promise<void>;
}

interface Props {
    sortParameter: string
}

type OwnProps = Props & PersonTableAction;

class Footer extends React.Component<OwnProps> {
    render() {
        const { sortParameter } = this.props;
        return (
            <div className="footer">
                <a href="#" className="footer__button" onClick={() => this.props.asyncLoadPerson(1, sortParameter)}>1</a>
                <a href="#" className="footer__button" onClick={() => this.props.asyncLoadPerson(2, sortParameter)}>2</a>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<PersonListActions>) => ({
    asyncLoadPerson: bindActionCreators(asyncLoadPerson, dispatch)
});

export default connect<{}, PersonTableAction, {}>(mapStateToProps, mapDispatchToProps)(Footer);