import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
          </div>
          <div className="game-info">
            <div>{rgreg}</div>
            <ol><li>test</li></ol>
          </div>
        </div>
      );
    }
  }

ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );