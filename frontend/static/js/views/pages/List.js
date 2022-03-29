import AbstractView from "./AbstractView.js";
import { createTable } from "../components/Table.js";

let data = {
	'TableColumns': {
		numerical: '№',
		address: 'Адресс',
		dronopot: 'Дронопорт',
		postamat: 'Постамат',
	},
	'TableDataItems': [
		{
			id: 'place',
			address: 'г. Одинцово, ул. Северная, 4',
			dronopot: 1,
			postamat: 1,
		},
	],
};

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
	${createTable(data)
			}
		`;
	}
}
