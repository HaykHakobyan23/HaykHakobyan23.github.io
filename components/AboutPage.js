import styled from "styled-components";
import { useContext } from "react";
import { LangContext } from "@/pages/_app";


const BoxCenter = styled.div`
 display: grid;
 justify-content: center;
 width: 100%;

`;

const AboutBox = styled.div`
 width: 100%;
 margin-top: 50px;
 display: grid;
 grid-template-columns: 1.5fr 1fr;
 justify-content: center;
 align-items: start;
 column-gap: 20px;
 @media screen and (max-width: 1030px) {
   display: grid;
 grid-template-columns: 1fr;
    }
`;

const BoxImg = styled.div`
 /* width: 60%; */
 img{
    width: 100%;
 }
`;

const BoxText = styled.div`
 /* width: 40%; */
 margin: auto;
`;

const BigText = styled.div`
 width: 100%;
text-align: justify;
img{
    display: flex;
    height: auto!important;
}
`;


export default function AboutPage({ images, title, description, text }) {
    let texts = text
    const lang = useContext(LangContext)
    return (
        <>
            {/* <Section> */}
            {/* <Center> */}

            <BoxCenter>
                <AboutBox>
                    <BoxImg>
                        <img src={images} alt="" />
                    </BoxImg>
                    <BoxText>
                        <h2>{title[lang.locale]}</h2>
                        <p>{description[lang.locale]}</p>
                    </BoxText>
                </AboutBox>
            </BoxCenter>
            <BigText dangerouslySetInnerHTML={{ __html: texts }} />
            {/* </Center> */}
            {/* </Section> */}
            {/* <Footer /> */}
        </>
    )
}