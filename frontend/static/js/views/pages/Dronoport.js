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
		
	</div>
                            <!-- Основное содержимое -->
                            <div class="infoBox">
                                <!-- Фото -->
                                <div class="objectPhoto">

                                    <div class="objectPhoto__objectFirst">
                                    
                                        <img src= "static/img/objects/dronoport/front.JPG" width = "242px" height= "242px" class="objectPhoto__img">
                                            <div class="objectPhoto__button">
                                                <button value = "+" class = "objectPhoto__button_value" ><img src="static/img/ico/find.svg"></button>
                                            </div>
                                    </div>

                                    <div class="objectPhoto__objectSecond">
                                        <img src= "static/img/objects/dronoport/top.JPG" width = "242px" height= "242px" class="objectPhoto__img">
                                            <div class="objectPhoto__button">
                                                <button value = "+" class = "objectPhoto__button_value" ><img src="static/img/ico/find.svg"></button>
                                            </div>
                                    </div>

                                    <div class="objectPhoto__objectThird">

                                        <img src= "static/img/objects/dronoport/front_1.JPG" width = "242px" height= "242px" class="objectPhoto__img" >
                                            <div class="objectPhoto__button">
                                                <button value = "+" class = "objectPhoto__button_value" ><img src="static/img/ico/find.svg"></button>
                                            </div>
                                    </div> 
                                    
                                </div>
                                   <!-- Фото -->
                                <hr color="#72707c"/>
                            <!-- Текст -->
                                <div class="objectInfo">
                                    <div class="objectInfo__title">
                                        <h2>Характеристики</h2> 
                                    </div>
                                        <div class="objectInfo__text">
                                            <div class="objectInfo__text_firstColumn">
                                                <span>Регистрационный номер</span>                                                 
                                                <span>Размеры (мм)</span>                                           
                                                <span>Напряжение питания (В)</span>                                           
                                                <span>Энергопотребление (кВт/ч)</span>                                        
                                                <span>Вес (кг)</span>                                           
                                                <span>Время зарядки АКБ (мин.)</span>                                 
                                                <span>Максимальная скорость ветра (м/с)</span>                                                
                                                <span>Диапазон рабочих температур (C°)</span>                                               
                                                <span>Время обслуживания дрона (мин.)</span>
                                               
                                            </div>

                                            <div class="objectInfo__text_secondColumn">
                                                <span>450n-144-vc67</span>                                                 
                                                <span>2800 x 1840 x 140</span>                                           
                                                <span>230</span>                                           
                                                <span>6</span>                                        
                                                <span>1600</span>                                           
                                                <span>17</span>                                 
                                                <span>15</span>                                                
                                                <span>от -20 до 40</span>                                               
                                                <span>5</span>
                                               
                                            </div>
                                        
                                        </div>
                                </div>
                            <!-- Текст -->
                                
                            </div>
                  

                            <div class="modulesBox">
                                <div class="modulesBox__title">
                                    <h2>Оснащение</h2> 
                                </div>
                                
                            </div>

                            <div class="dronesBox">
                                <div class="dronesBox__title">
                                    <h2>Обслуживаемые дроны</h2> 
                                </div>
                            </div>
                            <!-- Основное содержимое -->
                            

                        </div>                    
                    </div>

           
            </div>
		</main>
	</div>

		`;
	}
}