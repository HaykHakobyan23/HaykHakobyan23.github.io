import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatwedoBox from "@/components/WhatwedoBox";
import WhyChooseUs from "@/components/WhyChooseUs";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Whatwedo } from "@/models/Whatwedo";
import { WhyChoose } from "@/models/WhyChoose";
import Head from "next/head";
import { Projects } from "@/models/Projects";
import NewProjects from "@/components/NewProjects";
import { SiteUrl } from "@/models/SiteUrl";
import Navigatea from "@/components/Nav";
import Script from "next/script";
import styled from "styled-components";
import Link from "next/link";


const TopLink = styled(Link)`
 width: 70px;
 height: 70px;
 background-color: red;
 position: fixed;
 bottom: 60px;
 border-radius: 50%;
 background-color: #d9d9d9;
 right: 45px;
 z-index: 50000;
 display: grid;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 svg{
  width: 40px;
  color: #f4b183;
 }
`;


export default function HomePage({ whatwedos, whyChooseUs, categorys, newProjects, siteUrl }) {
  return (
    <header>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <Header siteUrl={siteUrl} />
      <Featured />
      <WhatwedoBox whatwedos={whatwedos} />
      <WhyChooseUs whyChooseUs={whyChooseUs} />
      <NewProjects newProjects={newProjects} />
      <Footer />
      <Script style={{zIndex: "-1"}} src="//code.jivosite.com/widget/NrtGQ4Q9ZD" async/>
    </header>
  )
}


export async function getServerSideProps() {
  await mongooseConnect();
  const whatwedos = await Whatwedo.find({}, null, { sort: { '_id': -1 } });
  const whyChooseUs = await WhyChoose.find({}, null, { sort: { '_id': -1 } });
  const categorys = await Category.find({}, null, { sort: { '_id': -1 } });
  const newProjects = await Projects.find({}, null, { sort: { '_id': -1 }, limit: 6 });
  const siteUrl = await SiteUrl.find({}, null, { sort: { '_id': -1 } });


  return {
    props: {
      whatwedos: JSON.parse(JSON.stringify(whatwedos)),
      whyChooseUs: JSON.parse(JSON.stringify(whyChooseUs)),
      categorys: JSON.parse(JSON.stringify(categorys)),
      newProjects: JSON.parse(JSON.stringify(newProjects)),
      siteUrl: JSON.parse(JSON.stringify(siteUrl)),
    }
  };
}