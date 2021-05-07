import Modal from 'react-modal';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
	isOpen: boolean,
	onTransactionClose: () => void
}

export function NewTransactionModal({ isOpen, onTransactionClose }: NewTransactionModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onTransactionClose}
		>
			<h2>Sou um modal</h2>

		</Modal>
	)
}

