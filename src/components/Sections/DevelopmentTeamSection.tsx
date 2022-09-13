import React, {useState} from "react";
import Accordion from "../UI/Accordion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import ImageOverCard from "../UI/ImageOverCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Style from "./DevelopmentTeamSection.module.css";
import TeamMember from "../TeamMember";
import TeamMemberDetail from "../TeamMemberDetail";

const DevelopmentTeamSection: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [teamMemberIndex, SetTeamMemberIndex] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(!showModal);
    }

    const isExpandedHandler = () => {
        setIsExpanded(!isExpanded);
    }

    const setTeamMemberHandler = (index: number) => {
        SetTeamMemberIndex(index);
    }

    const image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yHHpb6biTmaaPBrmmBYV0wHaE8%26pid%3DApi&f=1";

    const loremIpsu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

    const teamMembers: { name: string, profession: string, img: string, description: string }[] = [
        {img: image, name: "Santiago", profession: "Senior developer", description:loremIpsu},
        {img: image, name: "Sofia", profession: "UI/UX developer", description:loremIpsu},
        {img: image, name: "Heriberto", profession: "Junior developer", description:loremIpsu},
        {img: image, name: "Isabel", profession: "Full stack developer", description:loremIpsu},
        {img: image, name: "Alejandra", profession: "Backend developer", description:loremIpsu},
    ]

    return (<section>
        {showModal && <TeamMemberDetail onClose={showModalHandler} img={teamMembers[teamMemberIndex as number].img}
                                        name={teamMembers[teamMemberIndex as number].name}
                                        description={teamMembers[teamMemberIndex as number].description}/>}
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
                {teamMembers.map((value, index) => {
                    return <SwiperSlide id={index.toString()} key={index} className={Style.swiperSlide}>
                        <TeamMember description={value.description} getDetails={setTeamMemberHandler} img={value.img} index={index} name={value.name} onCloseModal={showModalHandler} profession={value.profession}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </Accordion>
    </section>);
}

export default DevelopmentTeamSection;