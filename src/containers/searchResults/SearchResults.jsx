import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion'

import Dropdown from '../../components/dropdown/Dropdown'
import './searchResults.css';

const SearchResults = (props) => {
  const [selected, setSelected] = useState("Select")

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
        <h1 className="gradient__text">Read scripture.</h1>
        {/* <p>Explore the features</p> */}
      </div>
      <div className="searchresults-container">
        
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* <Dropdown selected={selected} setSelected={setSelected} /> */}

        {/* <button type="button" id="genesis-button">Genesis</button> */}
        {/* <p>{verse}</p> */}
      </div>
    </div>
  )
};

export default SearchResults;
