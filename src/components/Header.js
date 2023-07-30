import React from 'react'
import {HeaderStyled, Nav , Logo , Image} from './styles/header.styled'
import { Button } from './styles/button.styled'
import { StyledContainer } from './styles/container.styled'
import { Flex } from './styles/flex.styled'
export default function Header() {
  return (
    <HeaderStyled >
      <StyledContainer>
          <Nav>
            <Logo src='./images/logo.svg' alt='brand logo' />
            <Button>Try it free</Button>
          </Nav>
          <Flex>
            <div>
              <h1>
                Build the community your fans will love.
              </h1>
              <p>
                Huddle re-imagines the way we build communities. You have a voice,
                but so does your audience. Create connections with your users as
                you engage in genuine discussion.
              </p>

              <Button bg='#ff0099' color='#fff'>
                Get Started For Free
              </Button>
            </div>
            <Image src='./images/illustration-mockups.svg' alt='brand image' />
          </Flex>
      </StyledContainer>
    </HeaderStyled>
  )
}
