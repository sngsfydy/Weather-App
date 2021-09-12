import React, { useState, useContext } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { API_BASE_URL, API_KEY } from "../apis/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../contexts/ThemeContext";
import { themeSetter } from "../utils/ThemeSetter";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const { searchbar, foreground } = useContext(ThemeContext);

  function onFetch() {
    fetch(
      `${API_BASE_URL}rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => onSearch(response))
      .catch((err) => {
        console.error(err);
      });
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      onFetch();
    }
  }

  return (
    <div>
      <div className="searchbar">
        <InputGroup className={`input-${themeSetter(searchbar)}`}>
          <InputGroup.Prepend>
            <InputGroup.Text className="input">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Type city name to find weather forcast"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input form-control-lg"
            onKeyDown={handleKeyDown}
            style={{
              color: foreground,
            }}
          />
        </InputGroup>
      </div>
    </div>
  );
}

export default SearchBar;
