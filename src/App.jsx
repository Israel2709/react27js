import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit } = useForm();
  const saveUser = (data) => console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form
            onSubmit={handleSubmit(saveUser)}
            className="p-3 bg-dark text-white border rounded"
          >
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                className="form-control"
                {...register("name")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Apellidos</label>
              <input
                type="text"
                className="form-control"
                {...register("lastname")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Correo</label>
              <input
                type="email"
                className="form-control"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Teléfono</label>
              <input
                type="phone"
                className="form-control"
                {...register("phone")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Dirección</label>
              <input
                type="text"
                className="form-control"
                {...register("address")}
              />
            </div>
            <button type="submit" className="btn btn-light">
              Crear usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
