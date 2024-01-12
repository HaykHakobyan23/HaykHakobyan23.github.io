import styled from "styled-components";
import Image from "next/image"
import LogoFooter from "@/public/logo.png"
import LinkedInLogo from "@/public/LinkedInLogo.svg"

import Link from "next/link";
import { FormattedMessage } from "react-intl";

const FooterBox = styled.div`
     min-height: 300px;
    /* background-color: white; */
    background-image: radial-gradient(circle, #4e0069, #600080, #740098, #8800b0, #9c00c9);

    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
    display: block;
    position: relative;
    z-index: 100;
`;

const FooterWrapper = styled.div`
     padding: 44px 22px 25px;;
    position: relative;
    &::before{
    content: " ";
    grid-area: 1/1/2/2;
    display: table;
 }
`;

const Footer_2_Container = styled.div`
     width: 100%;
    max-width: 1200px;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    p{
        font-size: 13px;
        text-align: center;
    }
    
`;

const Row_9 = styled.div`
display: flex;
flex: 3;
 &::before{
    content: " ";
    grid-area: 1/1/2/2;
    display: table;
 }
 @media screen and (max-width: 1060px) {
      display: grid;
      justify-content: center;
      text-align: center;
    }

`;

const Footer_2_Column = styled.div`
     flex-direction: column;
    display: block;
    width: 33.3333%;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    border-left: 2px solid #616365;
    padding-left: 40px;
    @media screen and (max-width: 1060px) {
       border: none;
       padding-left: 0;
    }
`;

const Footer_2_Columns = styled.div`
     display: block;
    width: 33.3333%;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    padding-left: 40px;
    @media screen and (max-width: 1060px) {
        padding-left: 0;
    }
`;
const FooterLogoWrap = styled.div`
     align-items: flex-end;
    display: flex;
`;

const LogoLing = styled(Link)`
     max-width: 100%;
    display: inline-block;
    color: #f4b183;
    text-decoration: none;
    transition: all .3s;
    @media screen and (max-width: 1060px) {
     margin: auto;
    }
`;

const SocialLinkWrap = styled(Link)`
     float: left;
    color: #d9d9d9;
    align-items: center;
    margin: 32px 8px 10px 2px;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    display: flex;
    max-width: 100%;
    &:hover{
        color: #999;
    transition: all .3s;
    }
    @media screen and (max-width: 1060px) {
     display: none;
    }
`;

const Menu = styled.div`
     margin-top: 0;
    margin-bottom: 15px;
    font-weight: 600;
`;

const FooterLink = styled(Link)`
     color: white;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 8px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: opacity .2s,all .3s;
    display: block;
    &&:hover{
        color: white;
        transform: translate(10px);
    }
`;


const FooterLegals = styled.div`
 border-top: 2px none #616365;
    text-align: center;
    font-size: 14px;
`;
export default function Footer() {
    return (
        <FooterBox>
            <FooterWrapper style={{ borderBottom: "10px solid black" }}>
                <Footer_2_Container>
                    <Row_9>
                        <Footer_2_Columns>
                            <FooterLogoWrap>
                                <LogoLing href={"/"}>
                                    <Image style={{
                                        ":hover": {
                                            objectFit: "contain",
                                            objectPosition: "50% 100%",
                                            marginBottom: "8px",
                                            transition: "opacity 0.35s",
                                        },
                                        width: "90%",
                                    }} src={LogoFooter} height={80} alt="" />
                                </LogoLing>
                            </FooterLogoWrap>
                            <div>
                                <SocialLinkWrap href={"/"}><Image style={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: "transparent",
                                    borderRadius: "50%", // Use 50% instead of 100% for a perfect circle
                                    marginRight: "8px",
                                    transition: "background-color 0.3s",
                                }}
                                    src={LinkedInLogo} height={100} alt="" />
                                    <div>Follow us on LinkedIn</div>
                                </SocialLinkWrap>
                            </div>
                        </Footer_2_Columns>

                        <Footer_2_Column>
                            <Menu><FormattedMessage id="menu" values={{ b: (info) => <b>{info}</b> }} /></Menu>
                            <FooterLink href={"/"}><FormattedMessage id="home" values={{ b: (info) => <b>{info}</b> }} /></FooterLink>
                            <FooterLink href={"/whatwedo"}><FormattedMessage id="whatWeDo" values={{ b: (info) => <b>{info}</b> }} /></FooterLink>
                            <FooterLink href={"/projects"}><FormattedMessage id="project" values={{ b: (info) => <b>{info}</b> }} /></FooterLink>
                            <FooterLink href={"/about"}><FormattedMessage id="about" values={{ b: (info) => <b>{info}</b> }} /></FooterLink>
                            <FooterLink href={"/teams"}><FormattedMessage id="team" values={{ b: (info) => <b>{info}</b> }} /></FooterLink>
                        </Footer_2_Column>
                        <Footer_2_Column>
                            <Menu><FormattedMessage id="contact" values={{ b: (info) => <b>{info}</b> }} /></Menu>
                            <FooterLink href={"tel:+374593570"}>039593570</FooterLink>
                            <FooterLink href={"mailto:m.hayk_hakobyan_2023@mail.ru"}>Hayk_Hakobyan_2023@mail.ru</FooterLink>
                            <FooterLink href={"https://www.google.com/maps/@40.5921285,44.3469055,15z?entry=ttu"} target="_blank">
                                <FormattedMessage id="address.two" values={{ b: (info) => <b>{info}</b> }} />
                                <br/>
                                <FormattedMessage id="address" values={{ b: (info) => <b>{info}</b> }} />
                            </FooterLink>
                        </Footer_2_Column>
                    </Row_9>

                </Footer_2_Container>
            </FooterWrapper>

            <FooterWrapper>
                <Footer_2_Container>
                    <FooterLegals>
                        <Link style={{ color: "#999", textDecoration: "none", hover: { color: "#616365" } }} href={"/privacyPolicy"}>Privacy Policy</Link>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <Link style={{ color: "#999", textDecoration: "none", hover: { color: "#616365" } }} href={"/cookieNotice"}>Cookie Notice</Link>
                    </FooterLegals>
                    <p>© Copyright Office Portfolio Ltd 2023, All Rights Reserved</p>
                </Footer_2_Container>
            </FooterWrapper>
        </FooterBox>
    )
}