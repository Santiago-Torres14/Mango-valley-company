import React, {PropsWithChildren} from "react";
import Style from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop: React.FC<{onClose: () => void}> = ({onClose}) => {
    return (<div onClick={onClose} className={Style.backdrop}></div>);
}

const ModalOverlay: React.FC<PropsWithChildren> = ({children}) => {
    return (<div className={Style.modal}>
        {children}
    </div>)
}

const portalElement = document.getElementById('overlays');

const Modal: React.FC<PropsWithChildren<{onClose: () => void}>> = ({onClose, children}) => {
    return (<>
        {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElement as HTMLElement)}
        {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement as HTMLElement)}
    </>);
}

export default Modal;