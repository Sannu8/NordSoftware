import React from 'react';
import logo from './logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <img src={logo} className="Page-logo" alt="logo" />
        )
}
}