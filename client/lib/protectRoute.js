import React, { Component } from "react";
import { useUser, useUserIsLoading } from "../src/connects/authConnect";
import { Redirect } from "react-router-dom";

const ProtectedPage = () => <div>Página protegida</div>;

export const withProtected = (
  Component,
  { redirect = true, redirectTo = "/auth/login" } = {}
) => (props) => {
  const user = useUser();
  const isUserLoading = useUserIsLoading();

  if (user) {
    return <Component />;
  } else {
    if (isUserLoading) return <ProtectedPage />;
    else {
      if (redirect) {
        return <Redirect to={redirectTo} />;
      } else {
        return <ProtectedPage />;
      }
    }
  }
};
