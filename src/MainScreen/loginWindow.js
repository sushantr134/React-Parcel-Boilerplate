import React, { useState } from "react";
const LoginPanel = props => {
  const [panelState, setPanelState] = useState({
    userName: localStorage.getItem("savedUserName"),
    password: localStorage.getItem("savedUserPassword"),
    isChecked: localStorage.getItem("savedUserName") != null ? true : false
  });

  const handleChange = (event, type) => {
    if (type === "username") {
      event.preventDefault();
      setPanelState({ ...panelState, userName: event.target.value });
    } else if (type === "password") {
      event.preventDefault();
      setPanelState({ ...panelState, password: event.target.value });
    } else if (type === "rememberMe") {
      setPanelState({ ...panelState, isChecked: !panelState.isChecked });
    }
  };
  return (
    <div>
      <h1>User Login Panel</h1>
      <form onSubmit={event => props.onSubmitForm(panelState)}>
        <div>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            autoComplete='false'
            defaultValue={localStorage.getItem("savedUserName") != null ? localStorage.getItem("savedUserName") : ""}
            onChange={event => handleChange(event, "username")}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            autoComplete='false'
            defaultValue={localStorage.getItem("savedUserPassword") != null ? localStorage.getItem("savedUserPassword") : ""}
            onChange={event => handleChange(event, "password")}
          />
        </div>
        <div>
          <input type='checkbox' name='rememberMe' checked={panelState.isChecked} onChange={() => handleChange(null, "rememberMe")}></input>
          <label>Remember Me</label>
        </div>
        <button type='submit' name='loginBtn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPanel;
