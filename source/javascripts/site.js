

// This is where it all goes :)
$( document ).ready(function() {

    $('.swipe-slick').slick({


      responsive: [
        {
          breakpoint: 2024,
          settings: "unslick"
        },
        {
          breakpoint: 766,
          settings: {
            arrows:false,
            centerMode: true,
            centerPadding: '50px',
            dots: true,
          }
        }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

const gradientAPI = [
  {
    name: 'warmFlame',
    direction: '90deg',
    colors: ['#ff9a9e', '#fad0c4'],
    positions: ['0%', '100%'],
  },
  {
    name: 'youngPassion',
    direction: '90deg',
    colors: ['#ff8177', '#ff867a', '#ff8c7f', '#f99185', '#cf556c', '#b12a5b'],
    positions: ['0%', '0%', '21%', '52%', '78%', '100%'],
  },
  {
    name: 'newLife',
    direction: 'to right',
    colors: ['#43e97b', '#38f9d7'],
    positions: ['0%', '100%'],
  },
  {
    name: 'temptingAzure',
    direction: '120deg',
    colors: ['#84fab0', '#8fd3f4'],
    positions: ['0%', '100%'],
  },
  {
    name: 'ripeMalinka',
    direction: '120deg',
    colors: ['#f093fb ', '#f5576c'],
    positions: ['0%', '100%'],
  },
];

const randNumInRange = max => Math.floor(Math.random() * max);

const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

const gradient = buildGradient(gradientAPI[randNumInRange(gradientAPI.length)]);

const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

magicalUnderlines.forEach((underline) => {
  underline.style.backgroundImage = gradient;
})
