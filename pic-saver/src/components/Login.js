import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm'
import Footer from './Footer';

function App() {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")
  

  useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
          fetch(`http://localhost:3000/users`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(resp => resp.json())
          .then(data => {
            setUser(data)
            console.log(data)
          })
        }
      }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  

  console.log(user)

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
      default:
        return <SignUpForm handleLogin={handleLogin}/>
    }
  }
  return (
    <div className="App-login">
        <Header handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
      <Footer/>
    </div>
  );
}

export default App;