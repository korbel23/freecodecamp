/*One of the more difficult challenges so far. Math.random was purely copied from instructions. Rendered results
correctly without issue. Returned fiftyFifty however instrucions did not mention defining
fiftyFifty and there was no line indicating a modification should be made there. Had to debuggerfor a 
bit on that. Set default state of counter to 1 in this.state and modified it in handleClick */
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fiftyFifty } = this.props;
    return (
      <h1>
      {
        fiftyFifty ? 'You Win!' : 'You Lose!'
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    let expression = Math.random() > .5; 
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression}/>

        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};