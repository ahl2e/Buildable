import React from 'react';
import {Link} from 'react-router-dom';



const SearchIndexItem = ({ search }) => {
  return (
  <li className="search-index-item">
    <Link to={`/projects/${search.id}`}>
      <div className="index-item-footer">

      <span className="search-title">{search.title}</span>
        <div ClassName="search-description">
          <p>{search.description}</p>
        </div>
      </div>
    </Link>

  </li>
);
}
export default SearchIndexItem;
