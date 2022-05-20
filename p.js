// GOD GOT ME
"use strict";
// section A category------------->>
const categor1btn=document.querySelectorAll('.cat-1-btn');
const subCategoryA=document.querySelector('.sub-category-a')
// ---------------------------------->>
// section B category
const categor2btn=document.querySelectorAll('.cat-2-btn');
const subCategoryB=document.querySelector('.sub-category-b');

// section B category
const categor3btn=document.querySelectorAll('.cat-3-btn');
const subCategoryC=document.querySelector('.sub-category-c');
// -------------------------->>>>>>>


categor1btn.forEach((btn1)=>{
btn1.addEventListener('click',function(){
  subCategoryA.classList.toggle('display')
})
})

categor2btn.forEach((btn2)=>{
  btn2.addEventListener('click',function(){
    subCategoryB.classList.toggle('display')
  })
})

categor3btn.forEach((btn3)=>{
  btn3.addEventListener('click',function(){
    subCategoryC.classList.toggle('display')
  })
})

// for hovering details-->>
// const detailsBtn=document.querySelectorAll('.details-btn');

// detailsBtn.forEach((detailbtns)=>{
// detailbtns.addEventListener('mouseover',function(){
//   detailbtns.click()
// })
// })




// below is the function for slider---->>>>>
$('.slider').slick({
    dots: true,
    infinite: true,

    speed: 300,

    prevArrow:'.arrow-left',
    nextArrow:'.arrow-right',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });