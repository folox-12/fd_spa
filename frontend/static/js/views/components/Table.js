export let createTable = (data) => {
	let table = ""
	let column = "";
	let rows = "";

	for (let key in data['TableColumns']) {
		column += `<th>${data['TableColumns'][key]}</th>`
	}
	let count_rows = 1;
	for (let { address, dronopot, postamat } of data['TableDataItems']) {
		rows += `<tr class="table-el">`
		rows += `<td class="table-numerical">${count_rows}</td>`
		rows += `<td class="table-address">${address}</td>`
		rows += `<td class="table-dronoport">${dronopot}</td>`
		rows += `<td class="table-postamat">${postamat}</td>`
		rows += `</tr>`
		count_rows++
	}

	table = `
				<section class = "table">
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
				</section>
			`;
	return table;
}

// export function showTable(data = { ...data }) {
// 	createTable()
// };

