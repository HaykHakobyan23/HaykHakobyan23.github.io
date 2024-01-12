import { FormattedMessage } from "react-intl";
import BoxLine from "./BoxLine";
import Center from "./Center";
import CentreAlignText from "./CentreAlignText";
import ProjectCart from "./ProjectCart";
import Section from "./Section";



export default function ProjectPage({projects}) {
    return (
        <>
        <Center>
            <Section>
                <CentreAlignText    >
                    <h2><FormattedMessage id="project.page.title" values={{ b: (info) => <b>{info}</b> }} /></h2>
                    <BoxLine />
                    <p><FormattedMessage id="project.page.description" values={{ b: (info) => <b>{info}</b> }} /></p>
                </CentreAlignText>
                 <ProjectCart projects={projects} />
            </Section>
        </Center>
        </>
    )
}