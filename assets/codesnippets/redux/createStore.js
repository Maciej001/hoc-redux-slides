const SET_SOL = "SET_SOL";

export const doSetSol = (sol, change) => ({
  type: SET_SOL,
  sol,
  change
});

const initialState = {
  sol: 3
}

const appReducer = ( state=initialState, action ) => {
  switch (action.type) {
    case SET_SOL:
      const requestedNextSol = action.sol + action.change;
      const nextSol = requestedNextSol >= 0
        ? requestedNextSol
        : state.sol;
      return {
        ...state,
        sol: nextSol
      };

    default:
      return state;
  }
}

// index.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './appReducer'

const store = createStore( appReducer );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// App.js
import { connect } from "react-redux";
import { doSetSol } from './appReducer'

const mapStateToProps = state => ({
  sol: state.sol,
});

const mapDispatchToProps = dispatch => ({
  onSetSol: (sol, change) =>
    dispatch(doSetSol(sol, change)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// App.js onSolChange
onSolDecrease = () =>
    this.onSolChange(
      this.props.sol,
      solChangeDirection.decrease);

  onSolIncrease = () =>
    this.onSolChange(
      this.props.sol,
      solChangeDirection.increase);

  // sol numbers start at 0
  onSolChange = (sol, direction) => {
    this.props.onSetSol(sol, direction)

    this.setCameras({
      photos: this.state.photos[this.state.activeRover],
      sol: this.props.sol + direction
    });
  };

  ...
  <Navigation
    sol={this.props.sol}
    ...
  />

  // Change the remaining
  // this.state.sol => this.state.props
