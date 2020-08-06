import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { signInWithGoogle, signOut } from "../firebase";
import { auth } from "../firebase";
import { UserContext } from "../UserContext";
import Notification from "../comps/Notification";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <div className="header-wrapper">
        <div className="header-nav">
          <Link href={`/`}>
            <span className="logo">blog.ajajaj.me</span>
          </Link>
        </div>
        <div className="user-sign-wrapper">
          {user ? (
            <div className="user-info-box">
              <span> {user.email} </span>
              <button className="signout-btn" onClick={signOut}>
                Sign Out
              </button>
            </div>
          ) : (
            <button onClick={signInWithGoogle}>Sign In</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
