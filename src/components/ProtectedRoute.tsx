import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Container } from "./Container";

export const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [user, loading] = useUser();
  if (loading)
    return (
      <Container>
        <Spinner size="xl" m="auto" />
      </Container>
    );
  if (!user) return <Redirect to="/login" />;
  return <Route {...rest}>{children}</Route>;
};
