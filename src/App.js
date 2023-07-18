//import logo from './logo.svg';
import {Login} from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile';
import Logout from './components/Logout';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        
        {
          isAuthenticated ? (
            <>
              <Profile />
              <Logout />
            </>
          ) : (<Login />)
        }
      </header>
    </div>
  );
}

export default App;
