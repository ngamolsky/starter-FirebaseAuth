import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { Container } from "./Container";
import { Spinner } from "@chakra-ui/react";
import useUser from "../hooks/useUser";

export const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [user, , loading] = useUser();

  if (loading)
    return (
      <Container>
        <Spinner size="xl" m="auto" />
      </Container>
    );
  if (!user) return <Redirect to="/login" />;
  return <Route {...rest}>{children}</Route>;
};
