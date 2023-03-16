import { useState } from "react";
import "./Login.css";
const Login = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [currentUname, setCurrentUname] = useState("");
  const [enteredUname, setEnteredUname] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const credential = [
    { uname: "sutharj907@gmail.com", pass: "12345" },
    { uname: "sutharj123@gmail.com", pass: "4545" },
  ];
  console.log(credential[0].uname.split('@')[0]);

  const loginHandler = (ev) => {
    ev.preventDefault();
    if (
      (enteredUname === credential[0].uname &&
        enteredPass === credential[0].pass) ||
      (enteredUname === credential[1].uname &&
        enteredPass === credential[1].pass)
    ) {
      console.log("logged in");
      props.onCheck(true);
      setIsLoggedIn(true);
      setEnteredUname("");
      setEnteredPass("");
      
    }else{
      setIsValid(false);
    }
  };

  

  const unameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUname(event.target.value);
    setCurrentUname(event.target.value);
    console.log(enteredUname);
  };

  const passChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredPass(event.target.value);
    
  };

  const logoutHandler = () => {
    props.onCheck(false);
    setIsLoggedIn(false);
  };

  return (
    <div className="Login-form" onSubmit={loginHandler}>
      <form>
        {!isLoggedIn && <div><label htmlFor="username">Username</label>
        <input
          type="email"
          id="username"
          value={enteredUname}
          placeholder="Enter Username"
          onChange={unameChangeHandler}
          autoComplete="off"
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPass}
          placeholder="Enter Password"
          onChange={passChangeHandler}
        ></input>
     
       
        {!isValid ? <span>Invalid Username or Password</span> : ""}

        </div>}
        {!isLoggedIn && <button type="submit">Login</button>}
        {isLoggedIn ? <div className="currentUser">Welcome <span>{currentUname}</span></div> : ""}
        <br />
        {isLoggedIn && <button type="button" onClick={logoutHandler}>Logout</button>}
      </form>
    </div>
  );
};

export default Login;
