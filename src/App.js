import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./components/Search";
import { themes, ThemeContext, themeSetter } from "./components/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <div className={`theme theme-${themeSetter(theme.background)}`}>
      <ThemeContext.Provider value={theme}>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() =>
              setTheme((prevState) =>
                prevState === themes.dark ? themes.light : themes.dark
              )
            }
          />
          <label
            for="checkbox"
            className={`label label-${themeSetter(theme.background)}`}
          >
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
            <div className="ball"></div>
          </label>
        </div>

        <Container>
          <Search />
          {/* <Search key={key} onChangeKey={(keyword) => setKey(keyword)} /> */}
          {/* <Weather city={key} />  */}
        </Container>
      </ThemeContext.Provider>
    </div>
  );
}

App.contextType = ThemeContext;

export default App;
