document.addEventListener('DOMContentLoaded', function () {
	const nav2 = document.querySelector('.nav2')
	const allNavItems = document.querySelectorAll('.nav2__item')
	const navBtn = document.querySelector('.burger-icon')

	const handleNav = () => {
		nav2.classList.toggle('nav2--active')

		allNavItems.forEach(item => {
			item.addEventListener('click', () => {
				nav2.classList.remove('nav2--active')
			})
		})
	}

	function addShadow() {
		if (window.scrollY > 0) {
			nav2.classList.add('shadowbg')
		} else {
			nav2.classList.remove('shadowbg')
		}
	}
	navBtn.addEventListener('click', handleNav)
	window.addEventListener('scroll', addShadow)
	
})
