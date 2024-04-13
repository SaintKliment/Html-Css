var linkSaveRest = document.querySelectorAll('.linkSaveRest')

Array.prototype.forEach.call(linkSaveRest, function (elem) {
	elem.addEventListener('click', function () {
		var circleSveRest = elem.parentNode.querySelector('.circleSveRest')
		var isActive = circleSveRest.classList.contains('changeColor')

		circleSveRest.classList.toggle('changeColor', !isActive)
	})
})
