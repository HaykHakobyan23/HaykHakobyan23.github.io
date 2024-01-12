import styled from "styled-components";
import Section from "./Section";
import Center from "./Center";
import Link from "next/link";
import {
    Cart,
    CardBackground,
    CardContent,
    CartTitle,
    CartButton,
    FlexBox,
} from '@/styles/CartStule'
import { useContext, useEffect, useState } from "react";
import { LangContext } from "@/pages/_app";
import { FormattedMessage } from "react-intl";


export default function ProjectCart({ projects }) {
    const url = '/projects/'
    const lang = useContext(LangContext)
    const nextLengthNumber = 150
    return (
        <div style={{ marginTop: "130px" }}>
            <Center>
                <FlexBox>
                    {projects.length > 0 && projects.map((project) => (
                        <>
                            {project.title[lang.locale] === "" ? "" :
                                <Cart>
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
                                            <CartButton className="card__button"><FormattedMessage id="more.button" values={{ b: (info) => <b>{info}</b> }} /></CartButton>
                                        </Link>
                                    </CardContent>
                                </Cart>
                            }
                        </>
                    ))}
                </FlexBox>
            </Center>
        </div>
    )
}