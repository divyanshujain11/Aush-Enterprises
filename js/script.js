
var slides=document.querySelectorAll('.slide');
var btns=document.querySelectorAll('.btn');
let currentslide=1;
var manualNav=function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
  });
  btns.forEach((btn)=>{
    btn.classList.remove('active');
});
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn, i) => {
    btn.addEventListener("click",()=>{
        manualNav(i);
        currentslide=i;
    });
});

var repeat=function(activeClass){
    let active=document.getElementsByClassName('active');
    let i =1;
    var repeater=()=>{
        setTimeout(function(){
            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active');
            })
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length==i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater();
        },10000);
    }
    
    repeater();
}
repeat();
var x=0;
function prev(){
    if(x<=0)x=slides.length;
    x--;
    slides.forEach((slide)=>{
        slide.classList.remove('active');
  });
  btns.forEach((btn)=>{
    btn.classList.remove('active');
});
    slides[x].classList.add('active');
    btns[x].classList.add('active');
}
function next(){
    if(x>=slides.length-1)x=-1;
    x++;
    slides.forEach((slide)=>{
        slide.classList.remove('active');
  });
  btns.forEach((btn)=>{
    btn.classList.remove('active');
});
    slides[x].classList.add('active');
    btns[x].classList.add('active');
}
//product


//burger

var sidenav = document.getElementById("side-nav");
var menubtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");
sidenav.style.right="-250px";
menubtn.onclick = function(){
    if(sidenav.style.right=="-250px"){
        sidenav.style.right="0";
        menu.src="image/close.png";
    }
    else{
        sidenav.style.right="-250px";
        menu.src="image/menu.png";
    }
}

// Form 
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Form Submitted');
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            alert('Form Submitted error');
        } else {
            alert('Form Error');
        }
      })
    }
  }).catch(error => {
    alert('Form Submitted errroeoejfhj');
  });
}
form.addEventListener("submit", handleSubmit)
