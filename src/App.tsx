import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './pages/Header/index.jsx';
import Login from './pages/Login/index.js';
import Signup from './pages/Signup/index.jsx';
import Register from './pages/Signup/register.jsx';
import Payment from './pages/Payment/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import Page1 from './pages/Dashboard/page1.jsx';
import Page2 from './pages/Dashboard/page2.jsx';
import Page3 from './pages/Dashboard/page3.jsx';
import Page4 from './pages/Dashboard/page4.jsx';
import Page5 from './pages/Dashboard/page5.jsx';
import Page6 from './pages/Dashboard/page6.jsx';
import Page7 from './pages/Dashboard/page7.jsx';
import Password_reset from './pages/password_reset/password_reset.jsx'
import NewPassword from './pages/password_reset/newPassword.jsx'
import Navbar from "./pages/Header/index";

function App() {
  return (
   <>
   <Header/>
   <BrowserRouter>
   <Routes>
    
    <Route exact path="/" element={<Login/>}/>
    <Route exact path= "/reset-password" element= {<Password_reset/>}/>
    <Route exact path= "/new-password" element= {<NewPassword/>}/>

    <Route exact path="/sign-up" element={<Signup/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/payment" element={<Payment/>}/>  
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    {/* <Route exact path="/dashboard/page1" element={<Page1/>}/> */}
    <Route exact path="/dashboard/page2" element={<Page2/>}/>
    <Route exact path="/dashboard/page3" element={<Page3/>}/>
    <Route exact path="/dashboard/page4" element={<Page4/>}/>
    <Route exact path="/dashboard/page5" element={<Page5/>}/>
    <Route exact path="/dashboard/page6" element={<Page6/>}/>
    <Route exact path="/dashboard/page7" element={<Page7/>}/>  
   </Routes>
</BrowserRouter>
   </>
  );
}

export default App;
