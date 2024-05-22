import React from 'react';
import './Header.css';
// import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className="header">

       <div className="overlay"></div>
       <div className="header-content" >
        <h1>Построй свою мечту</h1>
        <p>Наш сервис каждый день помогает купить минимум один домокомплект!</p>
      </div>
      {/* <SearchForm/> */}

    </header>
  );
}

export default Header;
