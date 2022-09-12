import React, {useState} from "react";
import Accordion from "../UI/Accordion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import ImageOverCard from "../UI/ImageOverCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Style from "./DevelopmentTeamSection.module.css";

const DevelopmentTeamSection: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const isExpandedHandler = () => {
        setIsExpanded(!isExpanded);
    }

    const image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yHHpb6biTmaaPBrmmBYV0wHaE8%26pid%3DApi&f=1";

    const teamUsers: {name: string, profession: string, img: string, description: string}[] = [
        {img: image, name: "Santiago", profession: "Senior developer", description: ""},
        {img: image, name: "Sofia", profession: "UI/UX developer", description: ""},
        {img: image, name: "Heriberto", profession: "Junior developer", description: ""},
        {img: image, name: "Isabel", profession: "Full stack developer", description: ""},
        {img: image, name: "Alejandra", profession: "Backend developer", description: ""},
    ]

    return (<section>
        <h1>DEVELOPMENT TEAM</h1>
        <Accordion expand={isExpandedHandler} isExpanded={isExpanded} title={"Development team"}>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={Style.swiper}
            >
                {teamUsers.map((value, index) => {
                    return <SwiperSlide id={index.toString()} key={index} className={Style.swiperSlide}>
                        <ImageOverCard imgSrc={value.img} title={value.name} subtitle={value.profession} onClick={() => {}}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </Accordion>
    </section>);
}

export default DevelopmentTeamSection;