import React from 'react';
import './Header.css';
// import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className="header">

       <div className="overlay"></div>
       <div className="header-content" >
        <h3>Мы - строительная компания - объединились с шведской бригадой и теперь будем строить дома, сочетающие шведский и российский стандарты качества.</h3>
        {/* <p>"Наши дома - это сочетание высоких стандартов и непревзойденного качества, которое оставит вас в восторге."</p> */}
      </div>
      {/* <SearchForm/> */}

    </header>
  );
}

export default Header;
