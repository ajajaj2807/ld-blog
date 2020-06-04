import { useState, useEffect } from "react";
import { signInWithGoogle, signOut } from "../firebase";
import { auth } from "../firebase";

const Login = () => {
  let unsubscribeFromAuth = null;
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <div className="login-wrapper">
      {user ? user.email : 'Sign In to Continue' }
      <button onClick={signInWithGoogle}>Login With Google</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Login;
