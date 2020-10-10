// Написать скрипт, который можно выполнить на любой странице в консоли. Скрипт делает следующие действие – убирает значения color, background-color, width, height у всех тэгов на странице, исключая html, head, body.



let tags=['html','head','body'],
	styles=['color', 'background-color', 'width', 'height']

	// ищу все теги в документе
for (tagDocument of document.all){
	if(tags.includes(tagDocument.localName))continue
	console.dir(tagDocument);

	// перебираю все итерируемые стили в теге (нахожу все инлайновые)
	for(styleTag of tagDocument.style){
		// перебираю массив со стилями
		styles.forEach( style=>{
			
// если совпадает итерируемы стиль со стилем в массиве,то обнуляю его
			if(styleTag ===style){
				console.log('style: ', style);
				console.log('styleTag: ',styleTag);
				console.log('tagDocument.style[styleTag]: ', tagDocument.style[styleTag]);

				tagDocument.style[styleTag]=''
				
				
				
			}
		})
	}
}
//  но тут  background-color  становится каким-то проклятым, в зависимости от его  порядкогово номера(который прописываю в Диве), он не дает изменить какой-то стиль или не меняется сам(дурачек какой-то). с background не работает.
				
				// Получилась рандомная обнулялка
				// Что со мной не так?)