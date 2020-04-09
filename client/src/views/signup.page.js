import React from "react";
import { useForm } from "react-hook-form";
import { fnSignup } from "../connects/authConnect";

export const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit"
  });
  const onSubmit = async data => {
    console.log("Datos del usuario:", data);
    const responseServer = await fnSignup(data);
    console.log("La promesa", responseServer);
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
          Password must be between 8 and 12 digits long and include at least one
          numeric digit.
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
};
