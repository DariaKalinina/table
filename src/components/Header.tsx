import * as React from 'react';

import './../style/header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">Заголовок таблицы</div>
            </div>
        );
    }
}

export default Header;