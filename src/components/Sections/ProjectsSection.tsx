import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import Card from "../UI/Card";
import Style from "./ProjectSection.module.css";
import Accordion from "../UI/Accordion";

const ProjectsSection: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const isExpandedHandler = () => {
        setIsExpanded(!isExpanded);
    }

    const image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yHHpb6biTmaaPBrmmBYV0wHaE8%26pid%3DApi&f=1";
    const loremIpsu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

    const projects: { title: string, description: string, img: string }[] = [
        {img: image, title: "Project 1", description: loremIpsu},
        {img: image, title: "Project 2", description: loremIpsu},
        {img: image, title: "Project 3", description: loremIpsu}
    ]

    return (<section>
        <h1>PROJECTS</h1>
        <Accordion expand={isExpandedHandler} isExpanded={isExpanded} title={"Projects"}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={Style.swiper}
            >
                {projects.map((value, index) => {
                    return <SwiperSlide id={index.toString()} key={index} className={Style.swiperSlide}>
                        <Card img={value.img} title={value.title} description={value.description}/>
                    </SwiperSlide>;
                })}
            </Swiper>
        </Accordion>
    </section>);
};

export default ProjectsSection;