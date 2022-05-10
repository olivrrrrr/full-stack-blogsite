import React from 'react'
import { AuthContext } from "../App";

import { useNavigate } from 'react-router-dom';

function Logout() {
  const { state, dispatch } = React.useContext(AuthContext);
  let navigate = useNavigate(); 

  const handleClick = () => {
        dispatch({type: "LOGOUT"})
        navigate("/login")
  }

  return (
    <div>
      <button onClick={handleClick}>
           Logout
          {/* {state.isAuthenticated && (
          <h1>Hi (LOGOUT)</h1>
        )} */}
      </button>
    </div>
  )
}

export default Logout