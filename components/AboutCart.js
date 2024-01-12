import styled from "styled-components";
import AboutPage from "./AboutPage";
import CentreAlignText from "./CentreAlignText";
import BoxLine from "./BoxLine";
import Header from "./Header";
import Section from "./Section";
import Center from "./Center";
import { useContext } from "react";
import { LangContext } from "@/pages/_app";
import { FormattedMessage } from "react-intl";

const BoxCenter = styled.div`
 display: grid;
 justify-content: center;
 width: 100%;
 @media screen and (max-width: 1300px) {
      margin-top: 30px;
    }
`;

const AboutBox = styled.div`
 width: 100%;
 margin-top: 50px;
 display: flex;
 justify-content: center;
 column-gap: 50px;
`;

const BoxImg = styled.div`
 width: 60%;
 img{
    width: 100%;
 }
`;

const BoxText = styled.div`
 width: 40%;
`;

const BigText = styled.div`
 width: 100%;
text-align: justify;
img{
    display: flex;
    height: auto!important;
}
`;

export default function AboutCart({ abouts }) {
  const lang = useContext(LangContext)
  let numberLength = abouts.length
  console.log(abouts[0])
  return (
    // <div>
    <>
      <Section>
        <Center>
          <BoxCenter>
            <CentreAlignText>
              <h2> <FormattedMessage id="about.page.title" values={{ b: (info) => <b>{info}</b> }} /></h2>
              <BoxLine />
            </CentreAlignText>
            {abouts.length > 0 && abouts.map((about) => (
              <>
                <AboutPage {...about} numberLength={numberLength} />
              </>
            ))}
          </BoxCenter>
        </Center    >
      </Section>
    </>
    // </di/v>
  )
}