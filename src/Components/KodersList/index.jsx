import Typography from "../Typography";

const KodersList = ({ filteredKoders }) => {
  return (
    <ul className="list-group">
      {filteredKoders &&
        filteredKoders.map(({ koderKey, name, generation }) => {
          return (
            <li className="list-group-item">
              <Typography size="base">Id: {koderKey}</Typography>
              <Typography size="base">Nombre: {name}</Typography>
              <Typography size="base">Generation: {generation}</Typography>
            </li>
          );
        })}
    </ul>
  );
};

export default KodersList;
