window.addEventListener('DOMContentLoaded', () => {
	const getHour = (now) => now.getHours()
	const getMinutes = (now) => now.getMinutes()
	const getSecond = (now) => now.getSeconds()
	const animation = (ele) => {
		ele.animate(
			{
				opacity: [0, 0, 0.2, 1],
				transform: ['rotateY(360deg)'],
				offset: [0, 0.2, 0.5, 1],
				easing: 'ease'
			},
			2000
		)
	}

	// Set Interval
	const hourNumber = document.getElementById('hour')
	const minuteNumber = document.getElementById('minute')
	const secondNumber = document.getElementById('second')
	let haha = 0
	animation(hourNumber)
	animation(minuteNumber)
	animation(secondNumber)
	setInterval(() => {
		const now = new Date()
		const hour = getHour(now)
		const minutes = getMinutes(now)
		const seconds = getSecond(now)
		hourNumber.innerHTML = hour < 10 ? '0' + hour : hour
		minuteNumber.innerHTML = minutes < 10 ? '0' + minutes : minutes
		secondNumber.innerHTML = seconds < 10 ? '0' + seconds : seconds
	}, 1000)
})
