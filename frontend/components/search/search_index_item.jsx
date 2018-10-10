import React from 'react';
import {Link} from 'react-router-dom';



const SearchIndexItem = ({ search }) => {
  return (
  <li className="search-index-item">
    <Link to={`/projects/${search.id}`}>
      <div className="index-item-footer">

      <img src={`${search.imageUrl}`} />
      <span className="search-title">{search.title}</span>
        <div className="search-description">
          <p>{search.description}</p>
        </div>
      </div>
    </Link>

  </li>
);
}
export default SearchIndexItem;
