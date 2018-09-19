import React from 'react';
import {Link} from 'react-router-dom';



const SearchIndexItem = ({ search }) => {
  return (
  <li className="search-index-item">
    <Link to={`/projects/${search.id}`}>
      <div className="test-photo">
      </div>
      <div className="index-item-footer">
      <span className="title">{search.title}</span>
      </div>
    </Link>

  </li>
);
}
export default SearchIndexItem;
