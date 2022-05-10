import React from 'react'
import { AuthContext } from "../App";

// import { useNavigate } from 'react-router-dom';

function Logout() {
  const { state, dispatch } = React.useContext(AuthContext);
  

  const handleClick = () => {
        dispatch({type: "LOGOUT"})
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