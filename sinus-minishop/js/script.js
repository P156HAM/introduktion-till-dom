// Code here!

let hodieName = document.querySelector('h3')
 hodieName.innerText = ('Potato')

 let aName = document.querySelector('nav :nth-child(1)')
 aName.innerText = ('Start')
 aName.classList.add('active')

 const allA = document.querySelectorAll('a')

 for (let a of allA) {
    if (a.textContent === 'Contact') {
        a.textContent = 'Mail Us'
    }
}

let information = document.querySelector('.art-2 p')
information.innerText = ('The best hoddie in the market this weekend, please buy it directly before it is sold out.') 

let backGroundColor = document.querySelector('.art-2 button')
backGroundColor.innerText = ('Please!!')
backGroundColor.style.backgroundColor = 'red'

let product = document.querySelector('.art-2')
product.style.backgroundColor = 'grey'

let adress = document.querySelector('footer p')
adress.innerText = ('paprikagatan 29')

const allP = document.querySelectorAll('p');
for ( let p of allP) {
    p.style.color = 'gold'
}

const allButton = document.querySelectorAll('button')
for (let button of allButton) {
    button.innerText = ('add to cart')
}

const allHome = document.querySelectorAll('a')
for ( let a of allHome) {
    if (a.innerText === 'Home') {
        a.classList.add ('active')
    }
}

let logo = document.querySelector('.logo')
logo.classList.remove('logo')

logo.addEventListener('click', () => {
    console.log('found oyu!'); })




let allArticle = document.querySelectorAll('article')
for (let article of allArticle) {
    article.addEventListener('click', () => {
        console.log('Hi, Im article Fire / Ash / Water');
    })
}