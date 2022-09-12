import Style from "./Accordion.module.css";
import React, {PropsWithChildren} from "react";

const Accordion: React.FC<PropsWithChildren<{title: string, isExpanded: boolean, expand: () => void}>> = ({children, title, isExpanded, expand}) => {
    return (<div className={Style.accordion}>
        <div className={isExpanded ? `${Style.accordionTitle} ${Style.isTitleExpanded}` : `${Style.accordionTitle}`} onClick={expand}>{title}</div>
        <div className={isExpanded ? `${Style.accordionContent} ${Style.isAccordionContentExpanded}` : `${Style.accordionContent}` }>{children}</div>
    </div>);
};

export default Accordion;