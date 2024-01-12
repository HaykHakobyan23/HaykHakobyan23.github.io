import styled from "styled-components";
import BoxLine from "./BoxLine";
import Center from "./Center";
import CentreAlignText from "./CentreAlignText";
import Section from "./Section";
import LinImgBlack from "@/public/LineBlack.svg"
import Link from "next/link";
import Footer from "./Footer";
import LinImg from "@/public/Line.svg"
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LangContext } from "@/pages/_app";


const PositionBox = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 justify-content: center;
 width: 100%;
 column-gap: 20px;
 row-gap: 30px;
 margin-top: 100px;
 @media screen and (max-width: 1030px) {
  display:  grid;
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 700px) {
  display:  grid;
  grid-template-columns: 1fr ;
}
`;

const BoxChildren = styled.div`
 position: relative;
 border: 1px solid #600080;
 border-radius: 5px;
 cursor: pointer;   
 h3{
    position: absolute;
    z-index: 100;
    top: -27px;
    left: 30px;
    color: #3b3838;
    font-size: 30px;
 }
 p{
    position: absolute;
    bottom: 0px;
    left: 30px;
 }
`;

const LineBox = styled.div`
 width: 100%;
 height: 10px;
 background-color: #600080;
`;

const PositionImg = styled.img`
 width: 85%;
 padding: 35px 30px 35px 30px;
 &&:hover{
    opacity: 0.7;
    transition: 1s;
 }
`;


const ContactUsButton = styled(Link)`
         border-color: black;
    color: white;
    background-color: #9c00c9;
    border: 2px solid black;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px 16px;
    font-weight: 500;
    display: inline-block;
    box-shadow: 0 1px 1px transparent;
    &:hover{
        color: black;
        background-color: white;
        transition: all .3s;
    } 
`;

const LineBgImg = styled.div`
     z-index: 5;
    background-image: url(${LinImg.src});
    background-position: 5% 0;
    background-repeat: no-repeat;
    background-size: auto 70vh;
    background-attachment: fixed;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
`


export default function TeamPage({ teams }) {
    const lang = useContext(LangContext)
    return (
        <>
            <Section>
                    <Center>
                    <CentreAlignText>
                        <h2><FormattedMessage id="team.title" values={{ b: (info) => <b>{info}</b> }} /></h2>
                        <BoxLine />
                    </CentreAlignText>
                    <PositionBox>
                        {teams.length > 0 && teams.map((team) => (
                            <BoxChildren>
                                <h3>{team.names[lang.locale]}</h3>
                                <PositionImg src={team.images} alt="" />
                                <p>{team.position[lang.locale]}</p>
                                <LineBox></LineBox>
                            </BoxChildren>
                        ))}
                    </PositionBox>
                </Center>
            </Section>
            <div style={{
                padding: "120px 32px", // Add quotes around the values
                position: "relative",
                backgroundColor: "#9c00c9",
                color: "#3b3838",
                backgroundImage: `url(${LinImgBlack.src})`,
                backgroundPosition: "95% 0",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 70vh",
                backgroundAttachment: "fixed",
            }}
            >
                <Center>
                    <CentreAlignText>
                        <h2 style={{color: "black"}}><FormattedMessage id="team.contact.title" values={{ b: (info) => <b>{info}</b> }} /></h2>
                        <p><FormattedMessage id="team.contact.description" values={{ b: (info) => <b>{info}</b> }} /></p>
                        <ContactUsButton href={"/contact"}><FormattedMessage id="team.contact.button" values={{ b: (info) => <b>{info}</b> }} /></ContactUsButton>
                    </CentreAlignText>
                </Center>
            </div>
            <Footer />
        </>
    )
}