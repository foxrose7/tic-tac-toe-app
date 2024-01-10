import React, { Component } from 'react'
import Sqluare from './Square';
import './Board.css';

export default class Board extends Component {
  renderSquare(i){
    return  <Sqluare value={i} />;
  }

  render() {
    return (
      <div>
        <div className="status">Next Player: X | O</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}
