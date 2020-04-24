import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { useForm, FormContext } from "react-hook-form";
import { fnLogin } from "../connects/authConnect";
import { ContextApp } from "../context/Context";

// Style with bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = withRouter(({ history }) => {
  const { register, handleSubmit, errors } = useForm();

  // Me traigo el usuario del contexto, si lo hay.
  const { user, setUser } = useContext(ContextApp);
  console.log("[LOGIN] El usuario de ahora es:", user);

  if (user) {
    return <div>Ya estás logeado, chaval</div>;
  } else {
    // Función de Login
    const onSubmit = async (data) => {
      const responseServer = await fnLogin(data);
      const username = responseServer["username"];
      if (!username) {
        console.log("Usuario NO logeado");
      } else {
        console.log(`Usuario ${username}, logeado`);
        history.push("/");
        setUser(responseServer); // Pongo esto simplemente para que recoja los datos, porque luego con el Whoame lo hace pero necesito que el usuario recarge la página
      }
    };
    console.log(errors);

    return (
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="username">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              ref={register({
                required: true,
                message: "Este campo es obligatorio",
              })}
            />
            {errors.usename && <p>¡Username error!</p>}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register({ required: true })}
            />
          </Form.Group>
          {errors.password && <p>Password error!</p>}
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </form>
      </Container>
    );
  }
});

//  <input
//    type="password"
//    placeholder="Password"
//    name="password"
//    ref={register({ required: true })}
//  />;
//  {
//    errors.password && <p>Password error!</p>;
//  }
