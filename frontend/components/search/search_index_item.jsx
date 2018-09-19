import React from 'react';
import {Link} from 'react-router-dom';



const SearchIndexItem = ({ search }) => {
  return (
  <li className="search-index-item">

      <div className="test-photo">
      </div>
      <div className="index-item-footer">
      <span className="title">{search.title}</span>
      </div>

  </li>
);
}
export default SearchIndexItem;
