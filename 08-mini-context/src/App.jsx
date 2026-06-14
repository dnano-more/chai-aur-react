import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {

  return (
    <UserContextProvider>
      <h1>Chai aur react me context api sikh raha hun</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
