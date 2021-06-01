import React from "react";
import { FiTriangle, FiCodepen, FiMail } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin, AiOutlineCodepen } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

import {
  Container,
  List,
  NavItem,
  NavigationContainer,
  Triangle,
  Link,
  Links,
} from "./styled";

export interface Props {
  toggle: boolean;
  onClick: () => void;
}

function NavHeader({ toggle, onClick }: Props) {
  return (
    <>
      <NavigationContainer>
        <Triangle onClick={onClick} toggle={toggle}></Triangle>

        <Container>
          <List>
            <NavItem>About</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Portfolio</NavItem>
            <NavItem>Contact</NavItem>
            <Link>
              <MdLanguage /> ES
            </Link>
          </List>
          <Links>
            <Link>
              <AiFillGithub />
            </Link>
            <Link>
              <FiCodepen />
            </Link>
            <Link>
              <AiFillLinkedin />
            </Link>
            <Link>
              <FiMail />
            </Link>

            <Link onClick={onClick}>{toggle ? <FaMoon /> : <FaSun />}</Link>
          </Links>
        </Container>
      </NavigationContainer>
    </>
  );
}

export default NavHeader;
