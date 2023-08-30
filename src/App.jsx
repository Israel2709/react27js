import "./App.css";
import { useState } from "react";
import GreetingHeading from "./Components/GreetingHeading";

function App() {
  const [title, setTitle] = useState("Hola koders");
  const [user, setUser] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const greetingMap = {
    es: "Buenos días!",
    en: "Good morning!",
    fr: "Bonjour",
  };

  const radioHandler = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <>
      <div className="container div row div col-12">
        <div className="d-flex">
          <div class="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="language"
              value="es"
              checked={selectedLanguage === "es"}
              onChange={(event) => radioHandler(event)}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              ES
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="language"
              value="en"
              checked={selectedLanguage === "en"}
              onChange={(event) => radioHandler(event)}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              EN
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="language"
              value="fr"
              checked={selectedLanguage === "fr"}
              onChange={(event) => radioHandler(event)}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              FR
            </label>
          </div>
        </div>
        <GreetingHeading
          text={greetingMap[selectedLanguage]}
          bg={"bg-dark text-white"}
        />
      </div>
    </>
  );
}

export default App;
