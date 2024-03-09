import { Login } from './components/Login'
import { Home } from './components/Home'
import { useState } from 'react';
import Cookies from "universal-cookie";
import './App.css'

function App() {

  const cookies = new Cookies()
  const [isLogin, setIsLogin] = useState(cookies.get('TOKEN_LOGIN') ? true : false)

  return (
    <main>
      {isLogin ?
        <Home /> :
        <Login setIsLogin={setIsLogin} />
      }
    </main>
  )
}

export default App
