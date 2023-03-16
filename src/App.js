import Game from "./components/Game/Game";
import Login from "./components/Login/Login";
import "./App.css";
import { useState } from "react";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginChecker= (status) => {
      setIsLoggedIn(status);
    }
  
  return (
    <div className="App">
      <Login onCheck = {loginChecker}/>
      {isLoggedIn && <Game />}
    </div>
  );
}

export default App;
