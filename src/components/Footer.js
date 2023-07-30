import React from 'react'
import { StyledContainer } from './styles/container.styled'
import { Flex } from './styles/flex.styled'
import { StyledFooter } from './styles/footer.styled'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <StyledFooter>
        <StyledContainer>
            <img src='./images/logo_white.svg' alt='Place logo' />
            <Flex>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>
                    <li>+1-543-123-4567</li>
                    <li>example@huddle.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>

                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <SocialIcons />
            </Flex>
            <p>&copy; Huddle. All rights reserved 2021</p>
        </StyledContainer>
    </StyledFooter>
  )
}
