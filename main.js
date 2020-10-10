// Есть три тега <input type="text">.
// Необходимо написать функцию, которая выведет в <textarea> содержимое всех input полей через запятую.
// Если в `input` через какое-то время произошли изменения – в `textarea` они должны появится тоже.

let userInput=document.querySelectorAll('.userInput'),
	textarea=document.querySelector('textarea')

let inputs='';

userInput.
			forEach(el =>{
				el.addEventListener('change',getInputValue)
			})

function getInputValue(e){
	inputs=e.target.value;
	textarea.innerHTML+=`${e.target.value} ,`;
}