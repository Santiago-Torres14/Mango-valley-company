import Modal from "./UI/Modal";
import Card from "./UI/Card";
import React from "react";

const TeamMemberDetail: React.FC<{onClose: ()=>void, img: string, name: string, description: string}> = ({img, name, description, onClose}) => {
    return <Modal onClose={onClose}>
        <Card img={img} title={name} description={description}/>
    </Modal>
}

export default TeamMemberDetail;