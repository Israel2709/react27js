const MentorCard = (props) => {
  console.log(props);
  const { name, description } = props;
  return (
    <div>
      <hr />
      <h1>{name}</h1>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default MentorCard;
