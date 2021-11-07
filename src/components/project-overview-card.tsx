import React from 'react';
import { Link } from 'react-router-dom';
import type { FC, PropsWithChildren as PWC } from 'react';

interface ComponentProps {
    time: string;
    imgAlt: string;
    imgSrc: string;
    link: string;
    linkText: string;
    name: string;
    slug?: string;
    children: React.ReactNode;
}

const ProjectOverviewCard: FC<ComponentProps> = (props: PWC<ComponentProps>) => {
    const {
        time, name, imgSrc, imgAlt, link, linkText, children, slug,
    } = props;

    return (
        <section className="project-overview" data-time={time} id={slug}>
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
