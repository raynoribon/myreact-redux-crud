import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Users from './Component/Users';
import Adduser from './Component/Adduser';
import Edituser from './Component/Edituser';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
function App() {
  return (
    <Provider store={Store}>
      <div className="App">      
          <div className='App'>
              <BrowserRouter>
                <div className='header'>
                  <Link to={'/'}> Home </Link>
                  <Link to={'/user'}> User </Link>
                </div>
                <Routes>
                  <Route path='/' element={<Home></Home>}></Route>
                  <Route path='/user' element={<Users></Users>}></Route>
                  <Route path='/user/add' element={<Adduser></Adduser>}></Route>
                  <Route path='/user/edit/:id' element={<Edituser></Edituser>}></Route>                
                </Routes>            
              </BrowserRouter>
          </div>      
      </div>
    </Provider>
    
  );
}

export default App;
