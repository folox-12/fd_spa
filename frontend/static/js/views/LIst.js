import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("List");
	}

	async getHtml() {
		return `
		<div class ="container">
		<div class="header-page">
		<nav class="header-page__navigation header-page-navigation">
			<div class="header-page-navigation__item">
				<div class="header-page-navigation__link">
					<a href="/">Главная</a>
				</div>
				<div class="header-page-navigation__splitter">
					>
				</div>
			</div>
		</nav>
		<div class = "header-page__mainblok">
		<div class="header-page__title">
			<h1>Список посадочных площадок</h1>
			<div class="header-page__button">
				<button class="btn">Применить</button>
			</div>
			</div>
		<div class="header-page__search header-page-search">
			<div class="header-page-search__input">
			<img src = "static/img/ico/search.svg" alt="" class = "search-icon">
			<input type="text" placeholder = "Какой-то поиск" id = "input-main" >
			<button class="clear-input" id = "clear-input">
			<img src="static/img/ico/close.svg"  alt="" class = "filter-icon" >
			</button>
			</div>
			<div class="header-page-search__buttons">
			<button  class = "filter"  id ="button_filter">
			<img src="static/img/ico/filter.svg"  alt="" class = "filter-icon" >
		</button>
		<button  class = "filter"  id ="button_filter">
		<img src="static/img/ico/settings.svg"  alt="" class = "filter-icon" >
	</button>
			</div>
		</div>
	</div>
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
