// Написать скрипт, который можно выполнить на любой странице в консоли. Скрипт делает следующие действие – убирает значения color, background-color, width, height у всех тэгов на странице, исключая html, head, body.



let tags=['html','head','body'],
	styles=['color', 'background', 'width', 'height']

	
	for(tagName of document.all){
		
		if(tags.includes(tagName.localName)) continue
		styles.forEach(styleName =>{
			tagName.style[styleName]='';

		})
	}