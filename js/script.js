
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

var sidenav=document.getElementById('sidenav');
var menubar=document.getElementById('m-menu');
sidenav.style.width="0px";
menubar.onclick=function(){
    if(sidenav.style.width=="0px")sidenav.style.width="250px";
    else sidenav.style.width="0px";
}

var sidenav=document.getElementById('product');
var menubar=document.getElementById('product-menu');
sidenav.style.height="0px";
menubar.onclick=function(){
    if(sidenav.style.width=="0px")sidenav.style.width="250px";
    else sidenav.style.width="0px";
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
