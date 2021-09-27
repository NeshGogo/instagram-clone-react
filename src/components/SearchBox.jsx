import React from 'react';
import '../assets/styles/components/SearchBox.scss';

const SearchBox = () => (
  <div className="search">
    <input className="form__input" type="text" placeholder="¿Quien deseas buscar?" id="headerSearchInput" />
    <ul id="searcherResults" className="search--results">
      <li>No hay resultados.</li>
    </ul>
  </div>
);

export default SearchBox;
