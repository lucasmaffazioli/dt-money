import { Container } from "./styles"

export function Transaction() {
	return <div>
		<Container>
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Valor</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Website</td>
						<td className="deposit">+ R$5000</td>
						<td>20/05/21</td>
					</tr>
					<tr>
						<td>Website</td>
						<td className="withdraw">- R$2500</td>
						<td>20/05/21</td>
					</tr>
				</tbody>
			</table>
		</Container>
	</div>

}