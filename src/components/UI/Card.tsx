import React from "react";
import Style from "./Card.module.css";

const Card: React.FC<{img: string, title: string, description: string}> = ({img, description, title}) => {
    return (<div className={Style.card}>
        <div className={Style.cardInside}>
            <div className={Style.cardImage}>
                <img src={img}/>
            </div>
            <div className={Style.cardContent}>
                <span>
                    {title}
                </span>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>);
}

export default Card;