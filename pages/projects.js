import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigatea from "@/components/Nav";
import ProjectPage from "@/components/ProjectPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Projects } from "@/models/Projects";

export default function ProjectsPage({ projects }) {
    return (
        <>
            <Header />  
            <ProjectPage projects={projects} />
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const projects = await Projects.find({}, null, { sort: { '_id': -1 } });
    return {
        props: {
            projects: JSON.parse(JSON.stringify(projects)),
        }
    };
}
