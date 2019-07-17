import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";

const OnErrorModal = (props) => {

    return (
        <>
            <Modal
                size="sm"
                show={props.showModal}
                onHide={() => props.closeLoginErrorModal()}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Błąd
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    nieprawidłowe dane logowania
                </Modal.Body>
            </Modal>
        </>
    );
};

export default OnErrorModal;
