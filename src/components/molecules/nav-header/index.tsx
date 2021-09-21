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
        <Container>
          <List>
            <NavItem>
              <span>01.&nbsp;</span> About
            </NavItem>
            <NavItem>
              <span>02.&nbsp;</span>Services
            </NavItem>
            <NavItem>
              <span>03.&nbsp;</span>Portfolio
            </NavItem>
            <NavItem>
              <span>04.&nbsp;</span>Contact
            </NavItem>
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
            </Links>
          </List>
        </Container>
      </NavigationContainer>
    </>
  );
}

export default NavHeader;
