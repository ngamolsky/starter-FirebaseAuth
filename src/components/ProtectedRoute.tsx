import { Spinner } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import useQueryParams from "../hooks/useQueryParams";
import { Container } from "./Container";

export const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const queryParams = useQueryParams();
  const { firebaseUser, authLoading } = useContext(UserContext);
  const continueUrl = queryParams.get("continueUrl");
  if (authLoading)
    return (
      <Container>
        <Spinner size="xl" m="auto" />
      </Container>
    );
  if (!firebaseUser) {
    const nextUrl = continueUrl
      ? `/login?continueUrl=${continueUrl}`
      : "/login";
    return <Redirect to={nextUrl} />;
  }
  return <Route {...rest}>{children}</Route>;
};
