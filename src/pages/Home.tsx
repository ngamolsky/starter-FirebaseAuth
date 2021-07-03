import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import { Toolbar } from "../components/Toolbar";
import useUser from "../hooks/useUser";

const Home: React.FC = () => {
  const [user, /* actions */, loading] = useUser()
  return (
    <Container>
      {loading ? (
        <Spinner size="xl" m="auto" />
      ) : (
        <Toolbar isSignedIn={!!user} user={user!} />
      )}
    </Container>
  );
};

export default Home;
