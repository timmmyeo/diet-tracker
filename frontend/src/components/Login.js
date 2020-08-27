import React from "react";


function Login(props) {
  

  return (
    <>
    <div >
    <header>
      {
        props.user 
          ? <p>Hello, {props.user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        props.user
          ? <button onClick={props.signOut}>Sign out</button>
          : <button onClick={props.signInWithGoogle}>Sign in with Google</button>
      }
    </header>
  </div>
    </>
  )
}

export default Login