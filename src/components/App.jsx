import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return (
      <div
        style={
          { display: "flex", alignItems: "center", flexDirection: "column" }
        }
      >
        <h2>
          {
            this.props.gameOver && this.props.score === 0 &&
              "Welcome to Typefreak!"
          }
          {this.props.gameOver && this.props.score !== 0 && "GAME OVER!"}
          {this.props.gameOver === false && "GO, GO, GO!"}
        </h2>
        <div style={{ fontSize: 50 }}>{this.props.character}</div>
        {this.props.gameOver && (
              <p>
                 To get started, press <strong>Enter</strong>!
              </p>
            )}
        <div>Score: <strong>{this.props.score}</strong></div>
        <div>Remaining time: <strong>{this.props.remainingTime}</strong></div>
        <input
          ref={c => this.input = c}
          onKeyPress={e => this.props.onKeyPress(e)}
        />
      </div>
    );
  }
}

export default App;
