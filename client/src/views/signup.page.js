import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fnSignup } from "../connects/authConnect";
import { ContextApp } from "../context/Context";

export const Signup = ({ history }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit"
  });
  // Me traigo el usaurio del contexto, si lo hay.
  const { user, setUser } = useContext(ContextApp);
  console.log("[SIGNUP]El usuario de ahora es:", user);

  if (user) {
    return <div>Ya estás registrado, chaval</div>;
  } else {
    // Este Onsubmit manda los datos al back y lo registra, luego redirige el usuario al login.
    const onSubmit = async data => {
      const responseServer = await fnSignup(data);
      if (!responseServer["username"]) {
        console.log("Este usuario ya existe");
      } else {
        console.log("[SIGNUP] Usuario creado", responseServer["username"]);
        history.push("/auth/login");
      }
    };

    console.log(errors);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register({ required: true, maxLength: 80 })}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: true,
            min: 8,
            maxLength: 12,
            pattern: /^(?=.*\d).{8,12}$/i
          })}
        />
        {errors.password && (
          <p>
            Password must be between 8 and 12 digits long and include at least
            one numeric digit.
          </p>
        )}
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Ups... Ese email no es correcto :(</p>}

        <input type="submit" />
      </form>
    );
  }
};
