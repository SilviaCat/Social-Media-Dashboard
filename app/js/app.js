/* 
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark");
   console.log("ok");
} */
const darkModeButton = document.querySelector('.toogle');
const body = document.querySelector('body');
/* const toggle = document.querySelector(".toggle"); */
darkModeButton.addEventListener('click', function() {
   if (darkModeButton.classList.contains('check')) {
      body.classList.remove('dark')
      body.classList.add('light')
      darkModeButton.classList.remove('check')
   } else {
      body.classList.add('dark')
      body.classList.remove('light')
      darkModeButton.classList.add('check')
   }
});