import Modal from "react-modal";
import { Container, OptionSelectorContainer, RadioBox } from "./styles";
import buttonCloseImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
	isOpen: boolean;
	onTransactionClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onTransactionClose,
}: NewTransactionModalProps) {
	const { createTransaction } = useContext(TransactionsContext);

	const [type, setType] = useState("deposit");
	const [value, setValue] = useState(0);
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const data = { type, value, name, category };

		createTransaction(data);
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onTransactionClose}
			className="react-modal-content"
			overlayClassName="react-modal-overlay"
		>
			<Container onSubmit={handleSubmit}>
				<h2>Nova transação</h2>
				<img
					className="closeModal"
					src={buttonCloseImg}
					onClick={onTransactionClose}
					alt="Fechar tela"
				/>
				<input
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Valor"
					value={value}
					onChange={(event) => setValue(Number(event.target.value))}
				/>

				<OptionSelectorContainer>
					<RadioBox
						onClick={() => setType("deposit")}
						isActive={type === "deposit" ? true : false}
						type="button"
						activeColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						onClick={() => setType("withdrawn")}
						isActive={type === "withdrawn" ? true : false}
						type="button"
						activeColor="red"
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</OptionSelectorContainer>

				<input
					type="text"
					placeholder="Categoria"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>

				<button type="submit">Salvar</button>
			</Container>
		</Modal>
	);
}
