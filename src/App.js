import { Header } from './components/common/'
import UsersList from './userlist/UsersList';
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UsersList/>
    </div>
    
  );
}

export default App;