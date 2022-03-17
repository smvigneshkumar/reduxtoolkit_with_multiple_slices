import "./styles.css";
import { counterActions } from "./store";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./auth";
import Header from "./header";
import UserProfile from "./UserProfile";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleIncrement = () => {
    dispatch(counterActions.increment(5));
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement(2));
  };
  const handleToggle = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div className="App">
      <Header />
      {isLoggedIn && <UserProfile />}
      {!isLoggedIn && <Auth />}
      <h1>Counter</h1>
      {showCounter && (
        <div>
          <h2>{counter}</h2>
        </div>
      )}
      <div>
        <button onClick={handleIncrement}>Increment by 5</button>
        <button onClick={handleDecrement}>Decrement by 2</button>
        <button onClick={handleToggle}>Toggle Counter</button>
      </div>
    </div>
  );
}
