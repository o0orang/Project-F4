const searchBtn = document.querySelector('.subMenu__search');
const searchFormWrap = document.querySelector('.searchFormWrap');
const header = document.querySelector('.header');


searchBtn.addEventListener('click',function(){
  searchFormWrap.classList.toggle('is--active');
});