var dropbtn = document.querySelector('.dropbtn')
var dropdownContent = document.querySelector('.dropdown-content')
dropbtn.onclick = function () {
	dropdownContent.style.display = 'block'
}
document.addEventListener('click', function (e) {
	const withinBoundaries = e.composedPath().includes(dropbtn)
	if (!withinBoundaries) {
		dropdownContent.style.display = 'none'
	}
})
var linkBtnAdd = document.querySelectorAll('.linkBtnAdd')

Array.prototype.forEach.call(linkBtnAdd, function (elem) {
	elem.addEventListener('click', function () {
		var svg = elem.parentNode.querySelector('.svgRectBtnAdd')
		var isActive = svg.classList.contains('changeColor')

		svg.classList.toggle('changeColor', !isActive)
	})
})

var linkSaveRest = document.querySelectorAll('.linkSaveRest')

Array.prototype.forEach.call(linkSaveRest, function (elem) {
	elem.addEventListener('click', function () {
		var circleSveRest = elem.parentNode.querySelector('.circleSveRest')
		var isActive = circleSveRest.classList.contains('changeColorCircle')

		circleSveRest.classList.toggle('changeColorCircle', !isActive)
	})
})

// https://plnkr.co/edit/uTiGwDKPPpLILc0F?p=preview&preview
