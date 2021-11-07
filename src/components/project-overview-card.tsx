import React from 'react';
import { Link } from 'react-router-dom';
import type { VFC } from 'react';

interface ComponentProps {
    time: string;
    imgAlt: string;
    imgSrc: string;
    link: string;
    linkText: string;
    name: string;
    children: React.ReactNode;
}

const ProjectOverviewCard: VFC<ComponentProps> = (props: ComponentProps) => {
    const {
        time, name, imgSrc, imgAlt, link, linkText, children,
    } = props;

    return (
        <section className="project-overview" data-time={time}>
            <h2 className="project-overview__name">{name}</h2>
            <div className="project-overview__body-wrap">
                <div className="project-overview__image-box"><img className="image-box__img" src={imgSrc} alt={imgAlt} /></div>
                <div className="project-overview__description">
                    <div className="project-overview__text">{children}</div>
                    <Link className="project-overview__button" to={link}>{linkText}</Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverviewCard;
