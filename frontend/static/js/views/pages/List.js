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
		{
			id: 'place1',
			address: 'г. Одинцово, ул. Северная, 3',
			dronopot: 2,
			postamat: 3,
		},
		{
			id: 'place1',
			address: 'г. Одинцово, ул. Северная, 100',
			dronopot: 5,
			postamat: 111,
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
		<div class="header-page__title">
			<h1>Список посадочных площадок</h1>
			<div class="header-page__button">
				<a href='#'>Добавить</a>
			</div>
		</div>
		<div class="header-page__search header-page-search">
			<div class="header-page-search__input">
				<input type="text" placeholder = "Поиск по адресу">
			</div>
			<div class="header-page-search__buttons">
				<button>+</button>
				<button>-</button>
			</div>
		</div>
	</div>
	${createTable(data)
			}
		`;
	}
}