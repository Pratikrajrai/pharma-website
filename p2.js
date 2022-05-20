// alert('GGM')
"use strict"

// for product categories buttons
// const categoriesplusIcon=document.querySelectorAll('.categoriesplus-icon');
// const categoriesminusIcon=document.querySelectorAll('.categoriesminus-icon');
// const categoryBtnSection=document.querySelectorAll('.category-btn-section');

// const categoryBtnsRow=document.querySelectorAll('.category-btns-row');




// categoriesplusIcon.forEach((elem,i)=>{
//  elem.addEventListener('click',function(){
//         categoryBtnsRow[i].classList.toggle('display')
//         categoriesminusIcon[i].classList.remove('display')
//         categoriesplusIcon[i].classList.add('display')
//     });
// })

// categoriesminusIcon.forEach((elem,i)=>{
//     elem.addEventListener('click',function(){
//         categoryBtnsRow[i].classList.toggle('display')
//         categoriesplusIcon[i].classList.remove('display')
//         categoriesminusIcon[i].classList.add('display')
//     })
// })
// // ---------------------

// const categoriesPlus=document.querySelector('.categories-plus');
// const categoriesMinus=document.querySelector('.categories-minus');

// const categoriesOptionsrow=document.querySelector('.categories-btn-row');

// categoriesPlus.addEventListener('click',function(){
//     categoriesOptionsrow.classList.toggle('display')
//     categoriesPlus.classList.add('display');
//     categoriesMinus.classList.remove('display')
// })

// categoriesMinus.addEventListener('click',function(){
//     categoriesOptionsrow.classList.toggle('display')
//     categoriesMinus.classList.add('display');
//     categoriesPlus.classList.remove('display')
// })

const categoriesPlus=document.querySelectorAll('.categories-plus');
const categoriesMinus=document.querySelectorAll('.categories-minus');

const categoriesOptionsrow=document.querySelectorAll('.categories-btn-row');

categoriesPlus.forEach((elem,i)=>{
elem.addEventListener('click',function(){
    categoriesOptionsrow[i].classList.toggle('display');
    categoriesPlus[i].classList.add('display');
    categoriesMinus[i].classList.remove('display')
})
})

categoriesMinus.forEach((elem,i)=>{
   elem.addEventListener('click',function(){
    categoriesOptionsrow[i].classList.toggle('display');
    categoriesPlus[i].classList.remove('display');
    categoriesMinus[i].classList.add('display')
   })
})