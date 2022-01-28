import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "../theme/globalStyles";
import { FiUser } from "react-icons/fi";
import { WiSunset, WiMoonWaxingCrescent1 } from "react-icons/wi";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
`;
const Logo = styled.div`
  font-size: 3rem;
`;
const Flexbox = styled.div`
  display: flex;
  align-items: center;
`;
const CustomLink = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  color: rgb(31, 255, 160);
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const Navbar = ({ setTheme, theme }) => {
  const [isActive, setIsActive] = useState(false);
  const themeToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsActive((isActive) => !isActive);
  };

  return (
    <Container className="nav-link">
      <Logo>
        <Link href="/">Heardit</Link>
      </Logo>
      <Flexbox>
        <Link href="/signup">sign up</Link>
        <Link href="/login">login</Link>

        <Link href="/profile">
          <div>
            <FiUser />
          </div>
        </Link>

        {isActive ? (
          <Button
            style={{
              backgroundColor: "#F9F9F9",
              color: "black",
              fontSize: "2rem",
            }}
            onClick={themeToggler}
          >
            <WiMoonWaxingCrescent1 />
          </Button>
        ) : (
          <Button
            style={{
              backgroundColor: "rgb(15,15,15)",
              color: "whitesmoke",
              fontSize: "2rem",
            }}
            onClick={themeToggler}
          >
            <WiSunset />
          </Button>
        )}
      </Flexbox>
    </Container>
  );
};

export default Navbar;
