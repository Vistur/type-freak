import React, { Component } from "react";
import Chance from "chance";
import App from "../components/App";

const chance = new Chance();

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, gameOver: true, character: "", remainingTime: 0 };
  }
  startGame() {
    this.setState({ gameOver: false, score: 0, remainingTime: 30000 });
    this.changeCharacter();
    this.timer = setInterval(
      () => {
        this.setState({ remainingTime: this.state.remainingTime - 10 });
      },
      10
    );
    setTimeout(
      () => {
        this.stopGame();
      },
      30000
    );
  }
  stopGame() {
    clearInterval(this.timer);
    this.setState({ gameOver: true, remainingTime: 0 });
  }
  changeCharacter() {
    this.setState({
      character: chance.character({
        alpha: true,
        casing: "lower",
        symbols: false
      })
    });
  }
  handleKeyPress(e) {
    if (this.state.gameOver === true) {
      if (e.key === "Enter")
        this.startGame();
    } else {
      if (e.key === this.state.character)
        this.setState({ score: this.state.score + 1 });
      else
        this.setState({ score: this.state.score - 2 });
      this.changeCharacter();
    }
  }
  render() {
    return (
      <App
        onKeyPress={e => this.handleKeyPress(e)}
        gameOver={this.state.gameOver}
        score={this.state.score}
        character={this.state.character}
        remainingTime={this.state.remainingTime}
      />
    );
  }
}
export default AppContainer;
