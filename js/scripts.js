const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
let activeImg = 1;


btnUp.addEventListener('click', function(){
    
    if(activeImg < 5){
        activeImg++;
    }else{
        activeImg = 1;
    }   
    const newImage = '<img src="img/0'+activeImg+'.webp" alt="">';   
    const imgOn = document.querySelector('.img-on');
    imgOn.innerHTML = newImage;
});

btnDown.addEventListener('click', function(){
    
    if(activeImg <= 5 && activeImg > 1){
        activeImg--;
    }else{
        activeImg = 5;
    }   
    const newImage = '<img src="img/0'+activeImg+'.webp" alt="">';   
    const imgOn = document.querySelector('.img-on');
    imgOn.innerHTML = newImage;
});