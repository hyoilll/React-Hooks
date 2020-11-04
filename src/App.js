import React, { useState } from "react";

// const App = () => {
//   const [item, setItem] = useState(0);

//   const incrementItem = () => setItem(item + 1);
//   const decrementItem = () => setItem(item - 1);

//   return (
//     <>
//       <div class="app">{item}</div>
//       <button onClick={incrementItem}>Increment</button>
//       <button onClick={decrementItem}>Decrement</button>
//     </>
//   );
// };

class App extends React.Component {
  state = {
    item: 0,
  };

  incrementItem = () => {
    this.setState((cur) => {
      return {
        item: cur.item + 1,
      };
    });
  };

  DecrementItem = () => {
    this.setState((cur) => {
      return {
        item: cur.item - 1,
      };
    });
  };

  render() {
    const { item } = this.state;
    return (
      <>
        <div class="app">{item}</div>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.DecrementItem}>Decrement</button>
      </>
    );
  }
}

export default App;
