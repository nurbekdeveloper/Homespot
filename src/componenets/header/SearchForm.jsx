import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="button-group">
        <button type="button" className="btn btn-green">Построить</button>
        <button type="button" className="btn">Купить</button>
        <button type="button" className="btn">Арендовать</button>
      </div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="type">Тип строения</label>
          <select id="type" className="form-control">
            <option>Дом</option>
            <option>Квартира</option>
            <option>Офис</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dimensions">Габариты, м</label>
          <input type="text" id="dimensions" className="form-control" placeholder="10x10" />
        </div>
        <div className="form-group">
          <label htmlFor="area">Общая площадь, м²</label>
          <input type="number" id="area" className="form-control" min="100" max="1000" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Стоимость, Р</label>
          <input type="number" id="price" className="form-control" min="100000" max="1000000" />
        </div>
        <button type="submit" className="btn btn-green">Подобрать</button>
      </form>
    </div>
  );
}

export default SearchForm;
