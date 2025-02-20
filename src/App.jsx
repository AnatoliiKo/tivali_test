import  { useState } from "react";
import ModalDialog from "./components/ModalDialog";
import Message from "./components/Message.jsx";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="container mt-5 text-center">
            <h2>Testing Task</h2>
            <button className="btn btn-success" onClick={() => setShowModal(true)}>
                Open modal window
            </button>

            <ModalDialog show={showModal} onClose={() => setShowModal(false)} title="Modal window">
                <Message />
            </ModalDialog>
        </div>
    );
};

export default App;
