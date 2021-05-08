import Modal from 'react-modal';
import { Container, OptionSelectorContainer, RadioBox } from './styles';
import buttonCloseImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
	isOpen: boolean,
	onTransactionClose: () => void
}

export function NewTransactionModal({ isOpen, onTransactionClose }: NewTransactionModalProps) {
	const [type, setType] = useState('deposit');


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

				<OptionSelectorContainer>
					<RadioBox
						onClick={() => setType('deposit')}
						isActive={type === 'deposit' ? true : false}
						type="button"
						activeColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						onClick={() => setType('withdrawn')}
						isActive={type === 'withdrawn' ? true : false}
						type="button"
						activeColor="red"
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</OptionSelectorContainer>

				<input type="text" placeholder="Categoria" />

				<button type="submit">Salvar</button>
			</Container>

		</Modal >
	)
}

