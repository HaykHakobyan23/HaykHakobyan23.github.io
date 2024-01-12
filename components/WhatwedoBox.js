import styled from "styled-components"
import Whatwedoimg from "@/public/Whatwedoimg.jpg"
import LineImg from "@/public/LineBgImgGrey.png"
import Center from "./Center";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Section from "./Section";
import { FormattedMessage } from "react-intl";
import { LangContext } from "@/pages/_app";




const Circle_background = styled.div`
position: absolute;
left: 40px;
top: 40px;
 width: 400px;
 height: 400px;
 border-radius: 100%;
 border: 15px solid white;
 display: grid;
 justify-content: center;
 align-items: center;
 z-index: -5;
 div{
  width: 300px;
  height: 300px;
  border-radius: 100%;
  border: 15px solid white;
 }
 @media screen and (max-width: 600px) {
        display: none;
    }
`;

const LineBg = styled.div`
 background-image: url(${LineImg.src});
 background-position: 95% 0,100% 0;
 background-repeat: no-repeat,no-repeat;
 background-size: auto 70vh, auto;
 background-attachment: scroll;
 position: fixed;
 top: 0%;
 bottom: 0%;
 left: 0%;
 right: 0%;
 @media screen and (max-width: 600px) {
        display: none;
    }
`;

const BoxWhatwedoimg = styled.div`
  background-image: url(${Whatwedoimg.src});
 background-position: 95% 0,100% 0;
 background-repeat: no-repeat,no-repeat;
 background-size: auto 50vh, auto;
 background-attachment: scroll;
 position: absolute;
 top: 0%;
 bottom: 0%;
 left: 60%;
 right: 0%;
 z-index: -1;
  @media screen and (max-width: 600px) {
        display: none;
    }
`;

const White_smoke_bg = styled.div`
     z-index: -2;
    background-color: var(--white-smoke);
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
`;

const WhatwedoTitle = styled.h2`
    margin-top: 40px;
    margin-bottom: 8px;
    padding-top: 0;
    font-size: 2.8em;
    font-family: 'Hedvig Letters Serif', serif;
    font-weight: 500;
    line-height: 1.2;
    z-index: 10;
`;

const BogText = styled.p`
    font-size: 1.6em;
    font-weight: 300;
      font-family: 'Hedvig Letters Serif', serif;
 span{
  color: #EFB7FF;
  font-family: 'Roboto', sans-serif;
}
`;


const AllCartBox = styled.div`
    /* display: flex; */
    z-index: 100;
    /* flex-wrap: wrap-reverse; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    /* justify-content: flex-start; */
    align-items: stretch;
    position: relative;
    margin-top: 50px;
    z-index: 1100;
    @media screen and (max-width: 1060px) {
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 800px) {
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 600px) {
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr;
    }
`;


const ImgIcons = styled.img`
 height: 48px;
`;

const BoxImgIcons = styled.div`
margin-top: 15px;
`;


const CartBox = styled(Link)`
border-top: 8px solid #EFB7FF;
    background-color: white;
    color: #3b3838;
    flex-basis: 23%;
    margin-bottom: 2%;
    margin-left: 0%;
    margin-right: 2%;
    transition-property: box-shadow;
    text-decoration: none;
    cursor: pointer;
    h3{
        font-size: 1.2em;
      color: #EFB7FF;
      font-weight: 500;
     }
    p{
    margin-bottom: 24px;
    line-height: 1.4;
    font-size: 15px;
    font-weight: 500;
}
&:hover {
-webkit-box-shadow: 0px 0px 28px 0px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 0px 28px 0px rgba(66, 68, 90, 1);
box-shadow: 0px 0px 28px 0px rgba(66, 68, 90, 1);
transition: all .5s;
}
`;

const TextCenter = styled.div`
     @media screen and (max-width: 800px) {
      text-align: center;
    }
`;

export default function WhatwedoPage({ whatwedos }) {
    const nextLengthNumber = 130;
    const [truncatedDescriptions, setTruncatedDescriptions] = useState([]);
    const lang = useContext(LangContext)
    useEffect(() => {

        if (!localStorage.getItem("lang")) {
            localStorage.setItem("lang", "defaultLanguage");
        }

        const truncatedDescs = whatwedos.map((whatwedo) => {
            return (
                whatwedo.description[lang.locale].length > nextLengthNumber
                    ? whatwedo.description[lang.locale].substring(0, nextLengthNumber)
                    : whatwedo.description[lang.locale]
            );
        });


        setTruncatedDescriptions(truncatedDescs);
    }, [whatwedos, nextLengthNumber, lang]);

    return (
        <>
            <Section>
                <Center>
                    <TextCenter>
                        <WhatwedoTitle><FormattedMessage id="whatWeDo" values={{ b: (info) => <b>{info}</b> }} /></WhatwedoTitle>
                        <BogText>
                            <span>
                                <FormattedMessage id="home.Whatwedo.description.yelow" values={{ b: (info) => <b>{info}</b> }} />
                            </span>
                            <FormattedMessage id="home.Whatwedo.description" values={{ b: (info) => <b>{info}</b> }} />
                        </BogText>
                    </TextCenter>
                    <AllCartBox>
                        {truncatedDescriptions.map((truncatedDescription, index) => (
                            <>
                                {truncatedDescription === "" ? "" :
                                    <CartBox href={"/whatwedo#" + whatwedos[index].linkId} key={whatwedos[index]._id}>
                                        <div style={{ padding: "32px", textAlign: "center", }}>
                                            <img style={{ height: "40px" }} src={whatwedos[index].images[0]} alt="" />
                                            <h3>{whatwedos[index].title[lang.locale]}</h3>
                                            <p>{truncatedDescription}</p>
                                        </div>
                                    </CartBox>
                                }
                            </>
                        ))}
                    </AllCartBox>
                </Center >
                <BoxWhatwedoimg>
                    {/* <LineBg /> */}
                </BoxWhatwedoimg>
                <White_smoke_bg></White_smoke_bg>
                <Circle_background>
                    <div></div>
                </Circle_background>
            </Section>
        </>
    )
}