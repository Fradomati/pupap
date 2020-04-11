import React, { useContext } from "react";
import { useForm, FormContext } from "react-hook-form";
import { fnLogin } from "../connects/authConnect";
import { ContextApp } from "../context/Context";
export const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  // Me traigo el usuario del contexto, si lo hay.
  const { user, setUser } = useContext(ContextApp);
  console.log("El usuario de ahora es:", user);

  if (user) {
    return <div>Ya estás logeado, chaval</div>;
  } else {
    // Función de Login
    const onSubmit = async data => {
      const responseServer = await fnLogin(data);
      const username = responseServer["username"];
      if (!username) {
        console.log("Usario NO logeado");
      } else {
        setUser(username);
        console.log(`Usario ${username}, logeado`);
      }
    };
    console.log(errors);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register({ required: true })}
        />
        {errors.usename && <p>¡Username error!</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <p>Password error!</p>}

        <input type="submit" />
      </form>
    );
  }
};
