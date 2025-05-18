// loader
        var loaders = document.querySelectorAll('.loader');
        var main =document.querySelector('.main');

        window.addEventListener('load',function(){
            setTimeout(()=>{
                loaders.forEach(loader =>{
                    loader.style.transform ="translateY(-1000px)";
                   

             
                });
                setTimeout(()=>{
                    loaders.forEach(loader=>{
                        loader.style.display ="none";

                    });
                    main.style.display ="block";
                },2000);

            },2000);

        });
        //navigtion

var menu = document.querySelector('.menu');
var nav = document.querySelector('.nav');


menu.onclick = function(){
if(nav.style.display==='none'|| nav.style.display === ''){
 
    nav.style.display = "ruby-text";
   
   
}
else if(nav.style.display==='ruby-text'){
    nav.style.display="none";
}
 

}


   // button animtion

   gsap.to('.button',{
y:-50,
delay:1,
duration:2,
yoyo:true,
repeat:-1
   });


   // day and night
   var mypic = document.querySelector('.banner2');
var dayy = document.getElementById('dayy');
var day = document.getElementById('day');
var changemy_background = document.querySelector('body');
day.onclick = function(){
   
    if(changemy_background.style.filter ==='invert(1)'){
      
            changemy_background.style.filter ="none";

            dayy.style.transform ="translateX(0px)";
            mypic.style.filter = "drop-shadow(2px 4px 6px #fff)";
            
    

    }
else{
   
        changemy_background.style.filter ="invert(1)";
        mypic.style.filter = "drop-shadow(2px 4px 6px #fff)invert(1)";
        dayy.style.transform ="translateX(-40px)";
   
  

}

    
}

// animation on scroll 
function myscroll(){
const animation = document.querySelectorAll('#animation');
animation.forEach(animation =>{
    const b = animation.getBoundingClientRect();
    if(b.top  < window.innerHeight && b.bottom >= 0){
        setTimeout(() => {
            animation.classList.add('visible');

        },500);

    }
    else{
        animation.classList.remove('visible');

    }
});
}
window.addEventListener('scroll',myscroll);
myscroll();



// loader aniamtion 
gsap.from(".loader .data",{
    opacity:0,
    y:-50,
    delay:1,
    duration:2
});





gsap.from('.banner',{
    scale:1.1,
    scrollTrigger:{
        trigger:'.banner',

delay:1,
marker:true,
start:'top 10%',
end:'top -100%',
scrub:true
    }
});


// make many div 
var particalehead = document.getElementById('particalehead');
var a = 25; 
for(let i = 1;i<=a;i++){
    var mydiv = document.createElement('div');
mydiv.classList=`my${i}`;
particalehead.appendChild(mydiv);

}


// animation of dots
gsap.from('.my1',{
    x: -100,
    y:-50,
opacity:0,
    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    yoyo :true,
})
gsap.to('.my2',{
    x: -100,
    y:50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my7',{
    x: -100,
    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    opacity:0,

    yoyo :true,
})

gsap.to('.my13',{
    x: -90,
    y:50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my19',{
    x: -90,
    y:50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my25',{
    x: -90,
    y:-50,
    opacity:0,

    delay:1,
    duration:2,
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my8',{
    
    y:-50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my9',{
    
    x:-200,
   opacity:0,
    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})

gsap.from('.my3',{
    x: 90,
    y:50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})

