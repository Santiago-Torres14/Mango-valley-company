import ImageOverCard from "./UI/ImageOverCard";
import {SwiperSlide} from "swiper/react";
import React, {useState} from "react";

const TeamMember: React.FC<{onCloseModal: () => void, getDetails: (index: number) => void, index: number, img: string, name: string, description: string, profession: string}> = ({getDetails, onCloseModal, profession, index, img, name, description}) => {

    const onClickHandler = () => {
        getDetails(index);
        onCloseModal();
    };

    return (
        <ImageOverCard imgSrc={img} title={name} subtitle={profession}
                       onClick={onClickHandler}/>)
}

export default TeamMember;