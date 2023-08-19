import React  from 'react';
import './App.css';
import Login from './Componenets/Login';
import Profile from './Componenets/Profile';

const App=()=> {
  const [user,setUser] = React.useState();

  return (
    <div className="App">
     {!user?<Login setUser={setUser}/>:<Profile></Profile>} 
    </div>
  );
}

export default App;