gsap.to('.my4',{
    x: 200,
    y:50,
    opacity:0,

    delay:1,
    duration:2,
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my5',{
    x: -200,
    y:-50,
    opacity:0,

    delay:1,
    duration:2,
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my6',{
    x: 200,
    y:-50,
    opacity:0,

    delay:1,
    duration:2,
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my10',{
    x: 200,
    y:-50,
    opacity:0,

    delay:1,
    duration:2,
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my11',{
   
    y:-50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my12',{
    x: 300,
    y:300,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my14',{
    x: -90,
    y:50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my15',{
    x: 90,
    y:50,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my16',{
    x: 90,
    y:-60,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my17',{
    x: 90,
    y:-30,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my18',{
    x: 90,
    y:-30,
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my20',{
    x: -90,
    
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my21',{
    x: 50,
    y:-50,
    
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.from('.my22',{
    x: 90,
    
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my23',{
    y: -90,
    
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
gsap.to('.my24',{
    y: 90,
    
    opacity:0,

    delay:1,
    duration:2,
    backgroundColor:'yellow',
    repeat: -1,
    easy:'power1.inOut',
    yoyo :true,
})
// hire button login 
$(document).ready(function(){
    $('.login').hide();
    $('.hirebutton').click(function(){
    $('.login').fadeToggle();
    });
});

// background blur 
var hirebutton = document.querySelector('.hirebutton');
var login = document.querySelector('.login');
var mypic2 = document.querySelector('.blur');
hirebutton.addEventListener('click',function(){
    
    if( mypic2.style.filter==="blur(15px)"){
        mypic2.style.filter ="none";

    }

        else{
           
        
            mypic2.style.filter ="blur(15px)";

        }
    

});
var close1 =document.getElementById("close1");
close1.onclick =function(){
    login.style.display ="none";
    mypic2.style.filter ="none";

}

// my services animaiton 
gsap.from('.myservices',{
    opacity:0,
    scrollTrigger:{
trigger:'myservices',
delay:1,
duration:2,
marker:true,
start:'top 90%',

    }
})
// 2nd animation 
function newscroll(){
var animaiton1 = document.querySelectorAll('#animation1');
animaiton1.forEach(animaiton =>{
    const neww = animaiton.getBoundingClientRect();
    if(neww.top <window.innerHeight && neww.bottom >=0){
        setTimeout(() => {
            animaiton.classList.add('visible');
        },500);
        
    }
    else{
        animaiton.classList.remove('visible');

    }

});
}
window.addEventListener('scroll',newscroll);
newscroll();
// servic box animation 
gsap.to('.servicesbox1 img',{
    y:-50,
    yoyo:true,
    delay:1,
    duration:2,
    repeat:-1

})
var prv = document.getElementById('prv');
var next = document.getElementById('next');
var slide = document.querySelector('.slide');
var boxes = document.querySelectorAll('.box');
let  slidea = 0; 
function slidee(){
    const slideb = -slidea * 100; 
    slide.style.transform =`translateX(${slideb}px)`;
}
prv.addEventListener('click',()=>{
if(slidea > 0){
    slidea--;
    slidee();
}
});
next.addEventListener('click',()=>{
    if(slidea < boxes.length -1){
        slidea++;
        slidee();
    }
});

//ligths on 
var dayq = document.querySelector(".dayyandnight");
var cont = document.querySelector('.container');
var DAYQQ = document.getElementById('dayyq');
var banner3 =document.querySelector('.banner3');
dayq.onclick =function(){
    if(cont.style.opacity ==="1"){
        cont.style.opacity ="0";
        DAYQQ.style.transform ="translateX(0px)";
banner3.style.background ="black";
banner3.style.height="83vh";

    }
    else{
        cont.style.opacity ="1";
        DAYQQ.style.transform ="translateX(-33px)";
        banner3.style.background='linear-gradient(144deg, rgb(24 23 23 / 47%) 36%, rgba(8, 7, 7, 0.96) 54%)';
banner3.style.height ="200vh";
    }
}

//vue
const productdata = Vue.createApp({
    data() {
        return {
            message: "project completed",
           

            
        };
    }
});
productdata.mount("#productdata");
const hk1 = Vue.createApp({
    data(){
        return{
            data01:"on the lights"
        }
    }
});
hk1.mount(".hk1");

function productscroll(){
    var animaiton2 = document.querySelectorAll("#animation2");
    animaiton2.forEach(animaiton22=>{
        const pro = animaiton22.getBoundingClientRect();
        if(pro.top<window.innerHeight&&pro.bottom>=0){
            setTimeout(() => {
                animaiton22.classList.add("visible");
            }, 300);
        }
        else{
            animaiton22.classList.remove("visible");
        }
    });
}
window.addEventListener('scroll',productscroll);
productscroll();
const pra = Vue.createApp({
    data(){
        return {
            meesage:"boost your youtube views with my best web application FOR YOUTUBE ",
            size :30,
            width:600,
            left:54

        }
    }
});
pra.mount(".pp");

gsap.to('.lineani',{
x:300,
y:20,
yoyo:true,
delay:1,
repeat:-1,
duration:2
})
 const fothead = Vue.createApp({
    data(){
        return{
           message:"thank you for visit my resume ",
           size:20
          
        }
    }
 });
 fothead.mount(".pp2");