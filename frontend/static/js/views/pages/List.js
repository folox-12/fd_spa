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
	]
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
			<button class="clear-input" id = "clear-input" onclick = "clearInput()">
			<img src="static/img/ico/close.svg"  alt="" class = "filter-icon2" >
			</button>
			</div>
			<div class="header-page-search__buttons">
			<button  class = "filter"  id ="button_filter">
			<img src="static/img/ico/filter.svg"  alt="" class = "filter-icon" >
		</button>
		<button  class = "filter1"  id ="button_filter1">
		<img src="static/img/ico/settings.svg"  alt="" class = "filter-icon1" >
	</button>
			</div>
		</div>
	</div>
	<div class = "main-block">

	<div class="filter-block">
<div id="myDropdown" class="dropdown-content">
	
	<div class = "spoiler-main" id = "spoiler-main">
		<div class="title_dropdown">
			<div class="name_title">
				<h3>Фильтр</h3>
			</div>
			<div class="close-dropdown">
				<button>
					<img src="static/img/ico/close.svg"  alt="" class = "close-svg" >
				</button>
			</div>
		</div>
		<div class = "spoiler__item">
			<div class = "spoiler__title">
			Город 
			</div>
			<div class = "spoiler__content">
				<div class="input-spoiler-content">
					<input type="text" placeholder = "Какой-то поиск" id = "input-filter" class = "input-filter">
					<button class="clear-input" id = "clear-input-filter" onclick = "clearInput1()">
						<span class="material-icons">✖</span>
					</button>
				</input>
				</div>
			</div>
		</div>
		<hr>
		<div class = "spoiler__item">
		<div class = "spoiler__title">
		Дронопорт
		</div>
		<div class = "spoiler__content">
		<div class = "spoiler__content-checkbox-filter">
		<div class = "checkbox-filter__item">
		<input type = "checkbox" class = "checkbox__input" id = "checkbox1">
		<label class = "chechbox__label" for = "checkbox1">Ни одного</label>
		</div>
		<div class = "checkbox-filter__item">
		<input type = "checkbox" class = "checkbox__input" id = "checkbox2">
		<label class = "chechbox__label" for = "checkbox2">Несколько </label>
		</div>
		</div>
		</div>
		</div>
		<hr>
		<div class = "spoiler__item">
		<div class = "spoiler__title">
		Обслуживаемые дроны
		</div>
		<div class = "spoiler__content">
		Какой-то фильтр
		</div>
		</div>
		<hr>
		</div>
		</div>
	</div>
		<div class="table">
		${createTable(data)
			}

		<div class="table__paginator table-paginator">
			<div class="table-paginator__row">
				<div class="table-paginator__ul">
					<li class="table-paginator__li active">1</li>
					<li class="table-paginator__li">2</li>
					<li class="table-paginator__li">3</li>
				</div>
				<div class="table-paginator__total">
					<span>Найдено всего ${Object.entries(data)[1][1].length}</span>
				</div>
			</div>
		</div>
	</div >
	</div >

	`;

	}
}
