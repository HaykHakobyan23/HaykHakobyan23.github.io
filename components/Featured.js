import Image from "next/image";
import bgImage from "@/public/featured.jpg";
import styled from "styled-components";
import Logo from "@/public/logo.png"
import Center from "./Center";
import BoxLine from "./BoxLine";
import { FormattedMessage } from "react-intl";
const BgColor = styled.div`
 /* background-image: linear-gradient(to left, #111111, #242424, #373737, #4b4b4b, #606060); */
 /* background-image: linear-gradient(to left, #d251ff, #de7cff, #e9a0ff, #f2c3ff, #f9e5ff); */
 /* background-color: #DF81FF; */
 background-color: black;
 opacity: 0.5;
 width: 100%;
 height: 100vh;
 z-index: 1000;
`;
const BgImages = styled.div`
 background-image: url(${bgImage.src});
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 background-attachment: fixed;
 min-height: 100vh;

 position: relative;
 z-index: 1100;

 
 `;

const Contenier = styled.div`
 margin-top: 50px;
 position: absolute;
 top: 50%;
 bottom: auto;
 left: 0%;
 right: 0%;
 transform: translateY(-50%);
 max-width: 1100px;
 margin-left: auto;
 margin-right: auto;
`;

const ContenierChildren = styled.div`
 text-align: center;
 margin-left: auto;
 margin-right: auto;
 width: 60%;
 @media screen and (max-width: 740px) {
      /* display: none; */
      width: 100% ;
    }
`;

const Title = styled.h1`
 color: #EFB7FF;
 font-family: 'Roboto', sans-serif;
 margin-top: 56px;
 font-weight: 100;
 margin-top: 40px;
 margin-bottom: 8px;
 padding-top: 0;
 font-size: 3.2em;
 line-height: 1.2em;
 @media screen and (max-width: 375px) {
     font-size: 2.5em;
    }
`;

const Office = styled.span`
     font-family: Gothambook,sans-serif;
     font-weight: 300;
`;



const TextDescrintion = styled.p`
    font-size: 1.2em;
    line-height: 1.3em;
    color: white;
    /* text-align: justify;/ */
    font-weight: 300;
    span{
      color: #EFB7FF;
    }
`;

const BoxLogo = styled.div`
  @media screen and (max-width: 375px) {
     display: none;
    }
`;
; export default function Featured() {
  return (
    <BgImages>
      <BgColor />
        <Center>
          <Contenier>
            <ContenierChildren>
              <BoxLogo>
              <Image src={Logo} alt="" />
              </BoxLogo>
              <Title><FormattedMessage id="title" values={{ b: (info) => <b>{info}</b> }} /></Title>
              <BoxLine/>
              <TextDescrintion> 
              <FormattedMessage id="description" values={{ b: (info) => <b>{info}</b> }} />
                <span><FormattedMessage id="descriptionYelow" values={{ b: (info) => <b>{info}</b> }} /></span>
              </TextDescrintion>
            </ContenierChildren>
          </Contenier>
        </Center>
    </BgImages>
  );
}