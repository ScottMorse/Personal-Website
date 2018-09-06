const logoImg1 = document.querySelector('#logo-img1');
const circle1 = document.querySelector('#circle1');
const curlies = Array.from(document.querySelectorAll('.curly'));
const webP = document.querySelector('#web');
const devImg = document.querySelector('#dev-img');
const python = document.querySelector('#python');
const codeImg = document.querySelector('#code-img');
const jazzP = document.querySelector('#jazz');
const musImg = document.querySelector('#mus-img');
const simpleNav = document.querySelector('#simple-nav');

function bounceLogo(){
    [logoImg1,circle1].map(el => el.classList.add('load'));
    setTimeout(()=>{
        webP.classList.add('load');
        devImg.classList.add('load');
    },600);
    setTimeout(()=>{
        python.classList.add('load');
        codeImg.classList.add('load');
    },1100);
    setTimeout(()=>{
        jazzP.classList.add('load');
        musImg.classList.add('load');
    },1600);
    setTimeout(()=>{
        simpleNav.classList.add('load');
        curlies.map(curly => curly.classList.add('load'));
    },2100);
    simpleNav.addEventListener('transitionend',(e)=> {
        if(e.propertyName=="opacity"){
            simpleNav.style.transition = 'none'
        }
    });
}

window.addEventListener('load',bounceLogo);