import React from 'react';
import {Link} from 'react-router-dom';
import type {FC, PropsWithChildren as PWC} from 'react';

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

    function urlSize(img: string, pxl: string): string {
        return `${img}?nf_resize=fit&w=${pxl}`;
    }

    function srcSet(img: string): string {
        return `${img}?nf_resize=fit&w=500 500w,
                ${img}?nf_resize=fit&w=800 800w,`;
    }

    return (
        <section className="project-overview" data-time={time} id={slug}>
            <h2 className="project-overview__name">{name}</h2>
            <div className="project-overview__body-wrap">
                <div className="project-overview__image-box">
                    <img
                        className="image-box__img"
                        src={urlSize(imgSrc, '800')}
                        srcSet={srcSet(imgSrc)}
                        sizes="(max-width: 900px) 500px, 800px"
                        alt={imgAlt}
                    />
                </div>
                <div className="project-overview__description">
                    <div className="project-overview__text">{children}</div>
                    <Link className="project-overview__button" to={link}>{linkText}</Link>
                    <a href="#root" className="jump-to-top">Jump to Top &#10548;</a>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverviewCard;
