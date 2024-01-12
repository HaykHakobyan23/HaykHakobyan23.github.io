// Importing necessary modules and components
import Center from "@/components/Center";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Projects } from "@/models/Projects";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
    Cart,
    CardBackground,
    CardContent,
    CartTitle,
    CartButton,
    FlexBox,
} from '@/styles/CartStule'
import { countContext } from "@/components/Header";
import CentreAlignText from "@/components/CentreAlignText";
import BoxLine from "@/components/BoxLine";
import styled from "styled-components";
import Footer from "@/components/Footer";
import { LangContext } from "@/pages/_app";


const Box = styled.div`
 background-color: #ddd;
    padding: 10px;
    width: 100%;
    div{
        font-family: "Gotham",sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    }
`;

// Main CategorysFiltr Component
export default function CategorysFiltr({ projects, categorys }) {
    const [categoryF, setCategoryF] = useState("");
    const local = localStorage.getItem("local")
    const lang = useContext(LangContext)
  const nextLengthNumber = 150  
    const [title, setTitle] = useState("")
    useEffect(() => {
        if (categorys.length > 0) {
            // Assuming you want to use the first category's ID
            const firstCategoryId = local;
            setCategoryF(firstCategoryId);
        }
    }, [categorys]);

    // Filtering projects based on the selected category
    const filteredProjects = projects.filter((project) => project.category === categoryF);
    // console.log(filteredProjects)
    const url = '/projects/'
    return (
        <>
            <Header />
            <Section>
                <Center>
                    <Section>
                        <CentreAlignText>
                            <h2>{localStorage.getItem("title")}</h2>
                            <BoxLine />
                        </CentreAlignText>
                    </Section>
                </Center>
                <Center>
                    <div>
                        <FlexBox>
                            {filteredProjects.length > 0 ? filteredProjects.map((project) => (
                                <Cart key={project}>
                                    <CardBackground
                                        className="card__background"
                                        src={project.images[0]}
                                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                        width="1920"
                                        height="2193"
                                    />
                                    <CardContent className="card__content | flow">
                                        <div className="card__content--container | flow">
                                            <CartTitle className="card__title">{project.title[lang.locale]}</CartTitle>
                                            <p className="card__description">
                                                {project.description[lang.locale].length > nextLengthNumber
                                                    ?
                                                    project.description[lang.locale].substring(0, nextLengthNumber)
                                                    :
                                                    project.description[lang.locale]}...
                                            </p>
                                        </div>
                                        <Link href={url + project._id}>
                                            <CartButton className="card__button">Read more</CartButton>
                                        </Link>
                                    </CardContent>
                                </Cart>
                            ))
                                :
                                <Box>
                                    <CentreAlignText>Projects coming soon</CentreAlignText>
                                </Box>
                            }
                        </FlexBox>
                    </div>
                </Center>
            </Section>
            <Footer />
        </>
    );
}



// Fetching data for the component during server-side rendering
export async function getServerSideProps() {
    await mongooseConnect();
    const projects = await Projects.find({}, null, { sort: { '_id': -1 } });
    const categorys = await Category.find({}, null, { sort: { '_id': -1 } });

    return {
        props: {
            projects: JSON.parse(JSON.stringify(projects)),
            categorys: JSON.parse(JSON.stringify(categorys)),
        },
    };
}
