import { Link } from "react-router-dom";

interface ComponenProps {
    imgAlt?: string;
    imgSrc?: string;
    link: string;
    linkText?: string;
    name?: string;
    text?: string;
}

function ProjectOverviewCard({name, imgSrc, imgAlt, link, linkText, text}: ComponenProps) {
    return (
        <section className="project-overview">
        <h1 className="project-overview__name">{name}</h1>
        <div className="project-overview__image-box"><img className="image-box__img" src={imgSrc} alt={imgAlt} /></div>
        <p className="project-overview__text">{text}</p>
        <Link className="project-overview__button" to={link}>{linkText}</Link>
        </section>
    )
}

export default ProjectOverviewCard