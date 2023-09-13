const Alert = ({ message }) => {
  console.log(message);

  return (
    <div class="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

export default Alert;
