import {
  Box,
  theme,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { APP_NAME } from "../constants";
import useUser from "../hooks/useUser";

interface ToolbarProps {
  puzzleStartTime?: Date;
}

export const Toolbar: React.FC<ToolbarProps> = () => {
  const { colorMode } = useColorMode();
  const [user, { signOut }] = useUser();
  const isDark = colorMode === "dark";

  return (
    <Box
      w="100%"
      display="flex"
      bgColor={isDark ? theme.colors.gray[700] : theme.colors.gray[400]}
      boxShadow="lg"
      zIndex={2}
      pos="sticky"
      top={0}
    >
      <Heading my="auto" ml={4} textAlign="start" as="a">
        {APP_NAME}
      </Heading>
      <Box ml="auto">
        {user && (
          <Menu>
            <MenuButton my={2} mr={2}>
              <Avatar name={user.displayName ? user.displayName : user.email} />
            </MenuButton>
            <MenuList>
              <MenuItem
                mx={1}
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Box>
  );
};