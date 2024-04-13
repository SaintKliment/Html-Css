var btn = document.querySelector('.btnBurgerMenu')
var menu = document.querySelector('.burgerMenu')

btn.addEventListener('click', openMenu)

function openMenu(e) {
	e.preventDefault()
	menu.classList.toggle('open')
}

const elems = Array.from(menu.children)
elems.forEach(elem => {
	elem.addEventListener('click', closeMenu)
})

function closeMenu(e) {
	menu.classList.remove('open')
}

// Находим тег html и сохраняем его
let html = document.documentElement
//сохраним текущую прокрутку:
let scrollPosition = window.pageYOffset
//установим свойство top у html равное прокрутке
html.style.top = -scrollPosition + 'px'
html.classList.add('hystModalOpened')

html.classList.remove('hystModalOpened')
//прокручиваем окно туда где оно было
window.scrollTo(0, scrollPosition)
html.style.top = ''
