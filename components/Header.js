import styled, { css } from 'styled-components';
import Navigatea from "./Nav";
import Center from "./Center";
import Link from "next/link";
import Image from "next/image"
import Logo from "@/public/Logo.png"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FormattedMessage, useIntl } from "react-intl";


const HeaderBox = styled.div`
 position: relative;
 z-index: 2000;
 position: fixed;
 width: 100%;
 user-select: none;
`;

const HeaderBottom = styled.div`
 position: relative;
 background-color: #4e0069;
 height: 70px;
 box-shadow: 0 2px 4px 0 rgba(0,0,0,.17);
 transition: height .5s;
`;

const MainLogo = styled.div`
 position: relative;
 z-index: 100;
 padding: 10px 0;
 margin-right: 20px;
`;
const HeaderMenuInner = styled.div`
 display: flex;
 align-items: center;
 justify-content: end;
 flex: 1;
 position: relative;
 height: 100%;
 transition: .8s;
 @media screen and (max-width: 1000px) {
  display: ${props => props.menuButt ? 'flex' : 'none'};
  position: fixed;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 10px;
  /* background-image: radial-gradient(circle, #4e0069, #600080, #740098, #8800b0, #9c00c9); */
  background-color: #4e0069;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2000;
  transition: all 0.5s;
  overflow-x: hidden;
    overflow-y: auto;
    height: auto;
 }
 @media screen and (max-width: 460px) {
  margin-top: 35px;
 }
@media screen and (max-width: 320px) {
 margin-top: 40px;
}
`;

const MenuList = styled.div`
 display: flex;
 position: relative;
 align-items: center;
 justify-content: end;
 height: 100%;
 li{
  padding: 0 19px;
  display: flex;
  align-items: center;
  height: 100%;
 }
 @media screen and (max-width: 1000px) {
  display: grid;
  row-gap: 20px;
 }
`;

const ListLink = styled.a`
 font-size: 110%;
 line-height: 19px;
 color: rgba(0,0,0,.8);
 color: #EFB7FF;
 transition: .5s;
 &&:hover{
  color: black;
 }
`;

const CenterBox = styled.div`
 width: 100%;
 justify-content: space-between;
 display: flex;
 align-items: center;
`;

const SecondMenu = styled.div`
 position: absolute;
 top: -51px;
 right: 60px;
 @media screen and (max-width: 1000px) {
  position: relative;
  left: 4px;
  top: 15px;
 }
`;

const SecondList = styled.div`
 padding: 0;
 margin: 0;
 list-style-type: none;
 display: flex;
 align-items: center;
 font-size: 100%;
 line-height: 15px;
 height: 30px;
 li{
   padding: 0 16px;
 }
 @media screen and (max-width: 1000px) {
  display: grid;
  font-size: 110%;
  row-gap: 25px;
 }
`;

const NavLink = styled.a`
 transition: opacity .3s;
 display: block;
 color: white;
 transition: all.5s;
 &&:hover {
   color: #EFB7FF;
 }
 @media screen and (max-width: 1000px) {
   color: #EFB7FF;
  &&:hover{
   color: black;
  }
 }
`;

const BoxMenu = styled.div`
 margin-right: 70px;
 position: absolute;
 z-index: 1;
 right: -60px;
 top: 45px;
 position: fixed;
 display: none;
 @media screen and (max-width: 1000px) {
  display: block;
 }
 @media screen and (max-width: 460px) {
  margin-top: 42px;
 }
 @media screen and (max-width: 320px) {
  margin-top: 42px;
 }
 div{
  width: 30px;
  height: 4px;
  background-color: white;
  margin-top: 10px;
 }
 .nool{
  transform: rotateX('angle');
  transition: 0.7s;
  transform: rotate(0);
  display: block;
  width: 40px;

 }
 .one{
  display: none;
  width: 40px;
  transition: 0.7s;
  @media screen and (max-width: 1030px) {
  display: block;
    }
 }

 .two{
  display: none;
  width: 40px;
  transition: 0.7s;
  @media screen and (max-width: 1030px) {
   display: block;
  }
 } `;

