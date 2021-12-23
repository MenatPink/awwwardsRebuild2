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

const Footer = ({ onCursor, setHamburgerPosition }) => {
  const instagramRef = useRef(null)
  const instagramPosition = useElementPosition(instagramRef)

  const facebookRef = useRef(null)
  const facebookPosition = useElementPosition(facebookRef)

  const vimeoRef = useRef(null)
  const vimeoPosition = useElementPosition(vimeoRef)

  const iconHover = (x,y) => {
    onCursor("locked")
    setHamburgerPosition({ x: x, y:y })
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
              ref={instagramRef}
              onMouseEnter={() =>
                iconHover(instagramPosition.x, instagramPosition.y)
              }
              onMouseLeave={onCursor}
              href="/"
            >
              <Instagram />
            </a>
            <a
              ref={facebookRef}
              onMouseEnter={() =>
                iconHover(facebookPosition.x, facebookPosition.y)
              }
              onMouseLeave={onCursor}
              href="/"
            >
              <Facebook />
            </a>
            <a
              ref={vimeoRef}
              onMouseEnter={() => iconHover(vimeoPosition.x, vimeoPosition.y)}
              onMouseLeave={onCursor}
              href="/"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
