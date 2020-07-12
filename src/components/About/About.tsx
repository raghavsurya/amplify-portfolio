import React, { FunctionComponent } from 'react'

type AboutProps = {
    title: string,
    imageUrl: string,
    paragraph: string
}

const About: FunctionComponent<AboutProps> = ({ title, imageUrl, paragraph }) =>
    <div className="about">
        <h2>{title}</h2>
    </div>

export default About;