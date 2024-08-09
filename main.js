let darkmode = localStorage.getItem('darkmode')
const switchbutton = document.querySelector('.theme-switch')
let pict1 = document.getElementById('h-pict1')
let pict2 = document.getElementById('h-pict2')
let pict3 = document.getElementById('h-pict3')
let pict4 = document.getElementById('h-pict4')
const baloon = document.querySelectorAll('.chat-baloon')
const hide = document.querySelector('.hide')
const right_baloon = document.getElementsByClassName('right-chat')

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    let max_scrollvalue = 500;
    let opacity = Math.max(1 - value / max_scrollvalue, 0);

    console.log(value)
    pict1.style.top = value * 0.5 + 'px';
    pict1.style.right = value * -0.5 + 'px';
    pict1.style.opacity = opacity; 

    pict2.style.left = value * -0.5 + 'px';
    pict2.style.opacity = opacity; 

    pict3.style.right = value * -0.5 + 'px'; 
    pict3.style.opacity = opacity; 

    pict4.style.top = value * -0.5 + 'px';
    pict4.style.left = value * -0.5 + 'px';
    pict4.style.opacity = opacity; 

    if (value >= max_scrollvalue){
        hide.classList.toggle('hidden')
    }

});

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("swipe-right", entry.isIntersecting)
    })
})

baloon.forEach(each=>{
    observer.observe(each)
})

const rightobserver = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("swipe-left", entry.isIntersecting)
    })
})

Array.from(right_baloon).forEach(each =>{
    rightobserver.observe(each)
})

const enableDarkmode = ()=>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active');
}

const disableDarkmode = ()=>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null);
}

if (darkmode == "active") enableDarkmode()
    
switchbutton.addEventListener('click', ()=>{
    darkmode = localStorage.getItem('darkmode')
    if (darkmode != "active"){
        enableDarkmode()
    }else{
        disableDarkmode()
    }
})

