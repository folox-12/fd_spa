// let data = {
// 	'TableColumns': {
// 		numerical: '№',
// 		address: 'Адресс',
// 		dronopot: 'Дронопорт',
// 		postamat: 'Постамат',
// 	},
// 	'TableDataItems': [
// 		{
// 			id: 'place',
// 			address: 'г. Одинцово, ул. Северная, 4',
// 			dronopot: 1,
// 			postamat: 1,
// 		},
// 		{
// 			id: 'place1',
// 			address: 'г. Одинцово, ул. Северная, 3',
// 			dronopot: 2,
// 			postamat: 3,
// 		},
// 	],
// };


export let createTable = () => {
	let table = ""
	let column = "";
	let rows = "";

	for (key in this['TableColumns']) {
		column += `<th>${data['TableColumns'][key]}</th>`
	}
	let count_rows = 1;
	for (let { address, dronopot, postamat } of this['TableDataItems']) {
		rows += `<tr class="table-el">`
		rows += `<td class="table-numerical">${i}</td>`
		rows += `<td class="table-address">${address}</td>`
		rows += `<td class="table-dronoport">${dronopot}</td>`
		rows += `<td class="table-postamat">${postamat}</td>`
		rows += `</tr>`
		count_rows++
	}

	table = `
				<div class = "table__data">
				<table class="table__responsive">
					<thead>
						<tr class="table-title">
							${column}
						</tr
					</theade>
					<tbody>
						${rows}
					</tbody>
				</table>
				</div>
			`;
	return table;
}

// function showTable() {
// 	createTable()
// };

