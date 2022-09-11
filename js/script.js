$(document).ready(function(){
  $('.header__burger').click(function(){
    $('.header__burger,.header__menu,.header__logo-burger').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.travel__button').click(function () {
    $('.preview__body').toggleClass('active')
    console.log('hhii')
  })
});