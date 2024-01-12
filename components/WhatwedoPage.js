import styled from "styled-components";
import Center from "./Center";
import Header from "./Header";
import Whatwedoimg from "@/public/WhatwedoBg.jpg"
import Section from "./Section";
import BoxLine from "./BoxLine";
import WhatwedoPages from "./WhatwedoCart";
import Link from "next/link";
import LinImgBlack from "@/public/LineBlack.svg"
import Footer from "./Footer";
import CentreAlignText from "./CentreAlignText";
import { FormattedMessage } from "react-intl";
import WhatwedoCart from "./WhatwedoCart";

const BgImgBox = styled.div`
 background-image: url(${Whatwedoimg.src});
 background-position: 50%;
 background-size: cover;
 min-height: 50vh;
`;

const BoxTitle = styled.div`
 width: 70%;
 margin-left: auto;
 margin-right: auto;
 text-align: center;
`;

const Title = styled.h1`
 margin-top: 40px;
 margin-bottom: 8px;
 padding-top: 0;
 font-size: 3.2em;
 font-weight: 500;
 line-height: 1.2em;
`;

const BigText = styled.p`
 font-size: 1.6em;
 font-weight: 300;
 /* text-align: center; */
`;

const PageWrapper = styled.div`
 position: relative;
 overflow: hidden;
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

  

export default function WhatwedoPage({ whatwedos }) {
    return (
        <>
            <BgImgBox />
            <Section>
                <Center>
                    <CentreAlignText>
                        <Title><FormattedMessage id="Whatwedo.title" values={{ b: (info) => <b>{info}</b> }} /></Title>
                        <BoxLine />
                        <BigText><FormattedMessage id="whatwedo.description" values={{ b: (info) => <b>{info}</b> }} /></BigText>
                    </CentreAlignText>
                </Center>
            </Section>
            <WhatwedoCart whatwedos={whatwedos} />
            <PageWrapper>
                <div style={{
                    padding: "120px 32px", // Add quotes around the values
                    position: "relative",
                    backgroundColor: "#EFB7FF",
                    color: "#3b3838",
                    // backgroundImage: `url(${LinImgBlack.src})`,
                    backgroundPosition: "95% 0",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto 70vh",
                    backgroundAttachment: "fixed",
                }}
                >
                    <Center>
                        <CentreAlignText>
                        <h2><FormattedMessage id="team.contact.title" values={{ b: (info) => <b>{info}</b> }} /></h2>
                        <p><FormattedMessage id="team.contact.description" values={{ b: (info) => <b>{info}</b> }} /></p>
                        <ContactUsButton href={"/contact"}><FormattedMessage id="team.contact.button" values={{ b: (info) => <b>{info}</b> }} /></ContactUsButton>
                        </CentreAlignText>
                    </Center>
                </div>
                <Section>
                    <Center>
                        <CentreAlignText>
                            <h2><FormattedMessage id="our.commitment" values={{ b: (info) => <b>{info}</b> }} /></h2>
                            <BoxLine />
                            <p><FormattedMessage id="our.commitment.description" values={{ b: (info) => <b>{info}</b> }} /></p>
                            <p>
                            <FormattedMessage id="our.commitment.description.two" values={{ b: (info) => <b>{info}</b> }} />
                            </p>
                        </CentreAlignText>
                    </Center>
                </Section>
            </PageWrapper>
            <Footer />
        </>
    )
}