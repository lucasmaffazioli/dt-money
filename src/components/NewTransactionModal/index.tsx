import Modal from 'react-modal';
import { Container } from './styles';
import buttonCloseImg from '../../assets/close.svg'

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
			className="react-modal-content"
			overlayClassName="react-modal-overlay"
		>
			<Container>
				<h2>Nova transação</h2>

				<img className="closeModal" src={buttonCloseImg} onClick={onTransactionClose} alt="Fechar tela" />

				<input type="text" placeholder="Nome" />
				<input type="number" placeholder="Valor" />
				<input type="text" placeholder="Categoria" />

				<button type="submit">Salvar</button>
			</Container>

		</Modal>
	)
}

