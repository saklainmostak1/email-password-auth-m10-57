import './App.css';
import {getAuth} from 'firebase/auth'
import app from './firebase/firebase.init';
import RegisterReactBootstrap from './components/RegisterReactBootstrap/RegisterReactBootstrap';
import RegisterBootsrtap from './components/RegisterBootsrap/RegisterBootsrtap';


const auth = getAuth(app)

const handleRegister = (event) =>{
  event.preventDefault()
  const email = event.target.email.value
  const password = event.target.password.value
  console.log(email, password)

}
const handleEmailBlur = event =>{
  console.log(event.target.value)
}
const handlePasswordBlur = event =>{
  console.log(event.target.value)
}

function App() {
  return (
    <div className="">

        <RegisterReactBootstrap></RegisterReactBootstrap>
        {/* <RegisterBootsrtap></RegisterBootsrtap> */}
    </div>
  );
}

export default App;
