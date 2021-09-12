import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { themes, ThemeContext } from "./contexts/ThemeContext";
import { themeSetter } from "./utils/ThemeSetter";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [info, setInfo] = useState(null);

  function handleToggle() {
    setTheme((prevState) =>
      prevState === themes.dark ? themes.light : themes.dark
    );
  }

  function handleSearch(data) {
    setInfo(data);
  }

  return (
    <div className={`theme theme-${themeSetter(theme.background)}`}>
      <ThemeContext.Provider value={theme}>
        <Header onToggle={handleToggle} />
        <Container>
          <SearchBar onSearch={handleSearch} />
          {info && <Weather info={info} />}
        </Container>
      </ThemeContext.Provider>
    </div>
  );
}

App.contextType = ThemeContext;
export default App;
