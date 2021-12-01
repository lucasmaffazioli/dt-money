import Modal from 'react-modal'
import {
	Container,
	OptionSelectorContainer,
	RadioBox,
} from './styles'
import buttonCloseImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { useTransaction } from '../../hooks/useTransaction'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const { createTransaction } = useTransaction()

	const [type, setType] = useState('deposit')
	const [value, setValue] = useState(0)
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()
		const data = { type, value, name, category }

		await createTransaction(data)

		onRequestClose()

		setType('deposit')
		setValue(0)
		setName('')
		setCategory('')
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className='react-modal-content'
			overlayClassName='react-modal-overlay'
		>
			<Container onSubmit={handleSubmit}>
				<h2>Nova transação</h2>
				<img
					className='closeModal'
					src={buttonCloseImg}
					onClick={onRequestClose}
					alt='Fechar tela'
				/>
				<input
					type='text'
					placeholder='Nome'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input
					type='number'
					placeholder='Valor'
					value={value || ''}
					onChange={event =>
						setValue(Number(event.target.value))
					}
				/>

				<OptionSelectorContainer>
					<RadioBox
						onClick={() => setType('deposit')}
						isActive={type === 'deposit' ? true : false}
						type='button'
						activeColor='green'
					>
						<img src={incomeImg} alt='Entrada' />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw' ? true : false}
						type='button'
						activeColor='red'
					>
						<img src={outcomeImg} alt='Saída' />
						<span>Saída</span>
					</RadioBox>
				</OptionSelectorContainer>

				<input
					type='text'
					placeholder='Categoria'
					value={category}
					onChange={e => setCategory(e.target.value)}
				/>

				<button type='submit'>Salvar</button>
			</Container>
		</Modal>
	)
}
