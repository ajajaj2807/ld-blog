import "../styles/main.scss";
import {UserContext} from "../UserContext";
import {useState} from 'react'

function MyApp({ Component, pageProps }) {
  
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
