import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextprovider from './context/UserContextprovider'

function App() {

  return (
    <UserContextprovider>
      <h1>Hello ContextAPI</h1>
      <Login/>
      <Profile/>
    </UserContextprovider>
  )
}

export default App
