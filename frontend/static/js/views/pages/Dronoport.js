import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle("Dronoport");
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
			<div class="header-page-navigation__item">
				<div class="header-page-navigation__link">
					<a href="/">Дронопорт</a>
				</div>
				<div class="header-page-navigation__splitter">
					>
				</div>
			</div>
		</nav>
		<div class="header-page__title">
			<h1>Дронопорт HIVE</h1>
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
		`;
	}
}