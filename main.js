// Отрендерить инфо-блок, аналог блока «Мобільний додаток» на сайте https://www.monobank.ua/.
// Пример активного блока – info.png
// Входящий массив объектов:

var menu = [
	{0:{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
		icon: 'payment'
	}},
	{1:{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
		icon: 'extract'
	}},
	{2:{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
		icon: 'settings'
	}}
];




let buttons= document.querySelector('.group-button')

let text= document.querySelector(".text");

let active=document.querySelector('.active')
writeText(active);

buttons.addEventListener('click',clickItem)



function clickItem(e){
	for(i=0;i<buttons.children.length;i++){
		buttons.children[i].classList.remove('active');
	}
	if(e.target.matches('.btn-change')){
		e.target.classList.toggle('active');
	}
	active=document.querySelector('.active')
	writeText(active)
}

function writeText(activeClass){
	menu.forEach(item =>{
		for(key in item){
			if(key==activeClass.dataset.id){
				text.innerHTML=`<div class='wrap-img'><img class='group-button-img'src="img/${item[key].icon}.svg" ></div>
				<h2>${item[key].title}</h2>
				<p>${item[key].description}</p>
				`
			}
		}
	})
}

