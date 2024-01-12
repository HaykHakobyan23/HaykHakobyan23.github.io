import AboutCart from "@/components/AboutCart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { About } from "@/models/About";

export default function Team({abouts}) {
    return (
        <>
         <Header />
         <AboutCart abouts={abouts} />
         <Footer />
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const abouts = await About.find({}, null, {sort: {"_id":-1}});
    return{
        props :{
            abouts: JSON.parse(JSON.stringify(abouts))
        }
    }
}