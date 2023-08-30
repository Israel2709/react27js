import "./App.css";
import MentorCard from "./Components/MentorCard";
import CardWrapper from "./Components/CardWrapper";

function App() {
  return (
    <>
      <MentorCard
        name="Israel"
        description="Hola, soy mentor front-end de kodemia"
      />
      <MentorCard
        name="Charles"
        description="Hola, soy mentor back-end de kodemia"
      />

      <CardWrapper>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          similique!
        </p>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </CardWrapper>

      <CardWrapper>
        <h1>Contenido 1</h1>
      </CardWrapper>

      <CardWrapper>
        <ul>
          <li>item 01</li>
          <li>item 02</li>
          <li>item 03</li>
          <li>item 04</li>
          <li>item 05</li>
        </ul>
      </CardWrapper>
    </>
  );
}

export default App;
