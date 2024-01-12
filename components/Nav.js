import { LangContext } from "@/pages/_app";
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import styled from "styled-components"
import Center from "./Center";
import Section from "./Section";
import am from "@/public/am.gif"
import ru from "@/public/ru.png"
import en from "@/public/en.png"

const HeaderTop = styled.div`
     height: 30px;
    background: #000;
    z-index: 2;
    color: #fff;
    @media screen and (max-width: 460px) {
        height: 60px;
        padding: 5px;
       }
`;

const CustomContainer = styled.div`
     display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    position: relative;
`;

const CustomContainerChild = styled.div`
   display: flex;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 460px) {
        display: grid;
       }
`;

const NavLink = styled(Link)`
     display: block;
    margin-right: 32px;
    font-size: 100%;
    line-height: 22px;
    color: #fff;
    &&:hover {
        color: #EFB7FF;
    }
`;

const LgBloc = styled.div`
 position: relative;
 z-index: 100;
`;

const AboutListIclon = styled.svg`
cursor: pointer;
 width: 20px;
 color: white;
 position: relative;
`;

const ImgLang = styled.img`
 width: 40px;
 margin-left: 10px;
`;

const LgBox = styled.div`
 opacity: 0.7;
 margin-top: 5px;
 display: flex;
 margin-left: -15px;
`;

const LgList = styled.ul`
 position: absolute;
 z-index: 15;
 display: none;
 background: black;
 box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
 width: 80px;
 right: -2PX;
 border-radius: 3px;
 top: 12px;

`;

const AboutList = styled.div`
 text-align: start;
 ul{
     padding: 0;
     position: absolute;
     z-index: 100;
     li{
         color: white;
         list-style-type: none;
     }
 }
 `;




export default function Navigatea() {

    const router = useRouter();
    const { pathname } = router;
    const { locales, defaultLocale } = router;
    const [flag, setFlag] = useState(true)
    const lang = useContext(LangContext)
    const [index, setIndex] = useState(0)
    const langImg = lang.locale
    const langImgObj = {
        am,
        ru,
        en,
    }
    const langImgArr = [
        am,
        en,
        ru,
    ]

    return (
        <HeaderTop>
            <Center>

                <CustomContainer>
                    <CustomContainerChild>
                        <NavLink href={"tel:+374593570"}>039593570</NavLink>
                        <NavLink href={"mailto:m.hayk_hakobyan_2023@mail.ru"}>hayk_hakobyan_2023@mail.ru</NavLink>
                    </CustomContainerChild>
                    <LgBloc>
                        <AboutList onClick={() => setFlag(!flag)}>
                            <LgBox>
                                {/* <ButtonAbout><FormattedMessage id={lang.locale} values={{ b: (info) => <b>{info}</b> }} /></ButtonAbout> */}
                                <div>

                                    <Image style={{ width: "40px", marginLeft: "10px", height: "20px", cursor: "pointer" }} src={langImgObj[langImg]} alt="" />
                                </div>
                                <div>

                                    <AboutListIclon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={flag ? "M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" : "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"} />
                                    </AboutListIclon>
                                </div>
                            </LgBox>
                            <LgList style={{ display: flag ? "none" : "block" }}>
                                {[...locales].sort().map((locale, i) => (
                                    <li key={locale} onClick={() => setIndex(i)}>
                                        <NavLink href={router.asPath} locale={locale}>
                                            <Image style={{ width: "40px", marginLeft: "18px", height: "20px" }} src={langImgArr[i]} alt="" />
                                            {/* {locale} */}
                                        </NavLink>
                                    </li>
                                ))}
                            </LgList>
                        </AboutList>
                    </LgBloc>
                </CustomContainer>
            </Center>
        </HeaderTop>
    )
}