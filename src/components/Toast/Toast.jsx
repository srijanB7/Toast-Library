import React from "react";
import { TiTick } from "react-icons/ti";
import { MdOutlineSmsFailed } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import "./Toast.css";

export const Toast = ({ message, type, id, handleToast }) => {
    React.useEffect(() => {
        console.log("effect");
        const timerID = setTimeout(() => {
            handleToast(id);
        }, 8000);
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const logo = {
        success: <TiTick color="green" size={"28px"} />,
        error: <MdOutlineSmsFailed color="red" size={"28px"} />,
        notice: <IoIosInformationCircleOutline color="blue" size={"28px"} />,
        warning: <IoWarning color="yellow" size={"28px"} />,
    };

    return (
        <div className={`toast-container ${type}`}>
            <div className="toast-header">
                <p className="toast-logo">{logo[type]}</p>
                <button className="dismiss-btn" onClick={() => handleToast(id)}>
                    X
                </button>
            </div>
            <p className="toast-message">{message}</p>
        </div>
    );
};
``;
