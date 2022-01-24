import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "../theme/globalStyles";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
`;
const Logo = styled.div`
  font-size: 3rem;
`;

const Navbar = ({ setTheme, theme }) => {
  const themeToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Container className="nav-link">
      <Logo>
        <Link href="/">Logo</Link>
      </Logo>
      <Link href="/page1">page 1</Link>
      <Link href="/page2">page 2</Link>
      <Link href="/page3">page 3</Link>
      <Link href="/page4">page 4</Link>
      <Link href="/page5">page 5</Link>
      <Button primary onClick={themeToggler}>
        theme
      </Button>
    </Container>
  );
};

export default Navbar;
