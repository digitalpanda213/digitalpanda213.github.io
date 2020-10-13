var bg = document.querySelector('.background'),
  welcome = document.querySelector('.welcome'),
  header = document.querySelector('.header'),
  description = document.querySelector('.description'),
  buttonWrapper = document.querySelector('.button-wrapper'),
  textWrapper = document.querySelector('.text-wrapper');

var width = window.innerWidth || document.documentElement.clientWidth,
  height = window.innerHeight || document.documentElement.clientHeight;

document.addEventListener('mousemove', rotate);

var transformLayers = [
  {
    el: textWrapper,
    parallax: 13,
    rotate: true
  },
  {
    el: welcome,
    parallax: 13
  },
  {
    el: header,
    parallax: 13
  },
  {
    el: description,
    parallax: 13
  },
  {
    el: buttonWrapper,
    parallax: 13
  }
];

const bgTranslate = 300;
const bgRotate = 5;

var hScale = (height + bgTranslate) / height,
  wScale = (width + bgTranslate) / width;
const scale = hScale > wScale ? hScale : wScale;

function rotate(e) {
  var lerpX = e.pageX / width,
    offsetX = 0.5 - Math.pow(lerpX, 2), //cursor position X
    lerpY = e.pageY / height,
    offsetY = 0.5 - Math.pow(lerpY, 2); //cursor position Y
  for (var i = 0; i < transformLayers.length; i++) {
    var parallax = transformLayers[i].parallax;

    //transform
    var transform;
    if (transformLayers[i].rotate) {
      transform =
        'rotateX(' +
        -offsetY * parallax +
        'deg) rotateY(' +
        -offsetX * parallax * 4 +
        'deg)';
    } else {
      transform =
        'translate3d(' +
        offsetX * parallax +
        'px, ' +
        offsetY * parallax * 4 +
        'px, 20px)';
    }
    transformLayers[i].el.style.transform = transform;
  }

  //pan backgronud
  var bgTransform =
    'translate3d(' +
    offsetX * bgTranslate +
    'px, ' +
    offsetY * bgTranslate +
    'px, 20px) rotateX(' +
    -offsetY * bgRotate +
    'deg) rotateY(' +
    -offsetX * bgRotate +
    'deg) ' +
    'scale(' +
    scale +
    ')';
  bg.style.transform = bgTransform;
}
