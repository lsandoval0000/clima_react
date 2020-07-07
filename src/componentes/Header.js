import React from 'react';

const Header = (props) => {
    return (
        <div>
            <nav>
                <div className="nac-wrapper light-blue darken-2">
                    <a href="#" className="brand-logo">{props.titulo}</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;