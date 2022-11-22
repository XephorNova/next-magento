import { Navbar, styled } from "@nextui-org/react";
import React from "react";
import NavbarComponent from "./Navbar";

const Box = styled("div", {
  boxSizing: "border-box",
});

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      <NavbarComponent />
      {children}
    </Box>
  );
};

export default Layout;
