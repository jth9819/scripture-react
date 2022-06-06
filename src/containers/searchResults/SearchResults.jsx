import React, { useState, useEffect } from "react";
import axios from "axios";
import './searchResults.css';

const SearchResults = (props) => {
  const url = `https://api.scripture.api.bible/v1/bibles/685d1470fe4d5c3b-01/verses/GAL.1.1`;
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    axios.get(url, {
      headers: {
        'api-key': 'c817601b1b0b6386b97d3bb84e17a46d'
      }
    }).then((response) => {
      setVerse(response.data.data.content);
    });
  }, [url]);

  // console.log(verse);




  return (
    <div className="searchresults section__margin" id="ds">
      <div className="searchresults-heading">
        <h1 className="gradient__text">Search by keyword.</h1>
        {/* <p>Explore the features</p> */}
      </div>
      <div className="searchresults-container">
        <p>{verse}</p>
      </div>
    </div>
  )
};

export default SearchResults;
