import React, { useRef } from "react"

//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import {
  FooterNav,
  FooterContent,
  FooterSocial,
} from "../styles/footerStyles.js"

//Icons
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons.js"

//Custom Hook
import useElementPosition from "../hooks/useElementPosition"

const Footer = ({ onCursor, iconPosition, setIconPosition }) => {
  const icon = useRef(null)
  const position = useElementPosition(icon)
  const iconHover = () => {
    onCursor("locked")
    setIconPosition({ x: position.x, y: position.y })
    console.log(iconPosition)
  }

  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>902.315.1234</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>15 Cam at Unit B</p>
            <p>University, PE C32 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a
              ref={icon}
              onMouseEnter={iconHover}
              onMouseLeave={onCursor}
              href="/"
            >
              <Instagram />
            </a>
            <a onMouseLeave={onCursor} href="/">
              <Facebook />
            </a>
            <a onMouseLeave={onCursor} href="/">
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
