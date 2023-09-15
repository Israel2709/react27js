import { Link } from "react-router-dom";
import Typography from "../../Components/Typography";

const Home = ({ generations }) => {
  return (
    <>
      <Typography tag="h1" size="xl">
        Bienvenido al sistema de gestión de koders
      </Typography>
      <Typography size="base">
        Aquí puedes ver la lista de los koders consentidos
      </Typography>
      <ul className="list-group">
        {generations &&
          generations.map((item, index) => (
            <li className="list-group-item" key={index}>
              <Link to={`generation/${item}`}>
                Generación {item} de JavaScript
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
