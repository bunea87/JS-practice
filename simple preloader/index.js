//create a new eveniet

var body = new Event ('body');

//check if body is available

var intID = setInterval(function(){
if (document.body){
  document.dispatchEvent(body);
  clearInterval(intID);
}

},10);



// document.addEventListener('body', function () {
//   console.log('body is ready for any events');
// })

//Create HTML fragment

var newFragment = function (html) {
  var fragment = document.createDocumentFragment();
  var temp    = document.createElement('div');
   temp.innerHTML = html;

   while(temp.firstChild)
   fragment.appendChild(temp.firstChild)

   return fragment;
};

var preloader = newFragment('<div id="preloader" class="overlay">  <img src="img/blue.gif" class="spiner"  alt=""></div>')

//insert preload when body is ready

document.addEventListener('body',function(){
  document.body.insertBefore(preloader,document.body.childNodes[0]);
  document.body.style.backgroundColor = 'lightgray';
});

//remove preloader markup/////////

var removePreloader = function () {
  var preloader = document.getElementById('preloader');
  preloader.style.opacity = 1;


  var animationID = setInterval(function(){
    preloader.style.opacity -= 0.1;
    if (preloader.style.opacity <= 0.3) {
      preloader.parentNode.removeChild(preloader);
      clearInterval(animationID);
    }
  },1000);
};

//when page is filly loaded remove preloader///

window.addEventListener('load',removePreloader);
