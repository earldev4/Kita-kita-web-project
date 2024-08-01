let pict1 = document.getElementById('h-pict1')
let pict2 = document.getElementById('h-pict2')
let pict3 = document.getElementById('h-pict3')
let pict4 = document.getElementById('h-pict4')
let phone = document.getElementById('phone')

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    let max_scrollvalue = 500;
    let opacity = Math.max(1 - value / max_scrollvalue, 0);

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
    
    
    console.log(value)
});