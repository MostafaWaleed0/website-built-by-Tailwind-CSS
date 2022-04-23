const carousel = document.getElementById('js-carousel'),
  indicators = document.querySelectorAll('#js-slider-indicators li button');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document
      .querySelector('#js-slider-indicators .text-white.bg-cyan-400')
      .setAttribute('aria-current', false);
    document
      .querySelector('#js-slider-indicators .text-white.bg-cyan-400')
      .classList.remove('text-white', 'bg-cyan-400');

    indicator.classList.add('text-white', 'bg-cyan-400');
    indicator.setAttribute('aria-current', true);
    carousel.style.transform = 'translateX(' + i * -20 + '%)';
    index = i;
  });
});

const carousel2 = document.getElementById('js-carousel-two'),
  indicators2 = document.querySelectorAll(
    '#js-slider-indicators-two li button'
  );
index = 0;

indicators2.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document
      .querySelector('#js-slider-indicators-two .bg-cyan-600')
      .setAttribute('aria-current', false);
    document
      .querySelector('#js-slider-indicators-two .bg-cyan-600')
      .classList.remove('bg-cyan-600');
    indicator.classList.add('bg-cyan-600');
    indicator.setAttribute('aria-current', true);
    carousel2.style.transform = 'translateX(' + i * -25 + '%)';
    index = i;
  });
});

const carousel3 = document.getElementById('js-carousel-three'),
  left = document.getElementById('js-control-prev'),
  right = document.getElementById('js-control-next');

left.addEventListener('click', function () {
  index = index > 0 ? index - 1 : 0;
  carousel3.style.transform = 'translateX(' + index * -33.3 + '%)';
});

right.addEventListener('click', function () {
  index = index < 3 - 1 ? index + 1 : 2;
  carousel3.style.transform = 'translateX(' + index * -33.3 + '%)';
});
