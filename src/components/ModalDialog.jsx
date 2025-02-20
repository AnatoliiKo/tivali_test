const ModalDialog = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
        <>
            <div
                className="modal fade show d-block "
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content bg-light">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            >
                            </button>
                        </div>
                        <div className="modal-body py-4">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"
                 onClick={onClose}>
            </div>
        </>
    );
};

export default ModalDialog;
