import { Link } from 'react-router-dom';
import type { VFC } from 'react';

interface ComponentProps {
    imgAlt: string;
    imgSrc: string;
    link: string;
    linkText: string;
    name: string;
    text: string;
}

const ProjectOverviewCard: VFC<ComponentProps> = (props: ComponentProps) => {
    const {
        name, imgSrc, imgAlt, link, linkText, text,
    } = props;

    return (
        <section className="project-overview">
            <h1 className="project-overview__name">{name}</h1>
            <div className="project-overview__image-box"><img className="image-box__img" src={imgSrc} alt={imgAlt} /></div>
            <p className="project-overview__text">{text}</p>
            <Link className="project-overview__button" to={link}>{linkText}</Link>
        </section>
    );
};

export default ProjectOverviewCard;
