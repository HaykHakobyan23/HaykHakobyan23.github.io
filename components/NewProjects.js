import styled from "styled-components";
import BoxLine from "./BoxLine";
import Center from "./Center";
import CentreAlignText from "./CentreAlignText";
import Section from "./Section";
import LineBgImgGrey from "@/public/LineBgImgGrey.png"
import CircleBgImg from "@/public/CircleBgImg.png"
import Link from "next/link";
import {
  Cart,
  CardBackground,
  CardContent,
  CartTitle,
  CartButton,
  FlexBox,
  Contenier,
} from '@/styles/CartStule'
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LangContext } from "@/pages/_app";

const LineBg = styled.div`
 z-index: -1; 
  background-image: url(${LineBgImgGrey.src});
 background-position: 10% 0,100% 0;
 background-repeat: no-repeat,no-repeat;
 background-size: auto 70vh, auto;
 background-attachment: scroll;
 position: fixed;
 top: 0%;
 bottom: 0%;
 left: 0%;
 right: 0%; 
`;

const CircleBg = styled.div`
  background-image: url(${CircleBgImg.src});
  z-index: -1;
  margin-right: 10px;
  background-position: -20%;
    background-repeat: no-repeat;
    background-size: 40vw;
    background-attachment: fixed;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    opacity: .25;
`;




export default function NewProjects({ newProjects }) {
  const url = '/projects/'
  const lang = useContext(LangContext)
  const nextLengthNumber = 150

  return (
    <div style={{ position: "relative", zIndex: 1000 }}>
      <Section style={{ zIndex: "1000" }}>
        <Center>
          <CentreAlignText>
            <h2><FormattedMessage id="home.project.title" values={{ b: (info) => <b>{info}</b> }} /></h2>
            <BoxLine />
          </CentreAlignText>
          <CentreAlignText>

          </CentreAlignText>
        </Center>
        <Section>
          <Center>
            <FlexBox>
              {newProjects.length > 0 && newProjects.map((project) => (
                project.isChecked && (
                  <Cart key={project._id}>
                    <CardBackground
                      className="card__background"
                      src={project.images[0]}
                      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                      width="1920"
                      height="2193"
                    />
                    <CardContent className="card__content | flow">
                      <div className="card__content--container | flow">
                        <CartTitle className="card__title">{project.title[lang.locale]}</CartTitle>
                        <p className="card__description">
                          {project.description[lang.locale].length > nextLengthNumber
                           ?
                           project.description[lang.locale].substring(0, nextLengthNumber)
                           :
                           project.description[lang.locale]}...
                          </p>  
                      </div>
                      <Link href={url + project._id}>
                        <CartButton className="card__button"><FormattedMessage id="more.button" values={{ b: (info) => <b>{info}</b> }} /></CartButton>
                      </Link>
                    </CardContent>
                  </Cart>
                )
              ))}
            </FlexBox>
          </Center>
        </Section>
      </Section>
      <CircleBg ></CircleBg>
      {/* <LineBg></LineBg> */}
    </div>
  )
}