import styled from "styled-components";
import BoxLine from "./BoxLine";
import Center from "./Center";
import Section from "./Section";
import Image from "next/image"
import WhyChouseUsImg from "@/public/WhyChouseUsImg.png"
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LangContext } from "@/pages/_app";
const CentreAlignText = styled.div`
  opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    h2{
        margin-top: 40px;
    margin-bottom: 8px;
    padding-top: 0;
    font-family: "Gotham",sans-serif;
    font-size: 2.8em;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (max-width: 375px) {
     font-size: 2em;
    font-weight: 200;

    }
    };
    p{
    margin-bottom: 24px;
    line-height: 1.4;
    span{
        color: #f4b183;
    }
    }
    a{
        border-color: #3b3838;
    color: #3b3838;
    background-color: transparent;
    border: 2px solid #3b3838;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px 16px;
    font-weight: 500;
    display: inline-block;
    background-color: #f4b183;
    box-shadow: 0 1px 1px transparent;
    &:hover{
        color: white;
        background-color: #3b3838;
        transition: all .3s;
    }
}
`;

const FlexBox = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 100px;
@media screen and (max-width: 1030px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }
    @media screen and (max-width: 780px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
    }
     /* justify-content: center;
    align-items: flex-start;
    flex-flow: wrap;
    align-items: stretch;
    display: flex; */
    div{
        opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    min-height: 350px;
    width: 90%;
    /* background-image: linear-gradient(to top,#ffffff,#d9d9d9); */
    background-image: linear-gradient(to bottom, #f5c6ff, #f3d6ff, #f3e5ff, #f7f2ff, #ffffff);
    border-radius: 4px;
    flex-basis: 30%;
    margin: 0 16px 16px;
    text-align: center;
    flex: 0 25%;
    padding: 32px;  
    box-sizing: border-box;
    h3{
        margin-top: 40px;
    margin-bottom: 8px;
    padding-top: 0;
    font-size: 1.4em;
    font-weight: 500;
    line-height: 1.2em;
    }
    p{
        margin-bottom: 24px;
        font-size: 15px;
    line-height: 1.4;
    margin-top: 0;
    }
    }
`;


export default function WhyChooseUs({ whyChooseUs }) {
    const lang = useContext(LangContext)
    return (
        <div style={{ backgroundColor: 'white', zIndex: "1100", position: "relative" }}>
            <Section key={whyChooseUs}>
                <Center>
                    <CentreAlignText style={{ width: "50%" }}>
                        <h2><FormattedMessage id="whyChooseUs.title" values={{ b: (info) => <b>{info}</b> }} /></h2>
                        <BoxLine />
                    </CentreAlignText>
                    <FlexBox>
                        {whyChooseUs.length > 0 && whyChooseUs.map((whyChoose) => (
                            <div key={whyChoose}>
                                <Image src={WhyChouseUsImg} height={50} white={50} alt="" />
                                <h3>{whyChoose.title[lang.locale]}</h3>
                                <p>{whyChoose.description[lang.locale]}</p>
                            </div>
                        ))}
                    </FlexBox>
                </Center>
            </Section>

        </div>
    )
}