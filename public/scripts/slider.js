function goSlide() {
	slides[currentSlide].className = 'slide'; // меняю класс текущеко слайда, дабы скрыть его
	currentSlide = (currentSlide+1)%slides.length; // текущий слайд +1 (% для перехода на первый слайд если конец)
	slides[currentSlide].className = 'slide show'; // меняю класс дабы показать уже новый слайд
}

function nextSlide() {
	goSlide(currentSlide + 1);
}

function previousSlide() {
	goSlide(currentSlide - 1);
}

function pauseSlideshow() {
	clearInterval(slideInterval);
}

function playSlideshow() {
	slideInterval = setInterval(goSlide, 10000);
}

const slides = document.querySelectorAll('#slides .slide'); // беру все слайды из контейнера
let currentSlide = 0; // текущий слайд
let slideInterval = setInterval(goSlide, 10000); // интервал в 2сек
const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = () => {
	pauseSlideshow();
	nextSlide();
	playSlideshow();
}
previous.onclick = () => {
	pauseSlideshow();
	previousSlide();
	playSlideshow();
}
