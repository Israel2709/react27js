const CardWrapper = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "1rem",
        borderRadius: ".5rem",
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
