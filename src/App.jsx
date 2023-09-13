import "./App.css";
import { useForm } from "react-hook-form";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const saveUser = (data) => console.log(data);
  const editHandler = () => setIsEditing(!isEditing);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Producto</h1>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, temporibus libero cum explicabo velit sed ullam
                blanditiis aut quidem molestiae.
              </p>
            </div>
            <button className="btn btn-success" onClick={editHandler}>
              Editar
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {isEditing && (
            <form
              onSubmit={handleSubmit(saveUser)}
              className="p-3 bg-dark text-white border rounded"
              noValidate
            >
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "required Field",
                    },
                    minLength: 5,
                  })}
                />
                {errors.firstName && (
                  <Alert message={errors.firstName.message} />
                )}
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
                  {...register("email", {
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Esto debe ser un email",
                    },
                  })}
                />
                {errors.email && <Alert message={errors.email.message} />}
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
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
