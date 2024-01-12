import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Projects } from "@/models/Projects";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LangContext } from "../_app";

const SectionBox = styled.div`
  padding: 100px 0 100px 0;
  position: relative;
`;

const BgCollor = styled.div`
  background-color: #3b3838;
  opacity: .7;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  will-change: opacity;
  opacity: 0.25;
`;

const BoxGoBackButton = styled.div`
  z-index: 1;
  padding-bottom: 16px;
  padding-left: 32px;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: auto;
`;

const GoBacButton = styled(Link)`
  border: 2px solid #ffffff;
  background-color: #ffffff;
  color: #3b3838;
  text-align: center;
  letter-spacing: .5px;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all .3s;
  display: inline-block;
  box-shadow: 0 1px 1px transparent;
  &:hover{
  border: 2px solid #EFB7FF;
   background-color: #EFB7FF;
   color: #ffffff;
  }
`;

const SplitSection = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
`;

const SplitBox = styled.div`
  min-width: 55%;
  position: relative; 
  flex: 1;
`;





const BoxImg = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

const ChildrenBox = styled.div`
  flex: 1 0 45%;
  padding: 8px;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

const BoxInfo = styled.div`
  min-width: 45%;
  padding-left: 4.5%;
  padding-right: 12%;
  display: flex;
`;


const CenterCart = styled.div`
 border-top: 8px solid #EFB7FF;
 background-color: white;
 flex: 1;
 padding: 40px 12%;
 position: relative;
`;

const Title = styled.h1`
  margin-top: 16px;
  font-size: 2em;
  margin-top: 40px;
  margin-bottom: 8px;
  padding-top: 0;
  font-weight: 500;
  line-height: 1.2em;
  margin-bottom: 10px;
`;

const BoxAllImg = styled.div`
 background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  z-index: 2222;
  overflow: hidden;
  position: fixed;

`;

const BoxGlavniImg = styled.div`
 position: absolute;
 right: 50%;
 bottom: 53%;
 transform: translate(50%, 50%);
 img{
  max-width: 82.3vw;
    max-height: 84vh;
    transition: transform .6s ease-in-out;
 }
`;

const BoxChildrImg = styled.div`
display: flex;
 position: absolute;
 column-gap: 10px;
 right: 50%;
 bottom: 6%;
 transform: translate(50%, 50%);
`;

const ChildrImg = styled.img`
 width: 150px;
 height: 100px;

 cursor: pointer;
`;

const LrftIcon = styled.svg`
 width: 100px;
 color: white;
 position: absolute;
 left: 50px;
 top: 42%;
 cursor: pointer;
`;

const RightIcon = styled.svg`
  width: 100px;
  color: white;
  position: absolute;
 right: 60px;
 top: 42%;
 cursor: pointer;
`;

const DeletIcon = styled.svg`
 width: 60px;
 color: white;
 position: absolute;
 top: 30px;
 right: 50px;
 cursor: pointer;
`;

const ButtonImg = styled.button`
  color: #EFB7FF;
  cursor: pointer;
  text-align: center;
  letter-spacing: .5px;
  border-radius: 4px;
  margin-top: 22px;
  margin-bottom: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 23px;
  text-decoration: none;
  transition: all .3s;
  display: inline-block;
  box-shadow: 0 1px 1px transparent;
  border: 2px solid #EFB7FF;
  &&:hover{
    background-color: #EFB7FF;
    color: white;
    -webkit-box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
    -moz-box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
    box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
  }
`;

export default function ProductPage({ projects }) {
  const [indexScroll, setIndexScroll] = useState(-250)
  const text = projects && projects.description?.am ? projects.description?.am : '';
  const [isBoxVisible, setBoxVisibility] = useState(false);
  const [index, setIndex] = useState(0)
  const lang = useContext(LangContext)
  const handleToggleBox = () => {
    setBoxVisibility(!isBoxVisible);
  };

  useEffect(() => {
    const hendleScrull = (evt) => {
      let number = Math.round(window.scrollY / 10)
      let x = number / 9
      setIndexScroll(indexScroll + Math.round(x))
      if (indexScroll < 0) {
        setIndexScroll(prevIndex => {
          const newIndex = prevIndex + window.scrollY;
          return newIndex < 0 ? newIndex : 0;
        });
      }
    }
    window.addEventListener("scroll", hendleScrull)

    return () => {
      window.removeEventListener("scroll", hendleScrull)
    }
  }, [])

  useEffect(() => {
    // Disable scrolling when the component mounts
    if (isBoxVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isBoxVisible])


  return (
    <>
      <Header />
      {isBoxVisible &&
        <>
          <BoxAllImg>
            <DeletIcon onClick={() => setBoxVisibility(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </DeletIcon>

            <LrftIcon onClick={() => (
              setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.images.length - 1))
            )} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </LrftIcon>
            <BoxGlavniImg>
              <img style={{ transition: 'transform 0.6s ease-in-out' }} src={projects.images[index]} alt="" />

            </BoxGlavniImg>
            <RightIcon onClick={() => (
              setIndex((prevIndex) => prevIndex >= projects.images.length - 1 ? 0 : prevIndex + 1)
            )} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </RightIcon>
            <BoxChildrImg>
              {projects.images.length > 0 && projects.images.map((img, i) => (
                <ChildrImg style={{ opacity: index === i ? 0.3 : 1 }} onMouseMoveCapture={() => {
                  setIndex(i)
                }} key={i} src={img} />
              ))}
            </BoxChildrImg>
          </BoxAllImg>
        </>
      }
      <div style={{
        backgroundImage: `url(${projects.images[0]})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        minHeight: '55vh',
        position: "relative"

      }}>
        <BgCollor />
        <BoxGoBackButton>
          <GoBacButton href={"/projects"}>View All Projects</GoBacButton>
        </BoxGoBackButton>
      </div>
      <SectionBox>
        <Center>
          <SplitSection>

            <SplitBox>
              <BoxImg>
                <ChildrenBox>
                  <Img onClick={() => {
                    handleToggleBox()
                    setIndex(0)
                  }} src={projects.images[0]} alt="" />
                </ChildrenBox>
                <ChildrenBox>
                  <Img onClick={() => {
                    handleToggleBox()
                    setIndex(1)
                  }} src={projects.images[1]} alt="" />
                </ChildrenBox>
                <ChildrenBox>
                  <Img onClick={() => {
                    handleToggleBox()
                    setIndex(2)
                  }} src={projects.images[2]} alt="" />
                </ChildrenBox>
              </BoxImg>
            </SplitBox>
            <BoxInfo>
              <CenterCart style={{
                willChange: 'transform',
                transform: `translate3d(0px, ${indexScroll}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
              }}>
                <Title>{projects.title[lang.locale]}</Title>
                <hr />
                <p>{projects.description[lang.locale]}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
                <ButtonImg onClick={handleToggleBox}>View Gallery</ButtonImg>

              </CenterCart>
            </BoxInfo>
          </SplitSection>
        </Center>
      </SectionBox>
      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {
  await mongooseConnect()
  const { id } = context.query;
  const projects = await Projects.findById(id)
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects))
    }
  }

}