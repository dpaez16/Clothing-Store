import { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';

export function useModal() {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalContent, setModalContent ] = useState('');
    const [ isModalError, setIsModalError ] = useState(false);

    const setModalError = (err) => {
        setModalContent(err);
        setIsModalError(true);
        setModalOpen(true);
    };

    const setModalNonError = (content) => {
        setModalContent(content);
        setIsModalError(false);
        setModalOpen(true);
    };

    return [
        modalOpen,
        setModalOpen,
        modalContent,
        isModalError,
        setModalError, 
        setModalNonError
    ];
};

export function CustomModal(props) {
    const { modalOpen, modalContent, isModalError, setModalOpen, navigateHandler } = props;

    return (
        <Modal  onClose={() => setModalOpen(false)}
                onOpen={() => setModalOpen(true)}
                open={modalOpen}
        >
            <Modal.Content>
                {modalContent}
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => {
                    setModalOpen(false);
                    if (isModalError) {
                        navigateHandler();
                    }
                }}
                        content='Ok'
                />
            </Modal.Actions>
        </Modal>
    );
};