import Typography from "../../Components/Typography";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import KodersList from "../../Components/KodersList";
import { useKoders } from "../../Context/KodersContext";

const Generation = () => {
  const { id } = useParams();
  const vipKoders = useKoders();
  const filteredKoders = vipKoders?.filter(
    (koder) => koder.generation === Number(id)
  );

  return (
    <>
      <Typography tag="h1" size="xl">
        Estos son los koders VIP de la generación {id} de Javascript
      </Typography>
      <KodersList filteredKoders={filteredKoders} />
    </>
  );
};

export default Generation;
