import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { themeSetter } from "../utils/ThemeSetter";
import { ThemeContext } from "../contexts/ThemeContext";

function Header({ onToggle }) {
  const theme = useContext(ThemeContext);

  function handleToggle() {
    onToggle();
  }

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={handleToggle}
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
  );
}

export default Header;
