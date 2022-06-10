import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import './searchResults.css';

const SearchResults = (props) => {
  const [value, setValue] = useState('Book');
  const [chapters, setChapters] = useState("Chapters not set");

  const urlChapters = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/books/GEN/chapters`;
  
  // Call API
  useEffect(() => {
    axios.get(urlChapters, {
      headers: {
        'api-key': 'c817601b1b0b6386b97d3bb84e17a46d'
      }
    }).then((response) => {
      setChapters(response.data.data.length);
    });
  }, [urlChapters]);

  // Handle dropdown select
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  }

  console.log(chapters);

  return (
    <div className="searchresults section__margin" id="ds">
      <div className="searchresults-heading">
        <h1 className="gradient__text">Read scripture.</h1>
        <p>Select something that you want to read</p>
      </div>
      <div className="searchresults-container">

      {/* Book */}
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title={value}
        className="mt-2"
        onSelect={handleSelect}
      >
        <Dropdown.Item className="dropdown-item" as="button" eventKey="Genesis">
          Genesis
        </Dropdown.Item>
        <Dropdown.Item as="button" eventKey="Exodus">Exodus</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="Leviticus">Leviticus</Dropdown.Item>
        {/* <Dropdown.Divider /> */}
        <Dropdown.Item as="button" eventKey="Numbers">Numbers</Dropdown.Item>
      </DropdownButton>

      {value !== "Book"
        ? <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Chapter"
          className="mt-2"
          onSelect={handleSelect}
        >
          <Dropdown.Item className="dropdown-item" as="button" eventKey="Genesis">
            Genesis
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="Exodus">Exodus</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="Leviticus">Leviticus</Dropdown.Item>
          {/* <Dropdown.Divider /> */}
          <Dropdown.Item as="button" eventKey="Numbers">Numbers</Dropdown.Item>
        </DropdownButton>
        : ""
      }
      </div>
    </div>
  )
};

export default SearchResults;
