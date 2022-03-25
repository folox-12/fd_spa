import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("List");
	}

	async getHtml() {
		return `
		<div class ="container">
		<div class="table">
		<div class="table__data">
			<table class="table__responsive">
				<thead>
					<tr class="table-title">
						<th>№</th>
						<th>Адрес</th>
						<th>Дронопорт</th>
						<th>Постамат</th>
					</tr>
				</thead>
				<tbody>
					<tr class="table-el">
						<td class="table-numerical">1</td>
						<td class="table-address">г. Одинцово, ул. Северная, 4</td>
						<td class="table-dronport">0</td>
						<td class="table-postamat">1</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="table__paginator table-paginator">
			<div class="table-paginator__row">
				<div class="table-paginator__ul">
					<li class="table-paginator__li active">1</li>
					<li class="table-paginator__li">2</li>
					<li class="table-paginator__li">3</li>
				</div>
				<div class="table-paginator__total">
					<span>Найдено всего 11</span>
				</div>
			</div>
		</div>
	</div>
	</div>
		`;
	}
}