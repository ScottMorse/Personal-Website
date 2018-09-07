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
const projectCircles = Array.from(document.querySelectorAll('.project-circle'));
const projectLinks = Array.from(document.querySelectorAll('.project-link'));

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

const circleTrans = 'width .5s ease, height .5s ease, opacity .5s ease,border-color .3s ease';

function circleHandle() {
    activeCircle = document.querySelector(`#project${this.id[7]}-circle`);
    activeCircle.style.borderColor = "var(--red)";
    activeCircle.style.transition = circleTrans;
    activeCircle.style.width = activeCircle.style.height = "calc(var(--project-pic-w) + 3vw)";
    activeCircle.style.filter = "blur(3px)";
    activeCircle.style.opacity = 0;
}

function circleColor() {
    activeCircle = document.querySelector(`#project${this.id[7]}-circle`);
    activeCircle.style.borderColor = "var(--light-blue)";
}

projectCircles.forEach(circle => {
    circle.addEventListener('transitionend',()=> {
        circle.style.transition = 'border-color .3s ease';
        circle.style.width = circle.style.height = "var(--project-pic-w)";
        circle.style.filter = "blur(0)";
        circle.style.opacity = "1";
        setTimeout(()=>{
            circle.style.transition = circleTrans;
        },10);
    });
})

function protectTransition(){
    projectCircles.forEach(circle => circle.style.transition = 'none');
}

window.addEventListener('load',bounceLogo);
window.addEventListener('resize',protectTransition);
projectLinks.forEach(link => link.addEventListener('mouseover',circleHandle));
projectLinks.forEach(link => link.addEventListener('mouseout',circleColor));