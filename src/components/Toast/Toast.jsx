import React from "react";
import { TiTick } from "react-icons/ti";
import { MdOutlineSmsFailed } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import "./Toast.css";

export const Toast = ({ message, type, id, handleToast }) => {
    const [exit, setExit] = React.useState(false);
    React.useEffect(() => {
        const timerID = setTimeout(() => {
            handleToast(id);
        }, 7000);
        return () => {
            clearTimeout(timerID);
        };
    }, []);
    
    React.useEffect(() => {
        const timerId2 = setTimeout(() => {
            setExit(!exit);
        }, 6900);
        return () => {
            clearTimeout(timerId2);
        };
    }, [exit]);
    const logo = {
        success: <TiTick color="green" size={"28px"} />,
        error: <MdOutlineSmsFailed color="red" size={"28px"} />,
        notice: <IoIosInformationCircleOutline color="blue" size={"28px"} />,
        warning: <IoWarning color="yellow" size={"28px"} />,
    };

    return (
        <div
            className={
                !exit
                    ? `toast-container ${type}`
                    : `toast-container-remove ${type}`
            }
        >
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
