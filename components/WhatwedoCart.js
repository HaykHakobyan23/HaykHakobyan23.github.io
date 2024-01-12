import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import Image from "next/image"
import LogoImage from "@/public/logo.png"

import Link from "next/link";
import { useRouter } from "next/router";
import LinImg from "@/public/Line.svg"
import { LangContext } from "@/pages/_app";

const SplitMenuWrapper = styled.div`
 display: flex;
 align-items: stretch;
 position: relative;
`;

const PageNav = styled.div`
    z-index: 6;
    width: 20vw;
    /* background-image: radial-gradient(circle, #4e0069, #600080, #740098, #8800b0, #9c00c9); */
    background-color: #9c00c9;
    color: #ffffff;
       flex: 0 auto;
    padding-top: 120px;
    padding-bottom: 32px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    @media screen and (max-width: 1200px) {
      display: none;
    }

`;

const SplitScrollContent = styled.div`
 flex: 1;
`;

const SplitscrollWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    position: relative;
`;


const ScrollerContent = styled.div`
   flex: 1;
     padding: 120px 7% 120px 4.5%;
`;

const ScrollContent = styled.div`
     min-height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
`;

const ImageIcons = styled.img`
height: 48px;
`;

const Title = styled.h2`
     margin-top: 40px;
    margin-bottom: 8px;
    padding-top: 0;
    font-family: Gotham,sans-serif;
    font-size: 2.8em;
    font-weight: 500;
    line-height: 1.2;
`;

const BigText = styled.p`
 margin-bottom: 24px;
    line-height: 1.4;
`;

const StickyNav = styled.div`
    z-index: 6;
    width: 20vw;
    flex: 0 auto;
    padding-top: 120px;
    padding-bottom: 32px;
    /* position: -webkit-sticky; */
    position: sticky;
    top: 0;
`;

const PageNavImage = styled.div`
     text-align: center;
    margin-bottom: 4vh;
`;

const SideNavLink = styled(Link)`
 text-decoration: none;
    transition: all .3s;
color: #f4b183;
    &&:hover{
        color: white;
    }
`;


const LineBgImg = styled.div`
     z-index: 5;
    background-image: url(${LinImg.src});
    background-position: 31% 0;
    background-repeat: no-repeat;
    background-size: auto 70vh;
    background-attachment: fixed;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
`;

const LinkImg = styled(Link)`
display: block;
  @media screen and (max-width: 1200px) {
      display: none;
    }
`;

const Img = styled.img`
 width: 100%;
 display: none;
 @media screen and (max-width: 1200px) {
      display: block;
      margin-bottom: 40px;
    }

`;

export default function WhatwedoCart({ whatwedos }) {

    const reversedArray = whatwedos.slice().reverse();
    const router = useRouter();
    const { pathname } = router;
    const [arr, setArr] = useState([])
    const [index, setIndex] = useState(5)
    const lang = useContext(LangContext)

    whatwedos.length > 0 && whatwedos.map((val) => (
        useEffect(() => {
            setIndex((index) => {
                if (val.length > index) {
                    return index + 1
                } else {
                    return 0
                }
            })
        }, [])
    ))


    const inActiveStyle = {
        borderLeft: '8px solid #9c00c9',
        color: "black",
        backgroundColor: '#9c00c9',
        // background: 'radial-gradient(circle, #4e0069, #600080, #740098, #8800b0, #9c00c9)',
        textAlign: 'left',
        textTransform: 'uppercase',
        marginBottom: '2vh',
        marginRight: '0',
        padding: '8px 24px',
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '1.2',
        transitionDuration: '.5s',
        display: 'block',
        textDecoration: 'none',
        transition: 'all .3s',
    };
    const activeStyle = {
        zIndex: 5,
        backgroundColor: '#4e0069',
        color: 'white',
        position: 'relative',
        transform: 'translate(-16px)',
        textTransform: 'uppercase',
        marginBottom: '2vh',
        marginRight: '0',
        padding: '8px 24px',
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '1.2',
        transitionDuration: '.5s',
        display: 'block',
        transition: 'all .9s',
    };

    const activeBgImg = {
        opacity: "1",
    }

    const inActiveBgImg = {
        opacity: "1",
        overflow: 'hidden',
    }

    return (
        <SplitMenuWrapper>
            <SplitScrollContent>
                {reversedArray.length > 0 && reversedArray.map((whatwedo) => (
                    <SplitscrollWrapper key={whatwedo._id}>
                        <LinkImg href={whatwedo.linkId}
                            style={{
                                ...(router.asPath === router.pathname + '#' + whatwedo.linkId
                                    ? activeBgImg
                                    : inActiveBgImg),
                                backgroundImage: `url(${whatwedo.images[1]})`,
                                backgroundPosition: '50%',
                                backgroundSize: 'cover',
                                transitionDuration: '.8s',
                                transitionTimingFunction: 'ease-in',
                                height: "100vh",
                                top: '0%',
                                bottom: '0%',
                                left: '0%',
                                right: '0%',
                                width: "50%",
                                position: "sticky"
                            }}
                        >
                            {/* Your other content */}
                        </LinkImg>
                        {/* <LineBgImg /> */}
                        <ScrollerContent id={whatwedo.linkId}>
                            <ScrollContent>
                                <Img src={whatwedo.images[1]} alt="" />
                                <ImageIcons src={whatwedo.images[0]} alt="" />
                                <Title >{whatwedo.title[lang.locale]}</Title>
                                <BigText>{whatwedo.description[lang.locale]}</BigText>
                            </ScrollContent>
                        </ScrollerContent>
                    </SplitscrollWrapper>
                ))}
            </SplitScrollContent>
            <PageNav>
                <StickyNav>
                    <PageNavImage>
                        <Image src={LogoImage} height={60} />
                    </PageNavImage>
                    {reversedArray.length > 0 &&
                        reversedArray.map((link) => (
                            <SideNavLink href={`#${link.linkId}`} key={link.linkId} style={router.asPath === router.pathname + '#' + link.linkId ? activeStyle : inActiveStyle}>
                                {link.title[lang.locale]}
                            </SideNavLink>
                        ))}
                </StickyNav>
            </PageNav>
        </SplitMenuWrapper>
    )
}