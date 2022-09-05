import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/flex.styled";
import logo from "../images/logo.svg";
import mockups from "../../static/images/illustration-mockups.svg";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Hubble re-imagenes the way we build communities.YOu have a
              voice,but so does your audience.Create connections with your users
              as you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="fff">
              Get Started For Free
            </Button>
          </div>
          <Image src={mockups} />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
