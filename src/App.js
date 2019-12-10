import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://s1.logaster.com/static/v3/img/products/logo.png'/>
      </header>
      <nav className='nav'>
        <div>
          <a href=''>Profile</a>
        </div>
        <div>
          <a href=''>Profile</a>
        </div>
        <div>
          <a href=''>News</a>
        </div>
        <div>
          <a href=''>Music</a>
        </div>
        <div>
          <a href=''>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
