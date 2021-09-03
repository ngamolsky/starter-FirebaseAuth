import React from "react";
import { Container } from "../components/Container";
import { Toolbar } from "../components/Toolbar";
import { UserGroup } from "../components/UserGroup";
import useUser from "../hooks/useUser";

const Home: React.FC = () => {
  const [user] = useUser();
  return (
    <Container>
      <Toolbar>
        <UserGroup currentUser={user!} />
      </Toolbar>
    </Container>
  );
};

export default Home;
