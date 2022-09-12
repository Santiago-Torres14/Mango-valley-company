import React, {PropsWithChildren} from "react";
import Style from "./ImageOverCard.module.css";

const ImageOverCard: React.FC<PropsWithChildren<{imgSrc: string, title: string, subtitle: string, onClick: () => void}>> = ({children, imgSrc, subtitle, onClick, title}) => {
    return (<div className={Style.card}>
        <div className={Style.cardInside}>
            <div className={Style.cardImage}>
                <img src={imgSrc}
                     alt="Outer space"/>
            </div>
            <div className={Style.cardContent}>
                <span className={Style.contentTitle}>
                {title}
                </span>
                <span className={Style.contentSubtitle}>
                {subtitle}
                </span>
            </div>
            <div className={Style.cardButtons}>
                <button onClick={onClick}>
                    About me
                </button>
            </div>
        </div>
    </div>);
}

export default ImageOverCard;