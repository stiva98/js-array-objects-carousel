const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
let activeImg = 0;

const imgArr = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
];
//console.log(imgArr)


btnUp.addEventListener('click', function(){
    
    if(activeImg < 4){
        activeImg++;
    }else{
        activeImg = 0;
    }   

    const imgOn = document.querySelector('.img-on');
    const newImageAndText = 
    `<img src="${imgArr[activeImg].image}" alt="">
    <div class="text">
    <h2>${imgArr[activeImg].title}</h2>
    <p>${imgArr[activeImg].text}</p>
    </div>`; 
    
    imgOn.innerHTML = newImageAndText;
    

});

btnDown.addEventListener('click', function(){
    
    if(activeImg > 0){
        activeImg--;
    }else{
        activeImg = 4;
    }   
    const imgOn = document.querySelector('.img-on');
    const newImageAndText = 
    `<img src="${imgArr[activeImg].image}" alt="">
    <div class="text">
    <h2>${imgArr[activeImg].title}</h2>
    <p>${imgArr[activeImg].text}</p>
    </div>`; 
    
    imgOn.innerHTML = newImageAndText;

});