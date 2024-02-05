import { useState } from "react";
import { Toast } from "./components/Toast/Toast";
import "./App.css";

function App() {
    const [toastMessage, setToastMessage] = useState("");
    const [variant, setVariant] = useState({
        notice: true,
        success: false,
        warning: false,
        error: false,
    });
    const [toasts, setToasts] = useState([]);
    function handleChange(event) {
        const updatedVariant = {};
        for (const val in variant) {
            if (val === event.target.value) {
                updatedVariant[val] = true;
            } else updatedVariant[val] = false;
        }

        setVariant(updatedVariant);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(!toastMessage) {
            alert("Enter a Toast message !");
            return;
        }
        
        let type;
        for (const val in variant) {
            if (variant[val]) type = val;
        }
        const currentToast = {
            id: crypto.randomUUID(),
            message: toastMessage,
            type,
            show: true,
        };
        setToasts([...toasts, currentToast]);
        setToastMessage("");
    }

    function handleToast(id) {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }

    return (
        <>
            <h1>Toast</h1>
            <form onSubmit={handleSubmit}>
                <div className="message-container">
                    <label htmlFor="message">Message: </label>
                    <textarea
                        value={toastMessage}
                        onChange={(e) => setToastMessage(e.target.value)}
                        id="message"
                    />
                </div>
                <div className="variant-container">
                    <label htmlFor="notice">Variant:</label>
                    <input
                        type="radio"
                        id="notice"
                        value="notice"
                        onChange={handleChange}
                        name="variant"
                        checked={variant["notice"]}
                    />
                    <label htmlFor="notice">notice</label>
                    <input
                        type="radio"
                        id="warning"
                        value="warning"
                        name="variant"
                        onChange={handleChange}
                        checked={variant["warning"]}
                    />
                    <label htmlFor="warning">warning</label>
                    <input
                        type="radio"
                        id="success"
                        name="variant"
                        value="success"
                        onChange={handleChange}
                        checked={variant["success"]}
                    />
                    <label htmlFor="success">success</label>
                    <input
                        type="radio"
                        id="error"
                        value="error"
                        name="variant"
                        onChange={handleChange}
                        checked={variant["error"]}
                    />
                    <label htmlFor="error">error</label>
                </div>

                <button type="submit">Pop Toast</button>
            </form>
            <div className="toasts-container">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        {...toast}
                        handleToast={handleToast}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
