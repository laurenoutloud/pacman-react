import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getInitialState from './state';
import Board from './Board';
import AllFood from './AllFood';

import './style.scss';

export default class Pacman extends Component {
    constructor(props) {
        super(props);

        this.state = getInitialState();
    }
    render() {
        return (
            <div className="pacman">
                <Board {...this.props} />
                <AllFood {...this.props} food={this.state.food} />
            </div>
        );
    }
}

Pacman.propTypes = {
    gridSize: PropTypes.number.isRequired
};