export default function Header() {
  const url = '/projects/categories/';
  const pathname = usePathname();
  const [button, setButton] = useState(false)
  const intl = useIntl()
  const finance = intl.formatMessage({ id: "finance" })
  const housingAssociations = intl.formatMessage({ id: "housing-Associations" })
  const industrial = intl.formatMessage({ id: "industrial" })
  const legal = intl.formatMessage({ id: "legal" })
  const marketing = intl.formatMessage({ id: "marketing" })
  const media = intl.formatMessage({ id: "media" })
  const [menuBar, setMenuBor] = useState(false)
  const [menuButt, setMenuButt] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleToggleBox = () => {
    setMenuButt(!menuButt);
  };

  useEffect(() => {
    // Disable scrolling when the component mounts
    if (menuButt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menuButt])


  return (
    <HeaderBox>
      <Navigatea />
      <HeaderBottom>
        <Center>
          <CenterBox>
            <MainLogo id="logo">
              <Link href={"/"} >
                <Image style={{ width: "auto", height: "46px", display: "block" }} height={60} src={Logo} alt="" />
              </Link>
            </MainLogo>
            <HeaderMenuInner menuButt={menuButt}>
              <div>
                <MenuList >
                  <li onClick={() => localStorage.setItem("title", finance)}><Link href={`${url}65750cd944a9575d836bb30e`}>
                    <ListLink onClick={() => localStorage.setItem("local", "65750cd944a9575d836bb30e")} style={{ color: pathname.includes("/projects/categories/65750cd944a9575d836bb30e") ? "black" : "" }}>
                      {finance}
                    </ListLink></Link></li>
                  {/* <li onClick={() => localStorage.setItem("title", housingAssociations)}><Link href={`${url}65750ccc44a9575d836bb30b`}>
                    <ListLink onClick={() => localStorage.setItem("local", "65750ccc44a9575d836bb30b")} style={{ color: pathname.includes("/projects/categories/65750ccc44a9575d836bb30b") ? "black" : "" }}>
                      {housingAssociations}
                    </ListLink></Link></li> */}
                  <li onClick={() => localStorage.setItem("title", industrial)}><Link href={`${url}65750cc344a9575d836bb308`}>
                    <ListLink onClick={() => localStorage.setItem("local", "65750cc344a9575d836bb308")} style={{ color: pathname.includes("/projects/categories/65750cc344a9575d836bb308") ? "black" : "" }}>
                      {industrial}
                    </ListLink></Link></li>
                  <li onClick={() => localStorage.setItem("title", legal)}><Link href={`${url}65750cb844a9575d836bb305`}>
                    <ListLink onClick={() => localStorage.setItem("local", "65750cb844a9575d836bb305")} style={{ color: pathname.includes("/projects/categories/65750cb844a9575d836bb305") ? "black" : "" }}>
                      {legal}
                    </ListLink></Link></li>
                  <li onClick={() => localStorage.setItem("title", marketing)}><Link href={`${url}65750cae44a9575d836bb302`}>
                    <ListLink onClick={() => localStorage.setItem("local", "65750cae44a9575d836bb302")} style={{ color: pathname.includes("/projects/categories/65750cae44a9575d836bb302") ? "black" : "" }}>
                      {marketing}
                    </ListLink></Link></li>
                  <li onClick={() => localStorage.setItem("title", media)}><Link href={`${url}65750ca144a9575d836bb2ff`}>
                    <ListLink onClick={() => localStorage.setItem("local", "65750ca144a9575d836bb2ff")} style={{ color: pathname.includes("/projects/categories/65750ca144a9575d836bb2ff") ? "black" : "" }}>
                      {media}
                    </ListLink></Link></li>
                </MenuList>
              </div>
              <SecondMenu>
                <SecondList>
                  <li>
                    <NavLink style={{ color: pathname.includes('/whatwedo') ? "#EFB7FF" : "" }} href={"/whatwedo"}>
                      <FormattedMessage id="whatWeDo" values={{ b: (info) => <b>{info}</b> }} />
                    </NavLink>
                  </li>

                  <li>
                    <NavLink style={{ color: pathname.includes('/projects') ? "#EFB7FF" : "" }} href={"/projects"}>
                      <FormattedMessage id="project" values={{ b: (info) => <b>{info}</b> }} />
                    </NavLink>
                  </li>

                  <li>
                    <NavLink style={{ color: pathname.includes('/about') ? "#EFB7FF" : "" }} href={"/about"}>
                      <FormattedMessage id="about" values={{ b: (info) => <b>{info}</b> }} />
                    </NavLink>
                  </li>

                  <li>
                    <NavLink style={{ color: pathname.includes('/teams') ? "#EFB7FF" : "" }} href={"/teams"}>
                      <FormattedMessage id="team" values={{ b: (info) => <b>{info}</b> }} />
                    </NavLink>
                  </li>

                  <li>
                    <NavLink style={{ color: pathname.includes('/contact') ? "#EFB7FF" : "" }} href={"/contact"}>
                      <FormattedMessage id="contact" values={{ b: (info) => <b>{info}</b> }} />
                    </NavLink>
                  </li>
                </SecondList>
              </SecondMenu>
            </HeaderMenuInner>
            <BoxMenu onClick={() => setMenuButt(!menuButt)}>
              <div style={{ transform: !menuButt ? "rotate(0)" : "rotate(50deg)" }} className="one"></div>
              <div style={{ transform: !menuButt ? "rotate(0)" : "rotate(-50deg)", marginTop: menuButt && "-4px" }} className="two"></div>
            </BoxMenu>
          </CenterBox>
        </Center>
      </HeaderBottom>
    </HeaderBox>
  )
}